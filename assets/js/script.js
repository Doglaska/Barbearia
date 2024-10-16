// assets-js-script.js

const steps = document.querySelectorAll('.progress-step');
let currentStep = 0;

// Avançar para o próximo passo
function nextStep() {
    if (currentStep < steps.length - 1) {
        steps[currentStep].classList.remove('active');
        currentStep++;
        steps[currentStep].classList.add('active');
    }
}

// Voltar para o passo anterior
function previousStep() {
    if (currentStep > 0) {
        steps[currentStep].classList.remove('active');
        currentStep--;
        steps[currentStep].classList.add('active');
    }
}

// Adiciona eventos de clique para os botões de navegação
document.querySelector('#nextBtn').addEventListener('click', nextStep);
document.querySelector('#prevBtn').addEventListener('click', previousStep);

// Função para atualizar o rótulo dos checkboxes
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            const label = this.nextElementSibling;

            if (this.checked) {
                label.textContent = "Selecionado"; // Muda o texto para "Selecionado"
                label.style.color = "#C78C19"; // Altera a cor da fonte para corresponder
                label.style.fontWeight = "bold"; // Opcional: deixá-lo em negrito
            } else {
                label.textContent = "Selecionar"; // Retorna o texto original
                label.style.color = ""; // Restaura a cor original
                label.style.fontWeight = ""; // Opcional: remove o negrito
            }
        });
    });
});
