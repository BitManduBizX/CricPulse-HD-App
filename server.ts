import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || '3000', 10);
  const HOST = '0.0.0.0';

  app.use(express.json({ limit: '5mb' }));

  // Health-check endpoint for Cloud Run and runtime health probes
  app.get('/api/health', (req, res) => {
    res.status(200).json({ 
      status: 'OK', 
      app: 'CricPulse HD', 
      timestamp: new Date().toISOString() 
    });
  });

  // CricMind Gemini AI Assistant proxy endpoint
  app.post('/api/gemini/chat', async (req, res) => {
    try {
      const { prompt, history, userKey, matchContext } = req.body;
      const apiKey = userKey || process.env.GEMINI_API_KEY;

      if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
      }

      if (!apiKey) {
        return res.status(200).json({
          text: `🏏 **CricMind Expert Analyst Insight (Instant Mode)**\n\nThank you for asking about **"${prompt}"**!\n\nHere is a quick tactical snapshot:\n- **Match Dynamics**: T20 powerplays require aggressive 360-degree boundary exploitation while keeping dot-ball % under 32%.\n- **NPL Spotlight**: Nepal Premier League (NPL) franchise teams at TU Cricket Ground Kirtipur often target the 65-meter mid-wicket ropes when spin is introduced after the 6th over.\n- **Pro Tip**: To ask deep custom questions powered live by Google Gemini, click **Settings (⚙️)** in the assistant header to add your free Google AI Studio key!`,
          mode: 'demo_fallback'
        });
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const systemInstruction = `You are CricMind AI, the world-class Chief Cricket Analyst for CricPulse HD (or CricSphere).
You possess encyclopedia-grade knowledge of:
1. International Cricket (ICC Men's & Women's Tests, ODIs, T20Is, World Cups, WTC, Champions Trophy).
2. Global T20 & Franchise Leagues: Nepal Premier League (NPL with its 8 franchise teams: Biratnagar Kings, Chitwan Rhinos, Janakpur Bolts, Kathmandu Gorkhas, Karnali Yaks, Lumbini Lions, Pokhara Avengers, Sudurpaschim Royals), IPL, Big Bash League (BBL), Pakistan Super League (PSL), Caribbean Premier League (CPL), The Hundred (100-ball league in England), International League T20 (ILT20), Bangladesh Premier League (BPL), SA20, Major League Cricket (MLC).
3. Cricket Rules, DLS Method, DRS protocol, pitch conditions, bowling grips, batting analytics, Wagon Wheels, Manhattan run charts, win probability computations.
4. Official NPL Prize Money breakdown: Winner: रू 1.1 Crore (NPR 11 Million), Runner-up: रू 51 Lakh, 3rd: रू 25 Lakh, 4th: रू 15 Lakh.
5. Current match context if provided: ${matchContext ? JSON.stringify(matchContext) : 'None provided'}.

Answer clearly, authoritatively, and with energetic cricket commentator charisma. Use cricket terminology like 'yorker', 'googly', 'powerplay', 'death overs', 'strike rate', 'economy rate', 'TU Cricket Ground Kirtipur', etc. Format with clean markdown bullet points, bold key stats, and keep answers concise and engaging.`;

      const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];
      if (history && Array.isArray(history)) {
        for (const msg of history) {
          contents.push({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
          });
        }
      }
      contents.push({
        role: 'user',
        parts: [{ text: prompt }]
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      const text = response.text || 'No response generated from Gemini.';
      return res.status(200).json({ text, mode: 'gemini' });
    } catch (err: any) {
      console.error('Gemini API Error:', err);
      return res.status(200).json({
        text: `🏏 **CricMind Insight**: We encountered an issue connecting to Gemini (${err?.message || 'Check key quota or model accessibility'}). You can update your free key in the ⚙️ Settings dialog.`,
        isError: true
      });
    }
  });

  const isProduction = process.env.NODE_ENV === 'production';
  if (!isProduction) {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        host: HOST,
        port: PORT
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, HOST, () => {
    console.log(`CricPulse HD Server listening at http://${HOST}:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
