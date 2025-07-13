// SLIDE 8: The Reality Check - Why Timing Beats Technology Every Time (2 min)
export const slide08 = {
    title: "The Reality Check: Why Timing Beats Technology Every Time",
    singleColumn: true,
    content: `
        <div style="min-height: calc(100vh - 140px); display: flex; flex-direction: column; justify-content: flex-start; padding: 40px; background: var(--siso-black); margin: 0; box-sizing: border-box; width: 100%; position: relative;">
            
            <!-- Reality Check Banner -->
            <div style="background: linear-gradient(135deg, #ff8659 0%, #ffaa00 100%); padding: 18px; border-radius: 12px; text-align: center; margin-bottom: 30px; box-shadow: 0 6px 20px rgba(255,134,89,0.3); position: relative;">
                <div style="position: absolute; top: -2px; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #ff8659, #ffd23f, #ff8659); animation: pulse 3s infinite;"></div>
                <span style="font-size: 1.3rem; font-weight: 800; color: white; text-transform: uppercase; letter-spacing: 1px;">📉 REALITY CHECK: Gartner's Hype Cycle Reveals the Truth</span>
            </div>

            <!-- Header Section -->
            <div style="text-align: center; margin-bottom: 35px;">
                <h1 style="font-size: 3.4rem; font-weight: 900; margin-bottom: 20px; background: var(--siso-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1.1;">
                    The Reality Check
                </h1>
                <h2 style="font-size: 2.2rem; font-weight: 700; color: var(--siso-yellow); margin-bottom: 15px;">
                    Why Timing Beats Technology Every Time
                </h2>
                <div style="height: 4px; width: 280px; background: var(--siso-gradient); margin: 20px auto; border-radius: 2px; box-shadow: 0 2px 10px rgba(255,107,53,0.4);"></div>
                <p style="font-size: 1.4rem; color: rgba(255,255,255,0.95); font-weight: 600;">
                    🎯 While others chase hype, we profit from reality
                </p>
            </div>

            <!-- Hype Cycle Journey -->
            <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="text-align: center; color: var(--siso-yellow); font-size: 1.8rem; margin-bottom: 25px;">🎢 The $2 Trillion Hype Cycle Journey</h3>
                <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 15px; margin-bottom: 25px;" data-references='["Gartner Inc. (2024) \"Hype Cycle for Artificial Intelligence\" Research Report", "Linden, A. & Fenn, J. (2003) \"Understanding Gartner\\'s Hype Cycles\" Strategic Analysis Report"]'>
                    
                    <!-- Phase 1: Technology Trigger -->
                    <div style="text-align: center;">
                        <div style="background: linear-gradient(135deg, #666666 0%, #888888 100%); width: 80px; height: 80px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto 10px;">
                            <span style="font-size: 1.8rem; color: white;">🔬</span>
                        </div>
                        <h4 style="color: rgba(255,255,255,0.7); font-size: 1rem; margin-bottom: 5px;">Technology Trigger</h4>
                        <div style="font-size: 1.2rem; font-weight: 700; color: rgba(255,255,255,0.7); margin-bottom: 3px;">2020-2021</div>
                        <p style="font-size: 0.8rem; color: rgba(255,255,255,0.6);">GPT breakthroughs</p>
                    </div>

                    <!-- Phase 2: Peak of Inflated Expectations -->
                    <div style="text-align: center;">
                        <div style="background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%); width: 120px; height: 120px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto 10px; box-shadow: 0 15px 30px rgba(255,68,68,0.5); border: 3px solid #ff6666; animation: pulse 2s infinite;">
                            <span style="font-size: 2rem; color: white;">📈</span>
                        </div>
                        <h4 style="color: #ff4444; font-size: 1.2rem; margin-bottom: 5px; font-weight: 700;">Peak Hype</h4>
                        <div style="font-size: 1.8rem; font-weight: 900; color: #ff4444; margin-bottom: 3px;">2022-2023</div>
                        <p style="font-size: 0.85rem; color: rgba(255,255,255,0.8); font-weight: 600;">🚨 GenAI mania = $2T market cap bubble</p>
                    </div>

                    <!-- Phase 3: Trough of Disillusionment -->
                    <div style="text-align: center;">
                        <div style="background: linear-gradient(135deg, #444444 0%, #666666 100%); width: 70px; height: 70px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto 10px; border: 2px dashed rgba(255,255,255,0.3);">
                            <span style="font-size: 1.6rem; color: rgba(255,255,255,0.7);">📉</span>
                        </div>
                        <h4 style="color: rgba(255,255,255,0.6); font-size: 1rem; margin-bottom: 5px;">Trough</h4>
                        <div style="font-size: 1.4rem; font-weight: 700; color: rgba(255,255,255,0.6); margin-bottom: 3px;">Late 2023</div>
                        <p style="font-size: 0.8rem; color: rgba(255,255,255,0.5);">Enterprise failures exposed</p>
                    </div>

                    <!-- Phase 4: Slope of Enlightenment -->
                    <div style="text-align: center;">
                        <div style="background: linear-gradient(135deg, #ffaa00 0%, #ffd23f 100%); width: 90px; height: 90px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto 10px; box-shadow: 0 8px 20px rgba(255,170,0,0.4);">
                            <span style="font-size: 1.8rem; color: white;">⛰️</span>
                        </div>
                        <h4 style="color: #ffaa00; font-size: 1rem; margin-bottom: 5px; font-weight: 600;">Learning</h4>
                        <div style="font-size: 1.5rem; font-weight: 700; color: #ffaa00; margin-bottom: 3px;">2024</div>
                        <p style="font-size: 0.8rem; color: rgba(255,255,255,0.7);">Real solutions emerge</p>
                    </div>

                    <!-- Phase 5: Plateau of Productivity -->
                    <div style="text-align: center;">
                        <div style="background: var(--siso-gradient); width: 100px; height: 100px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; margin: 0 auto 10px; box-shadow: 0 10px 25px rgba(255,107,53,0.5); border: 3px solid var(--siso-yellow);">
                            <span style="font-size: 1.9rem; color: white;">🏆</span>
                        </div>
                        <h4 style="color: var(--siso-orange); font-size: 1.1rem; margin-bottom: 5px; font-weight: 700;">Productive Plateau</h4>
                        <div style="font-size: 1.6rem; font-weight: 900; color: var(--siso-orange); margin-bottom: 3px;">2025+</div>
                        <p style="font-size: 0.85rem; color: rgba(255,255,255,0.9); font-weight: 600;">💰 Integration services mainstream</p>
                    </div>
                </div>
                
                <div style="background: rgba(255,134,89,0.2); border-left: 4px solid #ff8659; padding: 15px; border-radius: 8px;">
                    <p style="font-size: 1.2rem; color: rgba(255,255,255,0.95); text-align: center; font-weight: 600;">
                        <strong style="color: #ff8659;">Gartner's Truth:</strong> The money isn't in the hype peak - it's in the productive plateau. We're entering the goldmine.
                    </p>
                </div>
            </div>

            <!-- Hype Cycle Chart -->
            <div class="chart-container" data-references='["Gartner Inc. (2024) \"Hype Cycle for Artificial Intelligence\"", "Fenn, J. & Raskino, M. (2008) \"Mastering the Hype Cycle\" Harvard Business Review Press"]'>
                <canvas id="hype-cycle-chart"></canvas>
            </div>

            <!-- The Reality Check: Why This Matters -->
            <div style="background: rgba(255,107,53,0.1); border: 2px solid var(--siso-orange); padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="font-size: 1.7rem; margin-bottom: 25px; color: var(--siso-orange); text-align: center;">🧠 The Psychology of Technology Adoption: Why Hype Kills Profits</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 25px;">
                    
                    <!-- Hype Phase: Where Money Dies -->
                    <div style="background: rgba(255,68,68,0.1); border: 2px solid #ff4444; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #ff4444; font-size: 1.3rem; margin-bottom: 15px; text-align: center;">💀 Hype Phase: Where $2T Died</h4>
                        <ul style="color: rgba(255,255,255,0.8); font-size: 0.95rem; line-height: 1.6; list-style: none; padding: 0;">
                            <li>• Everyone promises everything to everyone</li>
                            <li>• Venture capital floods the market</li>
                            <li>• Technology doesn't match expectations</li>
                            <li>• Competition fierce, margins disappear</li>
                            <li>• Customer disillusionment sets in</li>
                        </ul>
                        <div style="text-align: center; margin-top: 15px; padding: 10px; background: rgba(255,68,68,0.2); border-radius: 8px;">
                            <strong style="color: #ff4444;">Result: Market oversaturation, commoditization</strong>
                        </div>
                    </div>

                    <!-- Plateau Phase: Where Money Lives -->
                    <div style="background: rgba(0,255,136,0.1); border: 2px solid #00ff88; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #00ff88; font-size: 1.3rem; margin-bottom: 15px; text-align: center;">💰 Plateau Phase: Where $500B Lives</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.95rem; line-height: 1.6; list-style: none; padding: 0; font-weight: 500;">
                            <li>• Proven value propositions only</li>
                            <li>• Realistic customer expectations</li>
                            <li>• Technology actually works as promised</li>
                            <li>• Clear ROI measurement possible</li>
                            <li>• Sustainable business models emerge</li>
                        </ul>
                        <div style="text-align: center; margin-top: 15px; padding: 10px; background: rgba(0,255,136,0.2); border-radius: 8px;">
                            <strong style="color: #00ff88;">Result: Profitable, scalable market segments</strong>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(255,210,63,0.2); border-left: 4px solid var(--siso-yellow); padding: 20px; border-radius: 10px;">
                    <h4 style="color: var(--siso-yellow); font-size: 1.3rem; margin-bottom: 15px; text-align: center;">🎯 Why We Win: Counter-Cyclical Timing</h4>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; text-align: center;">
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">📉</div>
                            <h5 style="color: var(--siso-yellow); font-size: 0.9rem; margin-bottom: 5px;">Hype Declined</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">Less competition, realistic pricing</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">🧪</div>
                            <h5 style="color: var(--siso-yellow); font-size: 0.9rem; margin-bottom: 5px;">Tech Proven</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">Integration challenges solved</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">💼</div>
                            <h5 style="color: var(--siso-yellow); font-size: 0.9rem; margin-bottom: 5px;">Demand Real</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">Enterprises need actual results</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Video Pause Point -->
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); border: 3px solid var(--siso-yellow); padding: 20px; border-radius: 15px; margin: 25px 0; position: relative;">
                <div style="position: absolute; top: -12px; left: 25px; background: var(--siso-yellow); color: var(--siso-black); padding: 6px 15px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">⏸️ PAUSE & REFLECT</div>
                <h4 style="color: var(--siso-yellow); font-size: 1.4rem; margin: 15px 0 15px 0; text-align: center;">Think About Your Own Experience</h4>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.9); text-align: center; line-height: 1.5; font-weight: 500;">
                    Remember 2022-2023? Everyone was "implementing AI" and most projects failed. Now in 2024, the smart money is in proven integration services. 
                    <br><br><strong style="color: var(--siso-yellow);">Question:</strong> Which technologies in your industry followed this same pattern?
                </p>
            </div>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'hype-cycle-chart',
        options: {
            type: 'bubble',
            data: {
                datasets: [
                    {
                        label: 'Gartner Hype Cycle Curve',
                        data: [
                            {x: 0.5, y: 10}, {x: 1, y: 30}, {x: 1.5, y: 60}, 
                            {x: 2, y: 95}, {x: 2.5, y: 80}, {x: 3, y: 25}, 
                            {x: 3.5, y: 40}, {x: 4, y: 65}, {x: 4.5, y: 80}
                        ],
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: '#ffffff',
                        borderWidth: 3,
                        pointRadius: 0,
                        showLine: true,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'GenAI (Peak Hype)',
                        data: [{x: 2, y: 95, r: 15}],
                        backgroundColor: '#ff4444',
                        borderColor: '#ffffff',
                        borderWidth: 3
                    },
                    {
                        label: 'Enterprise AI (Trough)',
                        data: [{x: 3, y: 25, r: 12}],
                        backgroundColor: '#666666',
                        borderColor: '#ffffff',
                        borderWidth: 2
                    },
                    {
                        label: 'MLOps (Learning)',
                        data: [{x: 3.5, y: 40, r: 10}],
                        backgroundColor: '#ffaa00',
                        borderColor: '#ffffff',
                        borderWidth: 2
                    },
                    {
                        label: 'AI Integration (Plateau)',
                        data: [{x: 4.2, y: 75, r: 18}],
                        backgroundColor: '#ff6b35',
                        borderColor: '#ffd23f',
                        borderWidth: 4
                    },
                    {
                        label: 'Opportunity Zone',
                        data: [
                            {x: 4, y: 60}, {x: 4.5, y: 85}
                        ],
                        backgroundColor: 'rgba(0, 255, 136, 0.2)',
                        borderColor: '#00ff88',
                        borderWidth: 4,
                        borderDash: [10, 5],
                        showLine: true,
                        fill: false,
                        pointRadius: 0
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'The Reality Check: AI Technologies on Gartner\'s Hype Cycle (2024)',
                        color: '#ffffff',
                        font: { size: 16 }
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
                        max: 100,
                        title: { display: true, text: 'Market Expectations / Hype Level', color: '#ffffff' },
                        ticks: { 
                            color: '#ffffff',
                            callback: function(value) {
                                if (value === 0) return 'Low';
                                if (value === 25) return 'Trough';
                                if (value === 50) return 'Medium';
                                if (value === 75) return 'High';
                                if (value === 100) return 'Peak Hype';
                                return '';
                            }
                        },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    x: {
                        min: 0,
                        max: 5,
                        title: { display: true, text: 'Technology Maturity Timeline', color: '#ffffff' },
                        ticks: { 
                            color: '#ffffff',
                            callback: function(value) {
                                if (value === 0.5) return 'Trigger';
                                if (value === 2) return 'Peak';
                                if (value === 3) return 'Trough';
                                if (value === 3.5) return 'Slope';
                                if (value === 4.5) return 'Plateau';
                                return '';
                            }
                        },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        }
    }
};