// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();

  if (taskText !== "") {
    var taskList = document.getElementById("taskList");
    var listItem = document.createElement("li");
    listItem.innerHTML =
      taskText +
      ' <button onclick="editTask(this)">Edit</button> <button onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(listItem);
    taskInput.value = ""; // Clear input field after adding task
  } else {
    alert("Please enter a task!");
  }
}

// Function to edit an existing task
function editTask(element) {
  var newText = prompt(
    "Edit task:",
    element.parentElement.firstChild.nodeValue
  );
  if (newText !== null) {
    element.parentElement.firstChild.nodeValue = newText;
  }
}

// Function to delete a task
function deleteTask(element) {
  var confirmDelete = confirm("Are you sure you want to delete this task?");
  if (confirmDelete) {
    element.parentElement.remove();
  }
}
