// SLIDE 4: Current State of AI Adoption (1 min)
export const slide04 = {
    title: "Current State of AI Adoption",
    singleColumn: true,
    content: `
        <div style="min-height: calc(100vh - 200px); display: flex; flex-direction: column; justify-content: flex-start; padding: 60px 40px; background: var(--siso-black); margin: 0; box-sizing: border-box; width: 100%;">
            
            <!-- Header Section -->
            <div style="text-align: center; margin-bottom: 40px;">
                <h1 style="font-size: 3rem; font-weight: 800; margin-bottom: 15px; background: var(--siso-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                    Current State of AI Adoption
                </h1>
                <p style="font-size: 1.3rem; color: rgba(255,255,255,0.8); margin-bottom: 20px;">
                    Market Reality: Significant Variation Creates Entrepreneurial Opportunities
                </p>
                <div style="height: 3px; width: 150px; background: var(--siso-gradient); margin: 0 auto; border-radius: 2px;"></div>
            </div>
        <div class="chart-container">
            <canvas id="adoption-by-size-chart"></canvas>
        </div>
        <div class="stats-grid">
            <div class="stat-card" data-references='["McKinsey Global Institute (2024) \\"Enterprise AI Adoption Report\\""]'>
                <div class="number">78%</div>
                <div class="label">Enterprise Adoption<br><small>Large Organizations</small></div>
            </div>
            <div class="stat-card" data-references='["PwC (2024) \\"SME Digital Transformation Study\\""]'>
                <div class="number">45%</div>
                <div class="label">SME Adoption<br><small>Small-Medium Enterprises</small></div>
            </div>
            <div class="stat-card" data-references='["Startup Genome (2024) \\"Global Startup Ecosystem Report\\""]'>
                <div class="number">92%</div>
                <div class="label">Startup Adoption<br><small>Early-Stage Companies</small></div>
            </div>
            <div class="stat-card">
                <div class="number">33%</div>
                <div class="label">Gap Between High/Low<br><small>Market Opportunity</small></div>
            </div>
        </div>
        <div class="two-column">
            <div class="column">
                <h4>🏢 By Industry Sector:</h4>
                <ul style="text-align: left;">
                    <li><strong>Technology:</strong> 95% adoption</li>
                    <li><strong>Finance:</strong> 82% adoption</li>
                    <li><strong>Healthcare:</strong> 67% adoption</li>
                    <li><strong>Manufacturing:</strong> 54% adoption</li>
                    <li><strong>Retail:</strong> 49% adoption</li>
                </ul>
            </div>
            <div class="column">
                <h4>🎯 Strategic Implications:</h4>
                <ul style="text-align: left;">
                    <li><strong>SME Gap:</strong> 33% below enterprise adoption</li>
                    <li><strong>Sector Variation:</strong> 41% spread between high/low</li>
                    <li><strong>Integration Opportunity:</strong> Mid-market underserved</li>
                    <li><strong>Timing Advantage:</strong> Early majority phase optimal</li>
                </ul>
            </div>
        
        </div>
        
        <!-- Why This Proves Our Point -->
        <div style="background: rgba(255,107,53,0.1); border: 2px solid var(--siso-orange); padding: 25px; border-radius: 12px; margin-top: 30px;">
            <h3 style="font-size: 1.4rem; color: var(--siso-orange); margin-bottom: 15px;">🔍 Evidence Supporting Our Thesis</h3>
            <p style="font-size: 1.1rem; line-height: 1.5; color: rgba(255,255,255,0.95);">
                <strong>Argument Point 2:</strong> The 33% adoption gap between enterprises and SMEs proves market fragmentation. This isn't failure - it's opportunity. While big tech focuses on enterprise clients, 45% of SMEs need integration support but lack resources for enterprise solutions. This mid-market gap is where team ventures can establish defensible positions.
            </p>
        </div>
        
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'adoption-by-size-chart',
        options: {
            type: 'bar',
            data: {
                labels: ['Startups', 'Enterprise', 'SME', 'Tech Sector', 'Finance', 'Healthcare', 'Manufacturing'],
                datasets: [{
                    label: 'AI Adoption Rate (%)',
                    data: [92, 78, 45, 95, 82, 67, 54],
                    backgroundColor: ['#ff6b35', '#ff8659', '#ffd23f', '#ff6b35', '#ff8659', '#ffd23f', '#ff6b35'],
                    borderColor: '#ffffff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'AI Adoption Rates by Company Size & Industry',
                        color: '#ffffff'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: { display: true, text: 'Adoption Rate (%)', color: '#ffffff' },
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