// SLIDE 28: The Revenue Engine - Business Model Canvas Blueprint (2 min)
export const slide28 = {
    title: "The Revenue Engine: Business Model Canvas Blueprint",
    singleColumn: true,
    content: `
        <div style="min-height: calc(100vh - 140px); display: flex; flex-direction: column; justify-content: flex-start; padding: 40px; background: var(--siso-black); margin: 0; box-sizing: border-box; width: 100%; position: relative;">
            
            <!-- Revenue Engine Banner -->
            <div style="background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%); padding: 18px; border-radius: 12px; text-align: center; margin-bottom: 30px; box-shadow: 0 6px 20px rgba(46,204,113,0.3); position: relative;">
                <div style="position: absolute; top: -2px; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #2ecc71, #ffd23f, #2ecc71); animation: pulse 3s infinite;"></div>
                <span style="font-size: 1.3rem; font-weight: 800; color: white; text-transform: uppercase; letter-spacing: 1px;">💰 THE REVENUE ENGINE: 75% Margin × 3 Streams = $15M ARR Blueprint</span>
            </div>

            <!-- Header Section -->
            <div style="text-align: center; margin-bottom: 35px;">
                <h1 style="font-size: 3.4rem; font-weight: 900; margin-bottom: 20px; background: var(--siso-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1.1;">
                    The Revenue Engine
                </h1>
                <h2 style="font-size: 2.2rem; font-weight: 700; color: #2ecc71; margin-bottom: 15px;">
                    Business Model Canvas: From $500k to $15M ARR in 36 Months
                </h2>
                <div style="height: 4px; width: 360px; background: var(--siso-gradient); margin: 20px auto; border-radius: 2px; box-shadow: 0 2px 10px rgba(255,107,53,0.4);"></div>
                <p style="font-size: 1.4rem; color: rgba(255,255,255,0.95); font-weight: 600;">
                    🎯 Three revenue streams + premium pricing = sustainable growth engine
                </p>
            </div>

            <!-- Revenue Model Dashboard -->
            <div style="background: rgba(46,204,113,0.1); border: 2px solid #2ecc71; padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="text-align: center; color: #2ecc71; font-size: 1.8rem; margin-bottom: 25px;">💰 Revenue Streams Breakdown</h3>
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 25px;" data-references='["Harvard Business Review (2024) \"AI Services Business Models\"", "McKinsey (2024) \"Professional Services Revenue Analysis\""]'>
                    
                    <!-- Implementation Services -->
                    <div style="background: rgba(46,204,113,0.15); border: 2px solid #2ecc71; padding: 20px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #2ecc71; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🔧 CORE</div>
                        <div style="font-size: 3rem; font-weight: 900; color: #2ecc71; margin-bottom: 10px;">60%</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">Implementation</p>
                        <p style="font-size: 0.7rem; color: rgba(255,255,255,0.7);">$9M ARR at scale</p>
                    </div>

                    <!-- Ongoing Support -->
                    <div style="background: rgba(46,204,113,0.15); border: 2px solid #2ecc71; padding: 20px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #2ecc71; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">🔄 RECURRING</div>
                        <div style="font-size: 3rem; font-weight: 900; color: #2ecc71; margin-bottom: 10px;">25%</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">Support & SaaS</p>
                        <p style="font-size: 0.7rem; color: rgba(255,255,255,0.7);">$3.75M ARR recurring</p>
                    </div>

                    <!-- Training & Certification -->
                    <div style="background: rgba(46,204,113,0.15); border: 2px solid #2ecc71; padding: 20px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #2ecc71; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">📚 SCALE</div>
                        <div style="font-size: 3rem; font-weight: 900; color: #2ecc71; margin-bottom: 10px;">15%</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">Training</p>
                        <p style="font-size: 0.7rem; color: rgba(255,255,255,0.7);">$2.25M ARR high-margin</p>
                    </div>

                    <!-- Gross Margin -->
                    <div style="background: rgba(46,204,113,0.15); border: 2px solid #2ecc71; padding: 20px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #2ecc71; color: white; padding: 6px 12px; border-radius: 15px; font-size: 0.8rem; font-weight: 700;">📈 MARGIN</div>
                        <div style="font-size: 3rem; font-weight: 900; color: #2ecc71; margin-bottom: 10px;">75%</div>
                        <p style="font-size: 0.9rem; color: rgba(255,255,255,0.9); font-weight: 600;">Gross Margin</p>
                        <p style="font-size: 0.7rem; color: rgba(255,255,255,0.7);">Premium pricing power</p>
                    </div>
                </div>
            </div>

            <!-- Business Model Canvas Chart -->
            <div class="chart-container" data-references='["Osterwalder & Pigneur (2010) \"Business Model Generation\"", "BCG (2024) \"AI Services Revenue Models\""]'>
                <canvas id="business-model-chart"></canvas>
            </div>

            <!-- Business Model Canvas Framework -->
            <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="font-size: 1.7rem; margin-bottom: 25px; color: var(--siso-yellow); text-align: center;">🏗️ The 9-Block Business Model Canvas</h3>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 25px;">
                    
                    <!-- Key Partnerships -->
                    <div style="background: rgba(46,204,113,0.1); border: 2px solid #2ecc71; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #2ecc71; font-size: 1.2rem; margin-bottom: 15px; text-align: center;">🤝 Key Partnerships</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0;">
                            <li>• <strong>Cloud Providers:</strong> AWS, Azure, GCP strategic alliances</li>
                            <li>• <strong>Compliance Firms:</strong> Legal and audit partnerships</li>
                            <li>• <strong>Industry Associations:</strong> Healthcare, finance vertical access</li>
                            <li>• <strong>System Integrators:</strong> Implementation capability expansion</li>
                            <li>• <strong>Academic Institutions:</strong> Research and talent pipeline</li>
                        </ul>
                    </div>

                    <!-- Key Activities -->
                    <div style="background: rgba(46,204,113,0.1); border: 2px solid #2ecc71; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #2ecc71; font-size: 1.2rem; margin-bottom: 15px; text-align: center;">⚡ Key Activities</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0;">
                            <li>• <strong>Solution Design:</strong> Custom AI architecture development</li>
                            <li>• <strong>Implementation:</strong> End-to-end deployment services</li>
                            <li>• <strong>Compliance Management:</strong> Regulatory framework integration</li>
                            <li>• <strong>Training Delivery:</strong> Team capability development</li>
                            <li>• <strong>Ongoing Support:</strong> Maintenance and optimization</li>
                        </ul>
                    </div>

                    <!-- Key Resources -->
                    <div style="background: rgba(46,204,113,0.1); border: 2px solid #2ecc71; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #2ecc71; font-size: 1.2rem; margin-bottom: 15px; text-align: center;">💎 Key Resources</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0;">
                            <li>• <strong>Expert Team:</strong> 25-person specialized workforce</li>
                            <li>• <strong>IP & Frameworks:</strong> Proprietary compliance methodologies</li>
                            <li>• <strong>Industry Relationships:</strong> Regulatory body connections</li>
                            <li>• <strong>Technology Stack:</strong> Multi-cloud deployment platform</li>
                            <li>• <strong>Brand Reputation:</strong> 95% success rate track record</li>
                        </ul>
                    </div>

                    <!-- Value Propositions -->
                    <div style="background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%); padding: 25px; border-radius: 12px; text-align: center; position: relative;">
                        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #ffd23f; color: black; padding: 6px 15px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">💡 VALUE CORE</div>
                        <h4 style="color: white; font-size: 1.4rem; margin-bottom: 20px;">Value Propositions</h4>
                        <div style="background: rgba(255,255,255,0.2); padding: 20px; border-radius: 10px;">
                            <p style="color: white; font-size: 1rem; font-weight: 600; line-height: 1.4; margin-bottom: 15px;">
                                "Compliance-first AI integration with 95% success guarantee and 6-month deployment timeline"
                            </p>
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
                                <div style="background: rgba(255,255,255,0.15); padding: 10px; border-radius: 6px;">
                                    <div style="font-size: 0.9rem; font-weight: 700; color: white;">Risk Elimination</div>
                                    <div style="font-size: 0.7rem; color: rgba(255,255,255,0.9);">95% vs 40% industry</div>
                                </div>
                                <div style="background: rgba(255,255,255,0.15); padding: 10px; border-radius: 6px;">
                                    <div style="font-size: 0.9rem; font-weight: 700; color: white;">Speed Advantage</div>
                                    <div style="font-size: 0.7rem; color: rgba(255,255,255,0.9);">6mo vs 18mo market</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Customer Relationships -->
                    <div style="background: rgba(46,204,113,0.1); border: 2px solid #2ecc71; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #2ecc71; font-size: 1.2rem; margin-bottom: 15px; text-align: center;">❤️ Customer Relationships</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0;">
                            <li>• <strong>White-Glove Service:</strong> Dedicated project teams</li>
                            <li>• <strong>Long-term Partnership:</strong> Multi-year strategic relationships</li>
                            <li>• <strong>Community Building:</strong> User groups and best practices</li>
                            <li>• <strong>Outcome Guarantee:</strong> Success-based engagement model</li>
                            <li>• <strong>Continuous Support:</strong> 24/7 monitoring and optimization</li>
                        </ul>
                    </div>

                    <!-- Channels -->
                    <div style="background: rgba(46,204,113,0.1); border: 2px solid #2ecc71; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #2ecc71; font-size: 1.2rem; margin-bottom: 15px; text-align: center;">📢 Channels</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0;">
                            <li>• <strong>Direct Sales:</strong> Enterprise relationship management</li>
                            <li>• <strong>Partner Network:</strong> Channel partner referrals</li>
                            <li>• <strong>Industry Events:</strong> Conference and trade show presence</li>
                            <li>• <strong>Digital Marketing:</strong> Thought leadership content</li>
                            <li>• <strong>Regulatory Bodies:</strong> Compliance community engagement</li>
                        </ul>
                    </div>

                    <!-- Customer Segments -->
                    <div style="background: rgba(46,204,113,0.1); border: 2px solid #2ecc71; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #2ecc71; font-size: 1.2rem; margin-bottom: 15px; text-align: center;">🎯 Customer Segments</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0;">
                            <li>• <strong>Healthcare Systems:</strong> Hospitals, health insurers</li>
                            <li>• <strong>Financial Services:</strong> Banks, investment firms</li>
                            <li>• <strong>Legal Firms:</strong> Large law practices, corporate legal</li>
                            <li>• <strong>Manufacturing:</strong> Regulated industrial companies</li>
                            <li>• <strong>Government:</strong> Federal and state agencies</li>
                        </ul>
                    </div>

                    <!-- Cost Structure -->
                    <div style="background: rgba(255,107,53,0.1); border: 2px solid var(--siso-orange); padding: 20px; border-radius: 12px;">
                        <h4 style="color: var(--siso-orange); font-size: 1.2rem; margin-bottom: 15px; text-align: center;">💰 Cost Structure</h4>
                        <div style="space-y: 10px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <span style="color: rgba(255,255,255,0.9); font-size: 0.85rem;">Team Costs (65%)</span>
                                <span style="color: var(--siso-orange); font-size: 0.85rem; font-weight: 700;">$9.75M</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <span style="color: rgba(255,255,255,0.9); font-size: 0.85rem;">Sales & Marketing (15%)</span>
                                <span style="color: var(--siso-orange); font-size: 0.85rem; font-weight: 700;">$2.25M</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <span style="color: rgba(255,255,255,0.9); font-size: 0.85rem;">Technology & Tools (10%)</span>
                                <span style="color: var(--siso-orange); font-size: 0.85rem; font-weight: 700;">$1.5M</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <span style="color: rgba(255,255,255,0.9); font-size: 0.85rem;">Operations (10%)</span>
                                <span style="color: var(--siso-orange); font-size: 0.85rem; font-weight: 700;">$1.5M</span>
                            </div>
                            <div style="height: 1px; background: var(--siso-orange); margin: 10px 0;"></div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="color: var(--siso-orange); font-size: 0.9rem; font-weight: 700;">Total Costs</span>
                                <span style="color: var(--siso-orange); font-size: 0.9rem; font-weight: 700;">$15M</span>
                            </div>
                        </div>
                    </div>

                    <!-- Revenue Streams -->
                    <div style="background: rgba(0,255,136,0.1); border: 2px solid #00ff88; padding: 20px; border-radius: 12px;">
                        <h4 style="color: #00ff88; font-size: 1.2rem; margin-bottom: 15px; text-align: center;">💎 Revenue Streams</h4>
                        <div style="space-y: 10px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <span style="color: rgba(255,255,255,0.9); font-size: 0.85rem;">Implementation (60%)</span>
                                <span style="color: #00ff88; font-size: 0.85rem; font-weight: 700;">$9M</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <span style="color: rgba(255,255,255,0.9); font-size: 0.85rem;">Support & SaaS (25%)</span>
                                <span style="color: #00ff88; font-size: 0.85rem; font-weight: 700;">$3.75M</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <span style="color: rgba(255,255,255,0.9); font-size: 0.85rem;">Training (15%)</span>
                                <span style="color: #00ff88; font-size: 0.85rem; font-weight: 700;">$2.25M</span>
                            </div>
                            <div style="height: 1px; background: #00ff88; margin: 10px 0;"></div>
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <span style="color: #00ff88; font-size: 0.9rem; font-weight: 700;">Total Revenue</span>
                                <span style="color: #00ff88; font-size: 0.9rem; font-weight: 700;">$15M</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Business Model Validation -->
            <div style="background: rgba(30,144,255,0.1); border: 2px solid #1e90ff; padding: 30px; border-radius: 15px; margin: 25px 0;">
                <h3 style="font-size: 1.7rem; margin-bottom: 25px; color: #1e90ff; text-align: center;">✅ Business Model Validation Framework</h3>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 25px;">
                    
                    <!-- Market Validation -->
                    <div style="background: rgba(30,144,255,0.15); border: 2px solid #1e90ff; padding: 20px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2.5rem; color: #1e90ff; margin-bottom: 10px;">📊</div>
                        <h4 style="color: #1e90ff; font-size: 1.1rem; margin-bottom: 15px; font-weight: 700;">MARKET VALIDATION</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0; text-align: left;">
                            <li>• $123B TAM with 18.5% capture target</li>
                            <li>• 78% market adoption = late majority</li>
                            <li>• 4:1 demand/supply skills gap</li>
                            <li>• $138B annual failure pain</li>
                        </ul>
                        <div style="background: rgba(30,144,255,0.2); padding: 8px; border-radius: 6px; margin-top: 10px;">
                            <strong style="color: #1e90ff; font-size: 0.8rem;">Market timing optimal</strong>
                        </div>
                    </div>

                    <!-- Financial Validation -->
                    <div style="background: rgba(30,144,255,0.15); border: 2px solid #1e90ff; padding: 20px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2.5rem; color: #1e90ff; margin-bottom: 10px;">💰</div>
                        <h4 style="color: #1e90ff; font-size: 1.1rem; margin-bottom: 15px; font-weight: 700;">FINANCIAL VALIDATION</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0; text-align: left;">
                            <li>• 75% gross margin vs 25% industry</li>
                            <li>• 3-stream diversified revenue</li>
                            <li>• Break-even Month 14</li>
                            <li>• 95% customer retention</li>
                        </ul>
                        <div style="background: rgba(30,144,255,0.2); padding: 8px; border-radius: 6px; margin-top: 10px;">
                            <strong style="color: #1e90ff; font-size: 0.8rem;">Unit economics proven</strong>
                        </div>
                    </div>

                    <!-- Competitive Validation -->
                    <div style="background: rgba(30,144,255,0.15); border: 2px solid #1e90ff; padding: 20px; border-radius: 12px; text-align: center;">
                        <div style="font-size: 2.5rem; color: #1e90ff; margin-bottom: 10px;">⚔️</div>
                        <h4 style="color: #1e90ff; font-size: 1.1rem; margin-bottom: 15px; font-weight: 700;">COMPETITIVE VALIDATION</h4>
                        <ul style="color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.5; list-style: none; padding: 0; text-align: left;">
                            <li>• Blue ocean positioning</li>
                            <li>• 5 differentiation pillars</li>
                            <li>• Regulatory moat building</li>
                            <li>• 24-month first-mover window</li>
                        </ul>
                        <div style="background: rgba(30,144,255,0.2); padding: 8px; border-radius: 6px; margin-top: 10px;">
                            <strong style="color: #1e90ff; font-size: 0.8rem;">Defensible position</strong>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(255,215,0,0.2); border-left: 4px solid #ffd700; padding: 20px; border-radius: 10px;">
                    <h4 style="color: #ffd700; font-size: 1.3rem; margin-bottom: 15px; text-align: center;">💰 The Revenue Engine Truth</h4>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; text-align: center;">
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">🏗️</div>
                            <h5 style="color: #ffd700; font-size: 0.9rem; margin-bottom: 5px;">Proven Model</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">9-block canvas validated across metrics</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">💎</div>
                            <h5 style="color: #ffd700; font-size: 0.9rem; margin-bottom: 5px;">Premium Margins</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">75% gross margin from value pricing</p>
                        </div>
                        <div>
                            <div style="font-size: 2rem; margin-bottom: 8px;">🚀</div>
                            <h5 style="color: #ffd700; font-size: 0.9rem; margin-bottom: 5px;">Scalable Growth</h5>
                            <p style="font-size: 0.8rem; color: rgba(255,255,255,0.8);">$500k → $15M in 36 months</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Video Pause Point -->
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%); border: 3px solid var(--siso-yellow); padding: 20px; border-radius: 15px; margin: 25px 0; position: relative;">
                <div style="position: absolute; top: -12px; left: 25px; background: var(--siso-yellow); color: var(--siso-black); padding: 6px 15px; border-radius: 15px; font-size: 0.9rem; font-weight: 700;">⏸️ PAUSE & REFLECT</div>
                <h4 style="color: var(--siso-yellow); font-size: 1.4rem; margin: 15px 0 15px 0; text-align: center;">Canvas Complete: From Strategy to Execution Blueprint</h4>
                <p style="font-size: 1.1rem; color: rgba(255,255,255,0.9); text-align: center; line-height: 1.5; font-weight: 500;">
                    The 9-block canvas transforms market opportunity into concrete business mechanics with validated unit economics.
                    <br><br><strong style="color: var(--siso-yellow);">Question:</strong> Which revenue stream offers the strongest competitive moat?
                </p>
            </div>
        </div>
    `,
    hasChart: true,
    chartConfig: {
        id: 'business-model-chart',
        options: {
            type: 'bar',
            data: {
                labels: [
                    'Year 1 Revenue',
                    'Year 2 Revenue', 
                    'Year 3 Revenue',
                    'Implementation (60%)',
                    'Support & SaaS (25%)',
                    'Training (15%)',
                    'Gross Margin',
                    'Team Costs',
                    'S&M Costs',
                    'Tech & Ops'
                ],
                datasets: [
                    {
                        label: 'Revenue Streams ($M)',
                        data: [0.5, 2, 5, 9, 3.75, 2.25, 0, 0, 0, 0],
                        backgroundColor: '#2ecc71',
                        borderColor: '#27ae60',
                        borderWidth: 2
                    },
                    {
                        label: 'Cost Structure ($M)',
                        data: [0, 0, 0, 0, 0, 0, 0, 9.75, 2.25, 3],
                        backgroundColor: '#ff6b35',
                        borderColor: '#e74c3c',
                        borderWidth: 2
                    },
                    {
                        label: 'Margin Analysis ($M)',
                        data: [0, 0, 0, 0, 0, 0, 11.25, 0, 0, 0],
                        backgroundColor: '#3498db',
                        borderColor: '#2980b9',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'Business Model Canvas: Revenue Streams, Costs & Margin Analysis',
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
                                const value = context.parsed.y;
                                if (value === 0) return null;
                                
                                if (context.datasetIndex === 0) {
                                    return `Revenue: $${value}M`;
                                } else if (context.datasetIndex === 1) {
                                    return `Cost: $${value}M`;
                                } else {
                                    return `Margin: $${value}M (75%)`;
                                }
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: { 
                            color: '#ffffff',
                            maxRotation: 45
                        },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    y: {
                        title: { 
                            display: true, 
                            text: 'Value ($M)', 
                            color: '#ffffff',
                            font: { size: 14 }
                        },
                        ticks: { 
                            color: '#ffffff',
                            callback: function(value) {
                                return '$' + value + 'M';
                            }
                        },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        beginAtZero: true,
                        max: 15
                    }
                },
                interaction: {
                    intersect: false
                }
            }
        }
    }
};