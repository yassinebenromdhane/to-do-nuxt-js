<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card max-height="475" class="mc-auto">
        <v-toolbar color="teal">
          <v-app-bar-nav-icon>
            <v-icon>mdi-text-box-check</v-icon>
          </v-app-bar-nav-icon>
          <v-toolbar-title>To-Do-List</v-toolbar-title>
          <v-spacer/>
          
          <AddTask :tasks="tasks"/>
          <client-only placeholder="loading">
          <calendar/>
          </client-only>
          
        </v-toolbar>
        <v-list>
          <v-subheader>
            in porgress Tasks
          </v-subheader>
          <v-list-item-group>
            <Tasks :task="task" v-for="(task,i) in progressTasks" :key="i"/>
          </v-list-item-group>
          <v-subheader>
            done tasks
          </v-subheader>
           <v-list-item-group>
            <Tasks :tasks="tasks" :task="task" v-for="(task,i) in doneTasks" :key="i"/>
          </v-list-item-group>
        </v-list>

      </v-card>
    </v-col>
  </v-row>
  
</template>

<script>
import Calendar from '../components/calendar.vue';
import Tasks from '../components/Tasks.vue';
import AddTask from './addTask.vue';
import initialData from './tasks';

export default {
  components: { Tasks, AddTask, Calendar},
  data() {
    return {
      tasks : initialData
    }
  },
  computed: {
    doneTasks() {
      return this.tasks.filter(task => task.customData.done===true) 
    },
    progressTasks(){
      return this.tasks.filter(task => task.customData.done===false) 
    }
  },
  name: 'IndexPage',
  
}
</script>
