// SLIDE 30: The Strategic Imperative - Call to Action & Market Window (2 min)
export const slide30 = {
    title: "The Strategic Imperative: Call to Action & Market Window",
    singleColumn: true,
    content: `
        <div style="min-height: calc(100vh - 140px); display: flex; flex-direction: column; justify-content: flex-start; padding: 40px; background: var(--siso-black); margin: 0; box-sizing: border-box; width: 100%; position: relative;">
            
            <!-- Strategic Imperative Banner -->
            <div style="background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%); padding: 18px; border-radius: 12px; text-align: center; margin-bottom: 30px; box-shadow: 0 6px 20px rgba(192,57,43,0.3); position: relative;">
                <div style="position: absolute; top: -2px; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #c0392b, #ffd23f, #c0392b); animation: pulse 3s infinite;"></div>
                <span style="font-size: 1.3rem; font-weight: 800; color: white; text-transform: uppercase; letter-spacing: 1px;">🚨 THE STRATEGIC IMPERATIVE: 24mo Window × $6.2B SOM = Act Now or Never</span>
            </div>

            <!-- Header Section -->
            <div style="text-align: center; margin-bottom: 35px;">
                <h1 style="font-size: 3.4rem; font-weight: 900; margin-bottom: 20px; background: var(--siso-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1.1;">
                    The Strategic Imperative
                </h1>
                <h2 style="font-size: 2.2rem; font-weight: 700; color: #c0392b; margin-bottom: 15px;">
                    Call to Action: The $6.2B Window Closes in 24 Months
                </h2>
                <div style="height: 4px; width: 400px; background: var(--siso-gradient); margin: 20px auto; border-radius: 2px; box-shadow: 0 2px 10px rgba(255,107,53,0.4);"></div>
                <p style="font-size: 1.4rem; color: rgba(255,255,255,0.95); font-weight: 600;">
                    🎯 The time for analysis is over. The time for action is NOW.
                </p>
            </div>

            <!-- Market Window Clock -->
            <div style="background: rgba(192,57,43,0.1); border: 2px solid #c0392b; padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="text-align: center; color: #c0392b; font-size: 1.8rem; margin-bottom: 25px;">⏰ Market Window Analysis: The Countdown Begins</h3>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 25px;" data-references='["Rogers, Everett (2003) \"Diffusion of Innovations\"", "Gartner (2024) \"AI Market Lifecycle Analysis\""]'>
                    
                    <!-- Current State -->
                    <div style="background: rgba(192,57,43,0.15); border: 2px solid #c0392b; padding: 20px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #c0392b; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🟢 NOW</div>
                        <div style="font-size: 3rem; font-weight: 900; color: #c0392b; margin-bottom: 10px;">78%</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">Adoption Rate</p>
                        <p style="font-size: 0.7rem; color: rgba(255,255,255,0.7);">Late majority phase = service demand peak</p>
                    </div>

                    <!-- 12 Month Window -->
                    <div style="background: rgba(255,193,7,0.15); border: 2px solid #ffc107; padding: 20px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #ffc107; color: black; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🟡 12MO</div>
                        <div style="font-size: 3rem; font-weight: 900; color: #ffc107; margin-bottom: 10px;">82%</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">Market Maturity</p>
                        <p style="font-size: 0.7rem; color: rgba(255,255,255,0.7);">Consolidation begins, first-mover advantage peaks</p>
                    </div>

                    <!-- 24 Month Warning -->
                    <div style="background: rgba(255,107,53,0.15); border: 2px solid var(--siso-orange); padding: 20px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--siso-orange); color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🟠 24MO</div>
                        <div style="font-size: 3rem; font-weight: 900; color: var(--siso-orange); margin-bottom: 10px;">85%</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">Window Closes</p>
                        <p style="font-size: 0.7rem; color: rgba(255,255,255,0.7);">Big Tech dominance, limited entry opportunities</p>
                    </div>

                    <!-- Too Late -->
                    <div style="background: rgba(192,57,43,0.15); border: 2px solid #c0392b; padding: 20px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #c0392b; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🔴 36MO</div>
                        <div style="font-size: 3rem; font-weight: 900; color: #c0392b; margin-bottom: 10px;">90%</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">Too Late</p>
                        <p style="font-size: 0.7rem; color: rgba(255,255,255,0.7);">Market saturation, opportunity ended</p>
                    </div>
                </div>
            </div>

            <!-- Opportunity Window Chart -->
            <div class="chart-container" data-references='["Harvard Business Review (2024) \"Market Timing and Entrepreneurial Success\"", "McKinsey (2024) \"AI Services Market Dynamics\""]'>
                <canvas id="market-window-chart"></canvas>
            </div>

            <!-- Immediate Action Framework -->
            <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="font-size: 1.7rem; margin-bottom: 25px; color: var(--siso-yellow); text-align: center;">🚀 90-Day Sprint Plan: From Idea to Market Entry</h3>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin-bottom: 25px;">
                    
                    <!-- Month 1: Foundation -->
                    <div style="background: rgba(192,57,43,0.1); border: 2px solid #c0392b; padding: 25px; border-radius: 12px; position: relative;">
                        <div style="position: absolute; top: -12px; left: 25px; background: #c0392b; color: white; padding: 6px 15px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">🚀 MONTH 1</div>
                        <div style="display: flex; align-items: center; margin-bottom: 20px;">
                            <div style="font-size: 3rem; margin-right: 15px;">⚡</div>
                            <div>
                                <h4 style="color: #c0392b; font-size: 1.4rem; margin-bottom: 5px; font-weight: 700;">Foundation Sprint</h4>
                                <p style="color: rgba(255,255,255,0.8); font-size: 0.9rem;">Rapid team formation and legal setup</p>
                            </div>
                        </div>
                        
                        <div style="background: rgba(192,57,43,0.15); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                            <h5 style="color: #c0392b; font-size: 1rem; margin-bottom: 10px;">🎯 Critical Tasks (Days 1-30)</h5>
                            <ul style="color: rgba(255,255,255,0.9); font-size: 0.8rem; line-height: 1.4; margin: 0; padding-left: 15px;">
                                <li>Founding team recruitment & equity agreements</li>
                                <li>Legal entity formation & IP protection filing</li>
                                <li>Seed funding conversations ($500k target)</li>
                                <li>Initial technology stack evaluation</li>
                                <li>First customer prospect identification</li>
                            </ul>
                        </div>
                        
                        <div style="background: rgba(192,57,43,0.2); padding: 12px; border-radius: 6px; margin-top: 15px; text-align: center;">
                            <strong style="color: #c0392b; font-size: 1rem;">MILESTONE: Team Formed</strong>
                            <br><span style="color: rgba(255,255,255,0.8); font-size: 0.8rem;">5-person core team, legal structure, initial funding</span>
                        </div>
                    </div>

                    <!-- Month 2: MVP Development -->
                    <div style="background: rgba(52,152,219,0.1); border: 2px solid #3498db; padding: 25px; border-radius: 12px; position: relative;">
                        <div style="position: absolute; top: -12px; left: 25px; background: #3498db; color: white; padding: 6px 15px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">💡 MONTH 2</div>
                        <div style="display: flex; align-items: center; margin-bottom: 20px;">
                            <div style="font-size: 3rem; margin-right: 15px;">🔧</div>
                            <div>
                                <h4 style="color: #3498db; font-size: 1.4rem; margin-bottom: 5px; font-weight: 700;">MVP Development</h4>
                                <p style="color: rgba(255,255,255,0.8); font-size: 0.9rem;">Build minimum viable service offering</p>
                            </div>
                        </div>
                        
                        <div style="background: rgba(52,152,219,0.15); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                            <h5 style="color: #3498db; font-size: 1rem; margin-bottom: 10px;">🛠️ Development Focus (Days 31-60)</h5>
                            <ul style="color: rgba(255,255,255,0.9); font-size: 0.8rem; line-height: 1.4; margin: 0; padding-left: 15px;">
                                <li>Core methodology documentation & frameworks</li>
                                <li>Compliance template development (HIPAA focus)</li>
                                <li>Pilot project proposal templates</li>
                                <li>Basic project management infrastructure</li>
                                <li>Customer assessment & scoping tools</li>
                            </ul>
                        </div>
                        
                        <div style="background: rgba(52,152,219,0.2); padding: 12px; border-radius: 6px; margin-top: 15px; text-align: center;">
                            <strong style="color: #3498db; font-size: 1rem;">MILESTONE: MVP Ready</strong>
                            <br><span style="color: rgba(255,255,255,0.8); font-size: 0.8rem;">Service methodology, compliance framework, delivery tools</span>
                        </div>
                    </div>

                    <!-- Month 3: Market Entry -->
                    <div style="background: rgba(39,174,96,0.1); border: 2px solid #27ae60; padding: 25px; border-radius: 12px; position: relative;">
                        <div style="position: absolute; top: -12px; left: 25px; background: #27ae60; color: white; padding: 6px 15px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">🎯 MONTH 3</div>
                        <div style="display: flex; align-items: center; margin-bottom: 20px;">
                            <div style="font-size: 3rem; margin-right: 15px;">🚁</div>
                            <div>
                                <h4 style="color: #27ae60; font-size: 1.4rem; margin-bottom: 5px; font-weight: 700;">Market Entry</h4>
                                <p style="color: rgba(255,255,255,0.8); font-size: 0.9rem;">Land first pilot customers and revenue</p>
                            </div>
                        </div>
                        
                        <div style="background: rgba(39,174,96,0.15); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                            <h5 style="color: #27ae60; font-size: 1rem; margin-bottom: 10px;">🎪 Launch Activities (Days 61-90)</h5>
                            <ul style="color: rgba(255,255,255,0.9); font-size: 0.8rem; line-height: 1.4; margin: 0; padding-left: 15px;">
                                <li>First pilot customer signed & project initiated</li>
                                <li>Healthcare vertical market positioning</li>
                                <li>Industry conference & networking presence</li>
                                <li>Thought leadership content creation</li>
                                <li>Partnership pipeline development</li>
                            </ul>
                        </div>
                        
                        <div style="background: rgba(39,174,96,0.2); padding: 12px; border-radius: 6px; margin-top: 15px; text-align: center;">
                            <strong style="color: #27ae60; font-size: 1rem;">MILESTONE: First Revenue</strong>
                            <br><span style="color: rgba(255,255,255,0.8); font-size: 0.8rem;">1-2 pilot customers, $25-50k initial contracts</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Success Metrics & KPIs -->
            <div style="background: rgba(0,255,136,0.1); border: 2px solid #00ff88; padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="font-size: 1.7rem; margin-bottom: 25px; color: #00ff88; text-align: center;">📊 Year 1 Success Metrics: The Proof Points</h3>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; margin-bottom: 25px;">
                    
                    <!-- Financial Metrics -->
                    <div style="background: rgba(0,255,136,0.15); border: 2px solid #00ff88; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #00ff88; font-size: 1.3rem; margin-bottom: 20px; text-align: center;">💰 Financial Success Metrics</h4>
                        <div style="space-y: 15px;">
                            <div style="background: rgba(0,255,136,0.2); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: #00ff88; font-size: 1.1rem;">Revenue Target</strong>
                                    <span style="background: #00ff88; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">$500K ARR</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Monthly recurring revenue growth to break-even preparation</p>
                            </div>
                            
                            <div style="background: rgba(0,255,136,0.2); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: #00ff88; font-size: 1.1rem;">Gross Margin</strong>
                                    <span style="background: #00ff88; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">>70%</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Premium pricing validation through value delivery</p>
                            </div>
                            
                            <div style="background: rgba(0,255,136,0.2); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: #00ff88; font-size: 1.1rem;">Customer Acquisition Cost</strong>
                                    <span style="background: #00ff88; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;"><$15K</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Enterprise sales efficiency with 6-month payback</p>
                            </div>
                            
                            <div style="background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%); padding: 15px; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: white; font-size: 1.2rem;">Funding Secured</strong>
                                    <span style="background: rgba(255,255,255,0.3); color: white; padding: 6px 12px; border-radius: 12px; font-size: 0.9rem; font-weight: 700;">$2M Series A</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.95); font-size: 0.9rem; margin: 0; font-weight: 600;">Growth capital for 18-month runway and team scaling</p>
                            </div>
                        </div>
                    </div>

                    <!-- Operational Metrics -->
                    <div style="background: rgba(30,144,255,0.1); border: 2px solid #1e90ff; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #1e90ff; font-size: 1.3rem; margin-bottom: 20px; text-align: center;">⚙️ Operational Success Metrics</h4>
                        <div style="space-y: 15px;">
                            <div style="background: rgba(30,144,255,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: #1e90ff; font-size: 1.1rem;">Customer Count</strong>
                                    <span style="background: #1e90ff; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">8-12 Customers</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Pilot to production pipeline with reference customers</p>
                            </div>
                            
                            <div style="background: rgba(30,144,255,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: #1e90ff; font-size: 1.1rem;">Success Rate</strong>
                                    <span style="background: #1e90ff; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">95%+</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Implementation success rate for reputation building</p>
                            </div>
                            
                            <div style="background: rgba(30,144,255,0.15); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: #1e90ff; font-size: 1.1rem;">Team Size</strong>
                                    <span style="background: #1e90ff; color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">8 People</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem; margin: 0;">Specialized roles covering all key capabilities</p>
                            </div>
                            
                            <div style="background: linear-gradient(135deg, #1e90ff 0%, #3498db 100%); padding: 15px; border-radius: 8px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong style="color: white; font-size: 1.2rem;">Market Position</strong>
                                    <span style="background: rgba(255,255,255,0.3); color: white; padding: 6px 12px; border-radius: 12px; font-size: 0.9rem; font-weight: 700;">Top 3 Healthcare</span>
                                </div>
                                <p style="color: rgba(255,255,255,0.95); font-size: 0.9rem; margin: 0; font-weight: 600;">Recognized leader in healthcare AI integration vertical</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(255,215,0,0.2); border-left: 4px solid #ffd700; padding: 20px; border-radius: 10px;">
                    <h4 style="color: #ffd700; font-size: 1.3rem; margin-bottom: 15px; text-align: center;">🏆 The Entrepreneurial Imperative</h4>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; text-align: center;">
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">⏰</div>
                            <h5 style="color: #ffd700; font-size: 0.9rem; margin-bottom: 5px;">Time-Sensitive</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">24-month window is closing fast</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">💰</div>
                            <h5 style="color: #ffd700; font-size: 0.9rem; margin-bottom: 5px;">Proven Opportunity</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">$6.2B SOM with validated demand</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">🚀</div>
                            <h5 style="color: #ffd700; font-size: 0.9rem; margin-bottom: 5px;">Ready to Execute</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">Blueprint complete, time to build</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Final Call to Action -->
            <div style="background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%); padding: 40px; border-radius: 15px; margin: 25px 0; text-align: center; position: relative;">
                <div style="position: absolute; top: -2px; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #ffd23f, #c0392b, #ffd23f); animation: pulse 2s infinite;"></div>
                <h3 style="color: white; font-size: 2.2rem; margin-bottom: 25px; font-weight: 800;">🚨 THE MOMENT OF TRUTH</h3>
                
                <div style="background: rgba(255,255,255,0.2); padding: 30px; border-radius: 12px; margin-bottom: 25px;">
                    <p style="font-size: 1.4rem; color: white; line-height: 1.6; margin-bottom: 20px; font-weight: 600;">
                        Every slide in this presentation proves one fundamental truth: <br>
                        <strong style="color: #ffd23f; font-size: 1.6rem;">The $6.2B AI integration services opportunity exists TODAY.</strong>
                    </p>
                    
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 25px 0;">
                        <div style="background: rgba(255,255,255,0.15); padding: 20px; border-radius: 10px;">
                            <div style="font-size: 2.5rem; margin-bottom: 10px;">📊</div>
                            <h4 style="color: #ffd23f; font-size: 1.1rem; margin-bottom: 8px;">Market Validated</h4>
                            <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem;">$138B pain, 4:1 demand/supply gap</p>
                        </div>
                        <div style="background: rgba(255,255,255,0.15); padding: 20px; border-radius: 10px;">
                            <div style="font-size: 2.5rem; margin-bottom: 10px;">🏰</div>
                            <h4 style="color: #ffd23f; font-size: 1.1rem; margin-bottom: 8px;">Strategy Complete</h4>
                            <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem;">5 pillars, blue ocean positioning</p>
                        </div>
                        <div style="background: rgba(255,255,255,0.15); padding: 20px; border-radius: 10px;">
                            <div style="font-size: 2.5rem; margin-bottom: 10px;">🚀</div>
                            <h4 style="color: #ffd23f; font-size: 1.1rem; margin-bottom: 8px;">Execution Ready</h4>
                            <p style="color: rgba(255,255,255,0.9); font-size: 0.9rem;">SMART goals, 90-day sprint plan</p>
                        </div>
                    </div>
                    
                    <p style="font-size: 1.3rem; color: white; line-height: 1.5; font-weight: 700;">
                        In 24 months, this window closes forever. <br>
                        The question isn't whether this market exists — it's whether <strong style="color: #ffd23f;">WE</strong> will seize it.
                    </p>
                </div>
                
                <div style="background: rgba(255,215,0,0.2); border: 3px solid #ffd700; padding: 25px; border-radius: 12px;">
                    <h4 style="color: #ffd700; font-size: 1.8rem; margin-bottom: 15px; font-weight: 800;">🎯 READY TO BUILD THE FUTURE?</h4>
                    <p style="font-size: 1.2rem; color: white; margin-bottom: 20px; font-weight: 600;">
                        The analysis is complete. The strategy is proven. The opportunity is NOW.
                    </p>
                    <div style="background: linear-gradient(135deg, #ffd700 0%, #f39c12 100%); padding: 15px; border-radius: 8px; margin-top: 15px;">
                        <p style="font-size: 1.1rem; color: #2c3e50; font-weight: 800; margin: 0;">
                            👑 Let's build the AI integration services company of the future — starting tomorrow. 👑
                        </p>
                    </div>
                </div>
            </div>

            <!-- Video Pause Point -->
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); border: 3px solid var(--siso-yellow); padding: 20px; border-radius: 15px; margin: 25px 0; position: relative;">
                <div style="position: absolute; top: -12px; left: 25px; background: var(--siso-yellow); color: var(--siso-black); padding: 6px 15px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">🎬 END SCENE</div>
                <h4 style="color: var(--siso-yellow); font-size: 1.4rem; margin: 15px 0 15px 0; text-align: center;">The Strategic Imperative: Act Now or Watch Others Win</h4>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.9); text-align: center; line-height: 1.5; font-weight: 500;">
                    Every entrepreneur faces this moment: when analysis ends and action begins. The $6.2B opportunity won't wait.
                    <br><br><strong style="color: var(--siso-yellow);">Final Question:</strong> Are you ready to transform this blueprint into reality?
                </p>
            </div>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'market-window-chart',
        options: {
            type: 'line',
            data: {
                labels: [
                    'Today', '6 months', '12 months', '18 months', '24 months', '30 months', '36 months'
                ],
                datasets: [
                    {
                        label: 'Market Adoption (%)',
                        data: [78, 80, 82, 84, 85, 88, 90],
                        borderColor: '#c0392b',
                        backgroundColor: 'rgba(192, 57, 43, 0.2)',
                        borderWidth: 4,
                        pointBackgroundColor: '#c0392b',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6,
                        fill: true
                    },
                    {
                        label: 'Opportunity Size ($B)',
                        data: [6.2, 5.8, 5.2, 4.1, 2.8, 1.5, 0.3],
                        borderColor: '#e74c3c',
                        backgroundColor: 'rgba(231, 76, 60, 0.1)',
                        borderWidth: 3,
                        pointBackgroundColor: '#e74c3c',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 5,
                        yAxisID: 'y1',
                        borderDash: [5, 5]
                    },
                    {
                        label: 'Entry Difficulty (1-10)',
                        data: [3, 4, 5, 7, 8, 9, 10],
                        borderColor: '#f39c12',
                        backgroundColor: 'rgba(243, 156, 18, 0.1)',
                        borderWidth: 3,
                        pointBackgroundColor: '#f39c12',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 5,
                        yAxisID: 'y2'
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Market Window Analysis: The 24-Month Countdown to Opportunity Closure',
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
                                const dataset = context.dataset.label;
                                const value = context.parsed.y;
                                
                                if (dataset === 'Market Adoption (%)') {
                                    return `Adoption: ${value}%`;
                                } else if (dataset === 'Opportunity Size ($B)') {
                                    return `Opportunity: $${value}B`;
                                } else {
                                    return `Entry Difficulty: ${value}/10`;
                                }
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: { 
                            display: true, 
                            text: 'Timeline', 
                            color: '#ffffff',
                            font: { size: 14 }
                        },
                        ticks: { 
                            color: '#ffffff'
                        },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    y: {
                        title: { 
                            display: true, 
                            text: 'Market Adoption (%)', 
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
                        min: 70,
                        max: 95
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: { 
                            display: true, 
                            text: 'Opportunity Size ($B)', 
                            color: '#ffffff',
                            font: { size: 14 }
                        },
                        ticks: { 
                            color: '#ffffff',
                            callback: function(value) {
                                return '$' + value + 'B';
                            }
                        },
                        grid: { 
                            drawOnChartArea: false,
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        min: 0,
                        max: 7
                    },
                    y2: {
                        type: 'linear',
                        display: false,
                        min: 0,
                        max: 10
                    }
                },
                interaction: {
                    intersect: false
                }
            }
        }
    }
};