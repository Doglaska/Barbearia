document.addEventListener("DOMContentLoaded", function () {
    const selectHora = document.getElementById("hora");
    const form = document.querySelector(".form-agendamento");

    // Função para formatar o horário no formato HH:MM
    function formatarHora(hora, minutos) {
        return `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
    }

    // Gerar horários de 30 em 30 minutos das 8:00 às 20:00
    for (let hora = 8; hora < 20; hora++) {
        selectHora.innerHTML += `<option value="${formatarHora(hora, 0)}">${formatarHora(hora, 0)}</option>`;
        selectHora.innerHTML += `<option value="${formatarHora(hora, 30)}">${formatarHora(hora, 30)}</option>`;
    }

    // Adicionar a última opção de horário: 20:00
    selectHora.innerHTML += `<option value="20:00">20:00</option>`;

    // Manipulação do evento de envio do formulário
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Aqui você pode processar os dados do formulário, se necessário
        const data = document.getElementById("data").value;
        const horaSelecionada = selectHora.value;

        // Salve ou envie os dados conforme necessário
        console.log(`Data: ${data}, Hora: ${horaSelecionada}`);

        // Redireciona para a página de confirmação
        window.location.href = "confirmar.html"; // Redireciona para confirmar.html
    });
});
