// Garante que o script só será executado depois que todo o HTML for carregado
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona o botão e o container da mensagem pelo ID
    const msgButton = document.getElementById('msgButton');
    const messageContainer = document.getElementById('messageContainer');

    // Esconde o container da mensagem inicialmente
    messageContainer.style.display = 'none';

    // Adiciona um "ouvinte de evento" que espera por um clique no botão
    msgButton.addEventListener('click', function() {
        // Frase que será exibida
        const motivacao = "O sucesso é a soma de pequenos esforços repetidos dia após dia. Continue estudando!";

        // Define o texto dentro do container da mensagem
        messageContainer.textContent = motivacao;

        // Mostra o container da mensagem
        messageContainer.style.display = 'block';
    });

});