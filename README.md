# Harel Amir Events Website

Mobile-first personal event production website for Harel Amir, built with Next.js App Router, TypeScript, Tailwind CSS and Framer Motion.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Replace Before Launch

Update these placeholders:

- Hero images: `public/images/euforia-hero-stage.jpg` and `public/images/euforia-stage-mobile.jpg`
- Portrait/about images: `public/images/harel-portrait-main.jpg` and `public/images/harel-about.jpg`
- Project and gallery images: `public/images/*.jpg`
- Open Graph image: currently `public/images/euforia-hero-stage.jpg`
- WhatsApp phone number in `app/page.tsx`
- Email address in `app/page.tsx`
- Instagram URL in `app/page.tsx`
- Domain values in `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts`

The contact form is prepared for integration and currently logs submissions in the browser console. Replace the `handleSubmit` logic in `app/page.tsx` with your form service, CRM, API route or mail provider.

## Deploy To Vercel

1. Push this project to a Git repository.
2. Import the repository in Vercel.
3. Keep the default framework preset as Next.js.
4. Set the production domain, then update the metadata domain values listed above.
5. Deploy.

No custom server is required.
