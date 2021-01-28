// ----JQUERY -----
$(document).ready(function(){
    // javascript untuk dropdown nav
    $(".dropdown-trigger").dropdown();
    // sidenav
    $(document).ready(function(){
     $('.sidenav').sidenav();
    });
    $('.authorpict').click(function(){
    	$('.descriptionauthor').toggleClass('descriptionauthormuncul');
    });
});