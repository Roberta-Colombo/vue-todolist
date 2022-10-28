const {createApp} = Vue

createApp({
    data() {
        return {
            tasks: [
                {
                    text: "Task 1",
                    done: true
                }, {
                    text: "Task 2",
                    done: false
                }, {
                    text: "Task 3",
                    done: false
                }, {
                    text: "Task 4",
                    done: false
                }
            ]
        }
    },
    methods: {
        eraseTask(index) {
          this.tasks.splice(index, 1);  
        }
    }
}).mount('#app')