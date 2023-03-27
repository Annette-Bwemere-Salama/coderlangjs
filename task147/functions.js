export const formatTaskList = (tasks) => {
  for (let i = 0; i < tasks.length; i++)
  {
  if (tasks[i].status == 'DONE')
  {
    console.log(tasks[i].title)
  tasks[i] = `\u2705 title: ${tasks[i].title}`;
  }
  else
  {
  tasks[i] = `\u274c title: ${tasks[i].title}`;
  }
  }
  return tasks;
}