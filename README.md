# Next.js Tailwind Boilerplate

This boilerplate is a pre-configured Next.js project using the new App Router (Next.js 13+) and Tailwind CSS (v4) for styling. It includes a dual-layout setup with separate mobile and desktop views, middleware-based device detection, and a complete UI kit to get you started on building responsive, Apple-inspired mobile apps alongside a traditional desktop site.

## Features

- **Next.js App Router:**  
  Utilizes the new Next.js App Router for file-based routing and layouts.

- **Dual Layouts:**  
  Separate mobile (`/mobile`) and desktop (`/desktop`) pages with their own layouts.
  - **Mobile Layout:** Designed for an Apple-inspired, task-focused experience (e.g., appointment booking).
  - **Desktop Layout:** Traditional website view with navigation and extended content.

- **Middleware for Device Detection:**  
  A middleware that rewrites the root route (`/`) to `/mobile` or `/desktop` based on the user agent.

- **Tailwind CSS Integration:**  
  Pre-configured Tailwind CSS for rapid styling, including a custom global CSS file that sets up variables, base styles, and responsive typography.

- **Complete UI Kit:**  
  A set of reusable components including:
  - Button
  - Input
  - Card
  - Carousel
  - Modal
  - FadeIn (animation wrapper)

- **Path Aliases:**  
  Configured with a `jsconfig.json` to allow for convenient imports using the `@/` alias.

## Folder Structure

```plaintext
my-app-boilerplate/
├── app/                         
│   ├── desktop/                 
│   │   ├── layout.js            // Desktop layout wrapping /desktop/page.js
│   │   └── page.js              // Desktop homepage
│   ├── mobile/                  
│   │   ├── layout.js            // Mobile layout wrapping /mobile/page.js
│   │   └── page.js              // Mobile homepage
│   ├── layout.js                // Global root layout (includes <html> and <body>)
│   └── globals.css              // Global CSS with Tailwind directives and custom styles
├── components/                  
│   ├── DesktopHeader.js         // Header for desktop pages
│   ├── MobileHeader.js          // Header for mobile pages
│   └── ui/                      // Complete UI kit components
│       ├── Button.js            
│       ├── Input.js             
│       ├── Card.js              
│       ├── Carousel.js          
│       ├── Modal.js             
│       ├── FadeIn.js            
│       └── index.js             // Barrel file for UI components
├── middleware.js                // Middleware to detect device and rewrite routes
├── jsconfig.json                // Path alias configuration for '@/'
├── next.config.js               // Next.js configuration
├── postcss.config.js            // PostCSS configuration for Tailwind CSS
├── tailwind.config.js           // Tailwind CSS configuration
├── package.json                 
└── README.md                    

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm (or yarn)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/dmayes77/nextjs-tailwind-boilerplate.git my-new-project
   cd my-new-project