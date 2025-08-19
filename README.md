# Saravanan Gnanaguru - Personal Portfolio

This is the repository for my personal portfolio website, showcasing my skills, experience, and projects. The portfolio is designed to be a modern, responsive, and interactive web application that highlights my expertise in DevOps, Cloud Automation, and AI deployment.

**Live Demo**: [gsaravanan.dev](https://gsaravanan.dev)

## Key Features

* **Responsive Design**: The website is fully responsive and works seamlessly on desktops, tablets, and mobile devices.
* **Dark Mode**: A theme toggle allows users to switch between light and dark modes for better viewing comfort.
* **Interactive Hero Section**: A dynamic hero section with social links, professional badges, and a brief introduction.
* **Scrolling Technology Logos**: An animated marquee of technology logos that can be manually navigated with left and right arrows.
* **Experience Timeline**: A visually appealing timeline of my professional experience.
* **Downloadable LinkedIn Profile**: A button to download my LinkedIn profile as a PDF.
* **Contact Form**: A contact section for visitors to get in touch.

## Technologies Used

* **Framework**: [Next.js](https://nextjs.org/)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
* **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)
* **Animation**: [react-fast-marquee](https://www.react-fast-marquee.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v18.x or later)
* npm or yarn

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/chefgs/saravanan-portfolio.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

### Running the Development Server

Run the following command to start the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project follows the standard Next.js App Router structure:

* `src/app/`: Contains the main pages and layout of the application.
* `src/components/`: Contains all the reusable components, including UI elements and page sections.
* `src/components/sections/`: Contains the main sections of the portfolio (Hero, About, Technologies, etc.).
* `public/`: Contains all static assets, such as images and documents.
* `apphosting.yaml`: Configuration file for deployment on Google Cloud App Hosting.

## License

Distributed under the MIT License. See `LICENSE` for more information.
