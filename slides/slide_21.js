// SLIDE 21: The Implementation Crisis (1 min)
export const slide21 = {
    title: "The Implementation Crisis",
    singleColumn: true,
    content: `
        <h2>The Implementation Crisis</h2>
        <h3>Comprehensive Failure Analysis with Root Cause Breakdown</h3>
        <div class="chart-container">
            <canvas id="failure-waterfall-chart"></canvas>
        </div>
        <div class="stats-grid">
            <div class="stat-card" data-references='["Gartner Inc. (2024) \\"AI Implementation Success Factors\\" Research Report"]'>
                <div class="number">60%</div>
                <div class="label">Projects Fail<br><small>Never Reach Production</small></div>
            </div>
            <div class="stat-card">
                <div class="number">18mo</div>
                <div class="label">Average Timeline<br><small>Implementation Duration</small></div>
            </div>
            <div class="stat-card">
                <div class="number">$2.3M</div>
                <div class="label">Average Loss<br><small>Per Failed Project</small></div>
            </div>
            <div class="stat-card" data-references='["Deloitte (2024) \\"State of AI in Enterprise\\" Global Survey"]'>
                <div class="number">73%</div>
                <div class="label">Skills Shortage<br><small>Report Capability Gaps</small></div>
            </div>
        </div>
        <div class="two-column">
            <div class="column">
                <h4>🚫 Primary Failure Causes:</h4>
                <ul style="text-align: left;">
                    <li><strong>Lack of Expertise (35%):</strong> Insufficient AI/ML knowledge</li>
                    <li><strong>Poor Data Quality (28%):</strong> Inadequate data preparation</li>
                    <li><strong>Compliance Issues (18%):</strong> Regulatory non-compliance</li>
                    <li><strong>Integration Problems (12%):</strong> System compatibility</li>
                    <li><strong>Budget Overruns (7%):</strong> Underestimated costs</li>
                </ul>
            </div>
            <div class="column">
                <h4>💰 Economic Impact Analysis:</h4>
                <ul style="text-align: left;">
                    <li><strong>Direct Costs:</strong> $2.3M average project investment</li>
                    <li><strong>Opportunity Cost:</strong> 18-month competitive disadvantage</li>
                    <li><strong>Revenue Impact:</strong> 40% below growth targets</li>
                    <li><strong>Market Share Loss:</strong> Competitors gain advantage</li>
                    <li><strong>Total Cost:</strong> $138B annually across all failures</li>
                </ul>
            </div>
        </div>
        <div class="highlight">
            <h4>⚡ Market Opportunity Quantification:</h4>
            <p>60% failure rate × $2.3M average cost × thousands of projects = $138B annual market pain. 
            Our solution addresses root causes: expertise gaps, compliance complexity, and integration challenges.</p>
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
                    label: 'Project Attrition',
                    data: [100, -35, -28, -18, -12, -7, 40],
                    backgroundColor: ['#1a1a1a', '#ff6b35', '#ff6b35', '#ff6b35', '#ff6b35', '#ff6b35', '#ffd23f'],
                    borderColor: '#ffffff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: 'AI Project Attrition: From Start to Success',
                        color: '#ffffff'
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        title: { display: true, text: 'Projects (%)', color: '#ffffff' },
                        ticks: { color: '#ffffff' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    },
                    x: {
                        ticks: { 
                            color: '#ffffff',
                            maxRotation: 45
                        },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' }
                    }
                }
            }
        }
    }
};