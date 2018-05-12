$(document).ready(function()
{
	$('#desktop_btn').click(function(){
        $('#mobile_content').slideUp(500)
        $('#desmob_content').slideUp(500)
        $('#desktop_content').slideToggle(500)
        
    });
    
    $('#mobile_btn').click(function(){
        $('#desktop_content').slideUp(500)
        $('#desmob_content').slideUp(500)
        $('#mobile_content').slideToggle(500)
    });
    
    $('#desmob_btn').click(function(){
        $('#desktop_content').slideUp(500)
        $('#mobile_content').slideUp(500)
        $('#desmob_content').slideToggle(500)
    });
    
    $('input[type="checkbox"]').on('change', function() {  $(this).siblings('input[type="checkbox"]').prop('checked', false);
    });
});

$('#ux_form').on('submit', function() {
    var sum = 0;
    $(":checkbox").map(function() {
        sum += this.value;
    })
    window.print(sum);
});