// SLIDE 13: Follow the Money - The $131B Misdirection That Creates Our Opportunity (2 min)
export const slide13 = {
    title: "Follow the Money: The $131B Misdirection That Creates Our Opportunity",
    singleColumn: true,
    content: `
        <div style="min-height: calc(100vh - 140px); display: flex; flex-direction: column; justify-content: flex-start; padding: 40px; background: var(--siso-black); margin: 0; box-sizing: border-box; width: 100%; position: relative;">
            
            <!-- Money Trail Banner -->
            <div style="background: linear-gradient(135deg, #ffd700 0%, #ffb300 100%); padding: 18px; border-radius: 12px; text-align: center; margin-bottom: 30px; box-shadow: 0 6px 20px rgba(255,215,0,0.3); position: relative;">
                <div style="position: absolute; top: -2px; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #ffd700, #00ff88, #ffd700); animation: pulse 3s infinite;"></div>
                <span style="font-size: 1.3rem; font-weight: 800; color: black; text-transform: uppercase; letter-spacing: 1px;">💰 FOLLOW THE MONEY: $131B Investment Misdirection</span>
            </div>

            <!-- Header Section -->
            <div style="text-align: center; margin-bottom: 35px;">
                <h1 style="font-size: 3.4rem; font-weight: 900; margin-bottom: 20px; background: var(--siso-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1.1;">
                    Follow the Money
                </h1>
                <h2 style="font-size: 2.2rem; font-weight: 700; color: var(--siso-yellow); margin-bottom: 15px;">
                    The $131B Misdirection That Creates Our Opportunity
                </h2>
                <div style="height: 4px; width: 280px; background: var(--siso-gradient); margin: 20px auto; border-radius: 2px; box-shadow: 0 2px 10px rgba(255,107,53,0.4);"></div>
                <p style="font-size: 1.4rem; color: rgba(255,255,255,0.95); font-weight: 600;">
                    💡 VCs fund the wrong things = massive opportunity for the right ones
                </p>
            </div>

            <!-- Investment Flow Analysis Content -->
            <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="text-align: center; color: var(--siso-yellow); font-size: 1.8rem; margin-bottom: 25px;">💸 Where $131.5B Actually Goes (The Big Misdirection)</h3>
                <!-- Three funding categories with analysis -->
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin-bottom: 25px;" data-references='["Crunchbase (2024) \\"Global AI Investment Report\\" Q3 2024", "CB Insights (2024) \\"State of AI Funding\\" Annual Report"]'>
                    <div style="background: rgba(255,68,68,0.1); border: 2px solid #ff4444; padding: 25px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 3.5rem; margin-bottom: 15px;">🏗️</div>
                        <h4 style="color: #ff4444; font-size: 1.4rem; margin-bottom: 10px;">Infrastructure (Overfunded)</h4>
                        <div style="font-size: 2.8rem; font-weight: 900; color: #ff4444;">67%</div>
                        <div style="font-size: 1.6rem; font-weight: 700; color: #ff4444;">$88.1B</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8);">Cloud, GPUs, chips - building for tomorrow</p>
                    </div>
                    <div style="background: rgba(255,170,0,0.1); border: 2px solid #ffaa00; padding: 25px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 3.5rem; margin-bottom: 15px;">📱</div>
                        <h4 style="color: #ffaa00; font-size: 1.4rem; margin-bottom: 10px;">Applications (Saturated)</h4>
                        <div style="font-size: 2.8rem; font-weight: 900; color: #ffaa00;">23%</div>
                        <div style="font-size: 1.6rem; font-weight: 700; color: #ffaa00;">$30.2B</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8);">ChatGPT clones - intense competition</p>
                    </div>
                    <div style="background: rgba(0,255,136,0.1); border: 2px solid #00ff88; padding: 25px; border-radius: 12px; text-align: center; box-shadow: 0 10px 25px rgba(0,255,136,0.4);">
                        <div style="font-size: 3.5rem; margin-bottom: 15px;">🔧</div>
                        <h4 style="color: #00ff88; font-size: 1.4rem; margin-bottom: 10px;">Services (OPPORTUNITY)</h4>
                        <div style="font-size: 2.8rem; font-weight: 900; color: #00ff88;">10%</div>
                        <div style="font-size: 1.6rem; font-weight: 700; color: #00ff88;">$13.2B</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">156% growth, least funded!</p>
                    </div>
                </div>
            </div>

            <!-- Investment Chart -->
            <div class="chart-container" data-references='["Crunchbase (2024) Global AI Investment Report", "PwC (2024) AI Investment Analysis"]'>
                <canvas id="investment-flow-chart"></canvas>
            </div>
            <!-- Video Pause Point -->
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); border: 3px solid var(--siso-yellow); padding: 20px; border-radius: 15px; margin: 25px 0; position: relative;">
                <div style="position: absolute; top: -12px; left: 25px; background: var(--siso-yellow); color: var(--siso-black); padding: 6px 15px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">⏸️ PAUSE & REFLECT</div>
                <h4 style="color: var(--siso-yellow); font-size: 1.4rem; margin: 15px 0 15px 0; text-align: center;">Follow the Money in Your Industry</h4>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.9); text-align: center; line-height: 1.5; font-weight: 500;">
                    Look at where investment goes vs where profits actually come from. Often they're completely different.
                    <br><br><strong style="color: var(--siso-yellow);">Question:</strong> In your field, what's overfunded and what's underfunded but profitable?
                </p>
            </div>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'investment-flow-chart',
        options: {
            type: 'doughnut',
            data: {
                labels: ['Infrastructure (Overfunded)', 'Applications (Saturated)', 'Services (OPPORTUNITY)'],
                datasets: [
                    {
                        label: 'Investment Distribution',
                        data: [67, 23, 10],
                        backgroundColor: ['#ff4444', '#ffaa00', '#00ff88'],
                        borderColor: '#ffffff',
                        borderWidth: 3,
                        hoverBackgroundColor: ['#ff6666', '#ffcc44', '#44ffaa']
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'The Great Funding Misdirection: $131.5B Investment Reality',
                        color: '#ffffff',
                        font: { size: 16 }
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#ffffff',
                            boxWidth: 15
                        }
                    }
                },
                cutout: '40%'
            }
        }
    }
};