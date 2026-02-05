const mainBox = document.getElementById("main-box");
const inputBox = document.getElementById("task-input");

let tasks = [];

function createNewTask(){

    if(event.key === "Enter" && inputBox.value != ""){

        for(let i = 0; i < tasks.length; i++){
            if(tasks[i].innerText === inputBox.value){
                window.alert("You already have this task");
                inputBox.value = "";
                return;
            }
        }

        const task = document.createElement("div");
        task.className = "task";

        tasks.push(task);

        const checkmark = document.createElement("input");
        checkmark.type = "checkbox";
        checkmark.className = "task-checkbox";

        const text = document.createElement("h5");
        text.textContent = inputBox.value;

        task.appendChild(checkmark);
        task.appendChild(text);
        mainBox.appendChild(task);
        
        inputBox.value = "";
    }
}

document.addEventListener("keydown", createNewTask);

function updateTasks(){

    if(tasks.length === 0){
        window.alert("You have no tasks yet");
        return;
    }

    for(let i = tasks.length - 1; i > -1; i--){
        let divT = tasks[i];
        let checkboxT = divT.querySelector("input[type='checkbox']");

        if(checkboxT.checked){
            tasks[i].remove();
            tasks.splice(i, 1);
        }

    }

    console.log("list updated !");

}