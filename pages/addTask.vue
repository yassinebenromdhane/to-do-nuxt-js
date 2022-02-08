<template>
  <v-dialog v-model="dialog" max-width="290">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline teal--text">
        Create new Task
      </v-card-title>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-text-field
            v-model="form.name"
            :rules="rules.name"
            label="name"
            messages="put the name here"
            required
          />
          <v-text-field
            v-model="form.desc"
            :rules="rules.desc"
            label="Description"
            required
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="teal" text @click="save">
          Save
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
    tasks: {
      type: [],
      default: null
    },
  },
  data () {
    return {
      dialog: false,
      nameV:"ok",
      form: {
        name: null,
        desc: null
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
    save() {
      if (this.$refs.form.validate()) {
       let id = Math.floor(Math.random() * Math.pow(10,6));
       this.tasks.push({
         id,
         customData:{name:this.form.name,desc:this.form.desc,done :false,class: "bg-sucess text-white"},
         dates : new Date()
       });
       console.log(this.tasks);
       this.dialog = false
      }
    }
  },
}
</script>
