const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const completList = document.querySelector('.list-task');

let listItens = []

function newTask() {
    listItens.push({
        task: input.value,
        finish: false
        
    })

    input.value = '';
    showTask();
}

function showTask() {

    let newList;

    listItens.forEach((addTask, indexArray) => {
        newList = newList + `
         <li class="task">
                    <img src="./img/checked.png" alt="imagem de check">
                    <p>${addTask.task}</p>
                    <img src="./img/trash.png" alt="imagem de lixeira" onclick="delItem(${indexArray})">
                </li>
                `
    })
    completList.innerHTML = newList;

}

function delItem(indexArray) {
    listItens.splice(indexArray, 1);

    showTask();
}

button.addEventListener('click', newTask)