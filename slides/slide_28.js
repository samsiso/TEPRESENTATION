// SLIDE 28: Business Model Canvas (1 min)
export const slide28 = {
    title: "Business Model Canvas",
    singleColumn: true,
    content: `
        <div style="min-height: calc(100vh - 200px); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 60px 40px; background: var(--siso-black); margin: 0; box-sizing: border-box; width: 100%;">
            <div style="margin-bottom: 40px;">
                <h1 style="font-size: 3rem; font-weight: 800; margin-bottom: 15px; background: var(--siso-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Business Model Canvas</h1>
                <p style="font-size: 1.3rem; color: rgba(255,255,255,0.8);">Complete Business Model with Revenue, Cost, and Partnership Structure</p>
            </div>
            <div style="background: rgba(255,210,63,0.1); border: 2px solid var(--siso-yellow); padding: 40px; border-radius: 15px; max-width: 1000px;">
                <!-- Revenue Streams -->
                <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-bottom: 30px;">
                    <div style="background: var(--siso-gradient); padding: 20px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 1.8rem; font-weight: 900; color: white;">60%</div>
                        <div style="font-size: 0.9rem; color: rgba(255,255,255,0.9);">Consulting Revenue</div>
                    </div>
                    <div style="background: var(--siso-gradient); padding: 20px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 1.8rem; font-weight: 900; color: white;">25%</div>
                        <div style="font-size: 0.9rem; color: rgba(255,255,255,0.9);">SaaS Revenue</div>
                    </div>
                    <div style="background: var(--siso-gradient); padding: 20px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 1.8rem; font-weight: 900; color: white;">15%</div>
                        <div style="font-size: 0.9rem; color: rgba(255,255,255,0.9);">Training Revenue</div>
                    </div>
                    <div style="background: var(--siso-gradient); padding: 20px; border-radius: 10px; text-align: center;">
                        <div style="font-size: 1.8rem; font-weight: 900; color: white;">75%</div>
                        <div style="font-size: 0.9rem; color: rgba(255,255,255,0.9);">Gross Margin</div>
                    </div>
                </div>
                
                <!-- Key Components -->
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px;">
                    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; border-left: 4px solid var(--siso-orange);">
                        <h4 style="color: var(--siso-orange); margin-bottom: 15px;">Key Partnerships</h4>
                        <ul style="text-align: left; font-size: 0.9rem; line-height: 1.4; color: rgba(255,255,255,0.9);">
                            <li>Cloud providers (AWS, Azure, GCP)</li>
                            <li>Compliance consultancies</li>
                            <li>Industry associations</li>
                            <li>Technology integrators</li>
                        </ul>
                    </div>
                    <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 10px; border-left: 4px solid var(--siso-yellow);">
                        <h4 style="color: var(--siso-yellow); margin-bottom: 15px;">Cost Structure</h4>
                        <ul style="text-align: left; font-size: 0.9rem; line-height: 1.4; color: rgba(255,255,255,0.9);">
                            <li>Team costs: 65% of revenue</li>
                            <li>Technology & tools: 10%</li>
                            <li>Sales & marketing: 15%</li>
                            <li>Operations: 10%</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
};