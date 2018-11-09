$(document).ready(function(){ 
    $("#loading-button .btn").click(function(){
        $(this).button('loading').delay(4000).queue(function(){
            $(this).button('reset');
            $(this).dequeue();
        });        
    });
});   