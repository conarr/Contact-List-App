(function($) {
    
    $(document).ready(function () {

        var contactItems = new ContactItems();
        contactItems.fetch({
            success: function () {
                var contactsView = new ContactItemsView({model: contactItems});
                $('.table').append(contactsView.render().$el);
            },
            error: function () {
                console.log('failure');
            }
        });
    
})(jQuery);