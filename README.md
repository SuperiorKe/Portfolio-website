# Kenn Macharia - Developer Portfolio

A modern, responsive developer portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing my projects, skills, and experience as a full-stack developer based in Nairobi, Kenya.

## 🚀 Live Demo

[Portfolio Website](https://kennmacharia.dev) *(Update with your Vercel deployment URL)*

## ✨ Features

- **Modern Design**: Clean, minimal, and professional design focused on showcasing work
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Fast Performance**: Optimized for speed with lazy loading images and efficient code splitting
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Type-Safe**: Built with TypeScript for better code quality and developer experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3
- **Deployment**: Vercel
- **Code Quality**: ESLint + TypeScript

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg
│   │   └── projects/
│   │       ├── afrimall.png
│   │       ├── ai-chatbot.png
│   │       ├── carbon-calculator.png
│   │       └── work-tracker.png
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── vercel.json
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SuperiorKe/Portfolio-website.git
   cd Portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

Preview the production build:
```bash
npm run preview
```

## 📝 Customization

### Update Your Information

1. **Hero Section**: Edit `src/components/Hero.tsx`
   - Update name, title, and description
   - Modify social media links

2. **About Section**: Edit `src/components/About.tsx`
   - Update your bio and background
   - Replace profile image at `public/images/profile.jpg`

3. **Projects**: Edit `src/components/Projects.tsx`
   - Update project details in the `projects` array
   - Add/remove projects as needed
   - Update project images in `public/images/projects/`

4. **Skills**: Edit `src/components/Skills.tsx`
   - Update your technical skills list

5. **Contact**: Edit `src/components/Contact.tsx`
   - Update contact information and links

6. **Resume**: Replace `public/resume.pdf` with your resume

### Styling

- Tailwind CSS configuration: `tailwind.config.js`
- Global styles: `src/index.css`
- Component-specific styles: Inline Tailwind classes in components

## 🌐 Deployment

This project is configured for deployment on Vercel. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy to Vercel

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com/new)
3. Vercel will auto-detect the Vite configuration
4. Click "Deploy"

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Kenn Macharia**

- Portfolio: [kennmacharia.dev](https://kennmacharia.dev)
- GitHub: [@SuperiorKe](https://github.com/SuperiorKe)
- LinkedIn: [kenn-macharia](https://linkedin.com/in/kenn-macharia)
- Email: superiorwech@gmail.com

## 🙏 Acknowledgments

- Design inspiration from [Brittany Chiang](https://brittanychiang.com), [Josh Comeau](https://www.joshwcomeau.com), and [Lee Robinson](https://leerob.io)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

⭐ If you find this portfolio helpful, please consider giving it a star!
