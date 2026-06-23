# Aaryan Kulkarni Portfolio

Modern personal portfolio for Aaryan Kulkarni, a Georgia Tech Electrical Engineering student focused on AI hardware, computer vision, embedded systems, RTL, RISC-V, FPGA architecture, and semiconductors.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run the production build locally:

```bash
npm run start
```

Note: this repo currently includes `pnpm-lock.yaml`, so Vercel may use pnpm automatically. That is fine. The npm commands above also work if you prefer npm locally.

## Resume

The resume download button points to:

```text
public/Aaryan_Master.pdf
```

To update the resume, replace that file with a newer PDF using the same filename.

## Contact Links

Email and phone are configured in:

```text
lib/portfolio-data.ts
```

GitHub and LinkedIn are configured in `lib/portfolio-data.ts`.

## Deploy On Vercel For Free

No paid domain is required. Vercel gives you a free `vercel.app` URL.

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com).
3. Sign in with GitHub.
4. Click **Add New Project**.
5. Import the GitHub repo.
6. Use the default Next.js settings.
7. Click **Deploy**.
8. Use the free `vercel.app` deployment URL that Vercel provides.

## Suggested GitHub Commands

From the project folder:

```bash
git init
git add .
git commit -m "Prepare portfolio for Vercel deployment"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/aaryan-portfolio.git
git push -u origin main
```

Then import that GitHub repository into Vercel.
