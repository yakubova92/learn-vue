<template>
  <div>
    <h1>Do all the things!</h1>
    <li v-for="task in TaskStore.taskList">{{task}}</li>
    <input v-model="newTask" v-on:keyup.13="addTask(newTask)" />
  </div>
</template>

<script>
import TaskStore from "../stores/TaskStore"
export default {
  data() {
    console.log('TaskStore', TaskStore)
    return {
      newTask: null,
      TaskStore: TaskStore.data,
    };
  },
  methods: {
    addTask(task) {
      TaskStore.methods.addTask(task)
      this.newTask = null;
    }
  }
}
</script>
