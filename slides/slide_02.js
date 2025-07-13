// SLIDE 2: The AI Revolution Timeline (1 min)
export const slide02 = {
    title: "The AI Revolution Timeline",
    singleColumn: true,
    content: `
        <div style="height: calc(100vh - 140px); display: flex; flex-direction: column; justify-content: flex-start; padding: 40px; background: var(--siso-black); margin: 0; box-sizing: border-box; overflow: auto; width: 100%; position: relative;">
            
            <!-- Header Section -->
            <div style="text-align: center; margin-bottom: 40px;">
                <h1 style="font-size: 3rem; font-weight: 800; margin-bottom: 15px; background: var(--siso-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                    The AI Revolution Timeline
                </h1>
                <p style="font-size: 1.3rem; color: rgba(255,255,255,0.8); margin-bottom: 20px;">
                    From Innovation to Mass Adoption: Understanding the Acceleration
                </p>
                <div style="height: 3px; width: 150px; background: var(--siso-gradient); margin: 0 auto; border-radius: 2px;"></div>
            </div>

            <!-- Timeline Visualization -->
            <div style="background: rgba(255,255,255,0.05); padding: 30px; border-radius: 15px; margin: 30px 0;">
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; align-items: center;">
                    
                    <!-- 2020 -->
                    <div style="text-align: center; position: relative;">
                        <div style="background: var(--siso-gradient); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; box-shadow: 0 8px 20px rgba(255,107,53,0.4);">
                            <span style="font-size: 1.5rem; font-weight: 900; color: white;">2020</span>
                        </div>
                        <h3 style="font-size: 1.4rem; color: var(--siso-orange); margin-bottom: 10px;">ChatGPT-3 Launch</h3>
                        <p style="font-size: 1rem; color: rgba(255,255,255,0.8);">OpenAI breakthrough moment<br>Foundation of modern AI</p>
                    </div>

                    <!-- 2024 -->
                    <div style="text-align: center; position: relative;">
                        <div style="background: var(--siso-gradient); width: 100px; height: 100px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; box-shadow: 0 12px 25px rgba(255,107,53,0.5); border: 3px solid var(--siso-yellow);">
                            <span style="font-size: 1.8rem; font-weight: 900; color: white;">2024</span>
                        </div>
                        <h3 style="font-size: 1.6rem; color: var(--siso-yellow); margin-bottom: 10px;">78% Enterprise Adoption</h3>
                        <p style="font-size: 1.1rem; color: rgba(255,255,255,0.9); font-weight: 600;">Late Majority Phase Reached<br><strong>We Are Here</strong></p>
                    </div>

                    <!-- 2032 -->
                    <div style="text-align: center; position: relative;">
                        <div style="background: linear-gradient(135deg, #666666 0%, #999999 100%); width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; border: 2px dashed rgba(255,255,255,0.5);">
                            <span style="font-size: 1.5rem; font-weight: 900; color: white;">2032</span>
                        </div>
                        <h3 style="font-size: 1.4rem; color: rgba(255,255,255,0.7); margin-bottom: 10px;">95% Predicted Adoption</h3>
                        <p style="font-size: 1rem; color: rgba(255,255,255,0.6);">Near-complete saturation<br>Market consolidation</p>
                    </div>

                </div>
            </div>

            <!-- Key Statistics -->
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin: 40px 0;">
                <div style="background: var(--siso-gradient); padding: 25px; border-radius: 12px; text-align: center; box-shadow: 0 8px 20px rgba(255,107,53,0.3);" data-references='["McKinsey Global Institute (2024) \\"The state of AI in 2024: McKinsey Global Survey\\" McKinsey & Company"]'>
                    <div style="font-size: 2.5rem; font-weight: 900; color: white; margin-bottom: 8px;">78%</div>
                    <div style="font-size: 1rem; color: rgba(255,255,255,0.9); font-weight: 600;">Current Enterprise Adoption</div>
                    <div style="font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-top: 5px;">McKinsey (2024)</div>
                </div>
                <div style="background: var(--siso-gradient); padding: 25px; border-radius: 12px; text-align: center; box-shadow: 0 8px 20px rgba(255,107,53,0.3);" data-references='["Crunchbase (2024) \\"Global AI Investment Report\\" Q3 2024"]'>
                    <div style="font-size: 2.2rem; font-weight: 900; color: white; margin-bottom: 8px;">$131.5B</div>
                    <div style="font-size: 1rem; color: rgba(255,255,255,0.9); font-weight: 600;">Annual Investment 2024</div>
                    <div style="font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-top: 5px;">Global AI Funding</div>
                </div>
                <div style="background: var(--siso-gradient); padding: 25px; border-radius: 12px; text-align: center; box-shadow: 0 8px 20px rgba(255,107,53,0.3);">
                    <div style="font-size: 2.5rem; font-weight: 900; color: white; margin-bottom: 8px;">136%</div>
                    <div style="font-size: 1rem; color: rgba(255,255,255,0.9); font-weight: 600;">Investment Growth Rate</div>
                    <div style="font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-top: 5px;">Year-over-Year</div>
                </div>
                <div style="background: var(--siso-gradient); padding: 25px; border-radius: 12px; text-align: center; box-shadow: 0 8px 20px rgba(255,107,53,0.3);">
                    <div style="font-size: 2.5rem; font-weight: 900; color: white; margin-bottom: 8px;">24mo</div>
                    <div style="font-size: 1rem; color: rgba(255,255,255,0.9); font-weight: 600;">Strategic Window</div>
                    <div style="font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-top: 5px;">Opportunity Timeline</div>
                </div>
            </div>

            <!-- Why This Matters -->
            <div style="background: rgba(255,210,63,0.1); border: 2px solid var(--siso-yellow); padding: 25px; border-radius: 12px; margin-top: 30px;">
                <h3 style="font-size: 1.4rem; color: var(--siso-yellow); margin-bottom: 15px;">🕰️ Why This Timeline Matters</h3>
                <p style="font-size: 1.1rem; line-height: 1.5; color: rgba(255,255,255,0.95);">
                    <strong>Argument Point 1:</strong> We are at the optimal point in Rogers' Diffusion Curve - past early adopters (2020-2022) but before late majority saturation (2027+). The 136% investment growth proves market urgency, while the 24-month window represents our last chance to establish market position before big tech consolidation.
                </p>
            </div>

        </div>
    `
};