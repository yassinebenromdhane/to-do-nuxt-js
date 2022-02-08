<template>
  <v-dialog v-model="dialog" max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on" color="success">
        <v-icon large>mdi-circle-edit-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline teal--text">
        update task
      </v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="nameV"
            :rules="rules.name"
            label="name"
            messages="put the name here"
            required
          />
          <v-text-field
            v-model="descV"
            :rules="rules.desc"
            label="Description"
            required
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="teal" text @click="update">
          Update
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import TasksVue from '../components/Tasks.vue';
export default {
  name: "AddTaskForm",
  props: {
    task: {
      type: Object,
      default: null
    },
    tasks: {
      type: [],
      default: null
    },
  },
  data () {
    return {
      dialog: false,
      nameV:this.task.customData.name,
      descV:this.task.customData.desc,
      form: {
        name: this.nameV,
        desc: this.descV
      },
      rules: {
        name: [
          v => !!v || 'name is required',
          v => (v && v.length >= 2) || 'name must be bigger than 2 characters',
        ],
        desc: [
          v => !!v || 'Description is required',
          v => (v && v.length <= 50) || 'Description must be less than 50 characters',
        ]
      },
    }
  },
  methods: {
    update() {
      if (this.$refs.form.validate()) {
    
       index = this.props.tasks.findIndex((ind) => ind === this.task.id);
       this.tasks[index].customData.name=this.form.name;
       this.tasks[index].customData.name=this.form.desc;
       console.log(this.props);
       this.dialog = false
      }
    }
  },
}
</script>
