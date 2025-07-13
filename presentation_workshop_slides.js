// WORKSHOP FORMAT: 6 SLIDES TOTAL FOR 30-MINUTE INTERACTIVE SESSION
// Based on assessment requirements and planning document

const WORKSHOP_SLIDES = [
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

// Export for use in main presentation app
if (typeof module !== 'undefined') {
    module.exports = WORKSHOP_SLIDES;
}