const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const filters = document.querySelectorAll(".filters button");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(filter = "all") {
  taskList.innerHTML = "";

  tasks
    .filter(task => {
      if (filter === "all") return true;
      return filter === "completed" ? task.completed : !task.completed;
    })
    .forEach((task, index) => {
      const li = document.createElement("li");
      li.className = `task ${task.completed ? "completed" : ""}`;

      const span = document.createElement("span");
      span.textContent = task.text;
      span.onclick = () => toggleComplete(index);

      const delBtn = document.createElement("button");
      delBtn.innerHTML = "&times;";
      delBtn.onclick = () => deleteTask(index);

      li.appendChild(span);
      li.appendChild(delBtn);
      taskList.appendChild(li);
    });
}

function addTask() {
  const text = taskInput.value.trim();
  if (text) {
    tasks.push({ text, completed: false });
    saveTasks();
    renderTasks();
    taskInput.value = "";
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") addTask();
});

filters.forEach(btn =>
  btn.addEventListener("click", () => {
    document.querySelector(".filters .active").classList.remove("active");
    btn.classList.add("active");
    renderTasks(btn.dataset.filter);
  })
);

// Initial render
renderTasks();
