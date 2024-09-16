let addTaskBtn = document.querySelector("#addTask");
addTaskBtn.addEventListener("click", function workflow() {
    let task = document.querySelector("#task").value;
    if (task) {
        let taskList = document.querySelector("#taskList");
        let dueTime = document.querySelector("#dueTime").value;
        let taskItem = document.createElement("div");
        taskItem.innerHTML = `
        <h3 class="tasklist-item">${task} - Due by : ${dueTime}</h3>`;
        // Creating remove task button
        let removeBtn = document.createElement("button");
        removeBtn.className = "remove-btn";
        removeBtn.innerText = "Remove";
        removeBtn.addEventListener("click", function() {
            taskList.removeChild(taskItem);          // To remove the task from list
        });
        taskItem.appendChild(removeBtn);
        taskList.appendChild(taskItem);
        document.querySelector("#task").value = "";  // Clear the input box
        document.querySelector("#dueTime").value = "";  
    }
});