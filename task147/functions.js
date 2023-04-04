export const formatTaskList = (tasks) => {

  return tasks.map(task => {
    const icon = task.status == "DONE" ? "\u2705" : "\u274c";
    return `${icon} ${task.title}`;
  });;
}