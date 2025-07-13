// SLIDE 12: Blue Ocean Strategy Mapping (1 min)
export const slide12 = {
    title: "Blue Ocean Strategy Mapping",
    singleColumn: true,
    content: `
        <h2>Blue Ocean Strategy: AI Market Positioning</h2>
        <h3>Red Ocean vs Blue Ocean Analysis (Kim & Mauborgne, 2005)</h3>
        <div class="chart-container">
            <canvas id="strategy-canvas-chart"></canvas>
        </div>
        <div class="stats-grid">
            <div class="stat-card" data-references='["Kim, W.C. & Mauborgne, R. (2005) \\"Blue Ocean Strategy\\" Harvard Business Review Press"]'>
                <div class="number">73%</div>
                <div class="label">Red Ocean Competition<br><small>Crowded Markets</small></div>
            </div>
            <div class="stat-card">
                <div class="number">27%</div>
                <div class="label">Blue Ocean Discovery<br><small>Uncontested Space</small></div>
            </div>
            <div class="stat-card">
                <div class="number">3x</div>
                <div class="label">Higher Success Rate<br><small>Blue Ocean Ventures</small></div>
            </div>
            <div class="stat-card">
                <div class="number">$12B</div>
                <div class="label">Blue Ocean Value<br><small>Compliance-Ready AI</small></div>
            </div>
        </div>
        <div class="two-column">
            <div class="column">
                <h4>🔴 Red Ocean Characteristics:</h4>
                <ul style="text-align: left;">
                    <li><strong>Compete in existing market:</strong> Generic AI tools</li>
                    <li><strong>Beat the competition:</strong> Price wars, feature battles</li>
                    <li><strong>Exploit existing demand:</strong> Fight for market share</li>
                    <li><strong>Value-cost trade-off:</strong> Either differentiation or low cost</li>
                    <li><strong>Examples:</strong> OpenAI competitors, generic chatbots</li>
                </ul>
            </div>
            <div class="column">
                <h4>🔵 Blue Ocean Opportunities:</h4>
                <ul style="text-align: left;">
                    <li><strong>Create uncontested market:</strong> Compliance-ready AI</li>
                    <li><strong>Make competition irrelevant:</strong> Unique value proposition</li>
                    <li><strong>Create and capture demand:</strong> New customer segments</li>
                    <li><strong>Break value-cost trade-off:</strong> High value + reasonable cost</li>
                    <li><strong>Our Focus:</strong> Vertical integration services</li>
                </ul>
            </div>
        </div>
        <div class="blue-ocean-framework" style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h4>🎯 Our Blue Ocean Strategy Canvas:</h4>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-top: 15px;">
                <div style="text-align: center;">
                    <p><strong>ELIMINATE</strong></p>
                    <p style="font-size: 0.9rem;">Generic solutions<br>One-size-fits-all</p>
                </div>
                <div style="text-align: center;">
                    <p><strong>REDUCE</strong></p>
                    <p style="font-size: 0.9rem;">Implementation time<br>Compliance complexity</p>
                </div>
                <div style="text-align: center;">
                    <p><strong>RAISE</strong></p>
                    <p style="font-size: 0.9rem;">Industry expertise<br>Success guarantees</p>
                </div>
                <div style="text-align: center;">
                    <p><strong>CREATE</strong></p>
                    <p style="font-size: 0.9rem;">Compliance-first approach<br>Vertical specialization</p>
                </div>
            </div>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'strategy-canvas-chart',
        options: {
            type: 'radar',
            data: {
                labels: ['Price', 'Features', 'Compliance', 'Speed', 'Support', 'Industry Expertise'],
                datasets: [{
                    label: 'Generic AI Providers',
                    data: [9, 8, 3, 6, 4, 2],
                    borderColor: '#ff6b35',
                    backgroundColor: 'rgba(255, 107, 53, 0.2)',
                    pointBackgroundColor: '#ff6b35',
                    pointBorderColor: '#ffffff'
                }, {
                    label: 'Our Blue Ocean Position',
                    data: [6, 7, 9, 9, 8, 9],
                    borderColor: '#ffd23f',
                    backgroundColor: 'rgba(255, 210, 63, 0.2)',
                    pointBackgroundColor: '#ffd23f',
                    pointBorderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Strategy Canvas: Value Curve Comparison',
                        color: '#ffffff'
                    },
                    legend: {
                        labels: {
                            color: '#ffffff'
                        }
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 10,
                        ticks: {
                            color: '#ffffff',
                            backdropColor: 'transparent'
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        pointLabels: {
                            color: '#ffffff'
                        }
                    }
                }
            }
        }
    }
};