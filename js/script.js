const {createApp} = Vue

createApp({
    data() {
        return {
            error: false,
            newTask: {
               text: '',
               done: false,
            },
            animationActive: false,
            tasks: [
                {
                    text: "Tank up",
                    done: true
                }, {
                    text: "Check fuel level",
                    done: false
                }, {
                    text: "Test the engines",
                    done: false
                }, {
                    text: "Bring enough space food",
                    done: false
                }, {
                    text: "You sure you have enough fuel? Check again",
                    done: false
                }, {
                    text: "Bring umbrellas to fight aliens",
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
                this.tasks.push( {...this.newTask} );
                this.error = false;
            } else {
                this.error = true;
            } 
            this.newTask.text = '';
        },
        changeStatus(index) {
            this.tasks[index].done = !this.tasks[index].done;
        },
        rocketEntrance() {
            this.animationActive = true;
        }
    }
}).mount('#app')