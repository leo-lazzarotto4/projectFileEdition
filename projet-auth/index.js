const express = require('express');
const cors = require('cors'); // Ajout du module CORS
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

app.use(cors()); // Utilisation du middleware CORS
app.use(express.json());

const users = []; // Base de données simulée pour stocker les utilisateurs

// Middleware pour vérifier le token JWT
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Accès refusé, token manquant.' });

  jwt.verify(token, 'votre_secret', (err, user) => {
    if (err) return res.status(403).json({ message: 'Token invalide.' });
    req.user = user;
    next();
  });
};

// Route pour l'inscription
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: 'Utilisateur créé.' });
});

// Route pour la connexion
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: 'Nom d’utilisateur ou mot de passe incorrect.' });
    }
  
    const token = jwt.sign({ username: user.username }, 'votre_secret', { expiresIn: '1h' });
    
    // Renvoie le token et le nom d'utilisateur
    res.json({ token, username: user.username });
  });
  

// Route protégée
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: `Bienvenue ${req.user.username} dans la zone protégée.` });
});

app.listen(3000, () => console.log('Serveur démarré sur le port 3000'));
