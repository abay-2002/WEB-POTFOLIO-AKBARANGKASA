// ----JQUERY -----
$(document).ready(function(){
    // javascript untuk dropdown nav
    $(".dropdown-trigger").dropdown();
    // sidenav
    $(document).ready(function(){
     $('.sidenav').sidenav();
    });
    // untuk device/laptop about
    $('.authorpict').click(function(){
        $('.authorpict').toggleClass('authorpictdesktop')
        $('.descriptionauthor').toggleClass('descriptionauthordesktop')
        $('.relativedsctathr').toggleClass('relativedsctathrdesktop')
        $('#clickme').toggleClass('clickmedesktop')
    });

    // untuk mobile about
    $('.authorpict').click(function(){
    	$('.authorpict').toggleClass('authorpictmuncul')
        $('.descriptionauthor').toggleClass('descriptionauthormuncul')
        $('#clickme').toggleClass('clickmemobile')
    });
});