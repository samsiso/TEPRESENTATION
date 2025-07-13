// SLIDE 10: War Room Analysis - Mapping Our Battle Against the Giants (2 min)
export const slide10 = {
    title: "War Room Analysis: Mapping Our Battle Against the Giants",
    singleColumn: true,
    content: `
        <div style="min-height: calc(100vh - 140px); display: flex; flex-direction: column; justify-content: flex-start; padding: 40px; background: var(--siso-black); margin: 0; box-sizing: border-box; width: 100%; position: relative;">
            
            <!-- War Room Banner -->
            <div style="background: linear-gradient(135deg, #ff4444 0%, #cc1f1f 100%); padding: 18px; border-radius: 12px; text-align: center; margin-bottom: 30px; box-shadow: 0 6px 20px rgba(255,68,68,0.4); position: relative;">
                <div style="position: absolute; top: -2px; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #ff4444, #ffd23f, #ff4444); animation: pulse 3s infinite;"></div>
                <span style="font-size: 1.3rem; font-weight: 800; color: white; text-transform: uppercase; letter-spacing: 1px;">⚔️ WAR ROOM: Porter's Five Forces Strategic Battle Map</span>
            </div>

            <!-- Header Section -->
            <div style="text-align: center; margin-bottom: 35px;">
                <h1 style="font-size: 3.4rem; font-weight: 900; margin-bottom: 20px; background: var(--siso-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1.1;">
                    War Room Analysis
                </h1>
                <h2 style="font-size: 2.2rem; font-weight: 700; color: var(--siso-yellow); margin-bottom: 15px;">
                    Mapping Our Battle Against the Giants
                </h2>
                <div style="height: 4px; width: 280px; background: var(--siso-gradient); margin: 20px auto; border-radius: 2px; box-shadow: 0 2px 10px rgba(255,107,53,0.4);"></div>
                <p style="font-size: 1.4rem; color: rgba(255,255,255,0.95); font-weight: 600;">
                    🎯 Know your enemy, know yourself, win 100 battles
                </p>
            </div>

            <!-- Porter's Five Forces Battle Map -->
            <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="text-align: center; color: var(--siso-yellow); font-size: 1.8rem; margin-bottom: 25px;">⚔️ The Strategic Battlefield: AI Integration Services</h3>
                <div style="position: relative; width: 100%; height: 500px; margin: 20px 0;" data-references='["Porter, M.E. (1980) \"Competitive Strategy\" Free Press", "Porter, M.E. (2008) \"The Five Competitive Forces That Shape Strategy\" Harvard Business Review"]'>
                    
                    <!-- Center: Our Market -->
                    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: var(--siso-gradient); padding: 30px; border-radius: 20px; text-align: center; width: 220px; box-shadow: 0 12px 30px rgba(255,107,53,0.5); border: 4px solid var(--siso-yellow); z-index: 10;">
                        <div style="position: absolute; top: -18px; left: 50%; transform: translateX(-50%); background: var(--siso-yellow); color: var(--siso-black); padding: 8px 20px; border-radius: 25px; font-weight: 900; font-size: 1rem;">🏆 BATTLEFIELD</div>
                        <div style="font-size: 3.5rem; margin-bottom: 15px;">🎯</div>
                        <h4 style="color: white; font-size: 1.4rem; margin-bottom: 10px; font-weight: 900;">AI INTEGRATION</h4>
                        <h4 style="color: white; font-size: 1.2rem; margin-bottom: 10px; font-weight: 700;">SERVICES</h4>
                        <div style="font-size: 1.6rem; font-weight: 900; color: white;">$577B Market</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); margin-top: 8px;">Moderately Attractive</p>
                    </div>

                    <!-- Top: Threat of New Entrants -->
                    <div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); background: rgba(255,68,68,0.2); border: 3px solid #ff4444; padding: 25px; border-radius: 15px; text-align: center; width: 200px; box-shadow: 0 8px 20px rgba(255,68,68,0.4);">
                        <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #ff4444; color: white; padding: 6px 15px; border-radius: 20px; font-size: 0.9rem; font-weight: 700;">⚡ THREAT: HIGH</div>
                        <div style="font-size: 3rem; margin-bottom: 12px;">🚪</div>
                        <h4 style="color: #ff4444; font-size: 1.3rem; margin-bottom: 10px; font-weight: 700;">New Entrants</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.4; list-style: none; padding: 0; text-align: left;">
                            <li>• Low setup costs ($10K-$50K)</li>
                            <li>• Freelancer consultants</li>
                            <li>• Big 4 expanding downmarket</li>
                            <li>• AI startups pivoting</li>
                        </ul>
                        <div style="position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent; border-top: 20px solid #ff4444;"></div>
                    </div>

                    <!-- Left: Supplier Power -->
                    <div style="position: absolute; top: 50%; left: 0; transform: translateY(-50%); background: rgba(255,210,63,0.2); border: 3px solid var(--siso-yellow); padding: 25px; border-radius: 15px; text-align: center; width: 180px; box-shadow: 0 8px 20px rgba(255,210,63,0.4);">
                        <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: var(--siso-yellow); color: var(--siso-black); padding: 6px 15px; border-radius: 20px; font-size: 0.9rem; font-weight: 700;">⚡ POWER: HIGH</div>
                        <div style="font-size: 3rem; margin-bottom: 12px;">🏭</div>
                        <h4 style="color: var(--siso-yellow); font-size: 1.3rem; margin-bottom: 10px; font-weight: 700;">Supplier Power</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.4; list-style: none; padding: 0; text-align: left;">
                            <li>• OpenAI API dependency</li>
                            <li>• Microsoft/Google platforms</li>
                            <li>• Cloud infrastructure costs</li>
                            <li>• Talent scarcity</li>
                        </ul>
                        <div style="position: absolute; right: -20px; top: 50%; transform: translateY(-50%); width: 0; height: 0; border-top: 20px solid transparent; border-bottom: 20px solid transparent; border-left: 20px solid var(--siso-yellow);"></div>
                    </div>

                    <!-- Right: Buyer Power -->
                    <div style="position: absolute; top: 50%; right: 0; transform: translateY(-50%); background: rgba(0,255,136,0.2); border: 3px solid #00ff88; padding: 25px; border-radius: 15px; text-align: center; width: 180px; box-shadow: 0 8px 20px rgba(0,255,136,0.4);">
                        <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #00ff88; color: white; padding: 6px 15px; border-radius: 20px; font-size: 0.9rem; font-weight: 700;">⚡ POWER: LOW</div>
                        <div style="font-size: 3rem; margin-bottom: 12px;">💼</div>
                        <h4 style="color: #00ff88; font-size: 1.3rem; margin-bottom: 10px; font-weight: 700;">Buyer Power</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.4; list-style: none; padding: 0; text-align: left;">
                            <li>• Desperate for solutions</li>
                            <li>• Limited alternatives</li>
                            <li>• Fear of falling behind</li>
                            <li>• High switching costs</li>
                        </ul>
                        <div style="position: absolute; left: -20px; top: 50%; transform: translateY(-50%); width: 0; height: 0; border-top: 20px solid transparent; border-bottom: 20px solid transparent; border-right: 20px solid #00ff88;"></div>
                    </div>

                    <!-- Bottom Left: Competitive Rivalry -->
                    <div style="position: absolute; bottom: 0; left: 25%; transform: translateX(-50%); background: rgba(147,51,234,0.2); border: 3px solid #9333ea; padding: 25px; border-radius: 15px; text-align: center; width: 190px; box-shadow: 0 8px 20px rgba(147,51,234,0.4);">
                        <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #9333ea; color: white; padding: 6px 15px; border-radius: 20px; font-size: 0.9rem; font-weight: 700;">⚡ RIVALRY: INTENSE</div>
                        <div style="font-size: 3rem; margin-bottom: 12px;">⚔️</div>
                        <h4 style="color: #9333ea; font-size: 1.3rem; margin-bottom: 10px; font-weight: 700;">Competitive Rivalry</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.4; list-style: none; padding: 0; text-align: left;">
                            <li>• 85% market fragmented</li>
                            <li>• Price wars emerging</li>
                            <li>• No clear market leader</li>
                            <li>• High growth attracts players</li>
                        </ul>
                        <div style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent; border-bottom: 20px solid #9333ea;"></div>
                    </div>

                    <!-- Bottom Right: Substitutes -->
                    <div style="position: absolute; bottom: 0; right: 25%; transform: translateX(50%); background: rgba(255,107,53,0.2); border: 3px solid var(--siso-orange); padding: 25px; border-radius: 15px; text-align: center; width: 190px; box-shadow: 0 8px 20px rgba(255,107,53,0.4);">
                        <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: var(--siso-orange); color: white; padding: 6px 15px; border-radius: 20px; font-size: 0.9rem; font-weight: 700;">⚡ THREAT: MEDIUM</div>
                        <div style="font-size: 3rem; margin-bottom: 12px;">🔄</div>
                        <h4 style="color: var(--siso-orange); font-size: 1.3rem; margin-bottom: 10px; font-weight: 700;">Substitutes</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.4; list-style: none; padding: 0; text-align: left;">
                            <li>• In-house AI teams</li>
                            <li>• DIY platforms (weak)</li>
                            <li>• Offshore development</li>
                            <li>• "Wait and see" approach</li>
                        </ul>
                        <div style="position: absolute; top: -20px; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 20px solid transparent; border-right: 20px solid transparent; border-bottom: 20px solid var(--siso-orange);"></div>
                    </div>
                </div>
            </div>

            <!-- Strategic Forces Chart -->
            <div class="chart-container" data-references='["Porter, M.E. (2008) \"The Five Competitive Forces\" Harvard Business Review", "Ghemawat, P. (2016) \"The Laws of Globalization\" Harvard Business Review Press"]'>
                <canvas id="strategic-forces-chart"></canvas>
            </div>

            <!-- Battle Strategy -->
            <div style="background: rgba(255,107,53,0.1); border: 2px solid var(--siso-orange); padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="font-size: 1.7rem; margin-bottom: 25px; color: var(--siso-orange); text-align: center;">🎯 Our Battle Strategy: Turn Weaknesses Into Strengths</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 25px;">
                    
                    <!-- Threats We Face -->
                    <div style="background: rgba(255,68,68,0.1); border: 2px solid #ff4444; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #ff4444; font-size: 1.3rem; margin-bottom: 15px; text-align: center;">⚠️ Forces Against Us</h4>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                            <div>
                                <h5 style="color: #ff4444; font-size: 1rem; margin-bottom: 8px;">🚪 New Entrants</h5>
                                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.8);">High threat - everyone wants in</p>
                            </div>
                            <div>
                                <h5 style="color: #ff4444; font-size: 1rem; margin-bottom: 8px;">🏭 Suppliers</h5>
                                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.8);">High power - Big Tech controls</p>
                            </div>
                            <div>
                                <h5 style="color: #ff4444; font-size: 1rem; margin-bottom: 8px;">⚔️ Rivalry</h5>
                                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.8);">Intense - fragmented market</p>
                            </div>
                            <div>
                                <h5 style="color: #ff4444; font-size: 1rem; margin-bottom: 8px;">🔄 Substitutes</h5>
                                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.8);">Medium - in-house alternatives</p>
                            </div>
                        </div>
                    </div>

                    <!-- Our Strategic Response -->
                    <div style="background: rgba(0,255,136,0.1); border: 2px solid #00ff88; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #00ff88; font-size: 1.3rem; margin-bottom: 15px; text-align: center;">💪 Our Strategic Response</h4>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                            <div>
                                <h5 style="color: #00ff88; font-size: 1rem; margin-bottom: 8px;">🎯 Specialization</h5>
                                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.9);">Industry expertise beats generalists</p>
                            </div>
                            <div>
                                <h5 style="color: #00ff88; font-size: 1rem; margin-bottom: 8px;">🤝 Partnerships</h5>
                                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.9);">Work with suppliers, not against</p>
                            </div>
                            <div>
                                <h5 style="color: #00ff88; font-size: 1rem; margin-bottom: 8px;">⚡ Speed</h5>
                                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.9);">Fast delivery vs big consultants</p>
                            </div>
                            <div>
                                <h5 style="color: #00ff88; font-size: 1rem; margin-bottom: 8px;">🔒 Lock-in</h5>
                                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.9);">Ongoing support creates stickiness</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(255,210,63,0.2); border-left: 4px solid var(--siso-yellow); padding: 20px; border-radius: 10px;">
                    <h4 style="color: var(--siso-yellow); font-size: 1.3rem; margin-bottom: 15px; text-align: center;">🧠 Porter's Strategic Insight Applied</h4>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; text-align: center;">
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">🎯</div>
                            <h5 style="color: var(--siso-yellow); font-size: 0.9rem; margin-bottom: 5px;">Focus Strategy</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">Target specific verticals</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">⚡</div>
                            <h5 style="color: var(--siso-yellow); font-size: 0.9rem; margin-bottom: 5px;">Differentiation</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">Unique value proposition</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">🔒</div>
                            <h5 style="color: var(--siso-yellow); font-size: 0.9rem; margin-bottom: 5px;">Barriers</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">Create switching costs</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Video Pause Point -->
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); border: 3px solid var(--siso-yellow); padding: 20px; border-radius: 15px; margin: 25px 0; position: relative;">
                <div style="position: absolute; top: -12px; left: 25px; background: var(--siso-yellow); color: var(--siso-black); padding: 6px 15px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">⏸️ PAUSE & REFLECT</div>
                <h4 style="color: var(--siso-yellow); font-size: 1.4rem; margin: 15px 0 15px 0; text-align: center;">Analyze Your Team's Strategic Position</h4>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.9); text-align: center; line-height: 1.5; font-weight: 500;">
                    Look at these five forces and think about your team's current position. Where are you strong? Where are you vulnerable?
                    <br><br><strong style="color: var(--siso-yellow);">Question:</strong> Which of these forces poses the biggest threat to your team's AI ambitions?
                </p>
            </div>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'strategic-forces-chart',
        options: {
            type: 'polarArea',
            data: {
                labels: ['New Entrants Threat', 'Supplier Power', 'Buyer Power', 'Competitive Rivalry', 'Substitute Threat'],
                datasets: [
                    {
                        label: 'Force Intensity (0-100)',
                        data: [85, 75, 25, 90, 45],
                        backgroundColor: [
                            'rgba(255, 68, 68, 0.7)',
                            'rgba(255, 210, 63, 0.7)', 
                            'rgba(0, 255, 136, 0.7)',
                            'rgba(147, 51, 234, 0.7)',
                            'rgba(255, 107, 53, 0.7)'
                        ],
                        borderColor: [
                            '#ff4444',
                            '#ffd23f',
                            '#00ff88', 
                            '#9333ea',
                            '#ff6b35'
                        ],
                        borderWidth: 3
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Porter\'s Five Forces: AI Integration Services Market Intensity',
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
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            color: '#ffffff',
                            backdropColor: 'transparent',
                            callback: function(value) {
                                if (value === 0) return 'Low';
                                if (value === 25) return 'Low-Med';
                                if (value === 50) return 'Medium';
                                if (value === 75) return 'High';
                                if (value === 100) return 'Extreme';
                                return '';
                            }
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        },
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.2)'
                        },
                        pointLabels: {
                            color: '#ffffff',
                            font: { size: 11 }
                        }
                    }
                }
            }
        }
    }
};