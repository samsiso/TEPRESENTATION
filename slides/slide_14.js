// SLIDE 14: Market Growth Trajectory & Projections (1 min)
export const slide14 = {
    title: "Market Growth Trajectory & Projections",
    singleColumn: true,
    content: `
        <h2>Market Growth Trajectory & Projections</h2>
        <h3>$27B → $500B Growth with Conservative/Optimistic Scenarios</h3>
        <div class="chart-container">
            <canvas id="growth-trajectory-chart"></canvas>
        </div>
        <div class="stats-grid">
            <div class="stat-card" data-references='["NewStrail Research (2024) \\"AI Market Projections Report\\" Q3 2024"]'>
                <div class="number">36.6%</div>
                <div class="label">Base Case CAGR<br><small>2024-2032 Projection</small></div>
            </div>
            <div class="stat-card">
                <div class="number">28%</div>
                <div class="label">Conservative CAGR<br><small>Pessimistic Scenario</small></div>
            </div>
            <div class="stat-card">
                <div class="number">45%</div>
                <div class="label">Optimistic CAGR<br><small>Accelerated Growth</small></div>
            </div>
            <div class="stat-card">
                <div class="number">18.5x</div>
                <div class="label">Growth Multiple<br><small>8-Year Period</small></div>
            </div>
        </div>
        <div class="two-column">
            <div class="column">
                <h4>📈 Scenario Analysis:</h4>
                <ul style="text-align: left;">
                    <li><strong>Conservative (28% CAGR):</strong> Regulatory delays, slower adoption</li>
                    <li><strong>Base Case (36.6% CAGR):</strong> Current trends continue</li>
                    <li><strong>Optimistic (45% CAGR):</strong> Breakthrough innovations accelerate</li>
                    <li><strong>Risk Factors:</strong> Economic downturns, regulation</li>
                </ul>
            </div>
            <div class="column">
                <h4>🎯 Strategic Implications:</h4>
                <ul style="text-align: left;">
                    <li><strong>Market Timing:</strong> Enter during high-growth phase</li>
                    <li><strong>Investment Strategy:</strong> Scale during 2025-2028</li>
                    <li><strong>Exit Planning:</strong> IPO/acquisition before saturation</li>
                    <li><strong>Risk Mitigation:</strong> Plan for conservative scenario</li>
                </ul>
            </div>
        </div>
        <div class="highlight">
            <h4>📊 Growth Trajectory Analysis:</h4>
            <p>Even conservative 28% CAGR delivers $300B market by 2032. Base case 36.6% reaches $500B target, 
            validating substantial opportunity regardless of scenario.</p>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'growth-trajectory-chart',
        options: {
            type: 'line',
            data: {
                labels: ['2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'],
                datasets: [{
                    label: 'Conservative (28% CAGR)',
                    data: [27, 35, 45, 57, 73, 93, 119, 153, 196],
                    borderColor: '#ff8659',
                    backgroundColor: 'rgba(255, 134, 89, 0.1)',
                    fill: false,
                    tension: 0.4
                }, {
                    label: 'Base Case (36.6% CAGR)',
                    data: [27, 37, 51, 69, 95, 130, 177, 242, 330],
                    borderColor: '#ff6b35',
                    backgroundColor: 'rgba(255, 107, 53, 0.1)',
                    fill: false,
                    tension: 0.4
                }, {
                    label: 'Optimistic (45% CAGR)',
                    data: [27, 39, 57, 83, 120, 174, 252, 366, 530],
                    borderColor: '#ffd23f',
                    backgroundColor: 'rgba(255, 210, 63, 0.1)',
                    fill: false,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'AI Market Growth Scenarios (2024-2032)',
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
};