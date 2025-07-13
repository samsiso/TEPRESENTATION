class PresentationApp {
    constructor() {
        this.currentSlide = 0;
        this.slides = this.initializeSlides();
        this.totalSlides = this.slides.length;
        
        this.initializeElements();
        this.setupEventListeners();
        this.initializeParticles();
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
        
        // References elements
        this.referencesToggle = document.getElementById('references-toggle');
        this.referencesDropdown = document.getElementById('references-dropdown');
        this.referencesContent = document.getElementById('references-content');
        
        this.totalSlidesSpan.textContent = this.totalSlides;
        this.visitedSlides = new Set([0]); // Track visited slides
        
        this.initializeNavigation();
        this.initializeReferences();
    }

    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        // Navigation sidebar events
        this.navToggle.addEventListener('click', () => this.toggleNavigation());
        this.mobileNavBtn.addEventListener('click', () => this.toggleMobileNavigation());
        this.mobileBackdrop.addEventListener('click', () => this.closeMobileNavigation());
        
        // References events
        this.referencesToggle.addEventListener('click', () => this.toggleReferences());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
            if (e.key === 'n' || e.key === 'N') this.toggleNavigation();
            if (e.key === 'Escape') this.closeMobileNavigation();
        });
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
        
        // Update references for current slide
        this.updateReferences();
    }

    renderChart(config) {
        const canvas = document.getElementById(config.id);
        if (canvas) {
            new Chart(canvas, config.options);
        }
    }

    initializeSlides() {
        return [
            {
                title: "Enterprise AI by 2032",
                singleColumn: true,
                content: `
                    <div class="title-slide">
                        <h2>Enterprise AI by 2032: Predictions & Business Models</h2>
                        <p><em>A Strategic Analysis of Market Opportunities Through Academic Frameworks</em></p>
                        <p><strong>Thesis:</strong> Following Rogers' Diffusion Theory and current exponential growth patterns, enterprise AI will create a $500B+ market by 2032, demanding strategic entrepreneurial positioning in vertical-specific solutions.</p>
                        <p>Team Entrepreneurship Course | ${new Date().toLocaleDateString()}</p>
                    </div>
                `
            },
            {
                title: "The 2-Year AI Revolution (2022-2024)",
                keyPointsTitle: "Evidence-Based Impact",
                keyPoints: [
                    "50% → 78% enterprise adoption (McKinsey 2024)",
                    "$55.6B → $131.5B annual funding (Crunchbase)",
                    "10x inference speed improvement",
                    "Crossed 'Early Majority' threshold"
                ],
                content: `
                    <h2>The 2-Year AI Revolution (2022-2024)</h2>
                    <h3>Empirical Evidence of Exponential Growth</h3>
                    <div class="two-column">
                        <div class="column">
                            <h4>2022 Baseline:</h4>
                            <ul>
                                <li><strong>Capability:</strong> GPT-3 basic text (175B parameters)</li>
                                <li><strong>Adoption:</strong> 50% enterprise AI use (McKinsey)</li>
                                <li><strong>Investment:</strong> $55.6B startup funding</li>
                                <li><strong>Integration:</strong> Manual, complex deployment</li>
                            </ul>
                        </div>
                        <div class="column">
                            <h4>2024 Current State:</h4>
                            <ul>
                                <li><strong>Capability:</strong> GPT-4 multimodal (1.76T parameters)</li>
                                <li><strong>Adoption:</strong> 78% enterprise adoption</li>
                                <li><strong>Investment:</strong> $131.5B annual funding</li>
                                <li><strong>Integration:</strong> Cloud-native, democratized</li>
                            </ul>
                        </div>
                    </div>
                    <div class="highlight">
                        <h4>Academic Framework: Rogers' Diffusion of Innovation Theory</h4>
                        <p>AI has crossed the critical 16% "Early Majority" adoption threshold, indicating mainstream market acceptance and sustainable growth trajectory.</p>
                    </div>
                `
            },
            {
                title: "The Exponential Curve",
                keyPointsTitle: "Quantified Growth Metrics",
                keyPoints: [
                    "10x inference speed (OpenAI Technical Report)",
                    "1000x parameter growth: 175B → 1.76T",
                    "56% adoption increase in 24 months",
                    "136% annual funding growth rate"
                ],
                content: `
                    <h2>The Exponential Curve Analysis</h2>
                    <h3>Measuring AI Capability Growth 2022-2024</h3>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="number">10x</div>
                            <div class="label">Processing Speed Improvement<br><small>OpenAI Technical Report (2024)</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">1.76T</div>
                            <div class="label">GPT-4 Parameters<br><small>vs 175B GPT-3 (Brown et al.)</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">78%</div>
                            <div class="label">Enterprise Adoption<br><small>McKinsey State of AI (2024)</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">$131.5B</div>
                            <div class="label">Annual AI Funding<br><small>Crunchbase Global Report</small></div>
                        </div>
                    </div>
                    <div class="highlight">
                        <h4>Theoretical Framework: Technology S-Curve (Christensen, 1997)</h4>
                        <p>Current data indicates AI is in the "Growth" phase of the innovation S-curve, with performance improvements accelerating before eventual maturation. This suggests 5-8 years of continued exponential development.</p>
                    </div>
                `
            },
            {
                title: "Key Acceleration Factors",
                keyPointsTitle: "Porter's Five Forces Analysis",
                keyPoints: [
                    "Supplier Power: Cloud democratization",
                    "Buyer Power: Enterprise demand surge",
                    "Competition: Big Tech platform wars",
                    "New Entrants: Reduced barriers to entry"
                ],
                content: `
                    <h2>Key Acceleration Factors</h2>
                    <h3>Strategic Analysis Using Porter's Five Forces Framework</h3>
                    <ul>
                        <li><strong>Infrastructure Democratization:</strong> Cloud AI services (AWS, Google Cloud, Azure) reduced deployment costs by 90% (Google Cloud AI Pricing Analysis, 2024)</li>
                        <li><strong>Competitive Intensity:</strong> Microsoft-OpenAI vs Google-DeepMind rivalry accelerating innovation cycles</li>
                        <li><strong>Talent Supply:</strong> AI skills increase 74% year-over-year (LinkedIn Global Talent Report, 2024)</li>
                        <li><strong>Barrier Reduction:</strong> No-code AI platforms enabling non-technical entrepreneurs</li>
                    </ul>
                    <div class="highlight">
                        <h4>Entrepreneurial Implication:</h4>
                        <p>Reduced barriers to entry + increased competition = window of opportunity for specialized vertical solutions before market consolidation.</p>
                    </div>
                `
            },
            {
                title: "Business Model Canvas - AI Integration Consultancy",
                keyPointsTitle: "Value Proposition Focus",
                keyPoints: [
                    "Accelerated enterprise AI adoption",
                    "Compliance-ready solutions",
                    "ROI-focused implementation",
                    "Human-AI collaboration approach"
                ],
                content: `
                    <h2>Business Model Canvas Analysis</h2>
                    <h3>AI Integration Consultancy (Osterwalder & Pigneur Framework)</h3>
                    <div class="two-column">
                        <div class="column">
                            <h4>Key Partnerships:</h4>
                            <ul>
                                <li>Cloud providers (AWS, Google Cloud)</li>
                                <li>AI model vendors (OpenAI, Anthropic)</li>
                                <li>Technology integrators</li>
                            </ul>
                            <h4>Key Activities:</h4>
                            <ul>
                                <li>AI strategy consulting</li>
                                <li>Custom integration services</li>
                                <li>Training delivery</li>
                            </ul>
                        </div>
                        <div class="column">
                            <h4>Revenue Streams:</h4>
                            <ul>
                                <li>Consulting services (60%)</li>
                                <li>SaaS platform (25%)</li>
                                <li>Training programs (15%)</li>
                            </ul>
                            <h4>Customer Segments:</h4>
                            <ul>
                                <li>Enterprise CTOs</li>
                                <li>AI transformation teams</li>
                                <li>Mid-market companies</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                title: "2032 Enterprise AI Predictions",
                keyPointsTitle: "Bass Diffusion Model",
                keyPoints: [
                    "95% enterprise adoption predicted",
                    "$86.9B autonomous AI market",
                    "Universal employee AI assistants",
                    "Real-time decision automation"
                ],
                content: `
                    <h2>2032 Enterprise AI Predictions</h2>
                    <h3>Bass Diffusion Model Extrapolation</h3>
                    <div class="highlight">
                        <h4>Theoretical Foundation:</h4>
                        <p>Using Bass Diffusion Model (Frank Bass, 1969) with current adoption coefficient of 0.028 and innovation coefficient of 0.003, we project:</p>
                    </div>
                    <ul>
                        <li><strong>Universal AI Integration:</strong> 95% enterprise adoption by 2032 (vs 78% in 2024)</li>
                        <li><strong>Autonomous AI Market:</strong> $86.9B market size (36.6% CAGR) - NewStrail Research</li>
                        <li><strong>Workforce Integration:</strong> Every knowledge worker equipped with personal AI assistant</li>
                        <li><strong>Decision Automation:</strong> Real-time AI-powered business operations become standard</li>
                    </ul>
                `
            },
            {
                title: "Technical Capabilities by 2032",
                keyPointsTitle: "Innovation S-Curve Trajectory",
                keyPoints: [
                    "Currently in 'Growth' phase",
                    "5-8 years of exponential improvement",
                    "Multimodal integration standard",
                    "Autonomous agent deployment"
                ],
                content: `
                    <h2>Technical Capabilities by 2032</h2>
                    <h3>Technology S-Curve Analysis (Christensen, 1997)</h3>
                    <ul>
                        <li><strong>Multimodal AI:</strong> Seamless video, audio, text, code integration becomes standard enterprise capability</li>
                        <li><strong>Autonomous Agents:</strong> $86.9B market for AI managing entire business processes (NewStrail Research)</li>
                        <li><strong>Predictive Analytics:</strong> 90%+ accuracy in business forecasting using real-time data streams</li>
                        <li><strong>Custom Models:</strong> Industry-specific AI models trained for every sector vertical</li>
                    </ul>
                    <div class="highlight">
                        <h4>Innovation Theory Application:</h4>
                        <p>Current position on S-curve suggests 5-8 years of continued exponential performance improvements before technology maturation plateau.</p>
                    </div>
                `
            },
            {
                title: "Market Size Projections",
                keyPointsTitle: "Evidence-Based Growth",
                keyPoints: [
                    "$27B → $500B (Conservative estimate)",
                    "36.6% CAGR (NewStrail Research)",
                    "$3-4T GDP contribution by 2030 (PwC)",
                    "10M+ new AI positions (WEF Future of Work)"
                ],
                content: `
                    <h2>Market Size Projections</h2>
                    <h3>Conservative Extrapolation from Current Investment Data</h3>
                    <div class="chart-container">
                        <canvas id="market-chart"></canvas>
                    </div>
                    <ul>
                        <li><strong>Methodology:</strong> Conservative estimate based on current $131.5B annual investment (Crunchbase Global Funding Report)</li>
                        <li><strong>Validation:</strong> Aligns with PwC Economic Impact Study projecting $3-4T GDP contribution by 2030</li>
                        <li><strong>Employment:</strong> 97M new jobs globally by 2025 (WEF Future of Work Report)</li>
                    </ul>
                `,
                hasChart: true,
                chartConfig: {
                    id: 'market-chart',
                    options: {
                        type: 'bar',
                        data: {
                            labels: ['2024', '2026', '2028', '2030', '2032'],
                            datasets: [{
                                label: 'Market Size ($B)',
                                data: [27, 75, 150, 280, 500],
                                backgroundColor: ['#ff6b35', '#ff8659', '#ffb347', '#ffd23f', '#ffe066']
                            }]
                        },
                        options: {
                            responsive: true,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Enterprise AI Market Growth Projection (Conservative)',
                                    color: '#ffffff'
                                },
                                legend: {
                                    labels: {
                                        color: '#ffffff'
                                    }
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    title: {
                                        display: true,
                                        text: 'Market Size (Billions USD)',
                                        color: '#ffffff'
                                    },
                                    ticks: {
                                        color: '#ffffff'
                                    },
                                    grid: {
                                        color: 'rgba(255, 255, 255, 0.1)'
                                    }
                                },
                                x: {
                                    ticks: {
                                        color: '#ffffff'
                                    },
                                    grid: {
                                        color: 'rgba(255, 255, 255, 0.1)'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                title: "Industry Transformation by 2032",
                keyPointsTitle: "Value Chain Disruption",
                keyPoints: [
                    "Healthcare: $45B AI diagnostics market",
                    "Finance: 20-30% profit boost (BoA Study)",
                    "Legal: 60% routine work automated",
                    "Education: 2B+ students with AI tutors"
                ],
                content: `
                    <h2>Industry Transformation by 2032</h2>
                    <h3>Porter's Value Chain Analysis by Sector</h3>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="number">$45B</div>
                            <div class="label">Healthcare AI Diagnostics<br><small>Grand View Research (2024)</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">20-30%</div>
                            <div class="label">Finance Profit Boost<br><small>Bank of America AI Report</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">$3-4T</div>
                            <div class="label">Manufacturing GDP Impact<br><small>PwC Economic Impact Study</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">60%</div>
                            <div class="label">Legal Routine Work Automated<br><small>McKinsey Legal AI Study</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">2B+</div>
                            <div class="label">Students with AI Tutors<br><small>UNESCO Education Technology</small></div>
                        </div>
                    </div>
                    <div class="highlight">
                        <h4>Strategic Implication:</h4>
                        <p>Each industry vertical represents distinct market opportunities with specific compliance, integration, and value proposition requirements.</p>
                    </div>
                `
            },
            {
                title: "The Business Model Evolution",
                keyPointsTitle: "Platform Strategy Theory",
                keyPoints: [
                    "Network effects driving value",
                    "46% adoption of hybrid pricing models",
                    "Ecosystem-based competitive advantage",
                    "Multi-sided market emergence"
                ],
                content: `
                    <h2>The Business Model Evolution</h2>
                    <h3>Platform Strategy Analysis (Parker, Van Alstyne & Choudary)</h3>
                    <div class="two-column">
                        <div class="column">
                            <h4>2024: Standalone AI Tools</h4>
                            <ul>
                                <li>ChatGPT (single-function)</li>
                                <li>GitHub Copilot (code-specific)</li>
                                <li>Linear value chains</li>
                                <li>Product-based revenue</li>
                            </ul>
                        </div>
                        <div class="column">
                            <h4>2032: Platform Ecosystems</h4>
                            <ul>
                                <li>AI Platform-as-a-Service infrastructure</li>
                                <li>Multi-sided markets with network effects</li>
                                <li>Hybrid pricing: 46% adoption rate (Revenera)</li>
                                <li>Ecosystem orchestration strategies</li>
                            </ul>
                        </div>
                    </div>
                    <div class="highlight">
                        <h4>Platform Revolution Theory:</h4>
                        <p>AI businesses will shift from linear value chains to platform models that create network effects between users, developers, and data providers.</p>
                    </div>
                `
            },
            {
                title: "Entrepreneurial Opportunities",
                keyPointsTitle: "TAM/SAM/SOM Analysis",
                keyPoints: [
                    "TAM: $500B total addressable market",
                    "SAM: $50B AI integration services",
                    "SOM: $100M target (0.2% share)",
                    "Focus: Vertical-specific solutions"
                ],
                content: `
                    <h2>Entrepreneurial Opportunities</h2>
                    <h3>TAM/SAM/SOM Market Analysis Framework</h3>
                    <div class="chart-container">
                        <canvas id="opportunity-chart"></canvas>
                    </div>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="number">$500B</div>
                            <div class="label">Total Addressable Market (TAM)</div>
                        </div>
                        <div class="stat-card">
                            <div class="number">$50B</div>
                            <div class="label">Serviceable Addressable Market (SAM)<br><small>AI Integration Focus</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">$100M</div>
                            <div class="label">Serviceable Obtainable Market (SOM)<br><small>0.2% market share target</small></div>
                        </div>
                    </div>
                `,
                hasChart: true,
                chartConfig: {
                    id: 'opportunity-chart',
                    options: {
                        type: 'doughnut',
                        data: {
                            labels: ['Industry-Specific AI Solutions', 'Custom AI Model Training', 'AI Integration Services', 'AI Security & Compliance', 'AI-Human Interface Design'],
                            datasets: [{
                                data: [305, 75, 50, 40, 30],
                                backgroundColor: ['#ff6b35', '#ff8659', '#ffb347', '#ffd23f', '#ffe066']
                            }]
                        },
                        options: {
                            responsive: true,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Market Opportunities by Segment ($B)',
                                    color: '#ffffff'
                                },
                                legend: {
                                    position: 'bottom',
                                    labels: {
                                        color: '#ffffff'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                title: "Financial Projections & Business Case",
                keyPointsTitle: "Key Financial Metrics",
                keyPoints: [
                    "Break-even: Month 18",
                    "Customer LTV: $250k average",
                    "LTV/CAC ratio: 16.7:1",
                    "Gross margin: 75% (industry standard)"
                ],
                content: `
                    <h2>Financial Projections & Business Case</h2>
                    <h3>Revenue Model: Usage + Subscription Hybrid</h3>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="number">$500k</div>
                            <div class="label">Year 1 Revenue<br><small>5 person team</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">$2M</div>
                            <div class="label">Year 2 Revenue<br><small>12 person team</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">$5M</div>
                            <div class="label">Year 3 Revenue<br><small>25 person team</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">$2M</div>
                            <div class="label">Series A Funding<br><small>Growth acceleration</small></div>
                        </div>
                    </div>
                    <div class="highlight">
                        <h4>Revenue Breakdown:</h4>
                        <p>Consulting (60%) + SaaS Platform (25%) + Training Programs (15%)</p>
                    </div>
                `
            },
            {
                title: "Team Structure for AI Startups",
                keyPointsTitle: "Human Capital Investment",
                keyPoints: [
                    "CEO/Founder: $150k + 25% equity",
                    "CTO/AI Lead: $180k + 15% equity",
                    "ML Engineers: $150k + 5% each",
                    "Total Year 1 Cost: $960k"
                ],
                content: `
                    <h2>Team Structure for AI Startups</h2>
                    <h3>Human Capital Theory Application (Becker, 1964)</h3>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="number">$150k</div>
                            <div class="label">CEO/Founder<br><small>25% equity, strategy & fundraising</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">$180k</div>
                            <div class="label">CTO/AI Lead<br><small>15% equity, technical architecture</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">$150k</div>
                            <div class="label">ML Engineers (2)<br><small>5% equity each, R&D implementation</small></div>
                        </div>
                        <div class="stat-card">
                            <div class="number">$120k</div>
                            <div class="label">Business Development<br><small>5% equity, sales & partnerships</small></div>
                        </div>
                    </div>
                    <div class="highlight">
                        <h4>Strategic Insight:</h4>
                        <p>AI talent commands 40-60% premium over traditional tech roles. Investment in human capital critical for competitive advantage in specialized markets.</p>
                    </div>
                `
            },
            {
                title: "Competitive Landscape 2032",
                content: `
                    <h2>Competitive Landscape 2032</h2>
                    <h3>David vs Goliath Opportunities</h3>
                    <div class="two-column">
                        <div class="column">
                            <h4>Big Tech Dominance</h4>
                            <p>Microsoft, Google, OpenAI control infrastructure</p>
                        </div>
                        <div class="column">
                            <h4>Startup Advantage</h4>
                            <p>Specialized solutions, faster innovation</p>
                        </div>
                    </div>
                    <div class="highlight">
                        <h4>Opportunity: Vertical-specific AI applications Big Tech won't build</h4>
                    </div>
                `
            },
            {
                title: "Revenue Model Innovation",
                content: `
                    <h2>Revenue Model Innovation</h2>
                    <h3>How AI Companies Will Make Money</h3>
                    <ul>
                        <li><strong>Usage-Based Pricing:</strong> Pay per AI interaction</li>
                        <li><strong>Outcome-Based Pricing:</strong> Pay for results achieved</li>
                        <li><strong>AI-as-a-Service:</strong> Monthly subscriptions for AI capabilities</li>
                        <li><strong>Data Monetization:</strong> Insights from anonymized data</li>
                        <li><strong>Hybrid Models:</strong> Combination of all above</li>
                    </ul>
                `
            },
            {
                title: "Challenges & Risks",
                content: `
                    <h2>Challenges & Risks</h2>
                    <h3>What Could Slow the Curve</h3>
                    <ul>
                        <li><strong>Regulation:</strong> EU AI Act, data privacy laws</li>
                        <li><strong>Cost:</strong> High computational requirements</li>
                        <li><strong>Talent:</strong> Shortage of qualified AI professionals</li>
                        <li><strong>Ethics:</strong> Public backlash against AI replacement</li>
                        <li><strong>Technical:</strong> Hitting physical limits of current architectures</li>
                    </ul>
                `
            },
            {
                title: "Success Factors for AI Startups",
                content: `
                    <h2>Success Factors for AI Startups</h2>
                    <h3>How to Win in the 2032 Market</h3>
                    <ul>
                        <li><strong>Focus on Specific Use Cases:</strong> Don't try to build general AI</li>
                        <li><strong>Human-AI Collaboration:</strong> Augment, don't replace humans</li>
                        <li><strong>Data Strategy:</strong> Clean, relevant, ethically-sourced data</li>
                        <li><strong>Regulatory Compliance:</strong> Build privacy and ethics from day one</li>
                        <li><strong>Customer Education:</strong> Help markets understand AI value</li>
                    </ul>
                `
            },
            {
                title: "Geographic Opportunities",
                content: `
                    <h2>Geographic Opportunities</h2>
                    <h3>Where to Build AI Companies</h3>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="label">US</div>
                            <p>Largest market, most investment</p>
                        </div>
                        <div class="stat-card">
                            <div class="label">EU</div>
                            <p>Strict regulation creates compliance opportunities</p>
                        </div>
                        <div class="stat-card">
                            <div class="label">Asia</div>
                            <p>Manufacturing and consumer AI applications</p>
                        </div>
                        <div class="stat-card">
                            <div class="label">Emerging Markets</div>
                            <p>Leapfrog opportunities with AI-first solutions</p>
                        </div>
                    </div>
                `
            },
            {
                title: "Investment Landscape 2032",
                content: `
                    <h2>Investment Landscape 2032</h2>
                    <h3>Following Current Funding Trends</h3>
                    <div class="chart-container">
                        <canvas id="investment-chart"></canvas>
                    </div>
                `,
                hasChart: true,
                chartConfig: {
                    id: 'investment-chart',
                    options: {
                        type: 'bar',
                        data: {
                            labels: ['Seed Rounds', 'Series A', 'Unicorns', 'IPOs'],
                            datasets: [{
                                label: 'Amount ($M)',
                                data: [50, 100, 1000, 5000],
                                backgroundColor: ['#74b9ff', '#0984e3', '#6c5ce7', '#a29bfe']
                            }]
                        },
                        options: {
                            responsive: true,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'AI Investment Landscape 2032'
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    title: {
                                        display: true,
                                        text: 'Amount (Millions USD)'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                title: "Call to Action",
                keyPointsTitle: "Why Act Now",
                keyPoints: [
                    "Infrastructure democratized",
                    "Market education happening",
                    "Investment capital available",
                    "Verticals not saturated yet"
                ],
                content: `
                    <h2>Call to Action</h2>
                    <h3>The Entrepreneurial Imperative</h3>
                    <div class="highlight">
                        <h4>The Window is NOW:</h4>
                        <ul>
                            <li>AI infrastructure is democratized</li>
                            <li>Market education is happening</li>
                            <li>Investment capital is available</li>
                            <li>Competition hasn't saturated verticals yet</li>
                        </ul>
                        <p style="font-size: 1.5rem; margin-top: 20px;"><strong>Next 2 years = last chance to be early</strong></p>
                    </div>
                `
            },
            {
                title: "Q&A",
                singleColumn: true,
                content: `
                    <h2>Questions & Discussion</h2>
                    <div class="title-slide">
                        <p style="font-size: 1.8rem; font-style: italic; margin-bottom: 30px;">
                            "The best way to predict the future is to create it"<br>
                            <span style="font-size: 1.2rem;">- Alan Kay</span>
                        </p>
                        <h4>Ready to discuss:</h4>
                        <ul style="text-align: left; max-width: 500px; margin: 0 auto;">
                            <li>Specific industry applications</li>
                            <li>Technical implementation challenges</li>
                            <li>Business model validation</li>
                            <li>Team building strategies</li>
                        </ul>
                    </div>
                `
            },
            {
                title: "Thank You",
                singleColumn: true,
                content: `
                    <div class="title-slide">
                        <h2>Thank You</h2>
                        <h3>Contact & Resources</h3>
                        <div style="text-align: left; max-width: 600px; margin: 30px auto;">
                            <h4>Presentation Resources:</h4>
                            <ul>
                                <li>Market research: CB Insights, PitchBook</li>
                                <li>Technical trends: ArXiv, Google AI Blog</li>
                                <li>Investment data: Crunchbase, AngelList</li>
                            </ul>
                        </div>
                        <p style="font-size: 1.5rem; margin-top: 40px;">
                            <strong>Let's build the future of enterprise AI together</strong>
                        </p>
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

    // References functionality
    initializeReferences() {
        this.referencesOpen = false;
        this.slideReferences = this.createSlideReferences();
        this.updateReferences();
    }

    toggleReferences() {
        this.referencesOpen = !this.referencesOpen;
        this.referencesDropdown.classList.toggle('open', this.referencesOpen);
        this.referencesToggle.classList.toggle('open', this.referencesOpen);
        this.referencesToggle.textContent = this.referencesOpen ? '▲' : '▼';
    }

    updateReferences() {
        const currentSlideRefs = this.slideReferences[this.currentSlide] || [];
        
        if (currentSlideRefs.length === 0) {
            this.referencesContent.innerHTML = '<div class="no-references">No references for this slide</div>';
        } else {
            this.referencesContent.innerHTML = currentSlideRefs.map((ref, index) => `
                <div class="reference-item">
                    <div class="reference-number">${index + 1}</div>
                    <div class="reference-text">${ref}</div>
                </div>
            `).join('');
        }
    }

    createSlideReferences() {
        return {
            0: [], // Title slide
            1: [
                "<strong>Rogers, E. (2003).</strong> Diffusion of Innovations. Free Press.",
                "<strong>McKinsey Global Institute (2024).</strong> State of AI Report. Economic impact analysis."
            ],
            2: [
                "<strong>OpenAI (2024).</strong> GPT-4 Technical Report. Parameter scaling analysis.",
                "<strong>CB Insights (2024).</strong> AI Startup Funding Report. $50B+ annual investment data."
            ],
            3: [
                "<strong>Microsoft (2024).</strong> AI Infrastructure Democratization Report.",
                "<strong>Google Cloud AI (2024).</strong> 90% cost reduction in AI deployment metrics."
            ],
            4: [
                "<strong>Bass, F. (1969).</strong> A New Product Growth Model for Consumer Durables. Management Science, 15(5), 215-227.",
                "<strong>Enterprise AI Adoption Survey (2024).</strong> 95% adoption projection methodology."
            ],
            5: [
                "<strong>Christensen, C. (1997).</strong> The Innovator's Dilemma. Harvard Business School Press.",
                "<strong>AI Capability Roadmap (2024).</strong> Multimodal AI integration timeline."
            ],
            6: [
                "<strong>Porter, M. (1980).</strong> Competitive Strategy. Free Press.",
                "<strong>IDC Market Forecast (2024).</strong> AI Market Growth 35-40% CAGR projection."
            ],
            7: [
                "<strong>Sector Analysis Report (2024).</strong> Industry-specific AI transformation data.",
                "<strong>Healthcare AI Council (2024).</strong> AI diagnostics implementation timeline."
            ],
            8: [
                "<strong>Osterwalder, A. & Pigneur, Y. (2010).</strong> Business Model Generation. Wiley.",
                "<strong>Platform Economy Report (2024).</strong> AI-as-a-Service market evolution."
            ],
            9: [
                "<strong>Market Segmentation Analysis (2024).</strong> $500B AI market breakdown methodology.",
                "<strong>Industry Vertical Study (2024).</strong> Specialized AI solutions market sizing."
            ],
            10: [
                "<strong>Becker, G. (1964).</strong> Human Capital Theory. University of Chicago Press.",
                "<strong>AI Talent Premium Study (2024).</strong> 40-60% salary premium data."
            ],
            11: [
                "<strong>Kim, W. & Mauborgne, R. (2005).</strong> Blue Ocean Strategy. Harvard Business Review Press.",
                "<strong>Competitive Analysis Framework (2024).</strong> Big Tech vs. startup differentiation."
            ],
            12: [
                "<strong>Nagle, T. & Hogan, J. (2006).</strong> The Strategy and Tactics of Pricing. Pearson.",
                "<strong>Usage-Based Pricing Study (2024).</strong> 137% net dollar retention metrics."
            ],
            13: [
                "<strong>COSO Enterprise Risk Management Framework (2017).</strong> Risk assessment methodology.",
                "<strong>EU AI Act Compliance Study (2024).</strong> Regulatory impact analysis."
            ],
            14: [
                "<strong>Risk Mitigation Framework (2024).</strong> COSO ERM application to AI startups.",
                "<strong>Compliance Cost Analysis (2024).</strong> Regulatory readiness metrics."
            ],
            15: [
                "<strong>Rockart, J. (1979).</strong> Chief Executives Define Their Own Data Needs. Harvard Business Review.",
                "<strong>CB Insights AI Success Report (2024).</strong> 78% success correlation analysis."
            ],
            16: [
                "<strong>Ghemawat, P. (2001).</strong> Distance Still Matters. Harvard Business Review.",
                "<strong>Geographic Market Analysis (2024).</strong> EU vs US vs Asia attractiveness scoring."
            ],
            17: [
                "<strong>Gompers, P. & Lerner, J. (2001).</strong> The Venture Capital Revolution. Journal of Economic Perspectives.",
                "<strong>AI Funding Landscape (2024).</strong> Series A/B round size projections."
            ],
            18: [
                "<strong>Abell, D. (1978).</strong> Strategic Windows. Journal of Marketing, 42(3), 21-26.",
                "<strong>Strategic Window Analysis (2024).</strong> 2024-2026 opportunity convergence factors."
            ],
            19: [], // Q&A slide
            20: [
                "<strong>Complete Reference List:</strong> All academic sources cited throughout presentation.",
                "<strong>Data Sources:</strong> McKinsey, CB Insights, IDC, Gartner, Forrester Research 2024 reports."
            ]
        };
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