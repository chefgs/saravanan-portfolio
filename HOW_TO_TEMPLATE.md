# How to Use This Portfolio as a Template

This guide explains how to use this repository as a template to create your own personal portfolio. The goal is to make customization as simple as possible, allowing you to build a professional portfolio by editing a single configuration file, without needing to dive into the React code.

## Part 1: Creating Your Portfolio from This Template

First, you need to generate your own repository from this template.

1.  **Navigate to the GitHub Repository**: Go to the main page of this repository on GitHub.
2.  **Use the Template**: Click the **"Use this template"** button located at the top of the page.
3.  **Create a New Repository**: You will be prompted to create a new repository under your account. Give it a name (e.g., `my-portfolio`) and click **"Create repository from template"**.
4.  **Clone Your New Repository**: Clone the newly created repository to your local machine.
    ```sh
    git clone https://github.com/your-username/my-portfolio.git
    cd my-portfolio
    ```

## Part 2: Customizing Your Portfolio Content

All the personal information in this portfolio is managed from a single configuration file. This makes it easy to update your details without touching the component code.

### Step 1: Edit the Central Data File

The most important file you will edit is `src/config/portfolioData.ts`. This file contains all the text, links, and data for every section of the portfolio.

Open `src/config/portfolioData.ts` and replace the placeholder content with your own information.

**Example Structure of `portfolioData.ts`:**

```typescript
export const portfolioData = {
  // --- HERO SECTION ---
  hero: {
    name: "Your Name",
    title: "Your Professional Title (e.g., Full-Stack Developer)",
    subtitle: "A short, catchy subtitle about what you do.",
    socialProof: ["Award Winner", "Certified Developer", "Speaker"],
  },

  // --- SOCIAL LINKS ---
  socials: {
    linkedin: "https://www.linkedin.com/in/your-username/",
    github: "https://github.com/your-username",
    twitter: "https://twitter.com/your-username",
    // Add or remove links as needed
  },

  // --- ABOUT SECTION ---
  about: {
    description: "Write a few paragraphs about yourself, your passion, and your expertise. This text supports markdown.",
  },

  // --- TECHNOLOGIES SECTION ---
  technologies: [
    { name: "JavaScript", url: "logo-url.svg" },
    { name: "React", url: "logo-url.svg" },
    // Add all the technologies you want to showcase
  ],

  // --- PROJECTS SECTION ---
  projects: [
    {
      title: "Project One",
      description: "A brief description of your project.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      liveUrl: "https://project-one-live-url.com",
      githubUrl: "https://github.com/your-username/project-one",
    },
    // Add more projects
  ],

  // --- EXPERIENCE SECTION (RESUME) ---
  experience: [
    {
      role: "Software Engineer",
      company: "Tech Company Inc.",
      period: "Jan 2022 - Present",
      description: "Describe your responsibilities and achievements in this role.",
    },
    // Add more experience entries
  ],

  // --- CONTACT SECTION ---
  contact: {
    email: "your.email@example.com",
    phone: "+1 (123) 456-7890",
  },
};
```

### Step 2: Replace Static Assets

Your personal assets like your profile picture and resume PDF need to be replaced in the `public/` directory.

1.  **Profile Picture**:
    *   Add your photo to `public/`. You can name it `profile.jpg` or similar.
    *   Update the path in the configuration file if you use a different name.

2.  **Resume PDF**:
    *   Place your resume PDF in `public/documents/`. You can name it `resume.pdf`.
    *   Ensure the path in the configuration file matches the filename.

### Step 3: Set Up Environment Variables

For features like the contact form to work, you need to provide your own credentials.

1.  **Create a `.env.local` file**: Duplicate the `.env.example` file and rename it to `.env.local`.
    ```sh
    cp .env.example .env.local
    ```
2.  **Fill in Your Credentials**: Open `.env.local` and add your own secrets for the MongoDB connection and email service (e.g., Gmail SMTP).

## Part 3: Run and Deploy Your Portfolio

Once you have customized your content, you can run the portfolio locally to see the changes.

1.  **Install Dependencies**:
    ```sh
    npm install
    ```
2.  **Run the Development Server**:
    ```sh
    npm run dev
    ```
3.  **Open Your Browser**: Navigate to `http://localhost:3000` to see your personalized portfolio.

When you are ready, you can deploy your portfolio to any hosting provider that supports Next.js, such as Vercel, Netlify, or Google Cloud App Hosting.
