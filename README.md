# CaseDesign-11ty

A modern project template using [11ty](https://www.11ty.dev/), [Tailwind CSS](https://tailwindcss.com/), and other powerful tools to create a seamless web development workflow.

## Features

- **Static Site Generator:** Powered by 11ty for fast and flexible static site creation.
- **Tailwind CSS:** Easily customizable utility-first CSS framework.
- **Markdown Support:** Render and extend Markdown with `markdown-it` and `markdown-it-attrs`.
- **PostCSS & Autoprefixer:** Optimize and enhance CSS with modern features.
- **Environment Variables:** Manage sensitive data using `dotenv`.
- **Email Sending:** Use `nodemailer` for handling email functionalities.
- **Concurrent Development:** Simplified development with `concurrently`.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SanjanaGharat/casedesgin-11ty.git
   cd casedesgin-11ty
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Development

Run the development server with live reloading:

```bash
npm run dev
```

Your site will be available at [http://localhost:8080](http://localhost:8080).

### Build

Generate a production build:

```bash
npm run build
```

The static files will be output to the `./_site` directory.



## Dependencies

### Dev Dependencies

- **[@11ty/eleventy](https://github.com/11ty/eleventy):** Static site generator.
- **[concurrently](https://github.com/open-cli-tools/concurrently):** Run multiple commands concurrently.

### Dependencies

- **[tailwindcss](https://github.com/tailwindlabs/tailwindcss):** Utility-first CSS framework.
- **[autoprefixer](https://github.com/postcss/autoprefixer):** Adds vendor prefixes to CSS.
- **[postcss](https://github.com/postcss/postcss):** Transform CSS with JavaScript.
- **[dotenv](https://github.com/motdotla/dotenv):** Load environment variables.
- **[markdown-it](https://github.com/markdown-it/markdown-it):** Markdown parser.
- **[markdown-it-attrs](https://github.com/arve0/markdown-it-attrs):** Add attributes to Markdown elements.
- **[nodemailer](https://github.com/nodemailer/nodemailer):** Send emails using Node.js.



---


