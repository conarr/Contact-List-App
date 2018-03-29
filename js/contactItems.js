var ContactItems = Backbone.Collection.extend({
	model: ContactItem,

    /*  CALLS THE SOURCE API FOR USER ITEMS  */
	url: "https://jsonplaceholder.typicode.com/users"

});