# 🧭 Portfolio Website with Admin Dashboard (Protected CRUD System)

### 🌐 Live Demo
🔗 **[Visit Live Site](https://my-portfolio-frontend-rosy-gamma.vercel.app/)**  
🔗 **[Backend API](https://new-portfolio-backend-livid.vercel.app/api/v1)**  

---

## 📖 Overview

This is a **Full-Stack Portfolio Website** built with **Next.js (Frontend)** and **Node.js + Express + Prisma (Backend)**.  
It features a **secure admin dashboard** where the authenticated user can **create, update, delete, and manage blog posts and projects** dynamically.

The site publicly showcases all your projects and blogs, while keeping the dashboard **protected via authentication**.

---

## ✨ Key Features

### 🔒 Authentication & Authorization
- Login system using **NextAuth.js** with credentials provider.
- Protected routes for the admin dashboard (only logged-in users can access CRUD pages).
- Session-based access with automatic redirection to login page if not authenticated.

### 🧠 Dashboard (Admin Panel)
- View all blogs and projects.
- Create, Edit, and Delete blogs & projects in real-time.
- Preview and manage content visually from the dashboard.

### 📝 Blog Management
- Add new blog posts with title, description, image, and tags.
- Update or delete existing posts.
- Auto slug generation and image upload support.

### 💼 Project Management
- Create new projects with title, description, features, tech stack, and live link.
- Edit or delete projects easily.
- Upload screenshots or images dynamically.

### 🌍 Public Portfolio Pages
- Fully responsive personal portfolio homepage.
- Dynamic rendering of blog and project lists fetched from the backend.
- SEO-friendly URLs and meta information.

### ⚙️ Backend (API)
- RESTful API built with **Express.js + Prisma ORM + PostgreSQL/Neon DB**.
- CRUD endpoints for blog and project management.
- Centralized error handling & CORS enabled.

---

## 🧰 Technology Stack

| Layer | Technology Used |
|-------|------------------|
| **Frontend** | Next.js 14, Tailwind CSS, TypeScript, ShadCN UI |
| **Backend** | Node.js, Express.js, TypeScript |
| **Database** | PostgreSQL (via Prisma ORM) |
| **Auth** | NextAuth.js (Credentials Provider) |
| **Hosting** | Vercel (Frontend) + Vercel / Render / Railway (Backend) |
| **Other Tools** | React Hook Form, Zod Validation, React Hot Toast, Cloudinary/Firebase (optional for file upload) |

---

## ⚙️ Setup Instructions

### 🖥️ 1. Clone the Repository

```bash
git clone https://github.com/Saiful-Rasel/my-portfolio/tree/main
cd your-portfolio
