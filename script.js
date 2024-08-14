function showJobDetails(jobId) {
    const jobDetailsSection = document.getElementById('jobDetails');

    // Define the job details object with exact job IDs
    const jobDetails = {
        job1: {
            title: 'Area Sales Manager',
            description: `
                <p><strong>Responsibilities:</strong></p>
                <ul>
                    <li><strong>Develop and implement sales strategies to achieve area-specific sales targets and business objectives</strong></li>
                    <li><strong>Analyze market trends, consumer behavior, and competitor activities to identify opportunities for growth</strong></li>
                    <li><strong>Lead, motivate, and mentor a team of sales representatives to achieve individual and team sales goals</strong></li>
                    <li><strong>Build and maintain strong relationships with key customers, distributors, and retailers</strong></li>
                    <li><strong>Identify and explore new business opportunities, including untapped markets and potential distribution channels</strong></li>
                    <li><strong>Monitor and analyze sales performance data and prepare regular reports for senior management</strong></li>
                    <li><strong>Ensure adherence to company policies, ethical standards, and industry regulations</strong></li>
                </ul>
                <p><strong>Qualifications:</strong></p>
                <ul>
                    <li><strong>MBA in Sales, Marketing, or a related field</strong></li>
                    <li><strong>Strong leadership and team management skills</strong></li>
                    <li><strong>Excellent communication and interpersonal abilities</strong></li>
                    <li><strong>Analytical mindset with a strong understanding of market dynamics and sales strategies</strong></li>
                    <li><strong>Familiarity with FMCG sales operations and distribution channels is an advantage</strong></li>
                    <li><strong>Willingness to travel within the assigned area</strong></li>
                </ul>
                <p><strong>What We Offer:</strong></p>
                <ul>
                    <li><strong>A challenging and rewarding career with a leading FMCG brand</strong></li>
                    <li><strong>Opportunities for professional growth and development</strong></li>
                    <li><strong>A collaborative work environment that values innovation and performance</strong></li>
                    <li><strong>Competitive salary and benefits package</strong></li>
                </ul>
            `,
            applyLink: 'https://forms.gle/FLksojQgsLE8onm47' // Update to the appropriate link
        },
        job2: {
            title: 'Brand Strategist',
            description: `
                <p><strong>Responsibilities:</strong></p>
                <ul>
                    <li><strong>Assist in defining and refining the brand's vision, mission, and positioning in the market</strong></li>
                    <li><strong>Collaborate with the marketing team to develop brand guidelines and ensure consistency across all channels</strong></li>
                    <li><strong>Conduct market research to understand consumer behavior, preferences, and trends</strong></li>
                    <li><strong>Analyze competitors and industry dynamics to identify opportunities and threats</strong></li>
                    <li><strong>Assist in creating and implementing brand strategies that align with business objectives</strong></li>
                    <li><strong>Support the development of marketing campaigns, product launches, and promotional activities</strong></li>
                    <li><strong>Gather and interpret consumer feedback to inform brand strategy and improve product offerings</strong></li>
                    <li><strong>Monitor brand performance through various metrics and provide actionable insights to enhance brand equity</strong></li>
                    <li><strong>Work closely with product development, sales, and advertising teams to ensure brand alignment across all touchpoints</strong></li>
                    <li><strong>Partner with external agencies for creative development, media planning, and other brand-related activities</strong></li>
                    <li><strong>Contribute to brainstorming sessions and propose innovative ideas to enhance brand visibility and engagement</strong></li>
                    <li><strong>Stay updated on industry trends and digital marketing advancements to keep the brand strategy relevant and effective</strong></li>
                </ul>
                <p><strong>Qualifications:</strong></p>
                <ul>
                    <li><strong>MBA in Marketing, Brand Management, or a related field</strong></li>
                    <li><strong>Strong analytical and research skills with a passion for understanding consumer behavior</strong></li>
                    <li><strong>Excellent communication and presentation skills</strong></li>
                    <li><strong>Ability to think creatively and strategically</strong></li>
                    <li><strong>Strong teamwork and collaboration skills</strong></li>
                    <li><strong>Familiarity with digital marketing and social media platforms is a plus</strong></li>
                    <li><strong>Prior internship or project experience in branding or marketing is an advantage</strong></li>
                </ul>
                <p><strong>What We Offer:</strong></p>
                <ul>
                    <li><strong>An opportunity to work with a leading FMCG brand and contribute to its growth</strong></li>
                    <li><strong>A collaborative and dynamic work environment that fosters innovation</strong></li>
                    <li><strong>Professional development and training opportunities</strong></li>
                    <li><strong>Competitive compensation and benefits package</strong></li>
                </ul>
            `,
            applyLink: 'https://forms.gle/FLksojQgsLE8onm47' // Update to the appropriate link
        }
    };

    const job = jobDetails[jobId];
    if (job) {
        jobDetailsSection.innerHTML = `
            <h2>${job.title}</h2>
            ${job.description}
            <a href="${job.applyLink}" target="_blank" class="apply-btn">Apply Now</a>
        `;
    } else {
        jobDetailsSection.innerHTML = '<p>Job details not found.</p>';
    }
}
