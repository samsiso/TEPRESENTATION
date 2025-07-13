// SLIDE 5: The $500B Entrepreneurial Prize (1 min)
export const slide05 = {
    title: "The $500B Entrepreneurial Prize",
    singleColumn: true,
    content: `
        <h2>The $500B Entrepreneurial Prize by 2032</h2>
        <h3>Market Opportunity Breakdown with Integration Services Focus</h3>
        <div class="chart-container">
            <canvas id="market-breakdown-chart"></canvas>
        </div>
        <div class="stats-grid">
            <div class="stat-card" data-references='["Grand View Research (2024) \\"AI Professional Services Market\\""]'>
                <div class="number">$50B</div>
                <div class="label">Integration Services<br><small>Our Target Market</small></div>
            </div>
            <div class="stat-card" data-references='["NewStrail Research (2024) \\"AI Market Projections\\""]'>
                <div class="number">$75B</div>
                <div class="label">Custom Training<br><small>Adjacent Opportunity</small></div>
            </div>
            <div class="stat-card">
                <div class="number">$305B</div>
                <div class="label">Vertical Solutions<br><small>Specialized Applications</small></div>
            </div>
            <div class="stat-card">
                <div class="number">$70B</div>
                <div class="label">Platform Services<br><small>Infrastructure Layer</small></div>
            </div>
        </div>
        <div class="two-column">
            <div class="column">
                <h4>💰 Why Integration Services ($50B):</h4>
                <ul style="text-align: left;">
                    <li><strong>Lower Barriers:</strong> No infrastructure investment</li>
                    <li><strong>High Margins:</strong> 60-75% gross profit potential</li>
                    <li><strong>Recurring Revenue:</strong> Ongoing support contracts</li>
                    <li><strong>Scalable:</strong> Methodology can be replicated</li>
                    <li><strong>Defensible:</strong> Industry expertise barriers</li>
                </ul>
            </div>
            <div class="column">
                <h4>📊 Market Timing Analysis:</h4>
                <ul style="text-align: left;">
                    <li><strong>Current Size:</strong> $2.7B (2024 baseline)</li>
                    <li><strong>Growth Rate:</strong> 42% CAGR projected</li>
                    <li><strong>Peak Growth:</strong> 2025-2028 period</li>
                    <li><strong>Consolidation Risk:</strong> Begins 2029-2030</li>
                    <li><strong>Strategic Window:</strong> 24-month opportunity</li>
                </ul>
            </div>
        </div>
        <!-- Strategic Argument -->
        <div style="background: rgba(255,210,63,0.1); border: 2px solid var(--siso-yellow); padding: 25px; border-radius: 12px; margin-top: 30px;">
            <h3 style="font-size: 1.4rem; color: var(--siso-yellow); margin-bottom: 15px;">💰 Why $50B Integration Services is THE Opportunity</h3>
            <p style="font-size: 1.1rem; line-height: 1.5; color: rgba(255,255,255,0.95);">
                <strong>Argument Point 3:</strong> Of the $500B total market, integration services offer the best risk-adjusted returns for team ventures. Unlike vertical solutions ($305B) requiring deep domain expertise, or platform services ($70B) needing massive capital, integration services have lower barriers but higher margins (60-75%). The 42% CAGR means early movers capture disproportionate value.
            </p>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'market-breakdown-chart',
        options: {
            type: 'doughnut',
            data: {
                labels: ['Vertical Solutions ($305B)', 'Custom Training ($75B)', 'Platform Services ($70B)', 'Integration Services ($50B)'],
                datasets: [{
                    data: [305, 75, 70, 50],
                    backgroundColor: ['#ff6b35', '#ff8659', '#ffd23f', '#1a1a1a'],
                    borderColor: '#ffffff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: '$500B AI Market Breakdown by 2032',
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