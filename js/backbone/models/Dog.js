var Dog = Backbone.Model.extend({
  defaults : {
  name        : '',
  kennelName  : '',
  credentials : '',
  sex         : '',
  born        : '',
  died        : undefined,
  images      : {},
  pedigreeLink: ''
  }
})
