// SLIDE 21: The Implementation Crisis - When AI Projects Collapse (2 min)
export const slide21 = {
    title: "The Implementation Crisis: When AI Projects Collapse",
    singleColumn: true,
    content: `
        <div style="min-height: calc(100vh - 140px); display: flex; flex-direction: column; justify-content: flex-start; padding: 40px; background: var(--siso-black); margin: 0; box-sizing: border-box; width: 100%; position: relative;">
            
            <!-- Implementation Crisis Banner -->
            <div style="background: linear-gradient(135deg, #ff4444 0%, #cc0000 100%); padding: 18px; border-radius: 12px; text-align: center; margin-bottom: 30px; box-shadow: 0 6px 20px rgba(255,68,68,0.3); position: relative;">
                <div style="position: absolute; top: -2px; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #ff4444, #ffd23f, #ff4444); animation: pulse 3s infinite;"></div>
                <span style="font-size: 1.3rem; font-weight: 800; color: white; text-transform: uppercase; letter-spacing: 1px;">💥 THE IMPLEMENTATION CRISIS: 60% Failure Rate = $138B Market Pain</span>
            </div>

            <!-- Header Section -->
            <div style="text-align: center; margin-bottom: 35px;">
                <h1 style="font-size: 3.4rem; font-weight: 900; margin-bottom: 20px; background: var(--siso-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1.1;">
                    The Implementation Crisis
                </h1>
                <h2 style="font-size: 2.2rem; font-weight: 700; color: var(--siso-orange); margin-bottom: 15px;">
                    When AI Projects Collapse: The $138B Annual Failure Economy
                </h2>
                <div style="height: 4px; width: 320px; background: var(--siso-gradient); margin: 20px auto; border-radius: 2px; box-shadow: 0 2px 10px rgba(255,107,53,0.4);"></div>
                <p style="font-size: 1.4rem; color: rgba(255,255,255,0.95); font-weight: 600;">
                    🎯 Every failure is a $2.3M lesson in what not to do
                </p>
            </div>

            <!-- Crisis Metrics Dashboard -->
            <div style="background: rgba(255,68,68,0.1); border: 2px solid #ff4444; padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="text-align: center; color: #ff4444; font-size: 1.8rem; margin-bottom: 25px;">💥 The Crisis by Numbers</h3>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 25px;" data-references='["Gartner Inc. (2024) \\"AI Implementation Success Factors\\" Research Report", "Deloitte (2024) \\"State of AI in Enterprise\\" Global Survey"]'>
                    
                    <!-- Failure Rate -->
                    <div style="background: rgba(255,68,68,0.15); border: 2px solid #ff4444; padding: 20px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #ff4444; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🚨 FAILURE</div>
                        <div style="font-size: 3rem; font-weight: 900; color: #ff4444; margin-bottom: 10px;">60%</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">Projects Fail</p>
                        <p style="font-size: 0.7rem; color: rgba(255,255,255,0.7);">Never reach production</p>
                    </div>

                    <!-- Average Loss -->
                    <div style="background: rgba(255,68,68,0.15); border: 2px solid #ff4444; padding: 20px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #ff4444; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">💸 COST</div>
                        <div style="font-size: 3rem; font-weight: 900; color: #ff4444; margin-bottom: 10px;">$2.3M</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">Avg Loss</p>
                        <p style="font-size: 0.7rem; color: rgba(255,255,255,0.7);">Per failed project</p>
                    </div>

                    <!-- Timeline -->
                    <div style="background: rgba(255,68,68,0.15); border: 2px solid #ff4444; padding: 20px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #ff4444; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">⏱️ TIME</div>
                        <div style="font-size: 3rem; font-weight: 900; color: #ff4444; margin-bottom: 10px;">18mo</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">Duration</p>
                        <p style="font-size: 0.7rem; color: rgba(255,255,255,0.7);">To failure point</p>
                    </div>

                    <!-- Skills Gap -->
                    <div style="background: rgba(255,68,68,0.15); border: 2px solid #ff4444; padding: 20px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #ff4444; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🧠 SKILLS</div>
                        <div style="font-size: 3rem; font-weight: 900; color: #ff4444; margin-bottom: 10px;">73%</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">Skills Gap</p>
                        <p style="font-size: 0.7rem; color: rgba(255,255,255,0.7);">Report shortages</p>
                    </div>
                </div>
            </div>

            <!-- Failure Waterfall Chart -->
            <div class="chart-container" data-references='["McKinsey Global Institute (2024) \\"AI Project Failure Analysis\\"", "Stanford HAI (2024) \\"AI Implementation Study\\""]'>
                <canvas id="failure-waterfall-chart"></canvas>
            </div>

            <!-- Failure Analysis Deep Dive -->
            <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="font-size: 1.7rem; margin-bottom: 25px; color: var(--siso-orange); text-align: center;">🔬 Root Cause Analysis: Why AI Projects Fail</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                    
                    <!-- Primary Failure Causes -->
                    <div style="background: rgba(255,68,68,0.1); border: 2px solid #ff4444; padding: 25px; border-radius: 12px;">
                        <h4 style="color: #ff4444; font-size: 1.3rem; margin-bottom: 20px; text-align: center;">🚫 Primary Failure Causes</h4>
                        <div style="space-y: 15px;">
                            <div style="background: rgba(255,68,68,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: #ff4444; font-size: 1.1rem;">Lack of Expertise</strong>
                                    <span style="background: #ff4444; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">35%</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Insufficient AI/ML knowledge and experience</p>
                            </div>
                            
                            <div style="background: rgba(255,68,68,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: #ff4444; font-size: 1.1rem;">Poor Data Quality</strong>
                                    <span style="background: #ff4444; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">28%</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Inadequate data preparation and governance</p>
                            </div>
                            
                            <div style="background: rgba(255,68,68,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: #ff4444; font-size: 1.1rem;">Compliance Issues</strong>
                                    <span style="background: #ff4444; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">18%</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Regulatory non-compliance blocks deployment</p>
                            </div>
                            
                            <div style="background: rgba(255,68,68,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: #ff4444; font-size: 1.1rem;">Integration Problems</strong>
                                    <span style="background: #ff4444; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">12%</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">System compatibility and legacy issues</p>
                            </div>
                            
                            <div style="background: rgba(255,68,68,0.15); padding: 15px; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: #ff4444; font-size: 1.1rem;">Budget Overruns</strong>
                                    <span style="background: #ff4444; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">7%</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Severely underestimated implementation costs</p>
                            </div>
                        </div>
                    </div>

                    <!-- Economic Impact Analysis -->
                    <div style="background: rgba(255,107,53,0.1); border: 2px solid var(--siso-orange); padding: 25px; border-radius: 12px;">
                        <h4 style="color: var(--siso-orange); font-size: 1.3rem; margin-bottom: 20px; text-align: center;">💰 Economic Impact Cascade</h4>
                        <div style="space-y: 15px;">
                            <div style="background: rgba(255,107,53,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: var(--siso-orange); font-size: 1.1rem;">Direct Investment Loss</strong>
                                    <span style="background: var(--siso-orange); color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">$2.3M</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Average project investment written off</p>
                            </div>
                            
                            <div style="background: rgba(255,107,53,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: var(--siso-orange); font-size: 1.1rem;">Opportunity Cost</strong>
                                    <span style="background: var(--siso-orange); color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">18mo</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Competitive disadvantage period</p>
                            </div>
                            
                            <div style="background: rgba(255,107,53,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: var(--siso-orange); font-size: 1.1rem;">Revenue Impact</strong>
                                    <span style="background: var(--siso-orange); color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">-40%</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Below growth targets during recovery</p>
                            </div>
                            
                            <div style="background: rgba(255,107,53,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: var(--siso-orange); font-size: 1.1rem;">Market Share Loss</strong>
                                    <span style="background: var(--siso-orange); color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">Perm</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Competitors gain permanent advantage</p>
                            </div>
                            
                            <div style="background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); padding: 15px; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: white; font-size: 1.2rem;">Total Annual Market Pain</strong>
                                    <span style="background: rgba(255,255,255,0.3); color: white; padding: 6px 12px; border-radius: 12px; font-size: 0.9rem; font-weight: 700;">$138B</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.95); font-size: 0.9rem; margin: 0; font-weight: 600;">Global AI implementation failure economy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Market Opportunity Framework -->
            <div style="background: rgba(0,255,136,0.1); border: 2px solid #00ff88; padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="font-size: 1.7rem; margin-bottom: 25px; color: #00ff88; text-align: center;">⚡ The Crisis Creates Our Market Opportunity</h3>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 25px;">
                    
                    <!-- Address Root Causes -->
                    <div style="background: rgba(0,255,136,0.15); border: 2px solid #00ff88; padding: 20px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2.5rem; color: #00ff88; margin-bottom: 10px;">🎯</div>
                        <h4 style="color: #00ff88; font-size: 1.1rem; margin-bottom: 15px; font-weight: 700;">ADDRESS ROOT CAUSES</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0; text-align: left;">
                            <li>• Expert AI implementation team</li>
                            <li>• Data quality frameworks</li>
                            <li>• Compliance-first approach</li>
                            <li>• Integration expertise</li>
                        </ul>
                        <div style="background: rgba(0,255,136,0.2); padding: 8px; border-radius: 6px; margin-top: 10px;">
                            <strong style="color: #00ff88; font-size: 0.8rem;">Prevent 35% of failures</strong>
                        </div>
                    </div>

                    <!-- Premium Positioning -->
                    <div style="background: rgba(0,255,136,0.15); border: 2px solid #00ff88; padding: 20px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2.5rem; color: #00ff88; margin-bottom: 10px;">💎</div>
                        <h4 style="color: #00ff88; font-size: 1.1rem; margin-bottom: 15px; font-weight: 700;">PREMIUM POSITIONING</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0; text-align: left;">
                            <li>• "Failure insurance" value prop</li>
                            <li>• Outcome-based guarantees</li>
                            <li>• Risk mitigation expertise</li>
                            <li>• Success track record</li>
                        </ul>
                        <div style="background: rgba(0,255,136,0.2); padding: 8px; border-radius: 6px; margin-top: 10px;">
                            <strong style="color: #00ff88; font-size: 0.8rem;">3x premium justified</strong>
                        </div>
                    </div>

                    <!-- Market Size -->
                    <div style="background: rgba(0,255,136,0.15); border: 2px solid #00ff88; padding: 20px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2.5rem; color: #00ff88; margin-bottom: 10px;">📈</div>
                        <h4 style="color: #00ff88; font-size: 1.1rem; margin-bottom: 15px; font-weight: 700;">MASSIVE MARKET</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0; text-align: left;">
                            <li>• $138B annual failure economy</li>
                            <li>• Growing 45% annually</li>
                            <li>• Desperate for solutions</li>
                            <li>• Premium pricing accepted</li>
                        </ul>
                        <div style="background: rgba(0,255,136,0.2); padding: 8px; border-radius: 6px; margin-top: 10px;">
                            <strong style="color: #00ff88; font-size: 0.8rem;">Capture 1% = $1.38B</strong>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(30,144,255,0.2); border-left: 4px solid #1e90ff; padding: 20px; border-radius: 10px;">
                    <h4 style="color: #1e90ff; font-size: 1.3rem; margin-bottom: 15px; text-align: center;">💡 The Implementation Crisis Truth</h4>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; text-align: center;">
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">💥</div>
                            <h5 style="color: #1e90ff; font-size: 0.9rem; margin-bottom: 5px;">Systemic Failure</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">60% fail due to preventable causes</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">💰</div>
                            <h5 style="color: #1e90ff; font-size: 0.9rem; margin-bottom: 5px;">Economic Pain</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">$138B annual market opportunity</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">🎯</div>
                            <h5 style="color: #1e90ff; font-size: 0.9rem; margin-bottom: 5px;">Our Solution</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">Expertise prevents failures</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Video Pause Point -->
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); border: 3px solid var(--siso-yellow); padding: 20px; border-radius: 15px; margin: 25px 0; position: relative;">
                <div style="position: absolute; top: -12px; left: 25px; background: var(--siso-yellow); color: var(--siso-black); padding: 6px 15px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">⏸️ PAUSE & REFLECT</div>
                <h4 style="color: var(--siso-yellow); font-size: 1.4rem; margin: 15px 0 15px 0; text-align: center;">The $138B Annual Failure Economy</h4>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.9); text-align: center; line-height: 1.5; font-weight: 500;">
                    Every AI project failure represents a $2.3M lesson. The crisis creates our market opportunity.
                    <br><br><strong style="color: var(--siso-yellow);">Question:</strong> How could your expertise prevent these predictable failures?
                </p>
            </div>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'failure-waterfall-chart',
        options: {
            type: 'bar',
            data: {
                labels: ['Projects Started', 'Lack of Expertise', 'Data Quality', 'Compliance', 'Integration', 'Budget', 'Successful'],
                datasets: [{
                    label: 'Project Attrition Waterfall',
                    data: [100, -35, -28, -18, -12, -7, 40],
                    backgroundColor: [
                        '#00ff88',  // Starting projects - green
                        '#ff4444',  // Expertise failure - red
                        '#ff4444',  // Data quality failure - red
                        '#ff4444',  // Compliance failure - red
                        '#ff4444',  // Integration failure - red
                        '#ff4444',  // Budget failure - red
                        '#ffd23f'   // Successful projects - yellow
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 2,
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'AI Project Failure Waterfall: From 100% Start to 40% Success',
                        color: '#ffffff',
                        font: { size: 16, weight: 'bold' }
                    },
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed.y;
                                if (value < 0) {
                                    return `${context.label}: ${Math.abs(value)}% Failed`;
                                } else if (context.dataIndex === 0) {
                                    return `${context.label}: ${value}% Started`;
                                } else {
                                    return `${context.label}: ${value}% Remaining`;
                                }
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        title: { 
                            display: true, 
                            text: 'Project Success Rate (%)', 
                            color: '#ffffff',
                            font: { size: 14 }
                        },
                        ticks: { 
                            color: '#ffffff',
                            callback: function(value) {
                                return Math.abs(value) + '%';
                            }
                        },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        min: -40,
                        max: 100
                    },
                    x: {
                        ticks: { 
                            color: '#ffffff',
                            maxRotation: 45,
                            font: { size: 11 }
                        },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        }
    }
};