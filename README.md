# 🎬 Netflix Clone (Tailwind CSS) – Project README

## 📌 Overview

This project is a **Netflix Clone UI** built using **React.js** and **Tailwind CSS**. It replicates the look and feel of Netflix with modern design practices, responsive layouts, and dynamic movie data integration.

---

## 🚀 Features

* 🎥 Netflix-style Homepage UI
* 📂 Movie Categories (Trending, Top Rated, Originals)
* 🔍 Search Functionality
* ▶️ Trailer Preview (via API)
* 🌙 Fully Responsive Design
* ⚡ Fast Styling using Tailwind CSS
* 🔐 Authentication (optional with Firebase)

---

## 🛠️ Tech Stack

### Frontend:

* React.js
* Tailwind CSS
* JavaScript (ES6+)

### APIs:

* TMDB API (The Movie Database)

### Optional:

* Firebase (Authentication + Hosting)

---

## 📁 Folder Structure

```bash
netflix-clone/
│── public/
│── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Banner.jsx
│   │   ├── Row.jsx
│   │   └── MovieCard.jsx
│   ├── pages/
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
│── tailwind.config.js
│── package.json
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 4️⃣ Configure Tailwind

Update `tailwind.config.js`:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add Tailwind to your CSS (`index.css` or `main.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🔑 Environment Variables

Create a `.env` file:

```bash
VITE_TMDB_API_KEY=your_tmdb_api_key
```

---

## ▶️ Run the Project

```bash
npm run dev
```

---

## 📸 UI Highlights

* 🎬 Hero Banner with featured movie
* 🎞️ Horizontal scrollable movie rows
* 🔥 Hover effects & smooth transitions
* 📱 Mobile-first responsive design

---

## 📈 Future Improvements

* 🔐 User Authentication
* ❤️ Watchlist Feature
* 🎯 Personalized Recommendations
* 🌍 Multi-language Support
* 🎥 Full Video Player Integration

---

## 🚀 Deployment

### Deploy on Vercel

```bash
npm install -g vercel
vercel
```

### Deploy on Netlify

```bash
npm run build
```

Upload the `dist` folder to Netlify.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, open an issue first.

---

## 📜 License

This project is for educational purposes only and is not affiliated with Netflix.

---

## 🙌 Acknowledgements

* TMDB API for movie data
* Netflix UI inspiration

---

## 💡 Author

Kumar Roushan
Sunit Kashyap
Raj Kumar
GitHub: https://github.com/kumarroushan9898/netflixClone

---
