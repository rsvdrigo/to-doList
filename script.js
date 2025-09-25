const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const completList = document.querySelector('.list-task');

let listItens =[]

function newTask(){
    listItens.push(input.value)

    input.value = '';
    showTask();
}

function showTask(){

    let newList;

    listItens.forEach(task=>{
        newList = newList +`
         <li class="task">
                    <img src="./img/checked.png" alt="imagem de check">
                    <p>${task}</p>
                    <img src="./img/trash.png" alt="imagem de lixeira">
                </li>
                `
    })
    completList.innerHTML = newList;

}



button.addEventListener('click',newTask)