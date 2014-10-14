var DogView = Backbone.View.extend({
  template: _.template($('#dog-template').html()),
  tagName: 'div',
  className: 'dog-profile',
  initialize: function(){
    this.listenTo(this.model, 'all', this.render)
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes))
    return this;
  },
  events: {}, // add for event listeners
  //add more functions here for behaviors
})
