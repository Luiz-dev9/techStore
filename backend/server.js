const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/cadastra', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: "Preencha todos os campos" });
    }

    db.query(
        'INSERT INTO cadastro (email) VALUES (?)',
        [email],
        (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Cadastro realizado com sucesso!', id: results.insertId });
        }
    );
});

app.listen(PORT, () => {
    console.log(`Conectado na porta ${PORT}`);
});