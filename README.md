# SFU Connect

SFU has a reputation for being a lonely commuter school. We want to change the narrative and promote a social scene.

With SFU Connect users can scroll through a live feed where they can either post meetups or interact with posts of meetups they want to attend via a live group chat. Our main focus is fostering in person interactions between students.

This project was built for the Software Systems Student Societies Flagship Hackathon, [XHacks 2026](https://systemshacks-2026-xhacks.devpost.com/?_gl=1*kwn7ro*_gcl_au*OTMyODIxMjI0LjE3NzgxOTQ2NTE.*_ga*MTg4MjAyMTY4NS4xNzc4MTk0NjUx*_ga_0YHJK3Y10M*czE3NzgxOTQ2NTEkbzEkZzEkdDE3NzgxOTQ5NDgkajYwJGwwJGgw) !!

## Getting started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)

### Install and run locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/YOUR_USERNAME/SFUConnect.git
   cd SFUConnect
   ```

2. **Install dependencies and start the dev server**
   ```bash
   cd web
   npm install
   npm run dev
   ```
   The app will be at `http://localhost:5173`.

3. **Firebase**  
   The app is wired to a Firebase project (Auth + Firestore). To use your own:
   - Create a project in [Firebase Console](https://console.firebase.google.com).
   - Enable **Authentication** (Email/Password) and **Firestore**.
   - Add your config in `web/src/firebase.js` (or use env vars and a small config change).
   - Deploy Firestore rules and indexes from `web/`:
     ```bash
     cd web && npx firebase deploy --only firestore:rules
     npx firebase deploy --only firestore:indexes
     ```

### Build for production

```bash
cd web
npm run build
```

Output is in `web/dist/`. To preview:

```bash
npm run preview
```

---
