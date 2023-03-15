const { createApp } = Vue;


createApp({
    data() {
        return {
            todo: '',
            todos : ['banana', 'giallo'],
          
        }
    },

    methods: {

        storeTodo(){

            this.todos.push(this.todo);
            this.todo = ''
        }
        
    }

}).mount('#app');