// Questão 1 - Criar um array para armazenar as tarefas
let tarefas = [
    { id: 1, titulo: 'Tarefa Inicial', concluida: false } // A primeira tarefa do array, com id 1, título 'Tarefa Inicial' e status de não concluída
];

// Questão 2 - Adicionar um evento ao botão para capturar o valor do input e criar uma nova tarefa
document.querySelector('.botao__adicionar').addEventListener('click', () => {
    // Captura o valor digitado no campo de input (título da tarefa) e remove espaços extras no começo e no final
    const titulo = document.querySelector('.texto__tarefa').value.trim();

    // Verifica se o título não está vazio
    if (titulo) {
        // Questão 3 - Exibir um alert informando que a tarefa foi adicionada com sucesso
        alert('Tarefa adicionada com sucesso!');
        
        // Adiciona a nova tarefa ao array 'tarefas'. Usa o operador spread ( ... ) para copiar as tarefas existentes e adicionar a nova tarefa com um id único
        tarefas = [...tarefas, { id: tarefas.length + 1, titulo, concluida: false }];
}})