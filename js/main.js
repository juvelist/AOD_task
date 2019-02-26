$(function () {


    //Check actions
    $('.table__block_check').find('input:checkbox').change(function(){
        if($(this).is(':checked')) {
            $('input#check-all').addClass('checked');
        } else {
            $('input#check-all').removeClass('checked');
        }
    });

    $('#check-all').click(function(){
        $('.table__block_check-each').find('input:checkbox').not(this).prop('checked', this.checked);
    });


    //Side menu
    $('.page-menu__burger-box').click(function() {
        $(this).next('.page__menu_list').toggleClass('page__menu_list-active');
    });

    $('.side-menu__burger-box').click(function() {
        $(this).parent('.side-menu__header').toggleClass('side__menu-active');
    });


    //Img buttons
    $('.button.table__button').on('click', function () {
        $( this ).parent().find( '.button.table__button.active' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
    });



});