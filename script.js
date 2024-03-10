const taskInput = document.querySelector("#task-input");
const taskForm = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list");

taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const taskTitle = taskInput.value;
    const listItem = document.createElement('li');
    listItem.innerHTML= taskTitle;
    taskList.append(listItem);
    let span = document.createElement("span");
    span.innerHTML='&times';
    listItem.appendChild(span);
    taskInput.value="";
    saveListData();
}
)
taskList.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
        saveListData();
    }
    if(e.target.tagName=="SPAN"){
        const li =e.target.parentElement;
        li.remove();
        saveListData();
    }
}
);
function showListData(){
    taskList.innerHTML=localStorage.getItem('listItem');
}
function saveListData(){
    localStorage.setItem('listItem',taskList.innerHTML);
}
showListData();