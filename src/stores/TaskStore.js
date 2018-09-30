
const TaskStore = {
  data: {
    taskList: ['learn vue', 'make an app with vue'],
  },
  methods: {
    addTask(task) {
      TaskStore.data.taskList.push(task);
    }
  }
};

export default TaskStore;
