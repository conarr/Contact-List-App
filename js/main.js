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
        
    	$('.add-contact').on('click', function() {
            var contactItem = new ContactItem({
                name: $('.name-input').val(),
                email: $('.email-input').val(),
                phone: $('.phone-input').val()
            });
            $('.name-input').val('');
            $('.email-input').val('');
            $('.phone-input').val('');
            console.log(contactItem.toJSON());
            contactItems.add(contactItem);
        });
    });
    
})(jQuery);