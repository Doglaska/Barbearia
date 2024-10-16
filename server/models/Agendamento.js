const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        required: true,
    },
    profissional: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Agendamento', agendamentoSchema);
