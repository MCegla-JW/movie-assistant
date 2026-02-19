## Movie Night Suggestion 🎬

A simple full-stack web app that helps you decide what movie to watch. Enter a list of movies you're considering, and the AI will pick one for you, provide a synopsis, and suggest the perfect snack pairing.
Features

AI-powered movie recommendations using Google's Gemini API
Movie synopsis generation
Snack pairing suggestions
Clean, responsive UI with Markdown-formatted responses

## Tech Stack

Backend: FastAPI (Python)

Frontend: React + Vite

AI: Google Gemini 2.5 Flash

Styling: Inline CSS

## Setup

Clone the repository

Install backend dependencies: pip install fastapi pydantic google-generativeai python-dotenv uvicorn

Install frontend dependencies: npm install

Create a .env file with your GEMINI_API_KEY

Run backend: uvicorn main:app --reload

Run frontend: npm run dev
