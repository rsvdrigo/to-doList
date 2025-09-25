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
         <li class="task ${addTask.finish && "done"}">
                    <img  src="./img/checked.png" alt="imagem de check" onclick="finishTask(${indexArray})">
                    <p>${addTask.task}</p>
                    <img src="./img/trash.png" alt="imagem de lixeira" onclick="delItem(${indexArray})">
                </li>
                `
    })
    completList.innerHTML = newList;

    localStorage.setItem('lists', JSON.stringify(listItens))

}

function finishTask(indexArray) {
    listItens[indexArray].finish = !listItens[indexArray].finish
    showTask();
}

function delItem(indexArray) {
    listItens.splice(indexArray, 1);

    showTask();
}

function reloadTasks() {
    const taskLocalStorage = localStorage.getItem('lists')
    if(taskLocalStorage){
    listItens = JSON.parse(taskLocalStorage);
    }
    showTask();
}
reloadTasks()
button.addEventListener('click', newTask)