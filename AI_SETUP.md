# AI Terminal Setup Guide

Your portfolio now has a **real AI-powered terminal** using Google's Gemini API (completely free)!

## 🚀 How to Enable AI

### Step 1: Get Your Free API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"** or **"Get API Key"**
4. Copy the API key

### Step 2: Add API Key to Your Project

1. In your portfolio folder, create a file named `.env`
2. Add this line to the file:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
3. Replace `your_api_key_here` with the actual API key you copied

### Step 3: Restart Dev Server

```bash
npm run dev
```

That's it! Your AI terminal is now powered by real AI! 🤖

## 📝 How It Works

- **With API Key**: The terminal uses Google's Gemini AI to answer questions intelligently
- **Without API Key**: Falls back to pre-programmed responses (still works great!)
- **Completely Free**: Google Gemini has a generous free tier
- **Smart Context**: The AI knows all about you from your portfolio data

## 🔒 Security Note

- **Never commit your `.env` file to Git**
- The `.gitignore` file already excludes it
- When deploying, add the environment variable in your hosting platform's settings

## 🌐 Deployment

When deploying to Vercel/Netlify:
1. Go to your project settings
2. Add environment variable: `VITE_GEMINI_API_KEY`
3. Paste your API key as the value
4. Redeploy

## 💡 Try These Questions

- "What does Atanshu do?"
- "Tell me about his experience at AlgoUniversity"
- "What technologies does he know?"
- "What are his achievements?"
- Or ask anything else!

Enjoy your AI-powered portfolio! ✨
