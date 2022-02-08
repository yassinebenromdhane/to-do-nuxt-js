<template >
    <v-card >
      <v-card-title class="headline teal--text" > id:{{task.id}} </v-card-title>
      <v-card-text>
          <p class="text-h5 white--text">
              {{task.customData.name}}

          </p>
        <div v-if="task.customData.done">
          <p class="text-h5 success--text">
              task is done
          </p>
              
          </div>
          <div v-else>
          <p class="text-h5 warning--text">
                task in progress ...
          </p>
              
          </div>
          
        
      </v-card-text>
    </v-card>
 
</template>
<script>
export default {
  name: "oneTask",
  props: {
      task: {
          type: Object,
          default: null
      },
  },
  data() {
    return {
      dialog: false,
      form: {
        name: null,
        desc: null,
      },
      validation: {
        name: [
          (v) => !!v || "name is required",
          (v) => (!!v && v.length >= 2) || "name must bigger then 2 chars",
        ],
        desc: [
          (v) => !!v || "desc is required",
          (v) => (!!v && v.length <= 50) || "desc must be less then 50 chars",
        ],
      },
    };
  },
  methods: {
    save() {
      console.log(this.form);
    },
  },
};
</script>