var app = new Vue ({

  el: "#todo-list",
  data : {
    newItem : "",
    lista : ['vino', 'pane', 'cioccolata', 'latte', 'birra']
  },
  methods: {
    deleteItem : function(itemIndex){
      this.lista.splice(itemIndex, 1)
    },
    addItem: function(){
      if (this.newItem !== "") {
        this.lista.push(this.newItem);
        this.newItem = "";
      }
    }
  },







});
