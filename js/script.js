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
    }
}).mount('#app')