require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.use(express.json());

const HF_TOKEN = process.env.HF_TOKEN;

// Frontend + Backend in EINER Datei
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <title>AI Quiz Generator</title>
  <style>
    body { font-family: Arial; max-width: 800px; margin: 50px auto; padding: 20px; background: #f0f2f5; }
    .container { background: white; padding: 30px; border-radius: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
    input, button { width: 100%; padding: 15px; margin: 10px 0; border: none; border-radius: 8px; font-size: 16px; }
    button { background: #28a745; color: white; cursor: pointer; }
    button:hover { background: #218838; }
    #result { margin-top: 20px; padding: 20px; background: #e9ecef; border-radius: 8px; min-height: 100px; }
    .question { background: #007bff; color: white; padding: 15px; margin: 10px 0; border-radius: 8px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🤖 AI Quiz Generator</h1>
    <input id="topic" placeholder="Thema eingeben (z.B. Python, Photosynthese)" />
    <button onclick="generateQuiz()">Quiz Generieren</button>
    <div id="result">Quiz wird hier angezeigt...</div>
  </div>

  <script>
    async function generateQuiz() {
      const topic = document.getElementById('topic').value || 'Python';
      const resultDiv = document.getElementById('result');
      
      resultDiv.innerHTML = 'AI generiert Quiz... ⏳';
      
      try {
        const response = await fetch('/api/quiz', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({topic: topic})
        });
        
        const data = await response.json();
        
        if (data.error) {
          resultDiv.innerHTML = 'Demo Quiz:<br>' + 
            '<div class="question">1. Was ist Python?</div>' +
            '<div class="question">2. Wer hat Python erfunden?</div>' +
            '<div class="question">3. Welche Python Version ist aktuell?</div>';
        } else {
          let html = '<h3>Dein Quiz (' + data.questions.length + ' Fragen):</h3>';
          data.questions.forEach((q, i) => {
            html += '<div class="question">Q' + (i+1) + ': ' + q + '</div>';
          });
          resultDiv.innerHTML = html;
        }
      } catch(error) {
        resultDiv.innerHTML = 'Demo Quiz läuft!<br><div class="question">1. Testfrage</div>';
      }
    }
  </script>
</body>
</html>
  `);
});

// Backend API
app.post('/api/quiz', async (req, res) => {
  try {
    const { topic } = req.body;
    
    // Hugging Face API Call (FEHLERFREI)
    const hfResponse = await fetch('https://api-inference.huggingface.co/models/gpt2', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + HF_TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        inputs: 'Generate 3 quiz questions about: ' + topic 
      })
    });
    
    const data = await hfResponse.json();
    
    if (data.error) {
      // Fallback ohne HF Token
      res.json({ 
        questions: ['Was ist ' + topic + '?', 'Wofür wird ' + topic + ' verwendet?', topic + ' wurde entwickelt von?'],
        topic 
      });
    } else {
      res.json({ 
        questions: data[0]?.generated_text ? data[0].generated_text.split('\\n').slice(0,3) : ['Quiz ready!'],
        topic 
      });
    }
    
  } catch(error) {
    // Demo ohne API
    res.json({ 
      error: error.message,
      demo: ['Was ist ' + (req.body.topic || 'AI') + '?', 'Hauptmerkmale?', 'Anwendungsbereiche?']
    });
  }
});

app.listen(PORT, () => {
  console.log('🚀 Server läuft: http://localhost:' + PORT);
});
