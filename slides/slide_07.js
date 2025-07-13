// SLIDE 7: AI on Rogers' Curve - Current Position (1 min)
export const slide07 = {
    title: "AI on Rogers' Curve - Current Position",
    singleColumn: true,
    content: `
        <h2>AI Current Position: Late Majority Phase Analysis</h2>
        <h3>Strategic Implications of 78% Adoption Rate</h3>
        <div class="chart-container">
            <canvas id="ai-position-chart"></canvas>
        </div>
        <div class="stats-grid">
            <div class="stat-card" data-references='["McKinsey Global Institute (2024) \\"The state of AI in 2024\\""]'>
                <div class="number">78%</div>
                <div class="label">Current AI Adoption<br><small>Late Majority Phase</small></div>
            </div>
            <div class="stat-card" data-references='["Moore, G.A. (2014) \\"Crossing the chasm\\" 3rd ed., HarperBusiness"]'>
                <div class="number">Crossed</div>
                <div class="label">The Chasm (16%)<br><small>Mass Market Entry</small></div>
            </div>
            <div class="stat-card">
                <div class="number">6%</div>
                <div class="label">To Saturation (84%)<br><small>Limited Time Window</small></div>
            </div>
            <div class="stat-card">
                <div class="number">24mo</div>
                <div class="label">Strategic Window<br><small>Before Consolidation</small></div>
            </div>
        </div>
        <div class="two-column">
            <div class="column">
                <h4>📊 Late Majority Characteristics:</h4>
                <ul style="text-align: left;">
                    <li><strong>Risk Averse:</strong> Wait for proven solutions</li>
                    <li><strong>Price Sensitive:</strong> Need cost-effective options</li>
                    <li><strong>Support Dependent:</strong> Require hand-holding</li>
                    <li><strong>Compliance Focused:</strong> Regulatory concerns paramount</li>
                    <li><strong>Incremental Adoption:</strong> Gradual implementation</li>
                </ul>
            </div>
            <div class="column">
                <h4>🎯 Entrepreneurial Implications:</h4>
                <ul style="text-align: left;">
                    <li><strong>Service Opportunity:</strong> Implementation support needed</li>
                    <li><strong>Market Timing:</strong> Optimal entry point for services</li>
                    <li><strong>Competition:</strong> Platform wars intensifying</li>
                    <li><strong>Differentiation:</strong> Specialization becomes critical</li>
                    <li><strong>Urgency:</strong> Limited time before consolidation</li>
                </ul>
            </div>
        </div>
        <div class="highlight">
            <h4>⚡ Strategic Window Analysis:</h4>
            <p>At 78% adoption, AI is in the optimal phase for integration services entrepreneurship: 
            massive demand exists, but market hasn't consolidated. Window closes at ~84% adoption when Big Tech dominates.</p>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'ai-position-chart',
        options: {
            type: 'line',
            data: {
                labels: ['Innovators', 'Early Adopters', 'Early Majority', 'Late Majority', 'Laggards'],
                datasets: [{
                    label: 'Rogers Curve',
                    data: [2.5, 16, 50, 84, 100],
                    borderColor: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'AI Current Position (78%)',
                    data: [null, null, null, 78, null],
                    borderColor: '#ff6b35',
                    backgroundColor: '#ff6b35',
                    pointBackgroundColor: '#ff6b35',
                    pointBorderColor: '#ffffff',
                    pointRadius: 10,
                    pointHoverRadius: 12,
                    showLine: false
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'AI Position on Rogers\' Diffusion Curve',
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
                        max: 100,
                        title: { display: true, text: 'Cumulative Adoption (%)', color: '#ffffff' },
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
};