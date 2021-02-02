// ----JQUERY -----
$(document).ready(function(){
    // javascript untuk dropdown nav
    $(".dropdown-trigger").dropdown();
    // sidenav
    $(document).ready(function(){
     $('.sidenav').sidenav();
    });
    // untuk device/laptop
    $('.authorpict').click(function(){
        $('.descriptionauthor').toggleClass('descriptionauthordesktop')
        $('.authorpict').toggleClass('authorpictdesktop')
        $('.relativedsctathr').toggleClass('relativedsctathrdesktop')
        $('#clickme').toggleClass('clickmedesktop')
    });

    // untuk mobile
    $('.authorpict').click(function(){
    	$('.descriptionauthor').toggleClass('descriptionauthormuncul')
    	$('.authorpict').toggleClass('authorpictmuncul')
        $('#clickme').toggleClass('clickmemobile')
    });
});