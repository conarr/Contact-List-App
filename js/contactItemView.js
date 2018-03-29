// Backbone View for one contact
var ContactItemView = Backbone.View.extend({
	model: new ContactItem(),
	tagName: 'tr',
	initialize: function() {
		this.template = _.template($('.contacts-list-template').html());
	},
	events: {
		'click .edit-contact': 'edit',
		'click .update-contact': 'update',
		'click .cancel': 'cancel',
		'click .delete-contact': 'delete'
	},
	edit: function() {
		$('.edit-contact').hide();
		$('.delete-contact').hide();
		this.$('.update-contact').show();
		this.$('.cancel').show();

		var name = this.$('.name').html();
		var email = this.$('.email').html();
		var phone = this.$('.phone').html();

		this.$('.name').html('<input type="text" class="form name-update" value="' + name + '">');
		this.$('.email').html('<input type="text" class="form email-update" value="' + email + '">');
		this.$('.phone').html('<input type="text" class="form phone-update" value="' + phone + '">');
	},
	update: function() {
		this.model.set('name', $('.name-update').val());
		this.model.set('email', $('.email-update').val());
		this.model.set('phone', $('.phone-update').val());
	},
	cancel: function() {
		contactItemsView.render();

	},
	delete: function() {
		this.model.destroy();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});