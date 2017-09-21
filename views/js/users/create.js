if (method == 'create') {
    $(document).ready(function() {
        $("#getapi").click(function() {
            $.getJSON('/users/xhr_list', {}, function(params) {
                console.log(params);
            });
        });
    });
}