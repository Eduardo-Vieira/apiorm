if (method == 'detail') {
    $(document).ready(function() {
        method
        $("#getapi").click(function() {
            $.getJSON('/users/xhr_list', {}, function(params) {
                console.log(params);
            });
        });
    });
}