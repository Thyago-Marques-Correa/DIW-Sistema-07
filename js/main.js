function adicionarTarefa() {
    var inputTarefa = document.getElementById('novaTarefa');
    var inputData = document.getElementById('dataLimite');
    var inputCategoria = document.getElementById('categoria');
    var tarefa = inputTarefa.value;
    var data = inputData.value;
    var categoria = inputCategoria.value;

    if (tarefa !== '') {
        var li = document.createElement('li');
        li.textContent = tarefa + ' // ' + data + ' // ' + categoria;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.onclick = function () {
            this.parentNode.remove();
            salvarTarefas();
        };

        li.appendChild(deleteButton);
        li.onclick = function () {
            this.classList.toggle('concluida');
            salvarTarefas();
        };

        document.getElementById('listaDeTarefas').appendChild(li);
        inputTarefa.value = '';
        inputData.value = '';
        inputCategoria.value = '';
        inputTarefa.focus();
        salvarTarefas();
    }
}

function salvarTarefas() {
    var liTarefas = document.querySelectorAll('li');
    var tarefas = [];
    for (var i = 0; i < liTarefas.length; i++) {
        var tarefaTexto = liTarefas[i].textContent.split(' - ')[0];
        var tarefaData = liTarefas[i].textContent.split(' - ')[1];
        var tarefaCategoria = liTarefas[i].textContent.split(' - ')[2];
        var tarefa = {
            texto: tarefaTexto,
            data: tarefaData,
            categoria: tarefaCategoria,
            concluida: liTarefas[i].classList.contains('concluida')
        };
        tarefas.push(tarefa);
    }
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function voltar() {
    window.history.back();
}