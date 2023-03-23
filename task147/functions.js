export const formatTaskList = (tasks) => {

  for(let i=0;i< tasks.length;i++){
    if(tasks[i].status =="DONE"){
     tasks[i][1].unshift("\u2705")
    }else{
      tasks[i][1].unshift("\u274c")
      console.log(tasks[i])
    }
  };
  return tasks
}