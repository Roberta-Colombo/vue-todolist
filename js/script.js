const {createApp} = Vue

createApp({
    data() {
        return {
            error: false,
            newTask: {
               text: '',
               done: false,
            },
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
        },
        addTask() {
            if(this.newTask.text.length >= 5){
                this.tasks.push(this.newTask);
                this.error = false;
            } else {
                this.error = true;
            }

            let emptyClone = {...this.newTask} 
            emptyClone.text = '';       
        },
        changeStatus(index) {
            this.tasks[index].done = !this.tasks[index].done;
        }
    }
}).mount('#app')