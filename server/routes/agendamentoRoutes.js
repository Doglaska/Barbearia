const express = require('express');
const router = express.Router();
const Agenda = require('../models/agendamento');

// Rota para criar um agendamento
router.post('/', async (req, res) => {
    const { nomeCliente, profissional, servicos, horario, total } = req.body;

    // Verifica se todos os campos foram preenchidos
    if (!nomeCliente || !profissional || !servicos || !horario || !total) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    try {
        const novoAgendamento = new Agenda({
            nomeCliente,
            profissional,
            servicos,
            horario,
            total
        });

        await novoAgendamento.save();
        res.status(201).json(novoAgendamento);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar agendamento", error });
    }
});

module.exports = router;
