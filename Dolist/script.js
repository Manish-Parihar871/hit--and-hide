function addData(){
    let inputText = document.getElementById('insert-text').value;
    let inputDate = document.getElementById('insert-date').value;
    let newItem = document.createElement('li');
    newItem.innerHTML = `<span>${inputText}</span><span>${inputDate}</span> <button onclick="editTask(event)" > Edit </button> <button onclick="deleteTask(event)" > X </button>`;
    document.getElementById('list').append(newItem);
}

function deleteTask(e){
    let parentNode = e.target.parentNode;
    parentNode.remove();
}

function editTask(e){
    let currentItem = e.target.parentNode;
            let currentItemTaskName = currentItem.children[0];
            let currentItemTaskDate = currentItem.children[1];

            currentItem.innerHTML = `<span> ${currentItem.children[0].innerText} </span>
             <span> ${ currentItem.children[1].innerText } </span> 
             <input id="current-task-name" type="text" value=${currentItemTaskName.innerText}  /> 
             <input id="current-task-date" type="date" value=${currentItemTaskDate.innerText} /> 
              <button onclick="saveTask(event)" > Save </button> 
              <button onclick="deleteTask(event)" > X </button> `

            currentItemTaskName = currentItem.children[0];
            currentItemTaskDate = currentItem.children[1];

            currentItemTaskName.style.display = 'none';
            currentItemTaskDate.style.display = 'none';
}
 function saveTask(e){
            let currentItem = e.target.parentNode; 
            let currentItemTaskName = currentItem.children[0];
            let currentItemTaskDate = currentItem.children[1];
            let editedTaskName = currentItem.children[2];
            let editedTaskDate = currentItem.children[3];

            currentItemTaskName.innerText = editedTaskName.value;
            currentItemTaskDate.innerText = editedTaskDate.value;

            editedTaskDate.remove();
            editedTaskName.remove();


            currentItemTaskName.style.display = 'inline';
            currentItemTaskDate.style.display = 'inline';

            currentItem.children[2].innerText ="Edit";
     
 }