App.Views.NewQuestion = Backbone.View.extend({
 
   events:{
      "click #addItem" : "addItem"   
   },
   
   initialize: function(options) {
       App.currentUser.on("change", this.render, this);
       this.render();
   },
 
   render: function() {
       this.$("#asker").text(App.currentUser.get("userName"));
       this.$el.toggleClass("hidden", !App.currentUser.isLoggedIn());
       return this;
   },
   
   addItem: function(){
       
       var question = {
         text: this.$("#newQuestion").val(), 
         userName: App.currentUser.get("userName")
       };
       
       //this.model.add(new App.Models.Question(question)); //it only saves the question to questions collection on memory
       this.model.create(question); //it saves a question on the localstorage
       this.$("#newQuestion").val("");
       
   }
 
});