const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Importando CORS

dotenv.config(); // Carregando variáveis do .env

const app = express();
const PORT = process.env.PORT || 3000; // Define a porta

// Middleware para JSON e CORS
app.use(express.json()); 
app.use(cors()); // Habilita CORS

// Conectando ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado com sucesso!'))
.catch(err => {
    console.error('Erro ao conectar no MongoDB:', err);
    process.exit(1); // Encerra em caso de falha crítica
});

// Rota de teste para verificar a API
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

// Importa e usa as rotas de agendamentos
const agendamentoRoutes = require('./routes/agendamentoRoutes');
app.use('/api/agendamentos', agendamentoRoutes);

// Inicializa o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
