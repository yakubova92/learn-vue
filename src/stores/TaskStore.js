
const TaskStore = {
  data: {
    taskList: [{id: 1, desc: 'learn vue', complete: true}, {id: 2, desc: 'make an app with vue', complete: false}],
  },
  methods: {
    addTask(desc) {
      let idNum = TaskStore.data.taskList.length + 1;
      const newTask = {id: idNum, desc: desc, complete: false}
      TaskStore.data.taskList.push(newTask);
    }
  }
};

export default TaskStore;
