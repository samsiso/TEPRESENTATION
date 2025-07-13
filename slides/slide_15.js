// SLIDE 15: Integration Services Market Breakdown (1 min)
export const slide15 = {
    title: "Integration Services Market Breakdown",
    singleColumn: true,
    content: `
        <h2>Integration Services Market Breakdown</h2>
        <h3>$50B Addressable Market Segmentation and Timing Analysis</h3>
        <div class="chart-container">
            <canvas id="services-breakdown-chart"></canvas>
        </div>
        <div class="stats-grid">
            <div class="stat-card" data-references='["Grand View Research (2024) \\"AI Professional Services Market Analysis\\" Industry Report"]'>
                <div class="number">$20B</div>
                <div class="label">Implementation Services<br><small>System Integration</small></div>
            </div>
            <div class="stat-card">
                <div class="number">$15B</div>
                <div class="label">Training Services<br><small>Custom Model Development</small></div>
            </div>
            <div class="stat-card">
                <div class="number">$10B</div>
                <div class="label">Support Services<br><small>Ongoing Maintenance</small></div>
            </div>
            <div class="stat-card">
                <div class="number">$5B</div>
                <div class="label">Compliance Services<br><small>Regulatory Framework</small></div>
            </div>
        </div>
        <div class="two-column">
            <div class="column">
                <h4>🔧 Service Category Analysis:</h4>
                <ul style="text-align: left;">
                    <li><strong>Implementation (40%):</strong> System integration, deployment</li>
                    <li><strong>Training (30%):</strong> Custom model development, fine-tuning</li>
                    <li><strong>Support (20%):</strong> Monitoring, optimization, updates</li>
                    <li><strong>Compliance (10%):</strong> Regulatory frameworks, auditing</li>
                    <li><strong>Growth Rates:</strong> Compliance fastest at 89% CAGR</li>
                </ul>
            </div>
            <div class="column">
                <h4>⏰ Market Timing by Category:</h4>
                <ul style="text-align: left;">
                    <li><strong>2024-2025:</strong> Implementation services peak demand</li>
                    <li><strong>2025-2027:</strong> Training services rapid expansion</li>
                    <li><strong>2026-2030:</strong> Support services steady growth</li>
                    <li><strong>2025-2032:</strong> Compliance services explosive growth</li>
                    <li><strong>Our Focus:</strong> Multi-service portfolio approach</li>
                </ul>
            </div>
        </div>
        <div class="service-matrix" style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h4>🎯 Strategic Service Portfolio:</h4>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-top: 15px;">
                <div>
                    <h5>Phase 1 (2025): Implementation Focus</h5>
                    <p style="font-size: 0.9rem;">60% Implementation, 25% Training, 15% Support</p>
                </div>
                <div>
                    <h5>Phase 2 (2026-2027): Balanced Portfolio</h5>
                    <p style="font-size: 0.9rem;">35% Implementation, 30% Training, 25% Support, 10% Compliance</p>
                </div>
            </div>
        </div>
        <div class="highlight">
            <h4>💼 Market Strategy Insight:</h4>
            <p>Start with implementation services (immediate demand), expand into training (high margins), 
            build support capability (recurring revenue), and develop compliance expertise (future-proofing).</p>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'services-breakdown-chart',
        options: {
            type: 'bar',
            data: {
                labels: ['Implementation', 'Training', 'Support', 'Compliance'],
                datasets: [{
                    label: 'Market Size ($B)',
                    data: [20, 15, 10, 5],
                    backgroundColor: ['#ff6b35', '#ff8659', '#ffd23f', '#1a1a1a'],
                    borderColor: '#ffffff',
                    borderWidth: 1
                }, {
                    label: 'Growth Rate (%)',
                    data: [42, 67, 34, 89],
                    type: 'line',
                    borderColor: '#ffffff',
                    backgroundColor: 'transparent',
                    yAxisID: 'y1',
                    pointBackgroundColor: '#ffffff',
                    pointRadius: 6
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Integration Services Market by Category',
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
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: { display: true, text: 'Market Size ($B)', color: '#ffffff' },
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: { display: true, text: 'Growth Rate (%)', color: '#ffffff' },
                        ticks: { color: '#ffffff' },
                        grid: { drawOnChartArea: false }
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