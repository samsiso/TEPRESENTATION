class PresentationApp {
    constructor() {
        this.currentSlide = 0;
        this.slides = [];
        this.totalSlides = 30; // We know we have 30 slides
        this.tooltip = null;
        this.referencePopup = null;
        this.slideReferences = [];
        
        this.loadSlides().then(() => {
            this.initializeElements();
            this.setupEventListeners();
            this.initializeParticles();
            this.createTooltip();
            this.renderSlide();
        });
    }

    async loadSlides() {
        try {
            // Load all 30 individual slide files
            const slideModules = [];
            
            for (let i = 1; i <= 30; i++) {
                const slideNumber = i.toString().padStart(2, '0');
                try {
                    const module = await import(`./slides/slide_${slideNumber}.js`);
                    const slideKey = `slide${slideNumber}`;
                    if (module[slideKey]) {
                        const slide = module[slideKey];
                        // Extract references from the slide content
                        slide.references = this.extractReferencesFromSlide(slide);
                        slideModules.push(slide);
                    } else {
                        console.warn(`Slide ${slideNumber} not found, creating placeholder`);
                        slideModules.push(this.createPlaceholderSlide(i));
                    }
                } catch (error) {
                    console.warn(`Could not load slide ${slideNumber}, creating placeholder:`, error);
                    slideModules.push(this.createPlaceholderSlide(i));
                }
            }
            
            this.slides = slideModules;
            this.totalSlides = this.slides.length;
            console.log(`Loaded ${this.slides.length} slides successfully`);
            
        } catch (error) {
            console.error('Error loading slides:', error);
            // Fallback to current workshop slides if loading fails
            this.slides = this.initializeWorkshopSlides();
        }
    }

    extractReferencesFromSlide(slide) {
        const references = [];
        
        if (slide.content) {
            // Create a temporary DOM element to parse the content
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = slide.content;
            
            // Find all elements with data-references attribute
            const elementsWithRefs = tempDiv.querySelectorAll('[data-references]');
            
            elementsWithRefs.forEach(element => {
                try {
                    const refs = JSON.parse(element.getAttribute('data-references'));
                    if (Array.isArray(refs)) {
                        references.push(...refs);
                    }
                } catch (error) {
                    console.warn('Error parsing references:', error);
                }
            });
        }
        
        // Remove duplicates and return
        return [...new Set(references)];
    }

    createPlaceholderSlide(slideNumber) {
        return {
            title: `Slide ${slideNumber} - Coming Soon`,
            content: `
                <div class="title-slide">
                    <h2>Slide ${slideNumber}</h2>
                    <p>This slide will be implemented based on the enhanced 30-slide plan.</p>
                    <div class="highlight">
                        <h4>📋 Content Preview:</h4>
                        <p>This slide will contain comprehensive analysis with data points, visualizations, and academic references as outlined in the enhanced presentation plan.</p>
                    </div>
                </div>
            `
        };
    }

    // Fallback method - uses the original workshop slides
    initializeWorkshopSlides() {
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
            }
        ];
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
        this.slideReferencesList = document.getElementById('slide-references-list');
        
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

        // Clear current slide references
        this.slideReferences = [];
        
        // Find elements with data-references attribute
        const referencedElements = document.querySelectorAll('[data-references]');
        referencedElements.forEach(element => {
            const referencesData = element.getAttribute('data-references');
            try {
                const references = JSON.parse(referencesData);
                
                // Add references to slide collection
                references.forEach(ref => {
                    if (!this.slideReferences.includes(ref)) {
                        this.slideReferences.push(ref);
                    }
                });
                
                // Add reference icon
                const icon = document.createElement('span');
                icon.className = 'reference-icon';
                icon.textContent = '📚';
                icon.title = 'Click to view references';
                
                const clickHandler = (e) => {
                    e.stopPropagation();
                    this.showReferencePopup(element, references);
                };
                
                icon._clickHandler = clickHandler;
                icon.addEventListener('click', clickHandler);
                
                element.style.position = 'relative';
                element.appendChild(icon);
            } catch (e) {
                console.warn('Invalid references data:', referencesData);
            }
        });
        
    }

    // Navigation functionality
    initializeNavigation() {
        this.updateNavigationContent();
    }

    updateNavigationContent() {
        // Update current slide info
        if (this.currentSlideInfo) {
            const currentSlide = this.slides[this.currentSlide];
            if (currentSlide) {
                this.currentSlideInfo.innerHTML = `
                    <div class="slide-number">${this.currentSlide + 1}</div>
                    <div class="slide-title-nav">${currentSlide.title}</div>
                `;
            }
        }

        // Update upcoming slides
        if (this.upcomingSlides) {
            const upcomingCount = Math.min(3, this.totalSlides - this.currentSlide - 1);
            const upcomingHtml = [];
            
            for (let i = 1; i <= upcomingCount; i++) {
                const slideIndex = this.currentSlide + i;
                const slide = this.slides[slideIndex];
                if (slide) {
                    upcomingHtml.push(`
                        <div class="upcoming-slide-item" data-slide="${slideIndex}">
                            <span class="slide-number-small">${slideIndex + 1}</span>
                            <span class="slide-title-small">${slide.title}</span>
                        </div>
                    `);
                }
            }
            
            this.upcomingSlides.innerHTML = upcomingHtml.join('');
            
            // Add click handlers for upcoming slides
            this.upcomingSlides.querySelectorAll('.upcoming-slide-item').forEach(slideEl => {
                slideEl.addEventListener('click', () => {
                    const slideIndex = parseInt(slideEl.getAttribute('data-slide'));
                    this.goToSlide(slideIndex);
                });
            });
        }

        // Update slide references
        if (this.slideReferencesList) {
            const currentSlide = this.slides[this.currentSlide];
            if (currentSlide && currentSlide.references && currentSlide.references.length > 0) {
                const referencesHtml = currentSlide.references.map((ref, index) => `
                    <div class="reference-item">
                        <span class="reference-number">${index + 1}</span>
                        <span class="reference-text">${ref}</span>
                    </div>
                `).join('');
                
                this.slideReferencesList.innerHTML = referencesHtml;
            } else {
                this.slideReferencesList.innerHTML = '<div class="no-references">No references for this slide</div>';
            }
        }

    }

    toggleNavigation() {
        this.slideNav.classList.toggle('collapsed');
        
        // Adjust layout margins based on sidebar state
        const header = document.querySelector('.presentation-header');
        const container = document.querySelector('.slide-container');
        
        if (this.slideNav.classList.contains('collapsed')) {
            header.style.marginLeft = '60px';
            container.style.marginLeft = '60px';
        } else {
            if (window.innerWidth > 1200) {
                header.style.marginLeft = '320px';
                container.style.marginLeft = '320px';
            } else if (window.innerWidth > 768) {
                header.style.marginLeft = '280px';
                container.style.marginLeft = '280px';
            }
        }
    }

    toggleMobileNavigation() {
        this.slideNav.classList.toggle('mobile-open');
        this.mobileBackdrop.classList.toggle('active');
    }

    closeMobileNavigation() {
        this.slideNav.classList.remove('mobile-open');
        this.mobileBackdrop.classList.remove('active');
    }

    // Slide navigation
    renderSlide() {
        if (this.slides.length === 0) return;
        
        const slide = this.slides[this.currentSlide];
        if (!slide) return;
        
        this.slideTitle.textContent = slide.title;
        this.currentSlideSpan.textContent = this.currentSlide + 1;
        this.totalSlidesSpan.textContent = this.totalSlides;
        
        // Handle single column slides
        if (slide.singleColumn) {
            this.slideContent.className = 'slide-content single-column';
            this.slideContent.innerHTML = slide.content;
        } else {
            this.slideContent.className = 'slide-content';
            
            let contentHtml = '';
            
            // Add key points sidebar if present
            if (slide.keyPoints) {
                contentHtml += `
                    <div class="slide-sidebar">
                        <h3>${slide.keyPointsTitle || 'Key Points'}</h3>
                        <ul class="key-points">
                            ${slide.keyPoints.map(point => `<li>${point}</li>`).join('')}
                        </ul>
                    </div>
                `;
            }
            
            contentHtml += `<div class="slide-main">${slide.content}</div>`;
            this.slideContent.innerHTML = contentHtml;
        }
        
        // Update progress bar
        const progressPercent = ((this.currentSlide + 1) / this.totalSlides) * 100;
        this.progress.style.width = `${progressPercent}%`;
        
        // Track visited slides
        this.visitedSlides.add(this.currentSlide);
        
        // Setup interactive elements
        this.setupTooltips();
        this.setupReferenceIcons();
        this.updateNavigationContent();
        
        // Handle charts if present
        if (slide.hasChart && slide.chartConfig) {
            this.renderChart(slide.chartConfig);
        }
        
        // Update navigation buttons
        this.prevBtn.disabled = this.currentSlide === 0;
        this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
        
        // Auto-close mobile navigation
        this.closeMobileNavigation();
    }

    renderChart(chartConfig) {
        setTimeout(() => {
            const canvas = document.getElementById(chartConfig.id);
            if (canvas && window.Chart) {
                // Destroy existing chart if it exists
                if (canvas.chart) {
                    canvas.chart.destroy();
                }
                
                const ctx = canvas.getContext('2d');
                canvas.chart = new Chart(ctx, chartConfig.options);
            }
        }, 100);
    }

    previousSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.renderSlide();
        }
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
            this.renderSlide();
        }
    }

    goToSlide(index) {
        if (index >= 0 && index < this.totalSlides) {
            this.currentSlide = index;
            this.renderSlide();
        }
    }

    // Particles.js initialization
    initializeParticles() {
        if (window.particlesJS) {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: '#ff6b35' },
                    shape: { type: 'circle' },
                    opacity: { value: 0.5, random: false },
                    size: { value: 3, random: true },
                    line_linked: { enable: true, distance: 150, color: '#ff6b35', opacity: 0.4, width: 1 },
                    move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
                    modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
                },
                retina_detect: true
            });
        }
    }
}

// Initialize the presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.presentationApp = new PresentationApp();
});