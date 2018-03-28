// Backbone View for one contact
var ContactItemView = Backbone.View.extend({
	model: new ContactItem(),
	tagName: 'tr',
	initialize: function() {
		this.template = _.template($('.contacts-list-template').html());
	},
	
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});