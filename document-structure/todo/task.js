const taskForm = document.querySelector("form");
const tasksList = document.querySelector(".tasks__list");
const task = document.querySelectorAll(".task");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTask = `<div class="task"><div class="task__title">
	${taskForm.task__input.value}
	</div>
	<a href="#" class="task__remove">&times;</a>
  </div>`;

  if (taskForm.task__input.value) {
    tasksList.innerHTML += newTask;
  }

  taskForm.reset();
});


tasksList.addEventListener("click", (event) => {
  const deleteTask = event.target.closest(".task__remove");
  if (deleteTask) {
    event.preventDefault();
    deleteTask.closest(".task").remove();
  }
});
