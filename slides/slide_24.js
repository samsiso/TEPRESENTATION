// SLIDE 24: The Big Tech Paradox - Why Giants Can't Win Everywhere (2 min)
export const slide24 = {
    title: "The Big Tech Paradox: Why Giants Can't Win Everywhere", 
    singleColumn: true,
    content: `
        <div style="min-height: calc(100vh - 140px); display: flex; flex-direction: column; justify-content: flex-start; padding: 40px; background: var(--siso-black); margin: 0; box-sizing: border-box; width: 100%; position: relative;">
            
            <!-- Big Tech Paradox Banner -->
            <div style="background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%); padding: 18px; border-radius: 12px; text-align: center; margin-bottom: 30px; box-shadow: 0 6px 20px rgba(231,76,60,0.3); position: relative;">
                <div style="position: absolute; top: -2px; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #e74c3c, #ffd23f, #e74c3c); animation: pulse 3s infinite;"></div>
                <span style="font-size: 1.3rem; font-weight: 800; color: white; text-transform: uppercase; letter-spacing: 1px;">🏢 THE BIG TECH PARADOX: 89% Need Integration, 73% Need Customization</span>
            </div>

            <!-- Header Section -->
            <div style="text-align: center; margin-bottom: 35px;">
                <h1 style="font-size: 3.4rem; font-weight: 900; margin-bottom: 20px; background: var(--siso-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1.1;">
                    The Big Tech Paradox
                </h1>
                <h2 style="font-size: 2.2rem; font-weight: 700; color: #e74c3c; margin-bottom: 15px;">
                    Why Giants Can't Win Everywhere: The Scale vs Specialization Dilemma
                </h2>
                <div style="height: 4px; width: 380px; background: var(--siso-gradient); margin: 20px auto; border-radius: 2px; box-shadow: 0 2px 10px rgba(255,107,53,0.4);"></div>
                <p style="font-size: 1.4rem; color: rgba(255,255,255,0.95); font-weight: 600;">
                    🎯 Big Tech's strengths become weaknesses in specialized contexts
                </p>
            </div>

            <!-- Big Tech Limitations Dashboard -->
            <div style="background: rgba(231,76,60,0.1); border: 2px solid #e74c3c; padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="text-align: center; color: #e74c3c; font-size: 1.8rem; margin-bottom: 25px;">🏢 Big Tech Limitation Metrics</h3>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 25px;" data-references='["Accenture (2024) \\\"Enterprise AI Implementation Study\\\"", "MIT Sloan (2024) \\\"Big Tech vs Specialized Providers\\\""]'>
                    
                    <!-- Customization Need -->
                    <div style="background: rgba(231,76,60,0.15); border: 2px solid #e74c3c; padding: 20px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #e74c3c; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🔧 CUSTOM</div>
                        <div style="font-size: 3rem; font-weight: 900; color: #e74c3c; margin-bottom: 10px;">73%</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">Need Custom</p>
                        <p style="font-size: 0.7rem; color: rgba(255,255,255,0.7);">Require heavy customization</p>
                    </div>

                    <!-- Integration Complexity -->
                    <div style="background: rgba(231,76,60,0.15); border: 2px solid #e74c3c; padding: 20px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #e74c3c; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🔗 INTEGRATE</div>
                        <div style="font-size: 3rem; font-weight: 900; color: #e74c3c; margin-bottom: 10px;">89%</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">Integration</p>
                        <p style="font-size: 0.7rem; color: rgba(255,255,255,0.7);">Complex legacy integration</p>
                    </div>

                    <!-- Compliance Needs -->
                    <div style="background: rgba(231,76,60,0.15); border: 2px solid #e74c3c; padding: 20px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #e74c3c; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">⚖️ COMPLY</div>
                        <div style="font-size: 3rem; font-weight: 900; color: #e74c3c; margin-bottom: 10px;">45%</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">Compliance</p>
                        <p style="font-size: 0.7rem; color: rgba(255,255,255,0.7);">Strict regulatory needs</p>
                    </div>

                    <!-- Enterprise Support Gap -->
                    <div style="background: rgba(231,76,60,0.15); border: 2px solid #e74c3c; padding: 20px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #e74c3c; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🎯 SUPPORT</div>
                        <div style="font-size: 3rem; font-weight: 900; color: #e74c3c; margin-bottom: 10px;">61%</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">Support Gap</p>
                        <p style="font-size: 0.7rem; color: rgba(255,255,255,0.7);">Inadequate enterprise support</p>
                    </div>
                </div>
            </div>

            <!-- Big Tech vs Specialized Chart -->
            <div class="chart-container" data-references='["Boston Consulting Group (2024) \\\"AI Vendor Analysis\\\"", "Forrester (2024) \\\"Enterprise AI Platforms Report\\\""]'>
                <canvas id="bigtech-limitations-chart"></canvas>
            </div>

            <!-- Big Tech Analysis Deep Dive -->
            <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="font-size: 1.7rem; margin-bottom: 25px; color: var(--siso-yellow); text-align: center;">🔍 Big Tech Strengths vs Weaknesses Analysis</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
                    
                    <!-- Big Tech Strengths -->
                    <div style="background: rgba(231,76,60,0.1); border: 2px solid #e74c3c; padding: 25px; border-radius: 12px;">
                        <h4 style="color: #e74c3c; font-size: 1.3rem; margin-bottom: 20px; text-align: center;">💪 Big Tech Strengths</h4>
                        <div style="space-y: 15px;">
                            <div style="background: rgba(231,76,60,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: #e74c3c; font-size: 1.1rem;">Scale & Infrastructure</strong>
                                    <span style="background: #e74c3c; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">A+</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Massive compute resources, global infrastructure</p>
                            </div>
                            
                            <div style="background: rgba(231,76,60,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: #e74c3c; font-size: 1.1rem;">R&D Investment</strong>
                                    <span style="background: #e74c3c; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">A+</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">$100B+ annual AI research spending</p>
                            </div>
                            
                            <div style="background: rgba(231,76,60,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: #e74c3c; font-size: 1.1rem;">Brand Recognition</strong>
                                    <span style="background: #e74c3c; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">A+</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Trusted enterprise relationships</p>
                            </div>
                            
                            <div style="background: rgba(231,76,60,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: #e74c3c; font-size: 1.1rem;">Platform Ecosystem</strong>
                                    <span style="background: #e74c3c; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">A</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Comprehensive tool suites and APIs</p>
                            </div>
                            
                            <div style="background: rgba(231,76,60,0.15); padding: 15px; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: #e74c3c; font-size: 1.1rem;">Talent Pool</strong>
                                    <span style="background: #e74c3c; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">A</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Top AI researchers and engineers</p>
                            </div>
                        </div>
                    </div>

                    <!-- Big Tech Weaknesses -->
                    <div style="background: rgba(255,107,53,0.1); border: 2px solid var(--siso-orange); padding: 25px; border-radius: 12px;">
                        <h4 style="color: var(--siso-orange); font-size: 1.3rem; margin-bottom: 20px; text-align: center;">⚠️ Big Tech Weaknesses</h4>
                        <div style="space-y: 15px;">
                            <div style="background: rgba(255,107,53,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: var(--siso-orange); font-size: 1.1rem;">Customization Limits</strong>
                                    <span style="background: var(--siso-orange); color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">D</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">One-size-fits-all approach, limited flexibility</p>
                            </div>
                            
                            <div style="background: rgba(255,107,53,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: var(--siso-orange); font-size: 1.1rem;">Industry Specialization</strong>
                                    <span style="background: var(--siso-orange); color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">C-</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Generic solutions lack domain expertise</p>
                            </div>
                            
                            <div style="background: rgba(255,107,53,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: var(--siso-orange); font-size: 1.1rem;">Compliance Focus</strong>
                                    <span style="background: var(--siso-orange); color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">C</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Regulatory requirements secondary concern</p>
                            </div>
                            
                            <div style="background: rgba(255,107,53,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: var(--siso-orange); font-size: 1.1rem;">Integration Support</strong>
                                    <span style="background: var(--siso-orange); color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">C</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Limited legacy system integration help</p>
                            </div>
                            
                            <div style="background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%); padding: 15px; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: white; font-size: 1.2rem;">White-Glove Service</strong>
                                    <span style="background: rgba(255,255,255,0.3); color: white; padding: 6px 12px; border-radius: 12px; font-size: 0.9rem; font-weight: 700;">D-</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.95); font-size: 0.9rem; margin: 0; font-weight: 600;">Self-service model, minimal personalized support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Market Opportunity Framework -->
            <div style="background: rgba(0,255,136,0.1); border: 2px solid #00ff88; padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="font-size: 1.7rem; margin-bottom: 25px; color: #00ff88; text-align: center;">🎯 How Big Tech Limitations Create Our Opportunity</h3>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 25px;">
                    
                    <!-- Specialization Advantage -->
                    <div style="background: rgba(0,255,136,0.15); border: 2px solid #00ff88; padding: 20px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2.5rem; color: #00ff88; margin-bottom: 10px;">🎯</div>
                        <h4 style="color: #00ff88; font-size: 1.1rem; margin-bottom: 15px; font-weight: 700;">SPECIALIZATION ADVANTAGE</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0; text-align: left;">
                            <li>• 73% need customization Big Tech can't provide</li>
                            <li>• Industry domain expertise</li>
                            <li>• Vertical-specific solutions</li>
                            <li>• Deep understanding of workflows</li>
                        </ul>
                        <div style="background: rgba(0,255,136,0.2); padding: 8px; border-radius: 6px; margin-top: 10px;">
                            <strong style="color: #00ff88; font-size: 0.8rem;">David beats Goliath</strong>
                        </div>
                    </div>

                    <!-- Service Excellence -->
                    <div style="background: rgba(0,255,136,0.15); border: 2px solid #00ff88; padding: 20px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2.5rem; color: #00ff88; margin-bottom: 10px;">🤝</div>
                        <h4 style="color: #00ff88; font-size: 1.1rem; margin-bottom: 15px; font-weight: 700;">SERVICE EXCELLENCE</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0; text-align: left;">
                            <li>• White-glove implementation</li>
                            <li>• Dedicated support teams</li>
                            <li>• Custom integration services</li>
                            <li>• Outcome-based partnerships</li>
                        </ul>
                        <div style="background: rgba(0,255,136,0.2); padding: 8px; border-radius: 6px; margin-top: 10px;">
                            <strong style="color: #00ff88; font-size: 0.8rem;">Service differentiation</strong>
                        </div>
                    </div>

                    <!-- Agility & Speed -->
                    <div style="background: rgba(0,255,136,0.15); border: 2px solid #00ff88; padding: 20px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2.5rem; color: #00ff88; margin-bottom: 10px;">⚡</div>
                        <h4 style="color: #00ff88; font-size: 1.1rem; margin-bottom: 15px; font-weight: 700;">AGILITY & SPEED</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0; text-align: left;">
                            <li>• Rapid customization cycles</li>
                            <li>• Quick deployment timelines</li>
                            <li>• Flexible engagement models</li>
                            <li>• Iterative improvement process</li>
                        </ul>
                        <div style="background: rgba(0,255,136,0.2); padding: 8px; border-radius: 6px; margin-top: 10px;">
                            <strong style="color: #00ff88; font-size: 0.8rem;">Speed to value</strong>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(30,144,255,0.2); border-left: 4px solid #1e90ff; padding: 20px; border-radius: 10px;">
                    <h4 style="color: #1e90ff; font-size: 1.3rem; margin-bottom: 15px; text-align: center;">🏢 The Big Tech Paradox Truth</h4>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; text-align: center;">
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">🏗️</div>
                            <h5 style="color: #1e90ff; font-size: 0.9rem; margin-bottom: 5px;">Scale Strength</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">Amazing at infrastructure, weak at customization</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">⚠️</div>
                            <h5 style="color: #1e90ff; font-size: 0.9rem; margin-bottom: 5px;">Service Gap</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">73% need custom solutions they can't provide</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">🎯</div>
                            <h5 style="color: #1e90ff; font-size: 0.9rem; margin-bottom: 5px;">Our Sweet Spot</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">Specialized, compliant, integrated solutions</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Video Pause Point -->
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); border: 3px solid var(--siso-yellow); padding: 20px; border-radius: 15px; margin: 25px 0; position: relative;">
                <div style="position: absolute; top: -12px; left: 25px; background: var(--siso-yellow); color: var(--siso-black); padding: 6px 15px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">⏸️ PAUSE & REFLECT</div>
                <h4 style="color: var(--siso-yellow); font-size: 1.4rem; margin: 15px 0 15px 0; text-align: center;">Big Tech's Limitations = Your Opportunities</h4>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.9); text-align: center; line-height: 1.5; font-weight: 500;">
                    Big Tech's scale advantages become disadvantages in specialized, compliant contexts.
                    <br><br><strong style="color: var(--siso-yellow);">Question:</strong> Where do Big Tech's weaknesses align with your strengths?
                </p>
            </div>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'bigtech-limitations-chart',
        options: {
            type: 'bar',
            data: {
                labels: [
                    'Customization Needs',
                    'Integration Complexity', 
                    'Compliance Requirements',
                    'Industry Specialization',
                    'White-Glove Service',
                    'Regulatory Expertise',
                    'Legacy System Support',
                    'Rapid Deployment'
                ],
                datasets: [
                    {
                        label: 'Enterprise Requirements (%)',
                        data: [73, 89, 45, 68, 61, 54, 76, 42],
                        backgroundColor: '#e74c3c',
                        borderColor: '#c0392b',
                        borderWidth: 2
                    },
                    {
                        label: 'Big Tech Capability (%)',
                        data: [25, 35, 30, 20, 15, 25, 30, 85],
                        backgroundColor: '#95a5a6',
                        borderColor: '#7f8c8d',
                        borderWidth: 2
                    },
                    {
                        label: 'Our Specialized Capability (%)',
                        data: [90, 95, 85, 88, 92, 90, 88, 75],
                        backgroundColor: '#00ff88',
                        borderColor: '#00cc6a',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Enterprise Requirements vs Big Tech vs Specialized Provider Capabilities',
                        color: '#ffffff',
                        font: { size: 16, weight: 'bold' }
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
                                return `${context.dataset.label}: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        title: { 
                            display: true, 
                            text: 'Capability Score (%)', 
                            color: '#ffffff',
                            font: { size: 14 }
                        },
                        ticks: { 
                            color: '#ffffff',
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        beginAtZero: true,
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