<template>
  <div id='app'>
    <img alt='Vue logo' src='./assets/logo.png' />

    <!-- Create task form -->
    <div class="creatNewTask">
      <span>
        <input type='text' class="inputTask" v-model="newTask" />
        <button
          type="button"
          class="buttonAdd"
          v-on:click="onCreateNewTask"
        >
          Create new task
        </button>
      </span>
    </div>

    <!-- Loading text -->
    <p v-if="loading">...Loading</p>

    <!-- Task table -->
    <div class="taskTable">
      <table>
        <tr v-for="task in tasks" v-bind:key="task.id" >
          <td>
            <input type="checkbox" v-model="task.done">
          </td>
          <td>
            <p :style="task.done && { textDecoration: 'line-through' }">{{ task.name }}</p>
          </td>
          <td>
            <button
              type="button"
              class="buttonDelete"
              v-on:click="() => onDeleteTask(task.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      newTask: '',
    };
  },
  computed: {
    ...mapState({
      loading: (state) => state.loading,
      tasks: (state) => state.tasks,
    }),
  },
  methods: {
    ...mapActions([
      'createNewTasks',
      'deleteTaskById',
    ]),
    onCreateNewTask() {
      const newTask = {
        id: new Date().getTime(),
        name: this.newTask,
        done: false,
      };
      this.newTask = '';
      this.createNewTasks(newTask);
    },
    onDeleteTask(id) {
      this.deleteTaskById(id);
    },
  },
};
</script>

<style>
#app {
  text-align: center;
}

.creatNewTask {
  margin-bottom: 10px;
}
.creatNewTask .inputTask {
  width: 300px;
  height: 28px;
}
.creatNewTask .buttonAdd {
  height: 28px;
  margin-left: 10px;
}

.taskTable table {
  background-color: aliceblue;
  margin: 0px auto;
  width: 420px;
}
.taskTable p {
  text-align: left;
}
</style>
