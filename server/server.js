const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para lidar com JSON
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.log(err));

// Rotas
app.get('/', (req, res) => {
    res.send('API Funcionando');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

const agendamentoRoutes = require('./routes/agendamentoRoutes');

// Usar rotas
app.use('/api/agendamentos', agendamentoRoutes);
