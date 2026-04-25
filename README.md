# 🎬 Netflix Clone UI

## 📌 Overview

This project is a **Netflix Clone UI** built using **React.js (v19)**, **Vite**, and **Tailwind CSS (v4)**. It replicates the look and feel of Netflix with modern design practices, responsive layouts, client-side routing, and dynamic movie data integration.

---

## 🚀 Features

* 🎥 **Netflix-style Homepage UI** with featured banner and category rows.
* 📂 **Dedicated Pages**: Home, TV Shows, Movies, New & Popular, My List.
* 🔍 **Search Functionality**: A dedicated page to search for movies/shows.
* 🔐 **Authentication Page**: A basic login UI page.
* 🌙 **Fully Responsive Design**: Mobile-first approach.
* ⚡ **Fast Styling**: Powered by Tailwind CSS v4.
* 🛤️ **Client-Side Routing**: Implemented using React Router v7.

---

## 🛠️ Tech Stack

### Frontend:

* React 
* Vite
* Tailwind CSS 4
* React Router DOM 7
* JavaScript (ES6+)

### APIs:

* TMDB API (The Movie Database) for dynamic content

---

## 📁 Folder Structure

```bash
netflix-clone/
│── public/
│── src/
│   ├── assets/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Navbar.jsx
│   │   └── Row.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Movies.jsx
│   │   ├── MyList.jsx
│   │   ├── NewPopular.jsx
│   │   ├── Search.jsx
│   │   └── TVShows.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│── .env
│── eslint.config.js
│── package.json
│── vite.config.js
│── README.md
```

---

### 1️⃣ Clone the repository

```bash
git clone https://github.com/kumarroushan9898/netflixClone.git
cd netflixClone
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the root directory:

```bash
VITE_TMDB_API_KEY=your_tmdb_api_key
```

### 4️⃣ Run the Project

```bash
npm run dev
```

---

## 📸 UI Highlights

* 🎬 **Hero Banner**: Features a randomly selected trending movie.
* 🎞️ **Movie Rows**: Horizontal scrollable rows for different categories.
* 🔥 **Interactive Cards**: Hover effects and smooth transitions on movie cards.
* 📱 **Mobile-First**: Fully responsive navigation and grid layouts.

---

## 🙌 Acknowledgements

* TMDB API for movie data
* Netflix UI inspiration

---

## 💡 Author

**Kumar Roushan**
**Sunit Kashyap**
**Raj Kumar**

GitHub: https://github.com/kumarroushan9898/netflixClone