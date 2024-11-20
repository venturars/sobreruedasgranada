# Sobreruedas Granada

Welcome to the Sobreruedas Granada repository. This project aims to create a landing page for a trailer
and classic car rental company, and to provide an online reservation system for receiving reservations.

The main functionalities of this project include:

- Recapping all information about the company and its services.
- Providing the location and contact information of our services.
- Downloading all contracts and information about our services.
- Calculating an estimate of costs for the most common rental services.
- Sending a rental request to our team to contract any of our services.

The project is built using Astro, Tailwind CSS, and Daisy UI. I want to create a project with these
technologies to use as a boilerplate and create other projects starting around this.

We hope this project will help you and prove interesting for you.

> **Note**
>
> This workspace is fully customized for being used within VSC, some helper
> extensions and bash terminal. It's recommended to follow the next steps:
>
> - Install following extensions: `astro.build`, `pranaygp.vscode-css-peek`,
>   `usernamehw.errorlens`, `dbaeumer.vscode-eslint`, `eamodio.gitlens`, `kisstkondoros.vscode-gutter-preview`,
>   `VisualStudioExptTeam.vscodeintellicode`, `Zignd.html-css-class-completion`, `esbenp.prettier-vscode`,
>   `bradlc.vscode-tailwindcss`, `GitHub.vscode-pull-request-github`, `nicolasparada.innerhtml`,
>   `Gruntfuggly.todo-tree`.
>
> - Use linux based terminal like zsh or bash.
>
> - To use the [pnpm package manager][pnpm-package-manager-docs], run command `npm install -g pnpm` to install it.

## Table of Contents

- [Sobreruedas Granada](#sobreruedas-granada)
  - [Table of Contents](#table-of-contents)
  - [How to setup the project](#how-to-setup-the-project)
    - [Set up the environment](#set-up-the-environment)
    - [Set up the project locally](#set-up-the-project-locally)
    - [Run locally in development mode](#run-locally-in-development-mode)
  - [Environments](#environments)
    - [Env file](#env-file)
  - [Important files and folders](#important-files-and-folders)
  - [Styling Framework](#styling-framework)
  - [Cookies](#cookies)
  - [Helper tools](#helper-tools)
    - [Automatic update packages](#automatic-update-packages)

## How to setup the project

### Set up the environment

1. Upgrade node to versión 19.x.x or higher
2. Install pnpm, via npm using `npm install -g pnpm`, via yarn using `yarn global add pnpm`
3. If you already have pnpm installed, upgrade to the latest version using `pnpm up --latest`

### Set up the project locally

1. Create a new `.env` file similar to `.env.example` and populate it.
2. If you are using Google for email services, you can learn more about setting up your SMTP
   server by following these links: [Google send email from app][google-smtp-server]
   and [google SMTP password][google-smtp-password].

### Run locally in development mode

```bash
pnpm install && pnpm run start
```

When you run this development server, the changes you make in your frontend will be applied live using hot reloading.

## Environments

| NAME       | URL                                    | BRANCH  | VERCEL ENV |
| ---------- | -------------------------------------- | ------- | ---------- |
| PRODUCTION | https://www.sobreruedasgranada.es/     | main    | Production |
| PREVIEW    | https://develop.sobreruedasgranada.es/ | develop | Preview    |
| LOCALHOST  | http://localhost:4321                  | NA      | NA         |

### Env file

| KEY           | PRODUCTION         | LOCAL              |
| ------------- | ------------------ | ------------------ |
| SMTP_USER     | your_smtp_user     | your_smtp_user     |
| SMTP_PASSWORD | your_smtp_password | your_smtp_password |

## Important files and folders

| File(s)              | Description                                              |
| -------------------- | -------------------------------------------------------- |
| `vercel.json`        | Config file for Vercel                                   |
| `astro.config.mjs`   | Config file for Svelte                                   |
| `vite.config.js`     | Config file for Vite                                     |
| `tailwind.config.js` | Config file for Tailwind and Daisy UI (design system)    |
| `postcss.config.js`  | Config file for PostCSS, dependency of Tailwind          |
| `renovate.json`      | Config file for renovate bot (Github app)                |
| `.gitignore`         | Config file for git ignore                               |
| `.vscode`            | Specific vscode config for project                       |
| `env.example`        | Sample file showcasing development environment variables |
| `LICENSE`            | License file for the project                             |
| `public`             | Directory for static assets                              |
| `src`                | Main source directory                                    |
| `src/assets`         | Directory of project processed assets                    |
| `src/components`     | UI components directory                                  |
| `src/emails`         | Template emails directory                                |
| `src/icons`          | Icon assets directory                                    |
| `src/interfaces`     | TypeScript interfaces directory                          |
| `src/layouts`        | Layout components directory                              |
| `src/locales`        | Locales files directory                                  |
| `src/logic`          | Business logic directory                                 |
| `src/pages`          | Page components directory                                |
| `src/styles`         | CSS files directory                                      |
| `src/tools`          | Helper tools directory                                   |

## Styling Framework

This project uses Tailwind CSS and Daisy UI to style the components. Tailwind CSS allows for more
efficient CSS writing and maintains a structured approach. Daisy UI is a class library that provides
styles for commonly used components. For more details, refer to the documentation for
[Tailwind CSS][tailwind-docs] and [Daisy UI][daisy-docs].

To customize Tailwind and theme styles, go to the `tailwind.config.js` file.

## Cookies

It doesn't use any kind of cookies in this project.

## Helper tools

Auxiliar tools that enhance productivity and streamline development workflows.

### Automatic update packages

This repo use renovate for up to date all packages.

- [How to set up Renovate][renovate-tutorial]
- [Renovate dashboard][renovate-dashboard]
- [Renovate docs][renovate-docs]
