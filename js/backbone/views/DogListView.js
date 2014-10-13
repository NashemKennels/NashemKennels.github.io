var DogListView = Backbone.View.extend({
  initialize: function(){
    this.render();
  },
  render: function(){
    var that = this;
    _.each(this.collection.models, function(dog){
      var dogView = new DogView({model: dog});
      that.$el.append(dogView.render().el);
    })
    return this;
  }
})
