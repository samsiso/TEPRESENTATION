class PresentationApp {
    constructor() {
        this.currentSlide = 0;
        this.slides = this.initializeSlides();
        this.totalSlides = this.slides.length;
        this.tooltip = null;
        this.referencePopup = null;
        this.slideReferences = [];
        
        this.initializeElements();
        this.setupEventListeners();
        this.initializeParticles();
        this.createTooltip();
        this.createReferenceSystem();
        this.renderSlide();
    }

    initializeElements() {
        this.slideTitle = document.getElementById('slide-title');
        this.slideContent = document.getElementById('slide-content');
        this.currentSlideSpan = document.getElementById('current-slide');
        this.totalSlidesSpan = document.getElementById('total-slides');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.progress = document.getElementById('progress');
        
        // Navigation sidebar elements
        this.slideNav = document.getElementById('slide-nav');
        this.navToggle = document.getElementById('nav-toggle');
        this.mobileNavBtn = document.getElementById('mobile-nav-btn');
        this.mobileBackdrop = document.getElementById('mobile-backdrop');
        this.currentSlideInfo = document.getElementById('current-slide-info');
        this.upcomingSlides = document.getElementById('upcoming-slides');
        this.slidesOverview = document.getElementById('slides-overview');
        
        this.totalSlidesSpan.textContent = this.totalSlides;
        this.visitedSlides = new Set([0]); // Track visited slides
        
        this.initializeNavigation();
    }

    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Navigation sidebar events
        this.navToggle.addEventListener('click', () => this.toggleNavigation());
        this.mobileNavBtn.addEventListener('click', () => this.toggleMobileNavigation());
        this.mobileBackdrop.addEventListener('click', () => this.closeMobileNavigation());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
            if (e.key === 'n' || e.key === 'N') this.toggleNavigation();
            if (e.key === 'Escape') this.closeMobileNavigation();
        });
    }

    // Tooltip functionality
    createTooltip() {
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'tooltip';
        document.body.appendChild(this.tooltip);
    }

    showTooltip(element, text) {
        this.tooltip.textContent = text;
        this.tooltip.classList.add('show');
        
        const rect = element.getBoundingClientRect();
        const tooltipRect = this.tooltip.getBoundingClientRect();
        
        // Position tooltip above the element
        let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        let top = rect.top - tooltipRect.height - 10;
        
        // Adjust if tooltip goes off screen
        if (left < 10) left = 10;
        if (left + tooltipRect.width > window.innerWidth - 10) {
            left = window.innerWidth - tooltipRect.width - 10;
        }
        if (top < 10) {
            top = rect.bottom + 10;
        }
        
        this.tooltip.style.left = `${left}px`;
        this.tooltip.style.top = `${top}px`;
    }

    hideTooltip() {
        this.tooltip.classList.remove('show');
    }

    setupTooltips() {
        // Remove existing tooltips
        document.querySelectorAll('.hoverable').forEach(el => {
            el.removeEventListener('mouseenter', el._hoverHandler);
            el.removeEventListener('mouseleave', el._leaveHandler);
        });

        // Add hover explanations to elements
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        tooltipElements.forEach(element => {
            const tooltipText = element.getAttribute('data-tooltip');
            
            const hoverHandler = () => this.showTooltip(element, tooltipText);
            const leaveHandler = () => this.hideTooltip();
            
            element._hoverHandler = hoverHandler;
            element._leaveHandler = leaveHandler;
            
            element.addEventListener('mouseenter', hoverHandler);
            element.addEventListener('mouseleave', leaveHandler);
            element.classList.add('hoverable');
        });
    }

    // Reference system functionality
    createReferenceSystem() {
        this.referencePopup = document.createElement('div');
        this.referencePopup.className = 'reference-popup';
        document.body.appendChild(this.referencePopup);
        
        // Create floating reference counter
        this.referenceCounter = document.createElement('div');
        this.referenceCounter.className = 'slide-references';
        this.referenceCounter.style.display = 'none';
        document.body.appendChild(this.referenceCounter);
        
        this.referenceCounter.addEventListener('click', () => {
            this.showAllSlideReferences();
        });
    }

    showReferencePopup(element, references) {
        this.referencePopup.innerHTML = `
            <button class="reference-close">×</button>
            <h4>References</h4>
            <ul class="reference-list">
                ${references.map(ref => `<li>${ref}</li>`).join('')}
            </ul>
        `;
        
        const closeBtn = this.referencePopup.querySelector('.reference-close');
        closeBtn.addEventListener('click', () => this.hideReferencePopup());
        
        this.referencePopup.classList.add('show');
        
        const rect = element.getBoundingClientRect();
        const popupRect = this.referencePopup.getBoundingClientRect();
        
        // Position popup above the element
        let left = rect.left + (rect.width / 2) - (popupRect.width / 2);
        let top = rect.top - popupRect.height - 15;
        
        // Adjust if popup goes off screen
        if (left < 10) left = 10;
        if (left + popupRect.width > window.innerWidth - 10) {
            left = window.innerWidth - popupRect.width - 10;
        }
        if (top < 10) {
            top = rect.bottom + 15;
        }
        
        this.referencePopup.style.left = `${left}px`;
        this.referencePopup.style.top = `${top}px`;
    }

    hideReferencePopup() {
        this.referencePopup.classList.remove('show');
    }

    showAllSlideReferences() {
        if (this.slideReferences.length === 0) return;
        
        this.referencePopup.innerHTML = `
            <button class="reference-close">×</button>
            <h4>Slide References (${this.slideReferences.length})</h4>
            <ul class="reference-list">
                ${this.slideReferences.map(ref => `<li>${ref}</li>`).join('')}
            </ul>
        `;
        
        const closeBtn = this.referencePopup.querySelector('.reference-close');
        closeBtn.addEventListener('click', () => this.hideReferencePopup());
        
        this.referencePopup.classList.add('show');
        
        // Center the popup
        const popupRect = this.referencePopup.getBoundingClientRect();
        this.referencePopup.style.left = `${(window.innerWidth - popupRect.width) / 2}px`;
        this.referencePopup.style.top = `${(window.innerHeight - popupRect.height) / 2}px`;
    }

    setupReferenceIcons() {
        // Remove existing reference icons
        document.querySelectorAll('.reference-icon').forEach(el => {
            el.removeEventListener('click', el._clickHandler);
        });

        // Add reference icons to elements with data-references
        const referencedElements = document.querySelectorAll('[data-references]');
        referencedElements.forEach(element => {
            const referencesData = element.getAttribute('data-references');
            const references = JSON.parse(referencesData);
            
            // Create reference icon
            const icon = document.createElement('span');
            icon.className = 'reference-icon';
            icon.textContent = references.length;
            
            const clickHandler = (e) => {
                e.stopPropagation();
                this.showReferencePopup(icon, references);
            };
            
            icon._clickHandler = clickHandler;
            icon.addEventListener('click', clickHandler);
            
            // Append icon to element
            element.appendChild(icon);
            
            // Add to slide references
            references.forEach(ref => {
                if (!this.slideReferences.includes(ref)) {
                    this.slideReferences.push(ref);
                }
            });
        });
        
        // Update reference counter
        if (this.slideReferences.length > 0) {
            this.referenceCounter.textContent = `References (${this.slideReferences.length})`;
            this.referenceCounter.style.display = 'block';
        } else {
            this.referenceCounter.style.display = 'none';
        }
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
            this.visitedSlides.add(this.currentSlide);
            this.renderSlide();
        }
    }

    previousSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.renderSlide();
        }
    }

    renderSlide() {
        const slide = this.slides[this.currentSlide];
        
        // Fade out current content
        gsap.to(this.slideContent, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => {
                this.slideTitle.textContent = slide.title;
                
                // Check if slide should use single column layout
                if (slide.singleColumn) {
                    this.slideContent.className = 'slide-content single-column';
                    this.slideContent.innerHTML = `
                        <div class="main-content">
                            ${slide.content}
                        </div>
                    `;
                } else {
                    this.slideContent.className = 'slide-content';
                    this.slideContent.innerHTML = `
                        <div class="main-content">
                            ${slide.content}
                        </div>
                        <div class="key-points-sidebar">
                            <h4>${slide.keyPointsTitle || 'Key Points'}</h4>
                            <ul>
                                ${slide.keyPoints ? slide.keyPoints.map(point => `<li>${point}</li>`).join('') : ''}
                            </ul>
                        </div>
                    `;
                }
                
                // Fade in new content with staggered animation
                gsap.fromTo(this.slideContent, 
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
                );
                
                // Animate individual elements
                gsap.fromTo('.main-content h2, .main-content h3', 
                    { opacity: 0, y: 30 },
                    { opacity: 1, y: 0, duration: 0.8, delay: 0.2, stagger: 0.1 }
                );
                
                gsap.fromTo('.stat-card', 
                    { opacity: 0, scale: 0.8, y: 50 },
                    { opacity: 1, scale: 1, y: 0, duration: 0.6, delay: 0.4, stagger: 0.1 }
                );
                
                gsap.fromTo('.main-content li, .key-points-sidebar li', 
                    { opacity: 0, x: -30 },
                    { opacity: 1, x: 0, duration: 0.6, delay: 0.3, stagger: 0.05 }
                );
            }
        });
        
        this.currentSlideSpan.textContent = this.currentSlide + 1;
        
        // Update progress bar with animation
        const progressPercent = ((this.currentSlide + 1) / this.totalSlides) * 100;
        gsap.to(this.progress, {
            width: `${progressPercent}%`,
            duration: 0.5,
            ease: "power2.out"
        });
        
        // Update navigation buttons
        this.prevBtn.disabled = this.currentSlide === 0;
        this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
        
        // Render charts if needed
        if (slide.hasChart) {
            setTimeout(() => this.renderChart(slide.chartConfig), 500);
        }
        
        // Update particle effects based on slide
        this.updateParticleEffects();
        
        // Update navigation sidebar
        this.updateNavigation();
        
        // Setup tooltips and references for new content
        setTimeout(() => {
            this.slideReferences = []; // Reset slide references
            this.setupTooltips();
            this.setupReferenceIcons();
        }, 100);
    }

    renderChart(config) {
        const canvas = document.getElementById(config.id);
        if (canvas) {
            new Chart(canvas, config.options);
        }
    }

    initializeSlides() {
        return [
            // SLIDE 1: Workshop Introduction (2 minutes)
            {
                title: "Workshop: AI Integration Opportunities 2025",
                singleColumn: true,
                content: `
                    <div class="title-slide">
                        <h2>Identifying and Capitalizing on AI Integration Service Opportunities for Team Ventures in 2025</h2>
                        <p><em>Interactive Workshop for Team Entrepreneurship (45 minutes total)</em></p>
                        <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; margin: 20px 0;">
                            <h4>Learning Outcomes - By the end of this workshop, you will be able to:</h4>
                            <ul style="text-align: left; max-width: 700px; margin: 10px auto; font-size: 0.9rem;">
                                <li><strong>ANALYZE</strong> current AI adoption trends using Rogers' Diffusion Theory</li>
                                <li><strong>EVALUATE</strong> market opportunities using Porter's Five Forces framework</li>
                                <li><strong>CREATE</strong> a SMART action plan for implementing AI in your team venture</li>
                                <li><strong>ASSESS</strong> risks and mitigation strategies for AI-driven businesses</li>
                            </ul>
                        </div>
                        <p><strong>Format:</strong> 30 min interactive content + 15 min facilitated dialogue</p>
                        <p><strong>🤚 Quick Poll:</strong> Show of hands - How many have used AI tools in your business/studies?</p>
                        <p style="font-size: 0.8rem; opacity: 0.8;">8+ Academic & Professional Sources | Primary Research Included | UWE Harvard Referencing</p>
                    </div>
                `
            },
            // SLIDE 2: Activity 1 - AI Adoption Analysis (8 minutes)
            {
                title: "Activity 1: AI Adoption Analysis (8 minutes)",
                keyPointsTitle: "Rogers' Diffusion Theory",
                keyPoints: [
                    "Pair discussion: 3 minutes",
                    "Sharing insights: 2 minutes", 
                    "Academic vs industry perspectives",
                    "Primary research data included"
                ],
                content: `
                    <h2>Activity 1: Analyzing AI Adoption Trends</h2>
                    <h3>Applying Rogers' Diffusion of Innovation Theory (Rogers, 2003)</h3>
                    <div class="highlight">
                        <h4>🎯 PAIR DISCUSSION TASK (3 minutes):</h4>
                        <p><strong>With your partner, discuss:</strong></p>
                        <ol style="text-align: left; max-width: 600px; margin: 15px auto;">
                            <li>Looking at 78% adoption - where is AI on Rogers' Diffusion curve?</li>
                            <li>What entrepreneurial opportunities does this create?</li>
                            <li>Share: Have you seen AI adoption in your industry/studies?</li>
                        </ol>
                        <p><em>⏱️ I'll walk around and listen, then we'll share insights (2 min)</em></p>
                    </div>
                    <div class="stats-grid">
                        <div class="stat-card" data-references='["McKinsey Global Institute (2024) \"The state of AI in 2024: McKinsey Global Survey\" McKinsey & Company, November 2024", "Rogers, E.M. (2003) \"Diffusion of innovations\" 5th ed., Free Press, New York"]'>
                            <div class="number">78%</div>
                            <div class="label">Enterprise AI Adoption<br><small>McKinsey (2024)</small></div>
                        </div>
                        <div class="stat-card" data-references='["Smith, J., Johnson, A., Williams, R. (2024) \"Primary Research: AI Adoption Intentions Among UK Entrepreneurs\" Team Project, University"]'>
                            <div class="number">83%</div>
                            <div class="label">Entrepreneurs Planning AI<br><small>Team Primary Research (n=12)</small></div>
                        </div>
                        <div class="stat-card" data-references='["Rogers, E.M. (2003) \"Diffusion of innovations\" 5th ed., Free Press", "Moore, G.A. (2014) \"Crossing the chasm\" 3rd ed., HarperBusiness"]'>
                            <div class="number">Late Majority</div>
                            <div class="label">Diffusion Phase<br><small>Rogers' Framework Applied</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">24mo</div>
                            <div class="label">Opportunity Window<br><small>Before Consolidation</small></div>
                        </div>
                    </div>
                    <div class="two-column">
                        <div class="column">
                            <h4>📚 Academic Perspective (Chen et al., 2024):</h4>
                            <ul>
                                <li>Job displacement ethical concerns</li>
                                <li>Environmental sustainability issues</li>
                                <li>Regulatory compliance barriers</li>
                                <li>Need for responsible frameworks</li>
                            </ul>
                        </div>
                        <div class="column">
                            <h4>💼 Industry Perspective (PwC, 2024):</h4>
                            <ul>
                                <li>25-30% productivity gains reported</li>
                                <li>Competitive advantage focus</li>
                                <li>12-18 month ROI expectations</li>
                                <li>Speed of implementation crucial</li>
                            </ul>
                        </div>
                    </div>
                `
            },

            // SLIDE 3: Market Opportunity Identification (5 minutes)
            {
                title: "Market Opportunity Identification (5 minutes)",
                keyPointsTitle: "Key Market Data",
                keyPoints: [
                    "$500B total market by 2032",
                    "$50B integration services opportunity", 
                    "36.6% annual growth rate",
                    "Conservative projections used"
                ],
                content: `
                    <h2>The AI Integration Services Market Opportunity</h2>
                    <h3>Conservative Growth Projections Using Bass Diffusion Model (Bass, 1969)</h3>
                    <div class="chart-container">
                        <canvas id="market-growth-chart"></canvas>
                    </div>
                    <div class="stats-grid">
                        <div class="stat-card" data-references='["Bass, F.M. (1969) \"A new product growth for model consumer durables\" Management Science, Vol. 15, No. 5", "NewStrail Research (2024) \"AI Market Projections Report\" Q3 2024"]'>
                            <div class="number">$500B</div>
                            <div class="label">Total Market 2032<br><small>Conservative Bass Model Projection</small></div>
                        </div>
                        <div class="stat-card" data-references='["Grand View Research (2024) \"AI Professional Services Market Analysis\" Industry Report"]'>
                            <div class="number">$50B</div>
                            <div class="label">Integration Services Market<br><small>Our Target Opportunity</small></div>
                        </div>
                        <div class="stat-card" data-references='["NewStrail Research (2024) \"AI Market Projections Report\" Q3 2024"]'>
                            <div class="number">36.6%</div>
                            <div class="label">Compound Annual Growth Rate<br><small>2024-2032 Projection</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">18x</div>
                            <div class="label">Market Growth Multiple<br><small>8-Year Projection</small></div>
                        </div>
                    </div>
                    <div class="highlight">
                        <h4>💡 Strategic Insight:</h4>
                        <p>Integration services represent the largest entrepreneurial opportunity before Big Tech platform consolidation (Porter's Five Forces analysis next).</p>
                    </div>
                `,
                hasChart: true,
                chartConfig: {
                    id: 'market-growth-chart',
                    options: {
                        type: 'line',
                        data: {
                            labels: ['2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'],
                            datasets: [{
                                label: 'Market Size ($B)',
                                data: [27, 42, 64, 98, 149, 228, 348, 532, 500],
                                borderColor: '#ff6b35',
                                backgroundColor: 'rgba(255, 107, 53, 0.1)',
                                fill: true,
                                tension: 0.4
                            }]
                        },
                        options: {
                            responsive: true,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'AI Integration Services Market Growth (Conservative Projection)',
                                    color: '#ffffff'
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    title: { display: true, text: 'Market Size (Billions USD)', color: '#ffffff' },
                                    ticks: { color: '#ffffff' },
                                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                                },
                                x: {
                                    ticks: { color: '#ffffff' },
                                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                                }
                            }
                        }
                    }
                }
            },

            // SLIDE 4: Activity 2 - Porter's Five Forces Mapping (8 minutes)
            {
                title: "Activity 2: Porter's Five Forces Mapping (8 minutes)",
                keyPointsTitle: "Porter's Framework",
                keyPoints: [
                    "Group exercise: 5 minutes",
                    "Template worksheet provided",
                    "Map your team's AI venture",
                    "Share insights: 3 minutes"
                ],
                content: `
                    <h2>Activity 2: Strategic Positioning Analysis</h2>
                    <h3>Using Porter's Five Forces Framework (Porter, 1980)</h3>
                    <div class="highlight">
                        <h4>🎯 GROUP EXERCISE (5 minutes):</h4>
                        <p><strong>In groups of 3-4, use the worksheet template to:</strong></p>
                        <ol style="text-align: left; max-width: 600px; margin: 15px auto;">
                            <li>Map YOUR team venture using Porter's Five Forces</li>
                            <li>Identify where AI integration fits your business</li>
                            <li>Find your competitive advantage vs Big Tech</li>
                        </ol>
                        <p><em>📋 Worksheet available - I'll circulate to support your analysis</em></p>
                    </div>
                    <div class="two-column">
                        <div class="column">
                            <h4>🔴 Red Ocean Areas (Avoid):</h4>
                            <ul>
                                <li><strong>High Competition:</strong> Generic AI tools vs OpenAI/Google</li>
                                <li><strong>Platform Wars:</strong> Infrastructure competition</li>
                                <li><strong>Consumer Market:</strong> B2C AI applications</li>
                                <li><strong>Commoditized Services:</strong> Basic AI implementations</li>
                            </ul>
                        </div>
                        <div class="column">
                            <h4>🔵 Blue Ocean Opportunities (Target):</h4>
                            <ul>
                                <li><strong>Vertical Specialization:</strong> Industry-specific solutions</li>
                                <li><strong>Compliance Focus:</strong> Regulated industry needs</li>
                                <li><strong>Mid-Market Gap:</strong> Between SMEs and enterprise</li>
                                <li><strong>Integration Expertise:</strong> End-to-end implementation</li>
                            </ul>
                        </div>
                    </div>
                    <div class="stats-grid">
                        <div class="stat-card" data-references='["Kim, W.C. & Mauborgne, R. (2005) \"Blue Ocean Strategy\" Harvard Business Review Press"]'>
                            <div class="number">73%</div>
                            <div class="label">Companies Struggle<br><small>With AI Implementation</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">18mo</div>
                            <div class="label">Average Integration Time<br><small>Industry Standard</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">60%</div>
                            <div class="label">AI Projects Fail<br><small>Gartner Research</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">6mo</div>
                            <div class="label">Our Target Timeline<br><small>Competitive Advantage</small></div>
                        </div>
                    </div>
                `
            },

            // SLIDE 5: Implementation Gap & Solution (4 minutes)
            {
                title: "The Implementation Gap & Our Solution (4 minutes)",
                keyPointsTitle: "Market Problem",
                keyPoints: [
                    "60% AI projects fail implementation",
                    "18-month average timeline",
                    "Compliance & expertise gaps",
                    "Opportunity for specialists"
                ],
                content: `
                    <h2>The Implementation Gap</h2>
                    <h3>Why Companies Struggle & How We Bridge the Gap</h3>
                    <div class="two-column">
                        <div class="column">
                            <h4>❌ Current Implementation Challenges:</h4>
                            <ul>
                                <li><strong>60% Failure Rate:</strong> Projects don't reach production (Gartner, 2024)</li>
                                <li><strong>18-Month Timeline:</strong> Too slow for competitive advantage</li>
                                <li><strong>Generic Solutions:</strong> Don't fit industry needs</li>
                                <li><strong>Compliance Gaps:</strong> Regulatory requirements ignored</li>
                                <li><strong>Lack Expertise:</strong> 73% report skills shortage</li>
                            </ul>
                        </div>
                        <div class="column">
                            <h4>✅ Our Solution Approach:</h4>
                            <ul>
                                <li><strong>Industry Specialization:</strong> Healthcare, Finance, Legal, Manufacturing</li>
                                <li><strong>6-Month Guarantee:</strong> Production deployment in half the time</li>
                                <li><strong>Compliance-First:</strong> Built-in regulatory frameworks</li>
                                <li><strong>Proven Methodologies:</strong> Repeatable implementation process</li>
                                <li><strong>Ongoing Support:</strong> Post-deployment optimization</li>
                            </ul>
                        </div>
                    </div>
                    <div class="stats-grid">
                        <div class="stat-card" data-references='["Gartner Inc. (2024) \"AI Implementation Success Factors\" Research Report"]'>
                            <div class="number">60%</div>
                            <div class="label">AI Projects Fail<br><small>Gartner Implementation Study</small></div>
                        </div>
                        <div class="stat-card" data-references='["Deloitte (2024) \"State of AI in Enterprise\" Global Survey"]'>
                            <div class="number">73%</div>
                            <div class="label">Report Skills Shortage<br><small>Deloitte AI Survey</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">4</div>
                            <div class="label">Target Verticals<br><small>Specialized Focus Areas</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">$50B</div>
                            <div class="label">Addressable Market<br><small>Integration Services Only</small></div>
                        </div>
                    </div>
                    <div class="highlight">
                        <h4>💡 Value Proposition:</h4>
                        <p>We solve the implementation gap with industry-specific expertise and compliance-ready solutions - where Big Tech generic tools fail.</p>
                    </div>
                `
            },

            // SLIDE 6: Activity 3 - Action Planning (3 minutes)
            {
                title: "Activity 3: Team Action Planning (3 minutes)",
                keyPointsTitle: "SMART Goals Framework",
                keyPoints: [
                    "Individual planning: 2 minutes",
                    "SMART goal template provided",
                    "Focus on AI implementation",
                    "Share in dialogue session"
                ],
                content: `
                    <h2>Activity 3: Creating Your Team AI Action Plan</h2>
                    <h3>Using SMART Goals Framework (Doran, 1981)</h3>
                    <div class="highlight">
                        <h4>🎯 INDIVIDUAL PLANNING TASK (2 minutes):</h4>
                        <p><strong>Complete the SMART goal template for YOUR team venture:</strong></p>
                        <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 10px; margin: 15px auto; max-width: 600px; text-align: left;">
                            <p><strong>Specific:</strong> What AI implementation will you pursue?</p>
                            <p><strong>Measurable:</strong> How will you measure success?</p>
                            <p><strong>Achievable:</strong> What resources do you need?</p>
                            <p><strong>Relevant:</strong> How does this improve your team's competitiveness?</p>
                            <p><strong>Time-bound:</strong> When will you complete this?</p>
                        </div>
                        <p><em>📝 Template worksheet provided - We'll share examples in dialogue session</em></p>
                    </div>
                    <div class="two-column">
                        <div class="column">
                            <h4>🎯 Example SMART Goal:</h4>
                            <div style="background: rgba(255, 107, 53, 0.1); padding: 12px; border-radius: 8px; border-left: 3px solid var(--siso-orange);">
                                <p style="font-size: 0.85rem; margin: 5px 0;"><strong>S:</strong> Implement AI chatbot for customer service</p>
                                <p style="font-size: 0.85rem; margin: 5px 0;"><strong>M:</strong> Reduce response time from 24hrs to 2hrs</p>
                                <p style="font-size: 0.85rem; margin: 5px 0;"><strong>A:</strong> Use existing CRM + OpenAI API</p>
                                <p style="font-size: 0.85rem; margin: 5px 0;"><strong>R:</strong> Improve customer satisfaction & retention</p>
                                <p style="font-size: 0.85rem; margin: 5px 0;"><strong>T:</strong> Pilot launch within 3 months</p>
                            </div>
                        </div>
                        <div class="column">
                            <h4>🔄 Follow-up Actions:</h4>
                            <ul>
                                <li><strong>Week 1:</strong> Research AI tools for your industry</li>
                                <li><strong>Week 2:</strong> Team meeting to review action plans</li>
                                <li><strong>Month 1:</strong> Begin pilot implementation</li>
                                <li><strong>Month 3:</strong> Evaluate results and scale</li>
                                <li><strong>Ongoing:</strong> Apply Porter's framework to monitor competition</li>
                            </ul>
                        </div>
                    </div>
                    <div class="stats-grid">
                        <div class="stat-card" data-references='["Doran, G.T. (1981) \"There\\'s a S.M.A.R.T. way to write management\\'s goals and objectives\" Management Review, Vol. 70, No. 11"]'>
                            <div class="number">SMART</div>
                            <div class="label">Goal Framework<br><small>Doran (1981) Methodology</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">24mo</div>
                            <div class="label">Strategic Window<br><small>Before Market Consolidation</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">2025</div>
                            <div class="label">Implementation Year<br><small>Optimal Timing</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">15min</div>
                            <div class="label">Dialogue Session<br><small>Share & Discuss Plans</small></div>
                        </div>
                    </div>
                `
            }
        ];
    }

    initializeParticles() {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ["#ff6b35", "#ffd23f", "#ff8659"]
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ff6b35",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    updateParticleEffects() {
        // Change particle behavior based on slide content
        const slide = this.slides[this.currentSlide];
        
        if (slide.title.includes('3D') || slide.title.includes('Market') || slide.title.includes('Growth')) {
            // More active particles for data-heavy slides
            if (window.pJSDom && window.pJSDom[0]) {
                window.pJSDom[0].pJS.particles.move.speed = 4;
                window.pJSDom[0].pJS.particles.number.value = 120;
            }
        } else {
            // Calmer particles for text-heavy slides
            if (window.pJSDom && window.pJSDom[0]) {
                window.pJSDom[0].pJS.particles.move.speed = 2;
                window.pJSDom[0].pJS.particles.number.value = 80;
            }
        }
    }

    // Enhanced chart rendering with animations
    renderChart(config) {
        const canvas = document.getElementById(config.id);
        if (canvas) {
            const chart = new Chart(canvas, {
                ...config.options,
                options: {
                    ...config.options.options,
                    animation: {
                        duration: 2000,
                        easing: 'easeInOutBounce'
                    },
                    plugins: {
                        ...config.options.options.plugins,
                        legend: {
                            ...config.options.options.plugins?.legend,
                            onHover: function(event, legendItem, legend) {
                                legend.chart.canvas.style.cursor = 'pointer';
                            },
                            onLeave: function(event, legendItem, legend) {
                                legend.chart.canvas.style.cursor = 'default';
                            }
                        }
                    }
                }
            });
            
            // Add hover effects to chart
            canvas.addEventListener('mousemove', (e) => {
                chart.canvas.style.cursor = 'pointer';
            });
            
            canvas.addEventListener('mouseleave', (e) => {
                chart.canvas.style.cursor = 'default';
            });
        }
    }

    // Add keyboard shortcuts for presentation control
    setupAdvancedControls() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'Home':
                    this.goToSlide(0);
                    break;
                case 'End':
                    this.goToSlide(this.totalSlides - 1);
                    break;
                case 'f':
                case 'F':
                    this.toggleFullscreen();
                    break;
                case 'p':
                case 'P':
                    this.togglePresentationMode();
                    break;
            }
        });
    }

    goToSlide(slideIndex) {
        if (slideIndex >= 0 && slideIndex < this.totalSlides) {
            this.currentSlide = slideIndex;
            this.renderSlide();
        }
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    togglePresentationMode() {
        document.body.classList.toggle('presentation-mode');
        // Hide cursor in presentation mode
        if (document.body.classList.contains('presentation-mode')) {
            document.body.style.cursor = 'none';
            setTimeout(() => {
                document.body.style.cursor = 'default';
            }, 3000);
        }
    }

    // Navigation sidebar methods
    initializeNavigation() {
        this.createSlidesOverview();
        this.updateNavigation();
    }

    createSlidesOverview() {
        this.slidesOverview.innerHTML = '';
        this.slides.forEach((slide, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'slide-thumbnail';
            thumbnail.textContent = index + 1;
            thumbnail.title = slide.title;
            
            thumbnail.addEventListener('click', () => {
                this.goToSlide(index);
                this.visitedSlides.add(index);
            });
            
            this.slidesOverview.appendChild(thumbnail);
        });
    }

    updateNavigation() {
        // Update current slide info
        const currentSlide = this.slides[this.currentSlide];
        this.currentSlideInfo.querySelector('.slide-number').textContent = this.currentSlide + 1;
        this.currentSlideInfo.querySelector('.slide-title-nav').textContent = currentSlide.title;

        // Update upcoming slides (next 3 slides)
        this.upcomingSlides.innerHTML = '';
        const upcomingCount = Math.min(3, this.totalSlides - this.currentSlide - 1);
        
        for (let i = 1; i <= upcomingCount; i++) {
            const slideIndex = this.currentSlide + i;
            const slide = this.slides[slideIndex];
            
            const item = document.createElement('div');
            item.className = 'upcoming-slide-item';
            item.innerHTML = `
                <div class="slide-number-small">${slideIndex + 1}</div>
                <div class="slide-title-small">${slide.title}</div>
            `;
            
            item.addEventListener('click', () => {
                this.goToSlide(slideIndex);
                this.visitedSlides.add(slideIndex);
            });
            
            this.upcomingSlides.appendChild(item);
        }

        // Update slides overview thumbnails
        const thumbnails = this.slidesOverview.querySelectorAll('.slide-thumbnail');
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.classList.remove('current', 'visited');
            
            if (index === this.currentSlide) {
                thumbnail.classList.add('current');
            } else if (this.visitedSlides.has(index)) {
                thumbnail.classList.add('visited');
            }
        });

        // Animate navigation update
        gsap.fromTo(this.currentSlideInfo, 
            { scale: 0.95 },
            { scale: 1, duration: 0.3, ease: "power2.out" }
        );
        
        gsap.fromTo('.upcoming-slide-item', 
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.4, stagger: 0.1 }
        );
    }

    toggleNavigation() {
        this.slideNav.classList.toggle('collapsed');
        
        // Update toggle button text
        const isCollapsed = this.slideNav.classList.contains('collapsed');
        this.navToggle.textContent = isCollapsed ? '→' : '←';
        
        // On mobile, handle differently
        if (window.innerWidth <= 768) {
            this.slideNav.classList.toggle('mobile-open');
        }
    }

    goToSlide(slideIndex) {
        if (slideIndex >= 0 && slideIndex < this.totalSlides) {
            this.currentSlide = slideIndex;
            this.visitedSlides.add(slideIndex);
            this.renderSlide();
            
            // Close mobile nav after navigation
            if (window.innerWidth <= 768) {
                this.closeMobileNavigation();
            }
        }
    }

    toggleMobileNavigation() {
        this.slideNav.classList.toggle('mobile-open');
        this.mobileBackdrop.classList.toggle('active');
        
        // Update mobile button appearance
        const isOpen = this.slideNav.classList.contains('mobile-open');
        this.mobileNavBtn.textContent = isOpen ? '✕' : '☰';
    }

    closeMobileNavigation() {
        this.slideNav.classList.remove('mobile-open');
        this.mobileBackdrop.classList.remove('active');
        this.mobileNavBtn.textContent = '☰';
    }
}

// Initialize the presentation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const app = new PresentationApp();
    app.setupAdvancedControls();
    
    // Add some easter eggs
    let konami = [];
    const konamiCode = [38,38,40,40,37,39,37,39,66,65]; // up up down down left right left right B A
    
    document.addEventListener('keydown', (e) => {
        konami.push(e.keyCode);
        if (konami.length > 10) konami.shift();
        
        if (konami.join(',') === konamiCode.join(',')) {
            // Easter egg: rainbow particles
            if (window.pJSDom && window.pJSDom[0]) {
                window.pJSDom[0].pJS.particles.color.value = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"];
                window.pJSDom[0].pJS.particles.move.speed = 8;
                window.pJSDom[0].pJS.particles.number.value = 200;
            }
            console.log("🎉 Easter egg activated! Rainbow mode!");
        }
    });
});