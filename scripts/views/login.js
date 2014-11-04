App.Views.Login = Backbone.View.extend({
   
    events: {
        "click #logIn": "logIn"    
    },
    
    initialize: function(){
        this.model.on("change", this.render, this);    
    },
    
    render: function(){
        this.$el.toggleClass("hidden", this.model.isLoggedIn());
        return this;
    },
    
    logIn: function(){
        this.model.logIn(this.$("#userName").val());
    }
    
    
});