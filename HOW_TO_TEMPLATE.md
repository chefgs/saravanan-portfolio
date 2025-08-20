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

**Structure of `portfolioData.ts`:**

The `portfolioData` object is organized by section. Below is a breakdown of each section and how to customize it.

```typescript
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const portfolioData = {
  name: "Your Name",
  image: "/your-image.jpg", // Path to your image in the `public` folder
  
  // --- Hero Section ---
  hero: {
    title: "Your Professional Title",
    description: "A short, catchy subtitle about what you do.",
    specialization: "Your specialization",
    socialProof: ["Award Winner", "Certified Developer"],
    socialLinks: [
      { name: 'LinkedIn', icon: Linkedin, url: '...' },
      { name: 'GitHub', icon: Github, url: '...' },
    ],
  },

  // --- About Section ---
  about: {
    title: "About Me",
    description1: "Paragraph about yourself, your passion, and expertise.",
    description2: "Paragraph about your background and experience.",
    skillsTitle: "Top Skills",
    keyHighlights: ["Skill 1", "Skill 2", "Skill 3"],
  },

  // --- Services Section ---
  services: {
    title: "What I Do",
    description: "A brief description of the services you offer.",
    categories: [
      {
        title: "Service Category 1",
        items: [
          { name: "Service 1.1", description: "..." },
          { name: "Service 1.2", description: "..." },
        ]
      },
    ]
  },

  // --- Technologies Section ---
  technologies: {
    title: "Technologies and Tools",
    description: "Tools and technologies you use.",
    logos: [
      { name: 'Technology Name', url: 'image-url.svg' },
      // Add more logos here
    ]
  },

  // --- Projects Section ---
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

  // --- Resume/Experience Section ---
  resume: {
    title: "Experience Timeline",
    description: "A summary of your professional journey.",
    downloadButton: "Download CV (PDF)",
    linkedInButton: "Visit LinkedIn Profile",
    timeline: [
      {
        role: "Your Role",
        company: "Company Name",
        period: "Date Range (e.g., Jan 2022 - Present)",
        description: "Your responsibilities and achievements.",
      },
    ]
  },

  // --- Contact Section ---
  contact: {
    title: "Get In Touch",
    description: "How people can reach you.",
    form: {
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      submitButton: "Send Message",
    },
    channels: {
      email: { icon: Mail, text: "your.email@example.com" },
      phone: { icon: Phone, text: "+1 (234) 567-890" },
      address: { icon: MapPin, text: "Your City, Country" },
    }
  }
};
```

### Step 2: Replace Static Assets

Your personal assets like your profile picture and resume PDF need to be replaced in the `public/` directory.

1. **Profile Picture**:
   - Place your profile picture in the `public/` directory. For example, `public/your-image.jpg`.
   - Update the `image` field in `portfolioData.ts` to match the new file path (e.g., `/your-image.jpg`).

2. **Resume PDF**:
   - Place your resume PDF in the `public/documents/` directory. For example, `public/documents/your-resume.pdf`.
   - The download button in the "Resume" section is hard-coded to link to this file. Ensure the file name in `src/components/sections/resume.tsx` matches your PDF's file name if you change it.

## Part 3: Setting Up the Contact Form

The contact form uses MongoDB to store messages. To get it working, you need to set up a free MongoDB Atlas database and connect it to the application.

### Step 1: Create a MongoDB Atlas Account
1.  Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and create a free account.
2.  Follow the instructions to create a new cluster. The free tier (M0) is sufficient.
3.  It will take a few minutes for your cluster to be provisioned.

### Step 2: Get Your Connection String
1.  Once your cluster is ready, click the **"Connect"** button.
2.  Select **"Drivers"** as the connection method.
3.  Under "Driver," select **"Node.js"** and the latest version.
4.  You will see a connection string. Click the **"Copy"** button to copy it. It will look something like this:
    `mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

### Step 3: Configure Database Access
1.  In the Atlas UI, navigate to **"Database Access"** under the "Security" section in the left-hand menu.
2.  Click **"Add New Database User"** and create a user with a username and password. Make sure to give this user **"Read and write to any database"** permissions.
3.  Navigate to **"Network Access"** and click **"Add IP Address"**.
4.  Click **"Allow Access from Anywhere"** (0.0.0.0/0). This is not the most secure option for production, but it's the easiest for getting started. For a real application, you should restrict this to your deployment server's IP address.

### Step 4: Set Environment Variables
1.  Create a file named `.env.local` in the root of your project (if it doesn't already exist).
2.  Add your MongoDB connection string to this file. Replace `<username>`, `<password>`, and the cluster URL with your actual credentials.

    ```
    MONGODB_URI=mongodb+srv://your_username:your_password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
    ```
    **Note**: I've added `portfolio` as the database name before the `?`. MongoDB will automatically create this database for you when the first message is submitted.

Now, when a user submits the contact form, their message will be saved to the `contacts` collection in your `portfolio` database.

## Part 4: Using AI to Generate Content

This template includes AI tools powered by Google's Genkit to help you generate or enhance content.

### Step 1: Set Up Your Environment
First, you need to set up your Google AI API key.

1.  Go to [Google AI Studio](https://aistudio.google.com/app/apikey) and create an API key.
2.  Create a file named `.env` in the root of your project.
3.  Add your API key to the `.env` file:
    ```
    GOOGLE_API_KEY=your-api-key-here
    ```

### Step 2: Run the AI Dev Server
To use the AI flows, you need to start the Genkit development server.

```sh
npm run genkit:start
```
This will open the Genkit developer UI, where you can run and monitor the AI flows.

### Step 3: Available AI Flows

- **Generate Resume**: This flow can help you draft your professional experience entries. You can run it from the Genkit UI to generate descriptions for your roles.
- **Enhance Blog Images**: This flow is designed to generate descriptive alt text for images, improving accessibility and SEO.

You can customize these flows or add new ones in the `src/ai/flows/` directory to further automate your content creation process.


## Part 5: **Resume PDF**:
    * Place your resume PDF in `public/documents/`. You can name it `resume.pdf`.
    * The "Download Resume" button in the `Resume` section will automatically point to this file.

## Part 6: Using AI to Generate Code

You can leverage AI to help you generate or modify code for this portfolio.

1. **Open the AI Chat**: Open the AI chat panel in your editor.
2. **Provide Context**: Tell the AI that you are working with a Next.js and Tailwind CSS portfolio template.
3. **Ask for Code**: You can ask the AI to:
    * "Create a new section for testimonials."
    * "Change the color scheme of the hero section."
    * "Add a new field to the projects data and display it."

The AI will provide you with the necessary code snippets and instructions on where to place them.

By following these steps, you can quickly and easily create a personalized, professional portfolio.