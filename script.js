// ======================
// Part 1: Variables & Conditionals
// ======================
let userName = "Tosin";
let favoriteLanguage = "JavaScript";
let tasks = [];

if (favoriteLanguage === "JavaScript") {
  console.log("You’re coding with the language of the web!");
}

// Greet user in DOM
document.getElementById("greeting").textContent =
  "Hello " + userName + "! Let’s be productive today 🚀";

// ======================
// Part 2: Functions
// ======================
function addTask(task) {
  if (task.trim() !== "") {
    tasks.push({ name: task, done: false });
    displayTasks();
    showMotivation();
  }
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  displayTasks();
  showMotivation();
}

// ======================
// Part 3: Loops
// ======================
function displayTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = ""; // clear before rendering

  // Loop through tasks
  for (let i = 0; i < tasks.length; i++) {
    let li = document.createElement("li");
    li.textContent = tasks[i].done ? "✅ " + tasks[i].name : tasks[i].name;

    // toggle task when clicked
    li.addEventListener("click", function () {
      toggleTask(i);
    });

    taskList.appendChild(li);
  }
}

// ======================
// Part 4: DOM Interactions
// ======================

// 1. Add task button interaction
document.getElementById("addTaskBtn").addEventListener("click", function () {
  let input = document.getElementById("taskInput");
  addTask(input.value);
  input.value = ""; // clear field
});

// 2. Motivation message updater
function showMotivation() {
  let doneTasks = tasks.filter(task => task.done).length;
  let total = tasks.length;

  let message = "";
  if (doneTasks === 0) {
    message = "Let's get started 💪!";
  } else if (doneTasks < total) {
    message = "Great job! Keep going 🔥";
  } else if (doneTasks === total && total > 0) {
    message = "You did it all 🎉! Time to relax!";
  }

  document.getElementById("motivationMessage").textContent = message;
}
