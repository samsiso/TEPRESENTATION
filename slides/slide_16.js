// SLIDE 16: Industry Adoption Rates & Revenue Impact (1 min)
export const slide16 = {
    title: "Industry Adoption Rates & Revenue Impact",
    singleColumn: true,
    content: `
        <h2>Industry Adoption Rates & Revenue Impact Analysis</h2>
        <h3>Sector-by-Sector Analysis: Adoption Rate vs Revenue Impact vs Market Size</h3>
        <div class="chart-container">
            <canvas id="industry-bubble-chart"></canvas>
        </div>
        <div class="stats-grid">
            <div class="stat-card" data-references='["Accenture (2024) \\"AI in Healthcare Report\\" Industry Analysis"]'>
                <div class="number">$45B</div>
                <div class="label">Healthcare AI Market<br><small>Diagnostics & Treatment</small></div>
            </div>
            <div class="stat-card" data-references='["McKinsey (2024) \\"AI in Financial Services\\" Sector Report"]'>
                <div class="number">30%</div>
                <div class="label">Finance Profit Boost<br><small>Risk & Trading Optimization</small></div>
            </div>
            <div class="stat-card" data-references='["PwC (2024) \\"Manufacturing AI Impact\\" Global Study"]'>
                <div class="number">$3.4T</div>
                <div class="label">Manufacturing GDP Impact<br><small>Global Economic Value</small></div>
            </div>
            <div class="stat-card">
                <div class="number">67%</div>
                <div class="label">Average Adoption Rate<br><small>Across All Industries</small></div>
            </div>
        </div>
        <div class="two-column">
            <div class="column">
                <h4>🏥 High-Impact Industries:</h4>
                <ul style="text-align: left;">
                    <li><strong>Healthcare (67% adoption):</strong> Diagnostics, drug discovery, personalized medicine</li>
                    <li><strong>Finance (82% adoption):</strong> Risk assessment, algorithmic trading, fraud detection</li>
                    <li><strong>Technology (95% adoption):</strong> Software development, automation, infrastructure</li>
                    <li><strong>Energy (43% adoption):</strong> Grid optimization, predictive maintenance</li>
                </ul>
            </div>
            <div class="column">
                <h4>🏭 Implementation Opportunities:</h4>
                <ul style="text-align: left;">
                    <li><strong>Manufacturing (54% adoption):</strong> Quality control, supply chain, robotics</li>
                    <li><strong>Retail (49% adoption):</strong> Demand forecasting, personalization, inventory</li>
                    <li><strong>Education (31% adoption):</strong> Personalized learning, administration</li>
                    <li><strong>Agriculture (28% adoption):</strong> Crop monitoring, yield optimization</li>
                </ul>
            </div>
        </div>
        <div class="industry-matrix" style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h4>🎯 Strategic Industry Prioritization:</h4>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 15px;">
                <div style="text-align: center;">
                    <h5>Tier 1: Healthcare & Finance</h5>
                    <p style="font-size: 0.9rem;">High adoption + High impact + Compliance critical</p>
                </div>
                <div style="text-align: center;">
                    <h5>Tier 2: Manufacturing & Energy</h5>
                    <p style="font-size: 0.9rem;">Medium adoption + High impact + Infrastructure focus</p>
                </div>
                <div style="text-align: center;">
                    <h5>Tier 3: Retail & Education</h5>
                    <p style="font-size: 0.9rem;">Growing adoption + Medium impact + Service potential</p>
                </div>
            </div>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'industry-bubble-chart',
        options: {
            type: 'bubble',
            data: {
                datasets: [{
                    label: 'Industry Analysis',
                    data: [
                        {x: 95, y: 45, r: 15, industry: 'Technology'},
                        {x: 82, y: 30, r: 25, industry: 'Finance'},
                        {x: 67, y: 45, r: 20, industry: 'Healthcare'},
                        {x: 54, y: 35, r: 30, industry: 'Manufacturing'},
                        {x: 49, y: 20, r: 18, industry: 'Retail'},
                        {x: 43, y: 40, r: 22, industry: 'Energy'},
                        {x: 31, y: 15, r: 12, industry: 'Education'},
                        {x: 28, y: 25, r: 10, industry: 'Agriculture'}
                    ],
                    backgroundColor: 'rgba(255, 107, 53, 0.6)',
                    borderColor: '#ff6b35',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Industry Analysis: Adoption Rate vs Revenue Impact vs Market Size',
                        color: '#ffffff'
                    },
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const point = context.raw;
                                return `${point.industry}: ${point.x}% adoption, $${point.y}B impact`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: { display: true, text: 'Adoption Rate (%)', color: '#ffffff' },
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    y: {
                        title: { display: true, text: 'Revenue Impact ($B)', color: '#ffffff' },
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        }
    }
};