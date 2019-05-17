$(function() {
    $('form').on('submit', () => {
        
        const email = $('#email');
        const fullName = $('#name');
        const info = $('#message');

        const sendContent = {
            email: email.val(),
            fullName: fullName.val(),
            message: info.val()
        };

        $.ajax({
            type: 'POST',
            url: '/contact',
            data: sendContent,
            success (data) {
                window.location.assign('/')
                // location.reload();
            }
        });

        return false;

    });
});