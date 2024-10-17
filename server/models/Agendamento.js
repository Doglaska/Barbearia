const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema({
    nomeCliente: {
        type: String,
        required: true,
        trim: true
    },
    profissional: {
        type: String,
        required: true,
        trim: true
    },
    servicos: [
        {
            nome: {
                type: String,
                required: true,
                trim: true
            },
            preco: {
                type: Number,
                required: true
            }
        }
    ],
    horario: {
        type: Date,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pendente', 'concluído', 'cancelado'],
        default: 'pendente'
    }
});

module.exports = mongoose.model('Agenda', agendamentoSchema);
