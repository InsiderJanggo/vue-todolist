var app = new Vue({
  el: "#app",
  data: {
    message: "Welcome to Todo App",
    listTitle: "My Todo List:",
    addTodoInput: '',
    lists: [],
    hasError: false  // <-- to handle errors
  },
  computed: {
    filterLists: function() {
        return _.orderBy(this.lists, ["isComplete", false])
    }
  },
  methods: {
    addTask: function() {
      if(!this.addTodoInput){ // <--- If no value then we are setting error to `true`
        this.hasError = true;
        return;               // <--- stops here
      }

      this.hasError = false; // <--- If textbox is filled then setting error to `false`


        this.lists.push({
          id: this.lists.length+1,
          title: this.addTodoInput,
          isComplete: false
        });

        this.addTodoInput = '' //clear the input after entering
    },
    updateTask: function(e, list) {
        e.preventDefault();
        list.title = e.target.innerText;
        e.target.blur();
    },
    completeTask: function(list) {
      list.isComplete = !list.isComplete;
    },
    removeTask: function(list) {
      var index = _.findIndex(this.lists, list);
      this.lists.splice(index, 1);
    }
  }
})
