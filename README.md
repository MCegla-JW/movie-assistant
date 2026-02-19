## Movie Night Suggestion 🎬
A simple full-stack web app that helps you decide what movie to watch. Enter a list of movies you're considering, and the AI will pick one for you, provide a synopsis, and suggest the perfect snack pairing.

## Features
- 🤖 AI-powered movie recommendations using Google's Gemini API
- 📝 Movie synopsis generation
- 🍿 Snack pairing suggestions
- ✨ Clean, responsive UI with Markdown-formatted responses

| App Demo | 
|---------------------|
| <img src='./src/assets/movie-assistant-demo.gif' alt='App Demo' width='450' height='650'>| 

## Tech Stack

<div align="center">

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)

</div>

- **Backend:** FastAPI (Python) ⚡
- **Frontend:** React + Vite ⚛️
- **AI:** Google Gemini 2.5 Flash 🤖
- **Styling:** Inline CSS 🎨

## Setup

1. **Clone the repository**
```bash
   git clone https://github.com/MCegla-JW/movie-assistant.git
   cd movie-assistant
```

2. **Install backend dependencies**
```bash
   pip install fastapi pydantic google-generativeai python-dotenv uvicorn
```

3. **Install frontend dependencies**
```bash
   npm install
```

4. **Create a `.env` file with your `GEMINI_API_KEY`**
```bash
   GEMINI_API_KEY=your_api_key_here
```

5. **Run backend**
```bash
   uvicorn main:app --reload
```

6. **Run frontend**
```bash
   npm run dev
```

Perfect for those indecisive movie nights! 🎬🍿
