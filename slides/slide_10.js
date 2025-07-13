// SLIDE 10: Porter's Five Forces Framework (1 min)
export const slide10 = {
    title: "Porter's Five Forces Framework",
    singleColumn: true,
    content: `
        <h2>Porter's Five Forces Analysis Applied to AI Market</h2>
        <h3>Strategic Framework for Business Positioning (Porter, 1980)</h3>
        <div class="porter-diagram" style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 1fr 1fr 1fr; gap: 15px; margin: 20px 0;">
            <div></div>
            <div class="porter-box" style="background: rgba(255,107,53,0.2); padding: 15px; text-align: center; border-radius: 8px;">
                <h4>Supplier Power</h4>
                <p><strong>HIGH</strong></p>
                <p>Big Tech controls infrastructure</p>
            </div>
            <div></div>
            <div class="porter-box" style="background: rgba(255,209,63,0.2); padding: 15px; text-align: center; border-radius: 8px;">
                <h4>New Entrants</h4>
                <p><strong>HIGH</strong></p>
                <p>Low technical barriers</p>
            </div>
            <div class="porter-box" style="background: rgba(255,255,255,0.1); padding: 15px; text-align: center; border-radius: 8px; border: 2px solid #ff6b35;">
                <h4>Competitive Rivalry</h4>
                <p><strong>INTENSE</strong></p>
                <p>Fragmented market</p>
            </div>
            <div class="porter-box" style="background: rgba(255,134,89,0.2); padding: 15px; text-align: center; border-radius: 8px;">
                <h4>Substitutes</h4>
                <p><strong>MEDIUM</strong></p>
                <p>Multiple AI solutions</p>
            </div>
            <div></div>
            <div class="porter-box" style="background: rgba(255,107,53,0.2); padding: 15px; text-align: center; border-radius: 8px;">
                <h4>Buyer Power</h4>
                <p><strong>MEDIUM</strong></p>
                <p>Price sensitivity varies</p>
            </div>
            <div></div>
        </div>
        <div class="stats-grid">
            <div class="stat-card" data-references='["Porter, M.E. (1980) \\"Competitive Strategy\\" Free Press, New York"]'>
                <div class="number">HIGH</div>
                <div class="label">Supplier Power<br><small>Big Tech Dominance</small></div>
            </div>
            <div class="stat-card">
                <div class="number">MEDIUM</div>
                <div class="label">Buyer Power<br><small>Varies by Segment</small></div>
            </div>
            <div class="stat-card">
                <div class="number">HIGH</div>
                <div class="label">New Entrants<br><small>Low Barriers</small></div>
            </div>
            <div class="stat-card">
                <div class="number">INTENSE</div>
                <div class="label">Rivalry<br><small>85% Fragmented</small></div>
            </div>
        </div>
        <div class="two-column">
            <div class="column">
                <h4>🔴 Threat Analysis:</h4>
                <ul style="text-align: left;">
                    <li><strong>Platform Risk:</strong> Dependency on Big Tech APIs</li>
                    <li><strong>Price Pressure:</strong> Commoditization of basic services</li>
                    <li><strong>Scale Disadvantage:</strong> Competing with tech giants</li>
                    <li><strong>Talent Competition:</strong> Skills shortage drives costs</li>
                </ul>
            </div>
            <div class="column">
                <h4>🟢 Strategic Opportunities:</h4>
                <ul style="text-align: left;">
                    <li><strong>Vertical Specialization:</strong> Industry-specific expertise</li>
                    <li><strong>Service Differentiation:</strong> End-to-end solutions</li>
                    <li><strong>Compliance Focus:</strong> Regulatory expertise</li>
                    <li><strong>Mid-market Gap:</strong> Underserved segment</li>
                </ul>
            </div>
        </div>
    `
};