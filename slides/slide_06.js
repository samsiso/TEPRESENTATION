// SLIDE 6: Rogers' Diffusion Theory Explained (1 min)
export const slide06 = {
    title: "Rogers' Diffusion Theory Explained",
    singleColumn: true,
    content: `
        <h2>Rogers' Diffusion of Innovation Theory</h2>
        <h3>Foundation for Understanding Technology Adoption Patterns</h3>
        <div class="chart-container">
            <canvas id="rogers-curve-chart"></canvas>
        </div>
        <div class="stats-grid">
            <div class="stat-card" data-references='["Rogers, E.M. (2003) \\"Diffusion of innovations\\" 5th ed., Free Press, New York"]'>
                <div class="number">2.5%</div>
                <div class="label">Innovators<br><small>Risk-takers, Connected</small></div>
            </div>
            <div class="stat-card">
                <div class="number">13.5%</div>
                <div class="label">Early Adopters<br><small>Opinion Leaders</small></div>
            </div>
            <div class="stat-card">
                <div class="number">34%</div>
                <div class="label">Early Majority<br><small>Pragmatists</small></div>
            </div>
            <div class="stat-card">
                <div class="number">34%</div>
                <div class="label">Late Majority<br><small>Skeptical, Risk-averse</small></div>
            </div>
        </div>
        <div class="two-column">
            <div class="column">
                <h4>📚 Theoretical Foundation (Rogers, 2003):</h4>
                <ul style="text-align: left;">
                    <li><strong>Innovation Characteristics:</strong> Relative advantage, compatibility, complexity</li>
                    <li><strong>Communication Channels:</strong> Mass media vs interpersonal</li>
                    <li><strong>Social System:</strong> Norms, network interconnectedness</li>
                    <li><strong>Time Factor:</strong> Innovation-decision process duration</li>
                </ul>
            </div>
            <div class="column">
                <h4>🎯 Key Insights for Entrepreneurs:</h4>
                <ul style="text-align: left;">
                    <li><strong>Chasm Effect:</strong> 16% adoption marks mass market entry</li>
                    <li><strong>Tipping Point:</strong> 50% adoption indicates maturity</li>
                    <li><strong>Speed Factors:</strong> Network effects accelerate adoption</li>
                    <li><strong>Market Timing:</strong> Each phase requires different strategies</li>
                </ul>
            </div>
        </div>
        <div class="highlight">
            <h4>🔬 Academic Application:</h4>
            <p>Rogers' framework provides a scientifically validated method for analyzing technology adoption, 
            enabling data-driven decisions about market entry timing and positioning strategies.</p>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'rogers-curve-chart',
        options: {
            type: 'line',
            data: {
                labels: ['0%', '2.5%', '16%', '50%', '84%', '100%'],
                datasets: [{
                    label: 'Cumulative Adoption',
                    data: [0, 2.5, 16, 50, 84, 100],
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
                        text: "Rogers' Diffusion S-Curve with Adopter Categories",
                        color: '#ffffff'
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
                        title: { display: true, text: 'Adoption Timeline', color: '#ffffff' },
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        }
    }
};