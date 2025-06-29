# ✨ ToneGenie

Smart, AI-powered writing assistant that instantly transforms the *tone* of your text. Whether you need to sound more professional, friendly, or persuasive—ToneGenie has your back.

Live demo → **coming soon**

---

## 🚀 Features

- **Tone Rewriting** – pick a style and ToneGenie rewrites your text in seconds.
- **One-click Copy** – grab the result without fuss.
- **Beautiful UI** – Tailwind CSS + Framer Motion for buttery-smooth animations.
- **Feedback Portal** – built-in form stores feedback in Firebase Firestore.
- **PWA Ready** – works great on mobile & desktop alike.

---

## 🏗️ Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 15 (App Router) • React 19 • TypeScript |
| Styling  | Tailwind CSS 4 • Framer Motion |
| Icons    | Lucide-react |
| Backend  | Next.js API Routes |
| Data     | Firebase Admin SDK → Cloud Firestore |

---

## ⚙️ Local Setup

1. **Clone & install**
   ```bash
   git clone https://github.com/your-org/tonegenie.git
   cd tonegenie
   npm install
   ```
2. **Configure environment variables** – create `.env.local`:
   ```env
   # Firebase service-account credentials (never commit this file)
   FIREBASE_PROJECT_ID=toneginie
   FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@toneginie.iam.gserviceaccount.com
   FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   ```
3. **Run dev server**
   ```bash
   npm run dev
   ```
   Open <http://localhost:3000> ✨

---

## 📬 Feedback Workflow

Submissions from **/feedback** route are POSTed to `/api/feedback` and saved to the `feedback` collection in Firestore. Enable the **Cloud Firestore API** in Google Cloud Console the first time you run locally or deploy.

---

## 🛫 Deployment

• **Vercel (recommended)** – environment variables → *Project Settings → Environment Variables* ➜ Deploy.
• **Docker** – coming soon.

---

## 🤝 Contributing

Pull requests are welcome! Feel free to open issues for feature requests or bug reports.

1. Fork → create feature branch → commit changes.
2. `npm run lint && npm run test`  (tests TBD)
3. Open PR describing *what* & *why*.

---

## 📄 License

MIT © 2025 Nexoraedge

