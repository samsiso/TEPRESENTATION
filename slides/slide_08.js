// SLIDE 8: Technology Hype Cycle - AI Position (1 min)
export const slide08 = {
    title: "Technology Hype Cycle - AI Position",
    singleColumn: true,
    content: `
        <h2>Gartner Hype Cycle: AI Technologies Positioned</h2>
        <h3>Understanding Maturity Levels and Realistic Expectations</h3>
        <div class="chart-container">
            <canvas id="hype-cycle-chart"></canvas>
        </div>
        <div class="stats-grid">
            <div class="stat-card" data-references='["Gartner Inc. (2024) \\"Hype Cycle for Artificial Intelligence\\" Research Report"]'>
                <div class="number">Peak</div>
                <div class="label">Generative AI<br><small>Inflated Expectations</small></div>
            </div>
            <div class="stat-card">
                <div class="number">Trough</div>
                <div class="label">Enterprise AI<br><small>Disillusionment Phase</small></div>
            </div>
            <div class="stat-card">
                <div class="number">Slope</div>
                <div class="label">MLOps<br><small>Climbing to Productivity</small></div>
            </div>
            <div class="stat-card">
                <div class="number">Plateau</div>
                <div class="label">AI Integration<br><small>Production Ready</small></div>
            </div>
        </div>
        <div class="two-column">
            <div class="column">
                <h4>🔬 Hype Cycle Analysis (Gartner, 2024):</h4>
                <ul style="text-align: left;">
                    <li><strong>Technology Trigger:</strong> Initial breakthrough moment</li>
                    <li><strong>Peak Expectations:</strong> Overoptimistic projections</li>
                    <li><strong>Trough Reality:</strong> Failures highlight limitations</li>
                    <li><strong>Slope Progress:</strong> Real value starts emerging</li>
                    <li><strong>Plateau Maturity:</strong> Mainstream adoption begins</li>
                </ul>
            </div>
            <div class="column">
                <h4>💼 Business Implications:</h4>
                <ul style="text-align: left;">
                    <li><strong>GenAI Risk:</strong> Overhyped, implementation challenges</li>
                    <li><strong>Enterprise Reality:</strong> ROI expectations adjusting</li>
                    <li><strong>MLOps Opportunity:</strong> Infrastructure maturing</li>
                    <li><strong>Integration Sweet Spot:</strong> Proven, production-ready</li>
                    <li><strong>Market Timing:</strong> Services opportunity optimal</li>
                </ul>
            </div>
        </div>
        <div class="highlight">
            <h4>🎯 Strategic Positioning Insight:</h4>
            <p>AI integration services sit at the optimal intersection: post-hype reality with proven value, 
            creating sustainable business opportunities while avoiding overhyped technology risks.</p>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'hype-cycle-chart',
        options: {
            type: 'line',
            data: {
                labels: ['Trigger', 'Peak', 'Trough', 'Slope', 'Plateau'],
                datasets: [{
                    label: 'Hype Cycle',
                    data: [10, 90, 20, 60, 80],
                    borderColor: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'GenAI',
                    data: [null, 90, null, null, null],
                    borderColor: '#ff6b35',
                    backgroundColor: '#ff6b35',
                    pointRadius: 8,
                    showLine: false
                }, {
                    label: 'Enterprise AI',
                    data: [null, null, 20, null, null],
                    borderColor: '#ffd23f',
                    backgroundColor: '#ffd23f',
                    pointRadius: 8,
                    showLine: false
                }, {
                    label: 'MLOps',
                    data: [null, null, null, 60, null],
                    borderColor: '#ff8659',
                    backgroundColor: '#ff8659',
                    pointRadius: 8,
                    showLine: false
                }, {
                    label: 'AI Integration',
                    data: [null, null, null, null, 80],
                    borderColor: '#1a1a1a',
                    backgroundColor: '#1a1a1a',
                    pointRadius: 8,
                    showLine: false
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Gartner Hype Cycle: AI Technologies (2024)',
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
                        title: { display: true, text: 'Expectations', color: '#ffffff' },
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