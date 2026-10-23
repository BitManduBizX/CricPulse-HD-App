import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

function cricketApiPlugin(): Plugin {
  return {
    name: 'cricket-api-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/health') {
          res.setHeader('Content-Type', 'application/json');
          res.statusCode = 200;
          res.end(JSON.stringify({ status: 'OK', app: 'CricPulse HD', timestamp: new Date().toISOString() }));
          return;
        }

        if (req.url === '/api/gemini/chat' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const { prompt, userKey, matchContext } = JSON.parse(body || '{}');
              const apiKey = userKey || process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

              if (!apiKey) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.end(JSON.stringify({
                  text: `🏏 **CricMind Cricket Analyst (Demo Mode)**:\n\nThank you for reaching out! You asked: "${prompt}"\n\nTo unlock live real-time analysis powered by Google Gemini, click the ⚙️ Settings icon in this chat window and attach your free Gemini API Key from Google AI Studio. Meanwhile, enjoy our live scoreboard, NPL hub, and match predictions!`,
                  mode: 'demo_fallback'
                }));
                return;
              }

              // Use Google GenAI REST API
              const systemInstruction = `You are CricMind AI, the world-class Chief Cricket Analyst for CricPulse HD. Knowledgeable about NPL (8 franchises), ICC Men's & Women's cricket, The Hundred, IPL, BBL. Answer concisely with markdown stats. ${matchContext ? `Context: ${JSON.stringify(matchContext)}` : ''}`;
              
              const geminiRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  contents: [{ role: 'user', parts: [{ text: `${systemInstruction}\n\nUser Question: ${prompt}` }] }],
                  generationConfig: { temperature: 0.7 }
                })
              });

              if (!geminiRes.ok) {
                throw new Error(`Gemini API returned ${geminiRes.status}`);
              }

              const data = await geminiRes.json();
              const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated.';

              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({ text: responseText, mode: 'gemini' }));
            } catch (err: any) {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 200;
              res.end(JSON.stringify({
                text: `🏏 **CricMind Insight**: ${err.message || 'Unable to connect to Gemini API. Please check your API key.'}`,
                isError: true
              }));
            }
          });
          return;
        }

        next();
      });
    }
  };
}

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss(), cricketApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
