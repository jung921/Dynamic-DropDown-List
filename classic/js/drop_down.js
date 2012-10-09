function drop_down_list()
{
    var levels = $('#levels').val();

    if(levels == 'CD' || levels == 'NN') // This level has no study options
    {
    $('#study_drop_down').hide();
    $('#no_study_drop_down').show();
    }
    else
    {
    $('#loading_study_drop_down').show(); // Show the Loading...
	
    $('#study_drop_down').hide(); // Hide the drop down
    $('#no_study_drop_down').hide(); // Hide the "no study area" message (if it's the case)

    $.getScript("js/levels/"+ levels.toLowerCase() +".js", function(){

    populate(document.form.study);

 	$('#loading_study_drop_down').hide(); // Hide the Loading...
	$('#study_drop_down').show(); // Show the drop down
    });
}
}

$(document).ready(function(){
$("#levels").change(drop_down_list);
});

$(window).load(drop_down_list);