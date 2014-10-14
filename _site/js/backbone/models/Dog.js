var Dog = Backbone.Model.extend({
  defaults : {
  name        : '',
  kennelName  : '',
  credentials : [],
  mainImg     : {},
  sex         : '',
  born        : '',
  died        : undefined,
  altImgs     : {},
  pedigreeLink: ''
  }
})
