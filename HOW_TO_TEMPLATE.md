# How to Use This Portfolio as a Template

This guide explains how to use this repository as a template to create your own personal portfolio. The goal is to make customization as simple as possible, allowing you to build a professional portfolio by editing a single configuration file, without needing to dive into the React code.

## Part 1: Creating Your Portfolio from This Template

First, you need to generate your own repository from this template.

1. **Navigate to the GitHub Repository**: Go to the main page of this repository on GitHub.
2. **Use the Template**: Click the **"Use this template"** button located at the top of the page.
3. **Create a New Repository**: You will be prompted to create a new repository under your account. Give it a name (e.g., `my-portfolio`) and click **"Create repository from template"**.
4. **Clone Your New Repository**: Clone the newly created repository to your local machine.
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
  name: "Your Name",
  image: "/your-image.jpg",
  hero: {
    title: "Your Professional Title (e.g., Full-Stack Developer)",
    description: "A short, catchy subtitle about what you do.",
    specialization: "Your specialization",
    socialProof: ["Award Winner", "Certified Developer", "Speaker"],
    socialLinks: [
      { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/your-username/' },
      { name: 'GitHub', icon: Github, url: 'https://github.com/your-username' },
    ],
  },
  about: {
    title: "About Me",
    description1: "Write a paragraph about yourself, your passion, and your expertise.",
    description2: "Write another paragraph about your background and experience.",
    skillsTitle: "Top Skills",
    keyHighlights: ["Skill 1", "Skill 2", "Skill 3"],
    career: {
      title: "Career Journey",
      timeline: [
        {
          role: "Software Engineer",
          company: "Tech Company Inc.",
          period: "Jan 2022 - Present",
          description: "Describe your responsibilities and achievements in this role.",
        },
      ]
    }
  },
  services: {
    title: "What I Do",
    description: "A brief description of the services you offer.",
    categories: [
        // ...
    ]
  },
  projects: {
    title: "Featured Projects",
    description: "A selection of your best work.",
    projectList: [
      {
        title: "Project One",
        company: "Client or Personal",
        duration: "Year",
        description: "A brief description of your project.",
        tech: ["React", "Next.js", "Tailwind CSS"],
        link: "https://project-one-live-url.com",
      },
    ]
  },
  contact: {
    title: "Get In Touch",
    description: "How people can reach you.",
    form: {
        // ...
    },
    channels: {
        // ...
    }
  }
};
```

### Step 2: Replace Static Assets

Your personal assets like your profile picture and resume PDF need to be replaced in the `public/` directory.

1. **Profile Picture**:
    * Update the `image` path in `src/config/portfolioData.ts` to match your new image file.

2. **Resume PDF**:
    * Place your resume PDF in `public/documents/`. You can name it `resume.pdf`.
    * The "Download Resume" button in the `Resume` section will automatically point to this file.

## Part 3: Using AI to Generate Code

You can leverage AI to help you generate or modify code for this portfolio.

1. **Open the AI Chat**: Open the AI chat panel in your editor.
2. **Provide Context**: Tell the AI that you are working with a Next.js and Tailwind CSS portfolio template.
3. **Ask for Code**: You can ask the AI to:
    * "Create a new section for testimonials."
    * "Change the color scheme of the hero section."
    * "Add a new field to the projects data and display it."

The AI will provide you with the necessary code snippets and instructions on where to place them.
