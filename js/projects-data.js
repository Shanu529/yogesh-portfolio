/* =========================================================
   PROJECTS DATA
   ---------------------------------------------------------
   This is the ONLY file you need to edit to add, remove, or
   update a project on your portfolio.

   HOW TO ADD A NEW PROJECT:
   1. Copy one of the objects below (the curly braces { ... }).
   2. Paste it inside the square brackets, separated by a comma.
   3. Update each field with your project's details.
   4. Save the file and refresh the page — script.js will
      automatically build a new project card for you.

   FIELD GUIDE:
   - title       : Project name shown at the top of the card.
   - description : 1-3 sentence summary of what the project does
                    and the business problem it solves.
   - image       : Path to a screenshot of your dashboard.
                    Put image files inside assets/projects/
   - video       : (optional) YouTube/Loom embed URL for a demo.
                    Leave as an empty string "" if you don't have one.
   - github      : Link to the project's GitHub repository.
   - linkedin    : Link to the LinkedIn post where you showcased it.
   - docs        : Link to README / case-study / documentation.
   - tech        : Array of technology tag strings, e.g. ["Power BI", "DAX"]
   - status      : Small label shown in the card header,
                    e.g. "Completed", "In Progress", "Case Study"
   ========================================================= */

const projectsData = [
  {
    title: "Telecom Customer Churn Analysis Dashboard",
    description:
      "An interactive Power BI dashboard analyzing customer churn for a telecom provider. Includes KPI cards, churn drivers by contract type and tenure, and 29 custom DAX measures to help retention teams target at-risk customers.",
    image: "assets/projects/telecom-churn.svg",
    video: "",
    github: "https://github.com/yogicode519",
    linkedin: "https://linkedin.com/in/yogesh-gariya",
    docs: "#",
    tech: ["Power BI", "DAX", "Data Cleaning", "SQL"],
    status: "Completed",
  },
  {
    title: "HR Analytics Dashboard",
    description:
      "A people-analytics dashboard tracking headcount, attrition rate, and employee satisfaction across departments. Helps HR teams spot attrition hotspots and monitor workforce trends at a glance.",
    image: "assets/projects/hr-analytics.svg",
    video: "",
    github: "https://github.com/yogicode519",
    linkedin: "https://linkedin.com/in/yogesh-gariya",
    docs: "#",
    tech: ["Power BI", "DAX", "Excel", "Data Visualization"],
    status: "Completed",
  },
  {
    title: "Bank Loan Analysis Dashboard",
    description:
      "A loan portfolio dashboard that tracks total applications, funded amounts, and good vs. bad loan ratios. Built with month-over-month trend analysis to support lending and risk decisions.",
    image: "assets/projects/bank-loan.svg",
    video: "",
    github: "https://github.com/yogicode519",
    linkedin: "https://linkedin.com/in/yogesh-gariya",
    docs: "#",
    tech: ["Power BI", "DAX", "SQL", "Dashboard Design"],
    status: "Completed",
  },
  {
    title: "Patient Health Risk Analysis Dashboard",
    description:
      "A healthcare dashboard that segments patients by risk score using BMI, age, and lifestyle indicators. Visualizes high-risk populations to support proactive care planning.",
    image: "assets/projects/patient-risk.svg",
    video: "",
    github: "https://github.com/yogicode519",
    linkedin: "https://linkedin.com/in/yogesh-gariya",
    docs: "#",
    tech: ["Power BI", "Python", "Data Cleaning", "DAX"],
    status: "Completed",
  },

  // -----------------------------------------------------
  // EXAMPLE: copy the object below (remove the // marks)
  // to add your next project.
  // -----------------------------------------------------
  //
  {
    title: "Your Next Project Title",
    description: "A short, recruiter-friendly description of what this project does and the impact it has.",
    image: "assets/projects/your-image.png",
    video: "https://www.youtube.com/embed/your-video-id",
    github: "https://github.com/yogicode519/your-repo",
    linkedin: "https://linkedin.com/in/yogesh-gariya",
    docs: "https://github.com/yogicode519/your-repo#readme",
    tech: ["Power BI", "SQL"],
    status: "In Progress",
  },
  {
    title: "Your Next Project Title",
    description: "A short, recruiter-friendly description of what this project does and the impact it has.",
    image: "assets/projects/your-image.png",
    video: "https://www.youtube.com/embed/your-video-id",
    github: "https://github.com/yogicode519/your-repo",
    linkedin: "https://linkedin.com/in/yogesh-gariya",
    docs: "https://github.com/yogicode519/your-repo#readme",
    tech: ["Power BI", "SQL"],
    status: "In Progress",
  },
  {
    title: "Your Next Project Title",
    description: "A short, recruiter-friendly description of what this project does and the impact it has.",
    image: "assets/projects/your-image.png",
    video: "https://www.youtube.com/embed/your-video-id",
    github: "https://github.com/yogicode519/your-repo",
    linkedin: "https://linkedin.com/in/yogesh-gariya",
    docs: "https://github.com/yogicode519/your-repo#readme",
    tech: ["Power BI", "SQL"],
    status: "In Progress",
  },
  {
    title: "Your Next Project Title",
    description: "A short, recruiter-friendly description of what this project does and the impact it has.",
    image: "assets/projects/your-image.png",
    video: "https://www.youtube.com/embed/your-video-id",
    github: "https://github.com/yogicode519/your-repo",
    linkedin: "https://linkedin.com/in/yogesh-gariya",
    docs: "https://github.com/yogicode519/your-repo#readme",
    tech: ["Power BI", "SQL"],
    status: "In Progress",
  },
];
