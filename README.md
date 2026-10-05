# Portfolio & Headless Content Platform

A high-performance portfolio and dynamic landing page engine built with Astro (SSG) and Sanity Studio, deployed via an automated "Publish-to-Deploy" CI/CD pipeline.

---

## Tech Stack & Architecture

- **Frontend Framework:** Astro (Static Site Generation / Node 22)
- **Headless CMS:** Sanity Studio (`pageBuilder` dynamic blocks schema)
- **Deployment Platform:** Hostinger Web Apps (Git-triggered builds)
- **Edge Delivery / CDN:** Cloudflare (SSL, Caching & Edge Optimization)
- **Automation / CI/CD:** GitHub Actions (`repository_dispatch` trigger)

---

## Repository Structure

```text
.
├── .github/
│   └── workflows/
│       └── sanity-deploy.yml    # Workflow bridge: listens for Sanity webhook pings
├── public/                      # Static assets & icons
├── src/
│   ├── lib/
│   │   ├── sanity.js            # Sanity client initialization
│   │   └── sanityImage.js       # Sanity image URL builder helper
│   ├── pages/
│   │   ├── index.astro          # Landing / terminal root page
│   │   └── [...slug].astro      # Dynamic Sanity page builder route
│   └── styles/                  # Global styles & CSS variables
├── studio/                      # Standalone Sanity Studio schema & config
│   ├── schemas/                 # CMS schemas (page, hero, gallery, etc.)
│   └── sanity.config.ts         # Studio configuration
├── astro.config.mjs             # Astro project configuration
├── package.json                 # Frontend dependencies & scripts
└── README.md

```

Local Development Setup
Prerequisites
Node.js v20.x or v22.x

npm v9+

Git

1. Clone & Install Dependencies
Clone the repository and install dependencies for both the Astro frontend and the Sanity Studio:

# Clone repository
git clone [https://github.com/MichaelNnahDev/portfolio-michael.git](https://github.com/MichaelNnahDev/portfolio-michael.git)
cd portfolio-michael

# Install frontend dependencies
npm install

# Install studio dependencies
cd studio
npm install
cd ..

2. Environment Variables
Create a .env file in the root directory:

PUBLIC_SANITY_PROJECT_ID="799ub142"
PUBLIC_SANITY_DATASET="production"
PUBLIC_SANITY_API_VERSION="2021-03-25"

3. Run Development Servers
Run the Astro frontend:

npm run dev
# Local site runs at http://localhost:4321

In a separate terminal tab, run the CMS Studio:

cd studio
npm run dev
# CMS Studio runs at http://localhost:3333

Publish-to-Deploy Automation Pipeline
The site uses a dispatch pipeline to ensure updates published in Sanity immediately trigger production builds on Hostinger:

┌─────────────────┐       HTTP POST Webhook       ┌──────────────────────┐
│  Sanity Studio  │ ────────────────────────────> │ GitHub REST API      │
│  (Publish Event)│                               │ (/dispatches)        │
└─────────────────┘                               └──────────┬───────────┘
                                                             │
                                                             ▼
┌─────────────────┐       Git Push (main)         ┌──────────────────────┐
│ Hostinger WebApp│ <──────────────────────────── │ GitHub Actions       │
│ (npm run build) │                               │ (sanity-deploy.yml)  │
└─────────────────┘                               └──────────────────────┘

A content editor publishes or deletes a document in Sanity Studio.

Sanity fires a webhook targeting https://api.github.com/repos/:owner/:repo/dispatches.

The .github/workflows/sanity-deploy.yml workflow receives the sanity-publish event.

The workflow touches an empty commit on the main branch.

Hostinger detects the push via its GitHub OAuth integration and executes npm run build.

Note for Local Developers: Because the automation bot pushes empty commits to GitHub when content is published, always run git pull --rebase origin main before starting local feature work.


Deploying Sanity Studio Changes
If changes are made to document schemas or fields inside the studio/ directory:

cd studio
npx sanity deploy

Follow the interactive CLI prompt to confirm deployment to your hosted Sanity URL.

Project Handover & Credential Rotation
When onboarding a new developer or transferring ownership to a client:

1. Repository Ownership
Go to repository Settings -> Collaborators to invite developers, or Danger Zone -> Transfer ownership to transfer the repository to the client's GitHub account or organization.

2. CMS Project Access
Visit manage.sanity.io and select project 799ub142.

Navigate to Members -> Invite Member.

Invite the client/new developer with the Administrator role.

3. Rotating the Automation Token
To decouple the original developer's GitHub credentials from Sanity's build trigger:

In the target GitHub account, generate a Personal Access Token (Classic) with:

repo scope

workflow scope

Navigate to manage.sanity.io -> API -> Webhooks.

Edit the Trigger Hostinger Production Rebuild webhook:

Update the Authorization header to: Bearer <NEW_GITHUB_TOKEN>.

4. Run a test publish in Sanity Studio to verify that the Attempts log returns 204 No Content.
