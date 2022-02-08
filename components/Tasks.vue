<template>
  <v-list-item v-if="task" inactive>
    <v-list-item-action>
      <v-btn icon :color="colorV" large @click="changeStatus">
        <v-icon large v-text="icon" />
      </v-btn>
    </v-list-item-action>
    <v-list-item-content>
      <v-dialog max-width="298">
        <template v-slot:activator="{ on }">
          <v-list-item-title v-on="on" v-text="task.customData.name"> </v-list-item-title>
        </template>
        <oneTask :task="task"/>
      </v-dialog>

      <v-list-item-subtitle v-text="task.customData.desc" />
    </v-list-item-content>
    <v-list-item-action>
     
     <update-task :task="task" :tasks="tasks"/>
    </v-list-item-action>
    <v-list-item-action>
     
      <v-btn icon color="error"  @click="remove">
        <v-icon large> mdi-trash-can-outline </v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>
<script>
import UpdateTask from '../pages/updateTask.vue';
import oneTask from './oneTask.vue';
export default {
  components: { oneTask, UpdateTask },
  name: "Task",
  props: {
    task: {
      type: Object,
      default: null,
    },
    tasks: {
      type: [],
      default: null,
    },
  },
  computed: {
    icon() {
      return this.task.customData.done ? "mdi-check" : "mdi-update";
    },

    colorV() {
      return this.task.customData.done ? "success" : "warning";
    },
  },
  methods: {
    changeStatus() {
      this.task.customData.done = !this.task.customData.done;
    },
    remove(){
      console.log(this.task.id);
    }
  },
};
</script>
