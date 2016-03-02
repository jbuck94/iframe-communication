$(document).ready(function() {

    $('#group_a').hide();
    $('#group_b').hide();

    $('.toggle_div').on('change', function() {

        $('#group_a').toggle($(this).val() == 'a');
        $('#group_b').toggle($(this).val() == 'b');

    })

});
