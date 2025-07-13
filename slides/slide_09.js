// SLIDE 9: The Great Divide - Why Academics and CEOs Can't Agree on AI (And How We Profit) (2 min)
export const slide09 = {
    title: "The Great Divide: Why Academics and CEOs Can't Agree on AI",
    singleColumn: true,
    content: `
        <div style="min-height: calc(100vh - 140px); display: flex; flex-direction: column; justify-content: flex-start; padding: 40px; background: var(--siso-black); margin: 0; box-sizing: border-box; width: 100%; position: relative;">
            
            <!-- Divide Alert Banner -->
            <div style="background: linear-gradient(135deg, #9333ea 0%, #7c3aed 100%); padding: 18px; border-radius: 12px; text-align: center; margin-bottom: 30px; box-shadow: 0 6px 20px rgba(147,51,234,0.3); position: relative;">
                <div style="position: absolute; top: -2px; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #9333ea, #ffd23f, #9333ea); animation: pulse 3s infinite;"></div>
                <span style="font-size: 1.3rem; font-weight: 800; color: white; text-transform: uppercase; letter-spacing: 1px;">⚖️ THE GREAT DIVIDE: Academics vs CEOs on AI Implementation</span>
            </div>

            <!-- Header Section -->
            <div style="text-align: center; margin-bottom: 35px;">
                <h1 style="font-size: 3.4rem; font-weight: 900; margin-bottom: 20px; background: var(--siso-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1.1;">
                    The Great Divide
                </h1>
                <h2 style="font-size: 2.2rem; font-weight: 700; color: var(--siso-yellow); margin-bottom: 15px;">
                    Why Academics and CEOs Can't Agree on AI (And How We Profit)
                </h2>
                <div style="height: 4px; width: 280px; background: var(--siso-gradient); margin: 20px auto; border-radius: 2px; box-shadow: 0 2px 10px rgba(255,107,53,0.4);"></div>
                <p style="font-size: 1.4rem; color: rgba(255,255,255,0.95); font-weight: 600;">
                    🌉 The billion-dollar gap between theory and practice = our business opportunity
                </p>
            </div>

            <!-- The Two Worlds Comparison -->
            <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="text-align: center; color: var(--siso-yellow); font-size: 1.8rem; margin-bottom: 25px;">🏛️ Two Worlds, Same Technology, Totally Different Concerns</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 25px;" data-references='["Chen, L., et al. (2024) \"Ethical AI Implementation\" Journal of Business Ethics", "PwC (2024) \"AI Business Value Survey\" Global Executive Study"]'>
                    
                    <!-- Academic World -->
                    <div style="background: rgba(147,51,234,0.1); border: 2px solid #9333ea; padding: 25px; border-radius: 12px; position: relative;">
                        <div style="position: absolute; top: -12px; left: 20px; background: #9333ea; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">🎓 Academic World</div>
                        <div style="text-align: center; margin: 15px 0 20px 0;">
                            <div style="font-size: 3.5rem; margin-bottom: 10px;">📚</div>
                            <h4 style="color: #9333ea; font-size: 1.4rem; margin-bottom: 10px; font-weight: 700;">The Worried Researchers</h4>
                            <div style="font-size: 2.2rem; font-weight: 900; color: #9333ea; margin-bottom: 8px;">67%</div>
                            <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8);">Concerned about ethics & sustainability</p>
                        </div>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.95rem; line-height: 1.6; list-style: none; padding: 0;">
                            <li>🛑 <strong>Jobs Crisis:</strong> "AI will destroy millions of jobs"</li>
                            <li>🌍 <strong>Planet Damage:</strong> "Energy consumption unsustainable"</li>
                            <li>⚖️ <strong>Ethics First:</strong> "Need massive regulatory frameworks"</li>
                            <li>🔍 <strong>Bias Everywhere:</strong> "AI perpetuates discrimination"</li>
                            <li>🏛️ <strong>Society at Risk:</strong> "Fundamental transformation dangerous"</li>
                        </ul>
                        <div style="background: rgba(147,51,234,0.2); padding: 12px; border-radius: 8px; margin-top: 15px;">
                            <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); text-align: center; font-weight: 600;">
                                <strong style="color: #9333ea;">"Go slow, study everything, regulate first"</strong>
                            </p>
                        </div>
                    </div>

                    <!-- Industry World -->
                    <div style="background: rgba(255,107,53,0.1); border: 2px solid var(--siso-orange); padding: 25px; border-radius: 12px; position: relative;">
                        <div style="position: absolute; top: -12px; left: 20px; background: var(--siso-orange); color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">💼 Industry World</div>
                        <div style="text-align: center; margin: 15px 0 20px 0;">
                            <div style="font-size: 3.5rem; margin-bottom: 10px;">💰</div>
                            <h4 style="color: var(--siso-orange); font-size: 1.4rem; margin-bottom: 10px; font-weight: 700;">The Impatient Executives</h4>
                            <div style="font-size: 2.2rem; font-weight: 900; color: var(--siso-orange); margin-bottom: 8px;">83%</div>
                            <p style="font-size: 0.9rem; color: rgba(255,255,255,0.8);">Prioritize ROI over everything else</p>
                        </div>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.95rem; line-height: 1.6; list-style: none; padding: 0;">
                            <li>💸 <strong>ROI Obsession:</strong> "Show me the money in 12 months"</li>
                            <li>🏃 <strong>Speed Mania:</strong> "Competitors are gaining advantage"</li>
                            <li>📈 <strong>Productivity Now:</strong> "25-30% efficiency gains required"</li>
                            <li>✂️ <strong>Cost Cutting:</strong> "Optimize operational expenses immediately"</li>
                            <li>👑 <strong>Market Leader:</strong> "First-mover advantage or die"</li>
                        </ul>
                        <div style="background: rgba(255,107,53,0.2); padding: 12px; border-radius: 8px; margin-top: 15px;">
                            <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); text-align: center; font-weight: 600;">
                                <strong style="color: var(--siso-orange);">"Move fast, measure results, optimize later"</strong>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(255,210,63,0.2); border-left: 4px solid var(--siso-yellow); padding: 15px; border-radius: 8px;">
                    <p style="font-size: 1.2rem; color: rgba(255,255,255,0.95); text-align: center; font-weight: 600;">
                        <strong style="color: var(--siso-yellow);">The Problem:</strong> Academics want perfect ethics, CEOs want perfect profits. Neither gets what they want alone.
                    </p>
                </div>
            </div>

            <!-- Perspective Comparison Chart -->
            <div class="chart-container" data-references='["Porter, M.E. (1985) \"Competitive Advantage\" Free Press", "Freeman, R.E. (1984) \"Strategic Management: A Stakeholder Approach\" Cambridge University Press"]'>
                <canvas id="perspectives-comparison-chart"></canvas>
            </div>

            <!-- The Bridge We Build -->
            <div style="background: rgba(0,255,136,0.1); border: 2px solid #00ff88; padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="font-size: 1.7rem; margin-bottom: 25px; color: #00ff88; text-align: center;">🌉 The Bridge: Why Integration Services Win Both Sides</h3>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 25px;">
                    
                    <!-- Academic Wins -->
                    <div style="background: rgba(147,51,234,0.1); border: 2px solid #9333ea; padding: 20px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2.5rem; color: #9333ea; margin-bottom: 10px;">🎓</div>
                        <h4 style="color: #9333ea; font-size: 1.1rem; margin-bottom: 15px; font-weight: 700;">Academic Validation</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0; text-align: left;">
                            <li>• Ethical frameworks built-in</li>
                            <li>• Bias testing & mitigation</li>
                            <li>• Sustainability considerations</li>
                            <li>• Transparency requirements</li>
                            <li>• Regulatory compliance</li>
                        </ul>
                        <div style="background: rgba(147,51,234,0.2); padding: 8px; border-radius: 6px; margin-top: 10px;">
                            <strong style="color: #9333ea; font-size: 0.8rem;">Responsible Innovation</strong>
                        </div>
                    </div>

                    <!-- Industry Wins -->
                    <div style="background: rgba(255,107,53,0.1); border: 2px solid var(--siso-orange); padding: 20px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2.5rem; color: var(--siso-orange); margin-bottom: 10px;">💼</div>
                        <h4 style="color: var(--siso-orange); font-size: 1.1rem; margin-bottom: 15px; font-weight: 700;">Business Results</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0; text-align: left;">
                            <li>• Guaranteed ROI delivery</li>
                            <li>• 6-month implementation</li>
                            <li>• Measurable productivity gains</li>
                            <li>• Cost reduction targets met</li>
                            <li>• Competitive advantage secured</li>
                        </ul>
                        <div style="background: rgba(255,107,53,0.2); padding: 8px; border-radius: 6px; margin-top: 10px;">
                            <strong style="color: var(--siso-orange); font-size: 0.8rem;">Profitable Implementation</strong>
                        </div>
                    </div>

                    <!-- Our Sweet Spot -->
                    <div style="background: rgba(0,255,136,0.1); border: 2px solid #00ff88; padding: 20px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2.5rem; color: #00ff88; margin-bottom: 10px;">🌉</div>
                        <h4 style="color: #00ff88; font-size: 1.1rem; margin-bottom: 15px; font-weight: 700;">Integration Services</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0; text-align: left;">
                            <li>• Ethical + profitable solutions</li>
                            <li>• Academic rigor + business speed</li>
                            <li>• Stakeholder theory applied</li>
                            <li>• Win-win value creation</li>
                            <li>• Sustainable competitive advantage</li>
                        </ul>
                        <div style="background: rgba(0,255,136,0.2); padding: 8px; border-radius: 6px; margin-top: 10px;">
                            <strong style="color: #00ff88; font-size: 0.8rem;">Best of Both Worlds</strong>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(0,255,136,0.2); border-left: 4px solid #00ff88; padding: 20px; border-radius: 10px;">
                    <h4 style="color: #00ff88; font-size: 1.3rem; margin-bottom: 15px; text-align: center;">💡 Why This Makes Us Rich</h4>
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; text-align: center;">
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">🏛️</div>
                            <h5 style="color: #00ff88; font-size: 0.9rem; margin-bottom: 5px;">Academic Credibility</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">Universities recommend us</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">💰</div>
                            <h5 style="color: #00ff88; font-size: 0.9rem; margin-bottom: 5px;">CEO Approval</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">Boards fund us</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">🔒</div>
                            <h5 style="color: #00ff88; font-size: 0.9rem; margin-bottom: 5px;">Risk Mitigation</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">No ethical scandals</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">📈</div>
                            <h5 style="color: #00ff88; font-size: 0.9rem; margin-bottom: 5px;">Premium Pricing</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">Stakeholder value justifies cost</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Video Pause Point -->
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); border: 3px solid var(--siso-yellow); padding: 20px; border-radius: 15px; margin: 25px 0; position: relative;">
                <div style="position: absolute; top: -12px; left: 25px; background: var(--siso-yellow); color: var(--siso-black); padding: 6px 15px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">⏸️ PAUSE & REFLECT</div>
                <h4 style="color: var(--siso-yellow); font-size: 1.4rem; margin: 15px 0 15px 0; text-align: center;">Think About Your Own Team's Position</h4>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.9); text-align: center; line-height: 1.5; font-weight: 500;">
                    When you pitch AI projects, do you face the academic vs business divide? Some team members worry about ethics, others demand ROI. 
                    <br><br><strong style="color: var(--siso-yellow);">Question:</strong> How could bridging this gap become your competitive advantage?
                </p>
            </div>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'perspectives-comparison-chart',
        options: {
            type: 'doughnut',
            data: {
                labels: ['Ethics & Sustainability', 'ROI & Efficiency', 'Regulation & Governance', 'Speed & Competition', 'Long-term Impact', 'Short-term Gains'],
                datasets: [
                    {
                        label: 'Academic Priorities (%)',
                        data: [35, 10, 25, 5, 20, 5],
                        backgroundColor: [
                            '#9333ea', '#666666', '#7c3aed', '#444444', '#a855f7', '#333333'
                        ],
                        borderColor: '#ffffff',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Academic vs Industry AI Priorities: The Great Divide',
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
                }
            }
        }
    }
};