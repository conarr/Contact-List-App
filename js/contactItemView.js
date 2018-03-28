// Backbone View for one contact
var ContactItemView = Backbone.View.extend({
	initialize: function(options){
		if (!(options && options.model))
			throw new Error("Oops! The Model is not specified!");
	},

	render: function(){
		this.$el.html(this.model.get("description"));

		return this;
	}
});