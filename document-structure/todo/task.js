const taskForm = document.querySelector("form");
const tasksList = document.querySelector(".tasks__list");

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const hasValue = taskForm.task__input.value.trim().length > 0;
  const newTask = `<div class="task"><div class="task__title">
	${taskForm.task__input.value}
	</div>
	<a href="#" class="task__remove">&times;</a>
  </div>`;

  if (hasValue) {
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
