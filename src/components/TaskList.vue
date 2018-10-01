<template>
  <div>
    <h1>Do all the things!</h1>
    <li v-for="task in TaskStore.taskList" :key="task.id">
      {{task.desc}}
    </li>
    <input v-model="newTask" v-on:keyup.13="addTask(newTask)" />
    <button v-on:click="addTask(newTask)">Add Task</button>
  </div>
</template>

<script>
import TaskStore from "../stores/TaskStore"
export default {
  data() {
    return {
      newTask: null,
      TaskStore: TaskStore.data,
    };
  },
  methods: {
    addTask(desc) {
      TaskStore.methods.addTask(desc);
      this.newTask = null;
    }
  }
}
</script>

<style scoped>

</style>
