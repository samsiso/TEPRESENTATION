// SLIDE 20: The Competitive Battlefield - Big Tech vs Blue Ocean Opportunities (2 min)
export const slide20 = {
    title: "The Competitive Battlefield: Big Tech vs Blue Ocean Opportunities",
    singleColumn: true,
    content: `
        <div style="min-height: calc(100vh - 140px); display: flex; flex-direction: column; justify-content: flex-start; padding: 40px; background: var(--siso-black); margin: 0; box-sizing: border-box; width: 100%; position: relative;">
            
            <!-- Competitive Battlefield Banner -->
            <div style="background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%); padding: 18px; border-radius: 12px; text-align: center; margin-bottom: 30px; box-shadow: 0 6px 20px rgba(255,68,68,0.3); position: relative;">
                <div style="position: absolute; top: -2px; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #ff4444, #ffd23f, #ff4444); animation: pulse 3s infinite;"></div>
                <span style="font-size: 1.3rem; font-weight: 800; color: white; text-transform: uppercase; letter-spacing: 1px;">⚔️ THE COMPETITIVE BATTLEFIELD: 62% Big Tech vs 38% Blue Ocean</span>
            </div>

            <!-- Header Section -->
            <div style="text-align: center; margin-bottom: 35px;">
                <h1 style="font-size: 3.4rem; font-weight: 900; margin-bottom: 20px; background: var(--siso-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1.1;">
                    The Competitive Battlefield
                </h1>
                <h2 style="font-size: 2.2rem; font-weight: 700; color: var(--siso-yellow); margin-bottom: 15px;">
                    Big Tech vs Blue Ocean Opportunities (Market Map)
                </h2>
                <div style="height: 4px; width: 280px; background: var(--siso-gradient); margin: 20px auto; border-radius: 2px; box-shadow: 0 2px 10px rgba(255,107,53,0.4);"></div>
                <p style="font-size: 1.4rem; color: rgba(255,255,255,0.95); font-weight: 600;">
                    🎯 Fight where Big Tech can't win: compliance, vertical specialization, outcome-based
                </p>
            </div>

            <!-- Competitive Battlefield Matrix -->
            <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="text-align: center; color: var(--siso-yellow); font-size: 1.8rem; margin-bottom: 25px;">⚔️ The Competitive Battlefield Matrix (Market Share vs Opportunity)</h3>
                
                <!-- Big Tech Dominance Zone -->
                <div style="margin-bottom: 30px;">
                    <h4 style="color: #ff4444; font-size: 1.4rem; margin-bottom: 20px; text-align: center;">🏰 BIG TECH DOMINANCE: 62% Market Share</h4>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;" data-references='["Synergy Research (2024) \\\"Cloud AI Market Share\\\" Q3 Report", "Canalys (2024) \\\"AI Platform Market Analysis\\\" Annual Study"]'>
                        
                        <!-- Google -->
                        <div style="background: rgba(255,68,68,0.1); border: 2px solid #ff4444; padding: 25px; border-radius: 12px; text-align: center; position: relative;">
                            <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #ff4444; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🔴 LEADER</div>
                            <div style="font-size: 3rem; margin-bottom: 15px;">🌐</div>
                            <h5 style="color: #ff4444; font-size: 1.3rem; margin-bottom: 10px; font-weight: 700;">Google Cloud AI</h5>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                                <div>
                                    <div style="font-size: 2rem; font-weight: 900; color: #ff4444;">23%</div>
                                    <p style="font-size: 0.7rem; color: rgba(255,255,255,0.8);">Market Share</p>
                                </div>
                                <div>
                                    <div style="font-size: 2rem; font-weight: 900; color: #ff4444;">$8.9B</div>
                                    <p style="font-size: 0.7rem; color: rgba(255,255,255,0.8);">Revenue 2024</p>
                                </div>
                            </div>
                            <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8); margin-bottom: 10px;">TensorFlow, Vertex AI, AutoML</p>
                            <div style="background: rgba(255,68,68,0.2); padding: 8px; border-radius: 6px;">
                                <strong style="color: #ff4444; font-size: 0.8rem;">GENERIC PLATFORMS</strong>
                            </div>
                        </div>

                        <!-- Microsoft -->
                        <div style="background: rgba(255,68,68,0.1); border: 2px solid #ff4444; padding: 25px; border-radius: 12px; text-align: center; position: relative;">
                            <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #ff4444; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🔴 CHALLENGER</div>
                            <div style="font-size: 3rem; margin-bottom: 15px;">⊞</div>
                            <h5 style="color: #ff4444; font-size: 1.3rem; margin-bottom: 10px; font-weight: 700;">Microsoft Azure AI</h5>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                                <div>
                                    <div style="font-size: 2rem; font-weight: 900; color: #ff4444;">21%</div>
                                    <p style="font-size: 0.7rem; color: rgba(255,255,255,0.8);">Market Share</p>
                                </div>
                                <div>
                                    <div style="font-size: 2rem; font-weight: 900; color: #ff4444;">$7.8B</div>
                                    <p style="font-size: 0.7rem; color: rgba(255,255,255,0.8);">Revenue 2024</p>
                                </div>
                            </div>
                            <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8); margin-bottom: 10px;">Cognitive Services, OpenAI</p>
                            <div style="background: rgba(255,68,68,0.2); padding: 8px; border-radius: 6px;">
                                <strong style="color: #ff4444; font-size: 0.8rem;">ENTERPRISE FOCUS</strong>
                            </div>
                        </div>

                        <!-- Amazon -->
                        <div style="background: rgba(255,68,68,0.1); border: 2px solid #ff4444; padding: 25px; border-radius: 12px; text-align: center; position: relative;">
                            <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #ff4444; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🔴 STRONG</div>
                            <div style="font-size: 3rem; margin-bottom: 15px;">📦</div>
                            <h5 style="color: #ff4444; font-size: 1.3rem; margin-bottom: 10px; font-weight: 700;">Amazon AWS AI</h5>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                                <div>
                                    <div style="font-size: 2rem; font-weight: 900; color: #ff4444;">18%</div>
                                    <p style="font-size: 0.7rem; color: rgba(255,255,255,0.8);">Market Share</p>
                                </div>
                                <div>
                                    <div style="font-size: 2rem; font-weight: 900; color: #ff4444;">$6.2B</div>
                                    <p style="font-size: 0.7rem; color: rgba(255,255,255,0.8);">Revenue 2024</p>
                                </div>
                            </div>
                            <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8); margin-bottom: 10px;">SageMaker, Bedrock, Lex</p>
                            <div style="background: rgba(255,68,68,0.2); padding: 8px; border-radius: 6px;">
                                <strong style="color: #ff4444; font-size: 0.8rem;">INFRASTRUCTURE PLAY</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Blue Ocean Opportunities -->
                <div style="margin-bottom: 30px;">
                    <h4 style="color: #00ff88; font-size: 1.4rem; margin-bottom: 20px; text-align: center;">🌊 BLUE OCEAN OPPORTUNITIES: 38% Fragmented Market</h4>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;" data-references='["IDC (2024) \\\"AI Services Market\\\" Vertical Analysis", "Forrester (2024) \\\"Specialized AI Providers\\\" Research"]'>
                        
                        <!-- Vertical Specialization -->
                        <div style="background: rgba(0,255,136,0.1); border: 2px solid #00ff88; padding: 25px; border-radius: 12px; text-align: center; position: relative; box-shadow: 0 10px 25px rgba(0,255,136,0.4);">
                            <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #00ff88; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🎯 VERTICAL</div>
                            <div style="font-size: 3rem; margin-bottom: 15px;">🏥</div>
                            <h5 style="color: #00ff88; font-size: 1.3rem; margin-bottom: 10px; font-weight: 700;">Vertical Specialization</h5>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                                <div>
                                    <div style="font-size: 2rem; font-weight: 900; color: #00ff88;">15%</div>
                                    <p style="font-size: 0.7rem; color: rgba(255,255,255,0.8);">Market Share</p>
                                </div>
                                <div>
                                    <div style="font-size: 2rem; font-weight: 900; color: #00ff88;">67%</div>
                                    <p style="font-size: 0.7rem; color: rgba(255,255,255,0.8);">Growth Rate</p>
                                </div>
                            </div>
                            <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8); margin-bottom: 10px;">Healthcare, Finance, Legal</p>
                            <div style="background: rgba(0,255,136,0.2); padding: 8px; border-radius: 6px;">
                                <strong style="color: #00ff88; font-size: 0.8rem;">DOMAIN EXPERTISE</strong>
                            </div>
                        </div>

                        <!-- Compliance-First -->
                        <div style="background: rgba(0,255,136,0.1); border: 2px solid #00ff88; padding: 25px; border-radius: 12px; text-align: center; position: relative; box-shadow: 0 10px 25px rgba(0,255,136,0.4);">
                            <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #00ff88; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🛡️ COMPLIANCE</div>
                            <div style="font-size: 3rem; margin-bottom: 15px;">⚖️</div>
                            <h5 style="color: #00ff88; font-size: 1.3rem; margin-bottom: 10px; font-weight: 700;">Compliance-First</h5>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                                <div>
                                    <div style="font-size: 2rem; font-weight: 900; color: #00ff88;">12%</div>
                                    <p style="font-size: 0.7rem; color: rgba(255,255,255,0.8);">Market Share</p>
                                </div>
                                <div>
                                    <div style="font-size: 2rem; font-weight: 900; color: #00ff88;">89%</div>
                                    <p style="font-size: 0.7rem; color: rgba(255,255,255,0.8);">Growth Rate</p>
                                </div>
                            </div>
                            <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8); margin-bottom: 10px;">GDPR, SOX, HIPAA ready</p>
                            <div style="background: rgba(0,255,136,0.2); padding: 8px; border-radius: 6px;">
                                <strong style="color: #00ff88; font-size: 0.8rem;">REGULATORY MOAT</strong>
                            </div>
                        </div>

                        <!-- Mid-Market Focus -->
                        <div style="background: rgba(0,255,136,0.1); border: 2px solid #00ff88; padding: 25px; border-radius: 12px; text-align: center; position: relative; box-shadow: 0 10px 25px rgba(0,255,136,0.4);">
                            <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #00ff88; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🎯 MID-MARKET</div>
                            <div style="font-size: 3rem; margin-bottom: 15px;">🏢</div>
                            <h5 style="color: #00ff88; font-size: 1.3rem; margin-bottom: 10px; font-weight: 700;">Mid-Market Focus</h5>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 15px;">
                                <div>
                                    <div style="font-size: 2rem; font-weight: 900; color: #00ff88;">11%</div>
                                    <p style="font-size: 0.7rem; color: rgba(255,255,255,0.8);">Market Share</p>
                                </div>
                                <div>
                                    <div style="font-size: 2rem; font-weight: 900; color: #00ff88;">45%</div>
                                    <p style="font-size: 0.7rem; color: rgba(255,255,255,0.8);">Growth Rate</p>
                                </div>
                            </div>
                            <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8); margin-bottom: 10px;">$10M-$1B companies</p>
                            <div style="background: rgba(0,255,136,0.2); padding: 8px; border-radius: 6px;">
                                <strong style="color: #00ff88; font-size: 0.8rem;">SWEET SPOT</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Competitive Positioning Chart -->
            <div class="chart-container" data-references='["Synergy Research (2024) \\\"Cloud AI Market Share\\\"\", \"IDC (2024) \\\"AI Services Market Analysis\\\""]'>
                <canvas id="competitive-landscape-chart"></canvas>
            </div>

            <!-- Strategic Competitive Framework -->
            <div style="background: rgba(255,107,53,0.1); border: 2px solid var(--siso-orange); padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="font-size: 1.7rem; margin-bottom: 25px; color: var(--siso-orange); text-align: center;">🎯 The Competitive Strategy Framework</h3>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 25px;">
                    
                    <!-- Avoid Red Ocean -->
                    <div style="background: rgba(255,68,68,0.1); border: 2px solid #ff4444; padding: 20px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2.5rem; color: #ff4444; margin-bottom: 10px;">⚠️</div>
                        <h4 style="color: #ff4444; font-size: 1.1rem; margin-bottom: 15px; font-weight: 700;">AVOID RED OCEAN</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0; text-align: left;">
                            <li>• Generic AI platforms</li>
                            <li>• Infrastructure competition</li>
                            <li>• Price wars with Big Tech</li>
                            <li>• Commodity services</li>
                        </ul>
                        <div style="background: rgba(255,68,68,0.2); padding: 8px; border-radius: 6px; margin-top: 10px;">
                            <strong style="color: #ff4444; font-size: 0.8rem;">Can't win on scale</strong>
                        </div>
                    </div>

                    <!-- Find Blue Ocean -->
                    <div style="background: rgba(0,255,136,0.1); border: 2px solid #00ff88; padding: 20px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2.5rem; color: #00ff88; margin-bottom: 10px;">🌊</div>
                        <h4 style="color: #00ff88; font-size: 1.1rem; margin-bottom: 15px; font-weight: 700;">FIND BLUE OCEAN</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0; text-align: left;">
                            <li>• Vertical specialization</li>
                            <li>• Compliance-first approach</li>
                            <li>• Outcome-based pricing</li>
                            <li>• White-glove services</li>
                        </ul>
                        <div style="background: rgba(0,255,136,0.2); padding: 8px; border-radius: 6px; margin-top: 10px;">
                            <strong style="color: #00ff88; font-size: 0.8rem;">Win on specialization</strong>
                        </div>
                    </div>

                    <!-- Build Moats -->
                    <div style="background: rgba(255,215,0,0.1); border: 2px solid #ffd700; padding: 20px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2.5rem; color: #ffd700; margin-bottom: 10px;">🏰</div>
                        <h4 style="color: #ffd700; font-size: 1.1rem; margin-bottom: 15px; font-weight: 700;">BUILD MOATS</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0; text-align: left;">
                            <li>• Regulatory expertise</li>
                            <li>• Industry relationships</li>
                            <li>• Proprietary data</li>
                            <li>• Customer outcomes</li>
                        </ul>
                        <div style="background: rgba(255,215,0,0.2); padding: 8px; border-radius: 6px; margin-top: 10px;">
                            <strong style="color: #ffd700; font-size: 0.8rem;">Defensible position</strong>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(30,144,255,0.2); border-left: 4px solid #1e90ff; padding: 20px; border-radius: 10px;">
                    <h4 style="color: #1e90ff; font-size: 1.3rem; margin-bottom: 15px; text-align: center;">⚔️ The Competitive Truth</h4>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; text-align: center;">
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">🏰</div>
                            <h5 style="color: #1e90ff; font-size: 0.9rem; margin-bottom: 5px;">Big Tech Dominance</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">62% market share, generic solutions</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">🌊</div>
                            <h5 style="color: #1e90ff; font-size: 0.9rem; margin-bottom: 5px;">Blue Ocean Space</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">38% fragmented, high growth</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">🎯</div>
                            <h5 style="color: #1e90ff; font-size: 0.9rem; margin-bottom: 5px;">Specialization Wins</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">Vertical + compliance = moat</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Video Pause Point -->
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); border: 3px solid var(--siso-yellow); padding: 20px; border-radius: 15px; margin: 25px 0; position: relative;">
                <div style="position: absolute; top: -12px; left: 25px; background: var(--siso-yellow); color: var(--siso-black); padding: 6px 15px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">⏸️ PAUSE & REFLECT</div>
                <h4 style="color: var(--siso-yellow); font-size: 1.4rem; margin: 15px 0 15px 0; text-align: center;">Consider Your Competitive Positioning</h4>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.9); text-align: center; line-height: 1.5; font-weight: 500;">
                    Don't compete where Big Tech dominates. Find blue ocean spaces where specialization wins.
                    <br><br><strong style="color: var(--siso-yellow);">Question:</strong> Where could your team avoid Big Tech competition and build defensible moats?
                </p>
            </div>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'competitive-landscape-chart',
        options: {
            type: 'doughnut',
            data: {
                labels: [
                    'Google Cloud AI (23%)', 
                    'Microsoft Azure AI (21%)', 
                    'Amazon AWS AI (18%)', 
                    'Vertical Specialists (15%)', 
                    'Compliance-First (12%)', 
                    'Mid-Market Focus (11%)'
                ],
                datasets: [{
                    data: [23, 21, 18, 15, 12, 11],
                    backgroundColor: [
                        '#ff4444',  // Google - Red (Big Tech)
                        '#ff4444',  // Microsoft - Red (Big Tech)
                        '#ff4444',  // Amazon - Red (Big Tech)
                        '#00ff88',  // Vertical - Green (Blue Ocean)
                        '#00ff88',  // Compliance - Green (Blue Ocean)
                        '#00ff88'   // Mid-Market - Green (Blue Ocean)
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 3,
                    hoverBackgroundColor: [
                        '#ff6666',  // Google hover
                        '#ff6666',  // Microsoft hover
                        '#ff6666',  // Amazon hover
                        '#44ffaa',  // Vertical hover
                        '#44ffaa',  // Compliance hover
                        '#44ffaa'   // Mid-Market hover
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'AI Market Competitive Landscape: Big Tech Dominance vs Blue Ocean Opportunities',
                        color: '#ffffff',
                        font: { size: 16 }
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#ffffff',
                            boxWidth: 15,
                            padding: 15
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const value = context.parsed;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                const category = value >= 18 ? 'BIG TECH DOMINANCE' : 'BLUE OCEAN OPPORTUNITY';
                                return `${context.label}: ${percentage}% (${category})`;
                            }
                        }
                    }
                },
                cutout: '45%'
            }
        }
    }
};