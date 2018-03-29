var ContactItem = Backbone.Model.extend({
	defaults: {
		name: '',
		email: '',
		phone: ''
	},

/*  CALLS THE SOURCE API FOR USER ITEMS  */
	urlRoot: "https://jsonplaceholder.typicode.com/users"

});