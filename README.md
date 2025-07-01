<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Prisma-black?style=for-the-badge&logoColor=white&logo=prisma&color=2D3748" alt="prisma" />
  </div>

  <h3 align="center">Incident Report Making App</h3>

  <div align="center">
    A secure platform for anonymous incident reporting
  </div>
</div>

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Environment Setup](#environment-setup)
6. 🖼️ [Screenshots](#screenshots)
7. 🚀 [Deployment](#deployment)
8. 🤝 [Contributing](#contributing)
9. 📝 [License](#license)

---

## 🤖 Introduction

This is a state-of-the-art anonymous reporting system built with Next.js 14, designed to provide a secure platform for reporting incidents while maintaining complete anonymity.

---

## ⚙️ Tech Stack

- **Next.js 14**
- **TypeScript**
- **Prisma with Neon Database**
- **NextAuth.js** for Authentication
- **Tailwind CSS**
- **React Hook Form**
- **GeminiAI**
- **BCrypt** for Password Encryption

---

## 🔋 Features

- 🔒 Anonymous incident reporting
- 🧩 Role-based access control
- 🔐 Secure authentication using NextAuth.js
- 🛡️ Encrypted password storage with BCrypt
- 🗺️ Map integration via Mapbox API
- 🤖 AI-based incident suggestions using GeminiAI
- 🧾 Admin dashboard for review and approval

---

## 🤸 Quick Start

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd anonymous-reporting-system

# Install dependencies
npm install

# Set up the database
npx prisma generate
npx prisma db push

# Start the development server
npm run dev
```

---

## 🕸️ Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
NEXT_PUBLIC_MAPBOX_API_KEY=your-mapbox-key
DATABASE_URL=postgresql:your-database-url
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000/api/auth"
GEMINI_API_KEY=your-gemini-api-key
NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN=your-mapbox-access-api-key
```

---

## 🖼️ Screenshots

Below are some key screenshots of the application interface:

<p align="center">
  <img src="https://github.com/onkarshirke/incident-report-maker-app/blob/main/public/reporta.png" alt="Screenshot A" width="800" />
</p>
<p align="center">
  <img src="https://github.com/onkarshirke/incident-report-maker-app/blob/main/public/reportb.png" alt="Screenshot B" width="800" />
</p>
<p align="center">
  <img src="https://github.com/onkarshirke/incident-report-maker-app/blob/main/public/reportc.png" alt="Screenshot C" width="800" />
</p>
<p align="center">
  <img src="https://github.com/onkarshirke/incident-report-maker-app/blob/main/public/reportd.png" alt="Screenshot D" width="800" />
</p>
<p align="center">
  <img src="https://github.com/onkarshirke/incident-report-maker-app/blob/main/public/reporte.png" alt="Screenshot E" width="800" />
</p>
<p align="center">
  <img src="https://github.com/onkarshirke/incident-report-maker-app/blob/main/public/reportf.png" alt="Screenshot F" width="800" />
</p>
<p align="center">
  <img src="https://github.com/onkarshirke/incident-report-maker-app/blob/main/public/reportg.png" alt="Screenshot G" width="800" />
</p>

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) first.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Onkar Shirke**

* GitHub: [onkarshirke](https://github.com/onkarshirke)
* Email: [your-email@example.com](mailto:your-email@example.com)

---
*Developed with ❤️ by Onkar Shirke*

