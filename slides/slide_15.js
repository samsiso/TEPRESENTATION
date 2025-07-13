// SLIDE 15: The Service Stack - Where $50B Gets Made (2 min)
export const slide15 = {
    title: "The Service Stack: Where $50B Gets Made",
    singleColumn: true,
    content: `
        <div style="min-height: calc(100vh - 140px); display: flex; flex-direction: column; justify-content: flex-start; padding: 40px; background: var(--siso-black); margin: 0; box-sizing: border-box; width: 100%; position: relative;">
            
            <!-- Service Stack Banner -->
            <div style="background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%); padding: 18px; border-radius: 12px; text-align: center; margin-bottom: 30px; box-shadow: 0 6px 20px rgba(147,51,234,0.3); position: relative;">
                <div style="position: absolute; top: -2px; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #9333ea, #ffd23f, #9333ea); animation: pulse 3s infinite;"></div>
                <span style="font-size: 1.3rem; font-weight: 800; color: white; text-transform: uppercase; letter-spacing: 1px;">🔧 THE SERVICE STACK: $50B Addressable Market Breakdown</span>
            </div>

            <!-- Header Section -->
            <div style="text-align: center; margin-bottom: 35px;">
                <h1 style="font-size: 3.4rem; font-weight: 900; margin-bottom: 20px; background: var(--siso-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1.1;">
                    The Service Stack
                </h1>
                <h2 style="font-size: 2.2rem; font-weight: 700; color: var(--siso-yellow); margin-bottom: 15px;">
                    Where $50B Gets Made (And How We Capture It)
                </h2>
                <div style="height: 4px; width: 280px; background: var(--siso-gradient); margin: 20px auto; border-radius: 2px; box-shadow: 0 2px 10px rgba(255,107,53,0.4);"></div>
                <p style="font-size: 1.4rem; color: rgba(255,255,255,0.95); font-weight: 600;">
                    🎯 Four layers, four revenue streams, one integrated business
                </p>
            </div>
            <!-- Service Stack Analysis -->
            <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="text-align: center; color: var(--siso-yellow); font-size: 1.8rem; margin-bottom: 25px;">🏗️ The Four-Layer Service Stack ($50B Breakdown)</h3>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 25px;" data-references='["Grand View Research (2024) \\"AI Professional Services Market Analysis\\" Industry Report", "IDC (2024) \\"Worldwide AI Services Market Forecast\\""]'>
                    
                    <!-- Layer 1: Implementation -->
                    <div style="background: rgba(255,107,53,0.1); border: 2px solid var(--siso-orange); padding: 25px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--siso-orange); color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">🔧 LAYER 1</div>
                        <div style="font-size: 3rem; margin-bottom: 15px;">⚙️</div>
                        <h4 style="color: var(--siso-orange); font-size: 1.3rem; margin-bottom: 10px; font-weight: 700;">Implementation</h4>
                        <div style="font-size: 2.5rem; font-weight: 900; color: var(--siso-orange); margin-bottom: 8px;">$20B</div>
                        <div style="font-size: 1.2rem; font-weight: 700; color: var(--siso-orange); margin-bottom: 10px;">40%</div>
                        <p style="font-size: 0.85rem; color: rgba(255,255,255,0.9); margin-bottom: 10px;">System integration & deployment</p>
                        <div style="background: rgba(255,107,53,0.2); padding: 8px; border-radius: 6px;">
                            <strong style="color: var(--siso-orange); font-size: 0.8rem;">42% CAGR</strong>
                        </div>
                    </div>

                    <!-- Layer 2: Training -->
                    <div style="background: rgba(255,210,63,0.1); border: 2px solid var(--siso-yellow); padding: 25px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--siso-yellow); color: var(--siso-black); padding: 6px 12px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">🎓 LAYER 2</div>
                        <div style="font-size: 3rem; margin-bottom: 15px;">🧠</div>
                        <h4 style="color: var(--siso-yellow); font-size: 1.3rem; margin-bottom: 10px; font-weight: 700;">Training</h4>
                        <div style="font-size: 2.5rem; font-weight: 900; color: var(--siso-yellow); margin-bottom: 8px;">$15B</div>
                        <div style="font-size: 1.2rem; font-weight: 700; color: var(--siso-yellow); margin-bottom: 10px;">30%</div>
                        <p style="font-size: 0.85rem; color: rgba(255,255,255,0.9); margin-bottom: 10px;">Custom model development</p>
                        <div style="background: rgba(255,210,63,0.2); padding: 8px; border-radius: 6px;">
                            <strong style="color: var(--siso-yellow); font-size: 0.8rem;">67% CAGR</strong>
                        </div>
                    </div>

                    <!-- Layer 3: Support -->
                    <div style="background: rgba(0,255,136,0.1); border: 2px solid #00ff88; padding: 25px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #00ff88; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">🛠️ LAYER 3</div>
                        <div style="font-size: 3rem; margin-bottom: 15px;">📞</div>
                        <h4 style="color: #00ff88; font-size: 1.3rem; margin-bottom: 10px; font-weight: 700;">Support</h4>
                        <div style="font-size: 2.5rem; font-weight: 900; color: #00ff88; margin-bottom: 8px;">$10B</div>
                        <div style="font-size: 1.2rem; font-weight: 700; color: #00ff88; margin-bottom: 10px;">20%</div>
                        <p style="font-size: 0.85rem; color: rgba(255,255,255,0.9); margin-bottom: 10px;">Ongoing maintenance & optimization</p>
                        <div style="background: rgba(0,255,136,0.2); padding: 8px; border-radius: 6px;">
                            <strong style="color: #00ff88; font-size: 0.8rem;">34% CAGR</strong>
                        </div>
                    </div>

                    <!-- Layer 4: Compliance -->
                    <div style="background: rgba(147,51,234,0.1); border: 2px solid #9333ea; padding: 25px; border-radius: 12px; text-align: center; position: relative; box-shadow: 0 10px 25px rgba(147,51,234,0.4);">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #9333ea; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">⚖️ LAYER 4</div>
                        <div style="font-size: 3rem; margin-bottom: 15px;">🛡️</div>
                        <h4 style="color: #9333ea; font-size: 1.3rem; margin-bottom: 10px; font-weight: 700;">Compliance</h4>
                        <div style="font-size: 2.5rem; font-weight: 900; color: #9333ea; margin-bottom: 8px;">$5B</div>
                        <div style="font-size: 1.2rem; font-weight: 700; color: #9333ea; margin-bottom: 10px;">10%</div>
                        <p style="font-size: 0.85rem; color: rgba(255,255,255,0.9); margin-bottom: 10px;">Regulatory frameworks & auditing</p>
                        <div style="background: rgba(147,51,234,0.2); padding: 8px; border-radius: 6px;">
                            <strong style="color: #9333ea; font-size: 0.8rem;">89% CAGR!</strong>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Service Breakdown Chart -->
            <div class="chart-container" data-references='["Grand View Research (2024) AI Professional Services", "Forrester (2024) AI Services Market Analysis"]'>
                <canvas id="services-breakdown-chart"></canvas>
            </div>
            <!-- Video Pause Point -->
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); border: 3px solid var(--siso-yellow); padding: 20px; border-radius: 15px; margin: 25px 0; position: relative;">
                <div style="position: absolute; top: -12px; left: 25px; background: var(--siso-yellow); color: var(--siso-black); padding: 6px 15px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">⏸️ PAUSE & REFLECT</div>
                <h4 style="color: var(--siso-yellow); font-size: 1.4rem; margin: 15px 0 15px 0; text-align: center;">Think About Service Stack Strategy</h4>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.9); text-align: center; line-height: 1.5; font-weight: 500;">
                    Notice how compliance (smallest today) has highest growth at 89%. Start where demand is now, build where growth is going.
                    <br><br><strong style="color: var(--siso-yellow);">Question:</strong> Which layer should your team start with and why?
                </p>
            </div>
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