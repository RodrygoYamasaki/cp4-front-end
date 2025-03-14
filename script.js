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

        // Questão 4 - Exibir as tarefas na lista no DOM após adicionar a nova tarefa
        exibirTarefas();
    } else {
        // Caso o título esteja vazio, exibe um alerta para o usuário informar um título
        alert('Por favor, insira um título para a tarefa.');
    }
});

// Função para exibir as tarefas no DOM
function exibirTarefas(tarefasParaExibir = tarefas) {
    // Captura o elemento da lista de tarefas no DOM onde as tarefas serão exibidas
    const listaTarefas = document.querySelector('.tarefas__lista');
    
    // Limpa a lista de tarefas no DOM antes de adicionar as tarefas atuais
    listaTarefas.innerHTML = '';

    // Itera sobre o array de tarefas (ou um array filtrado) para criar elementos de lista para cada tarefa
    tarefasParaExibir.forEach(tarefa => {
        // Cria um novo elemento de lista (li) para a tarefa
        const item = document.createElement('li');
        
        // Adiciona a classe CSS 'tarefa__item' ao item da lista
        item.classList.add('tarefa__item');
        
        // Se a tarefa estiver concluída, adiciona a classe 'completed' para estilizar a tarefa como concluída
        if (tarefa.concluida) item.classList.add('concluida');
        
        // Define o conteúdo HTML do item da lista, incluindo o título da tarefa e o botão de "Concluir"
        item.innerHTML = `
            <span>${tarefa.titulo}</span>
            <button class="concluir__tarefa" data-id="${tarefa.id}">
                ${tarefa.concluida ? 'Desmarcar' : 'Concluir'}
            </button>
        `;
        
        // Adiciona o item da lista à lista de tarefas no DOM
        listaTarefas.appendChild(item);
    });
    
    // Após adicionar as tarefas no DOM, chama a função para adicionar eventos aos botões de "Concluir"
    adicionarEventosConcluir();
}

// Questão 5 - Implementar um botão "Concluir" que altera a propriedade 'concluida'
function adicionarEventosConcluir() {
    // Captura todos os botões com a classe 'concluir__tarefa' e adiciona um evento de clique para cada botão
    document.querySelectorAll('.concluir__tarefa').forEach(botao => {
        botao.addEventListener('click', () => {
            // Captura o id da tarefa a partir do atributo 'data-id' do botão clicado
            const id = parseInt(botao.getAttribute('data-id'));
            
            // Atualiza a lista de tarefas, alterando a propriedade 'concluida' da tarefa com o id correspondente
            tarefas = tarefas.map(tarefa => 
                tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
            );
            
            // Exibe novamente as tarefas após alterar o status de concluída
            exibirTarefas();
        });
    });
}

// Questão 6 - Filtrar tarefas não concluídas
document.querySelector('.botao__filtrar').addEventListener('click', () => {
    // Filtra as tarefas para exibir apenas as tarefas que não estão concluídas (concluida = false)
    const tarefasPendentes = tarefas.filter(tarefa => !tarefa.concluida);
    
    // Exibe as tarefas filtradas no DOM (somente as pendentes)
    exibirTarefas(tarefasPendentes); 
});

// Questão 7 - Mapear títulos das tarefas para maiúsculas e exibir no console
function exibirTitulosMaiusculos() {
    // Usa o método 'map' para criar uma nova lista de tarefas com os títulos convertidos para maiúsculas
    const tarefasComTitulosMaiusculos = tarefas.map(tarefa => {
        return { ...tarefa, titulo: tarefa.titulo.toUpperCase() };  
    });
    
    // Exibe a nova lista no console
    console.log(tarefasComTitulosMaiusculos);  
}

// Questão 8 - Calcular o total de tarefas concluídas
function exibirTotalConcluidas() {
    // Usa o método 'reduce' para contar o número de tarefas que têm a propriedade 'concluida' igual a true
    const totalConcluidas = tarefas.reduce(
        (total, tarefa) => tarefa.concluida ? total + 1 : total, 0
    );
    
    // Exibe o total de tarefas concluídas em um alerta
    alert(`Total de tarefas concluídas: ${totalConcluidas}`);
}

// Questão 9 - Utilizar destructuring para exibir título e status de uma tarefa
function exibirTituloEStatus(id) {
    // Encontra a tarefa com o id especificado
    const tarefa = tarefas.find(t => t.id === id);
    
    // Se a tarefa for encontrada, usa destructuring para extrair as propriedades 'titulo' e 'concluida'
    if (tarefa) {
        const { titulo, concluida } = tarefa;  
        // Exibe as informações em um alerta
        alert(`Título: ${titulo}\nConcluída: ${concluida ? 'Sim' : 'Não'}`);
    }
}

// Questão 10 - Criar uma função que aceita parâmetros e cria uma tarefa
function criarTarefa(id, titulo, concluida = false) {
    // Retorna um objeto de tarefa com as propriedades id, título e status de concluída
    return { id, titulo, concluida };
}

// Questão 11 - Criar uma função que aceita múltiplas tarefas como parâmetros REST
function adicionarMultiplasTarefas(...novasTarefas) {
    // Utiliza o loop for...of para adicionar cada tarefa ao array 'tarefas'
    for (let tarefa of novasTarefas) {
        tarefas.push(tarefa);  // Adiciona cada tarefa individualmente ao array
    }
    // Exibe as tarefas atualizadas no DOM
    exibirTarefas();  
}

// Função chamada quando o DOM é completamente carregado, para exibir as tarefas iniciais
document.addEventListener('DOMContentLoaded', () => {
    // Chama a função para exibir as tarefas no DOM
    exibirTarefas();
});