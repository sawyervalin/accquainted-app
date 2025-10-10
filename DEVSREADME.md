💙 Accquainted – Developer Documentation

Accquainted is a cross-platform social and dating app built for the UCI ACC community.
It connects students through shared culture, clubs, and campus life — built with React Native, Expo, and Supabase.

🧱 Tech Stack
Layer	        Technology
Frontend	    React Native + Expo Router
Backend	        Supabase (Postgres + Auth + Storage)
State / Storage	AsyncStorage (local), migrating to Supabase
Language	    TypeScript / JavaScript
Design	        Tailwind-style utility layout, custom color theme
Tools	        EAS Build, Expo Go, VS Code, GitHub Actions
🚀 Getting Started:

1️⃣ Clone the Repository
git clone https://github.com/sawyervalin/accquainted-app.git
cd accquainted-app

2️⃣ Install Dependencies
npm install


Ensure Node 18 + npm 9 (or Yarn 1.x) are installed.

3️⃣ Start the Dev Server
npx expo start --tunnel


--tunnel lets you preview on any device via Expo Go.

Scan the QR code with your phone’s camera or Expo Go app.

🧩 Environment Configuration

Check your app.json for Supabase credentials:

"extra": {
  "EXPO_PUBLIC_SUPABASE_URL": "https://uydwpvmosbcbvkgdyevd.supabase.co",
  "EXPO_PUBLIC_SUPABASE_ANON_KEY": "eyJhbGc..."
}


✅ Only the anon key belongs here — never commit service or private keys.

🧠 Required Libraries

If something fails to resolve, run:

npm install @react-native-async-storage/async-storage \
react-native-get-random-values \
react-native-url-polyfill \
@supabase/supabase-js


Then clear the Metro cache:

npx expo start -c

🧰 Optional: Cloud Builds (EAS)

Install the EAS CLI if you’ll build installable apps:

npm install -g eas-cli
eas login


To create a preview APK:

eas build -p android --profile preview


For iOS builds, run the same command with -p ios on macOS or via EAS Cloud.

🧼 Troubleshooting
Problem	Fix
Module not found / resolve errors	npx expo start -c
Command not found: eas	npm install -g eas-cli
Stuck caches / bad paths	rm -rf node_modules .expo .expo-shared package-lock.json && npm install
Expo Go not loading	Try npx expo start --lan (same Wi-Fi) or --localhost
🧭 Developer Workflow

Branch naming

feature/<feature-name>
fix/<bug-name>
chore/<maintenance>


Commit format

feat: add Supabase auth
fix: resolve profile save crash


Pull Requests

Keep them small & focused.

Write a one-line summary of what changed.

Include screenshots if it affects UI.

🧩 Project Structure
accquainted-app/
│
├── app/                # Expo Router pages
│   ├── (tabs)/         # Tab screens (Home, Explore, Profile, etc.)
│   ├── create-profile.tsx
│   ├── login.tsx
│   └── _layout.tsx
│
├── components/         # Reusable UI (ThemedText, Collapsible, etc.)
├── lib/                # Supabase client, storage helpers
├── hooks/              # Custom hooks (useProfile, etc.)
├── theme/              # Color palette and shared styles
├── assets/             # Icons, logos, images
└── app.json            # Expo configuration

🧩 Quick Dev Commands
Task	Command
Start project	npx expo start
Start with tunnel	npx expo start --tunnel
Build APK (Android)	eas build -p android --profile preview
Clean cache	npx expo start -c
Lint / format	npm run lint (if configured)