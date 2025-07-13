// SLIDE 17: Geographic Market Opportunity Matrix (1 min)
export const slide17 = {
    title: "Geographic Market Opportunity Matrix",
    singleColumn: true,
    content: `
        <h2>Geographic Market Opportunity Matrix</h2>
        <h3>Market Attractiveness vs Regulatory Clarity Analysis</h3>
        <div class="chart-container">
            <canvas id="geographic-matrix-chart"></canvas>
        </div>
        <div class="stats-grid">
            <div class="stat-card" data-references='["European Commission (2024) \\"AI Act Implementation Guide\\" Regulatory Framework"]'>
                <div class="number">7.7/10</div>
                <div class="label">EU Market Score<br><small>High Regulation + Growth</small></div>
            </div>
            <div class="stat-card">
                <div class="number">6.0/10</div>
                <div class="label">US Market Score<br><small>Large Market + Uncertainty</small></div>
            </div>
            <div class="stat-card">
                <div class="number">6.3/10</div>
                <div class="label">Asia Market Score<br><small>Growth + Complexity</small></div>
            </div>
            <div class="stat-card">
                <div class="number">3-5</div>
                <div class="label">Target Markets<br><small>Phased Expansion</small></div>
            </div>
        </div>
        <div class="two-column">
            <div class="column">
                <h4>🇪🇺 European Union Advantages:</h4>
                <ul style="text-align: left;">
                    <li><strong>Clear Regulation:</strong> AI Act provides framework</li>
                    <li><strong>Compliance Focus:</strong> Matches our positioning</li>
                    <li><strong>Market Size:</strong> €2.3T digital market</li>
                    <li><strong>Funding Support:</strong> Horizon Europe programs</li>
                    <li><strong>Entry Strategy:</strong> Compliance-first approach</li>
                </ul>
            </div>
            <div class="column">
                <h4>🌏 Global Market Strategy:</h4>
                <ul style="text-align: left;">
                    <li><strong>Phase 1:</strong> UK/EU compliance expertise</li>
                    <li><strong>Phase 2:</strong> US market expansion</li>
                    <li><strong>Phase 3:</strong> Asian markets (Singapore, Japan)</li>
                    <li><strong>Competitive Advantage:</strong> Regulatory expertise transfer</li>
                    <li><strong>Revenue Potential:</strong> $12B addressable across regions</li>
                </ul>
            </div>
        </div>
        <div class="highlight">
            <h4>🌍 Geographic Strategy Insight:</h4>
            <p>EU offers optimal starting point with clear regulations favoring compliance-focused services. 
            Regulatory expertise developed in EU creates competitive advantage for subsequent market expansion.</p>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'geographic-matrix-chart',
        options: {
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Geographic Markets',
                    data: [
                        {x: 8.5, y: 7.2, region: 'EU'},
                        {x: 9.2, y: 5.8, region: 'US'},
                        {x: 7.8, y: 6.1, region: 'Asia'},
                        {x: 6.5, y: 8.2, region: 'UK'},
                        {x: 5.2, y: 4.5, region: 'Emerging'}
                    ],
                    backgroundColor: ['#ff6b35', '#ff8659', '#ffd23f', '#1a1a1a', '#666666'],
                    borderColor: '#ffffff',
                    borderWidth: 2,
                    pointRadius: 12
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Market Attractiveness vs Regulatory Clarity Matrix',
                        color: '#ffffff'
                    },
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const point = context.raw;
                                return `${point.region}: Market ${point.x}/10, Regulatory ${point.y}/10`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: { display: true, text: 'Market Attractiveness Score', color: '#ffffff' },
                        min: 4,
                        max: 10,
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    y: {
                        title: { display: true, text: 'Regulatory Clarity Score', color: '#ffffff' },
                        min: 4,
                        max: 9,
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        }
    }
};