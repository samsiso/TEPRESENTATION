// SLIDE 13: Global AI Investment Flow Analysis (1 min)
export const slide13 = {
    title: "Global AI Investment Flow Analysis",
    singleColumn: true,
    content: `
        <h2>Global AI Investment Flow Analysis</h2>
        <h3>$131.5B Annual Investment Breakdown by Category and Geography</h3>
        <div class="chart-container">
            <canvas id="investment-flow-chart"></canvas>
        </div>
        <div class="stats-grid">
            <div class="stat-card" data-references='["Crunchbase (2024) \\"Global AI Investment Report\\" Q3 2024"]'>
                <div class="number">$131.5B</div>
                <div class="label">Total Annual Investment<br><small>Global AI Funding 2024</small></div>
            </div>
            <div class="stat-card">
                <div class="number">67%</div>
                <div class="label">Infrastructure Investment<br><small>$88.1B Cloud & Hardware</small></div>
            </div>
            <div class="stat-card">
                <div class="number">23%</div>
                <div class="label">Application Development<br><small>$30.2B Software</small></div>
            </div>
            <div class="stat-card">
                <div class="number">10%</div>
                <div class="label">Services & Integration<br><small>$13.2B Our Market</small></div>
            </div>
        </div>
        <div class="two-column">
            <div class="column">
                <h4>💰 Investment by Category:</h4>
                <ul style="text-align: left;">
                    <li><strong>Infrastructure (67%):</strong> Cloud computing, chips, data centers</li>
                    <li><strong>Applications (23%):</strong> Software development, platforms</li>
                    <li><strong>Services (10%):</strong> Integration, consulting, training</li>
                    <li><strong>Growth Rate:</strong> Services growing fastest at 156% YoY</li>
                </ul>
            </div>
            <div class="column">
                <h4>🌍 Geographic Distribution:</h4>
                <ul style="text-align: left;">
                    <li><strong>North America (72%):</strong> $94.7B, dominated by US</li>
                    <li><strong>Europe (18%):</strong> $23.7B, led by UK & Germany</li>
                    <li><strong>Asia (10%):</strong> $13.2B, China & Singapore</li>
                    <li><strong>Opportunity:</strong> Geographic expansion potential</li>
                </ul>
            </div>
        </div>
        <div class="highlight">
            <h4>📊 Strategic Investment Insight:</h4>
            <p>Services receive only 10% of total investment despite 156% growth rate, indicating massive underfunding 
            and opportunity for entrepreneurs in the integration services space.</p>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'investment-flow-chart',
        options: {
            type: 'doughnut',
            data: {
                labels: ['Infrastructure (67%)', 'Applications (23%)', 'Services (10%)'],
                datasets: [{
                    data: [67, 23, 10],
                    backgroundColor: ['#ff6b35', '#ff8659', '#ffd23f'],
                    borderColor: '#ffffff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'AI Investment Distribution by Category ($131.5B)',
                        color: '#ffffff'
                    },
                    legend: {
                        labels: {
                            color: '#ffffff'
                        }
                    }
                }
            }
        }
    }
};