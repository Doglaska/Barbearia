const express = require('express');
const Agendamento = require('../models/Agendamento');
const router = express.Router();

// Criar novo agendamento
router.post('/', async (req, res) => {
    const agendamento = new Agendamento(req.body);
    try {
        await agendamento.save();
        res.status(201).send(agendamento);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Obter todos os agendamentos
router.get('/', async (req, res) => {
    try {
        const agendamentos = await Agendamento.find();
        res.status(200).send(agendamentos);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
