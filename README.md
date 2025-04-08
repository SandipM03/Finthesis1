# 💰Welcome to FinanceJini, your AI-powered financial assistance platform. Let FinanceJini guide you toward smarter financial decisions and a secure future!

A next-gen financial assistant web application that empowers users to track expenses, manage accounts, receive personalized investment advice, and explore financial products — all with AI-powered insights and support for Indian languages.

![Tech Stack](https://img.shields.io/badge/Next.js-15-blue.svg) ![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green) ![Clerk](https://img.shields.io/badge/Auth-Clerk-orange) ![Gemini](https://img.shields.io/badge/AI-Google%20Gemini-lightblue) ![Tailwind](https://img.shields.io/badge/Styled%20With-TailwindCSS-38bdf8)

---

## 🚀 Features

- 🛂 **Secure Auth** – Login/Signup with Clerk
- 🌐 **Language Support** – Choose your preferred Indian language
- 📊 **Dashboard** – View account summaries, income, and expenses
- 🧾 **Smart Transactions** – Upload bill images and auto-detect amount/type using AI
- 🔁 **Recurring Transactions** – Add recurring incomes/expenses
- 📈 **Visual Insights** – Interactive monthly income & expense graphs
- 💬 **Finance Chatbot** – Ask finance-related questions via AI
- 💼 **Personalized Advisory** – Investment suggestions based on goals, income, and risk appetite
- 🔎 **Product Discovery** – Filter-based investment product exploration
- 📤 **Email Support** – Receive summaries and alerts (Resend integration)

---

## 🧠 Powered By

| Technology      | Role |
|------------------|------|
| **Next.js 15**       | Frontend & Backend Framework |
| **React 19 (RC)**     | UI Development |
| **Tailwind CSS**      | Styling |
| **Supabase**          | Database, Auth, Realtime |
| **Prisma** *(optional)* | ORM Layer |
| **Clerk**             | Authentication & Session Management |
| **Google Gemini API** | AI-Powered Chat & Advisor |
| **Recharts**          | Graphs & Visuals |
| **Resend + React Email** | Transactional Emails |
| **Framer Motion**     | Animations |
| **Zod + React Hook Form** | Form Validation |
| **Radix UI**          | Headless UI Components |
| **Inngest**           | Background Jobs (future scope) |

---




## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/finance-platform.git
cd finance-platform

```
### 2. Install dependencies
```bash
npm install
```
### 3.Set up environment variables
Create a .env.local file with the following:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=s

NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=



DATABASE_URL=""

# Direct connection to the database. Used for migrations.
DIRECT_URL=""

ARCJET_KEY=
GOOGLE_GENERATIVE_AI_API_KEY=
```
### 4. Run the app
```bash
npm run dev
```
### 🌐 Live Demo
https://financejini.zenux.live/

### 📚 Documentation
- Clerk Docs: https://clerk.com/docs

- Supabase Docs: https://supabase.com/docs

- Gemini AI Docs: https://ai.google.dev/

- Prisma: https://www.prisma.io/docs

- Tailwind: https://tailwindcss.com/docs

### 🙌 Acknowledgments
- Google for Gemini APIs

- Supabase for blazing-fast backend

- Clerk for seamless authentication

- React & Next.js community
