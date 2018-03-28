var ContactItemsView = Backbone.View.extend({
	render: function() {
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(contact) {
			self.$el.append((new ContactItemView({model: contact})).render().$el);
		});
		return this;
	}
});