var ContactItemsView = Backbone.View.extend({
	model: ContactItems,
	el: $('.contacts-list'),
	initialize: function() {
		var self = this;
		this.model.on('add', this.render, this);
		this.model.on('change', function() {
			setTimeout(function() {
				self.render();
			}, 30);
		},this);
		this.model.on('remove', this.render, this);
	},
	render: function() {
		var self = this;
		this.$el.html('');
		_.each(this.model.toArray(), function(contact) {
			self.$el.append((new ContactItemView({model: contact})).render().$el);
		});
		return this;
	}
});