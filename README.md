<<<<<<< HEAD
# Nithira Nethmuthu Portfolio

This site uses the real assets already placed in this folder:

- `photography/` — photographs
- `grapic design/` — graphic-design work
- `videography and editing/` — video work

The selections shown on the site are configured in `src/portfolio.js`. Add or remove entries there to change the gallery.

## Run locally

```powershell
npm install
npm run dev
```

To create a production package, run `npm run build`. Selected videos and images are bundled into the output, so the first build can take some time.
=======
# My-Portfolio

# Nithira Nethmuthu — Creative Portfolio

A modern, responsive portfolio website for **Nithira Nethmuthu**, showcasing graphic design, videography, video editing, and creative visual storytelling.

The website is built to present creative work through organised categories, full-screen artwork views, video previews, and direct contact links.

## Features

- Modern animated landing page
- Fully responsive design for desktop, tablet, and mobile
- Dedicated Graphic Design categories:
  - Sports Posts
  - National Festivals
  - Everyday Events
  - Entertainment Posts
- Dedicated Videography & Editing categories:
  - Entertainment
  - Day-to-Day Events
  - Editing Only
- Category-based project browsing
- Full-size artwork viewer with uncropped designs
- Autoplay video previews inside video project cards
- Full video player with controls when a project is opened
- Custom visual category covers
- Smooth page transitions and scroll animations
- Direct social media links:
  - Instagram
  - Facebook
  - LinkedIn
  - WhatsApp
- Gmail compose integration for project enquiries
- Contact form that opens a pre-filled Gmail compose window

## Tech Stack

- React
- Vite
- Motion / Framer Motion
- Lucide React Icons
- CSS

## Getting Started

### Prerequisites

Install Node.js before running the project.

### Installation

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The development site will run locally, usually at:

```text
http://127.0.0.1:5173
```

### Create Production Build

```bash
npm run build
```

The production-ready website files will be generated inside the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```text
src/
├── App.jsx                 # Main application and page components
├── portfolio.js            # Portfolio categories, media, and project details
├── styles.css              # Base styling
├── overrides.css           # Custom responsive and visual styling
├── category-covers/        # Custom category-cover graphics
└── main.jsx                # React entry point

grapic design/
├── sport post/
├── national festival/
├── every day event/
└── entertaiment post/

videography and editing/
├── enetertaiment/
├── day to day event/
└── editing only/
```

## Updating Portfolio Content

Portfolio categories and assets can be updated from:

```text
src/portfolio.js
```

To add a new project:

1. Add the image or video file to the correct media category folder.
2. Add its file name and project title inside `src/portfolio.js`.
3. Run the production build again:

```bash
npm run build
```

## Contact Details

- Email: nithiranethmuthu@gmail.com
- Instagram: https://www.instagram.com/nithira_nethmuthu/
- Facebook: https://www.facebook.com/share/19y5vmNTah/?mibextid=wwXIfr
- LinkedIn: https://www.linkedin.com/in/nithira-nethmuthu
- WhatsApp: https://wa.me/qr/FQQSIBFU4HOHB1

## Notes

- Large video files can make the production build size large.
- For faster website loading after deployment, consider compressing videos before uploading them.
- The contact form opens Gmail in a new tab, so visitors can send enquiries directly.

## License

This project and its visual assets are created for Nithira Nethmuthu.  
All portfolio media, artwork, videos, and branding remain the property of their respective owner.
```
>>>>>>> aa5fd5a18f3fc0a627b8f1960621e122793aafdb
