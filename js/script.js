// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista




var app = new Vue ({

  el: "#todo-list",
  data : {
    newItem : "",
    lista : [
      'vino', 'pane', 'cioccolata', 'latte', 'birra'
    ]
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
