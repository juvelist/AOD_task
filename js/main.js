$(function () {


// Action block checking

    var totalCheck = 0,
        totalChecked = 0,
        $inputElement = $('.table__block_check-input');

    $inputElement.each(function (){
        totalCheck++;
    });

    $('#check-all').click(function(){
        var $parentElement = $(this).parents('.table__block_action');

        if ( $(this).hasClass('checked') ) {
            $(this).removeClass('checked');
            $parentElement.find('.table__block_check-input').removeClass('checked');
            totalChecked = 0;
        } else {
            $(this).addClass('checked');
            $parentElement.find('.table__block_check-input').addClass('checked');
            totalChecked = $parentElement.find('.table__block_check-input').length;
        }

        $inputElement.prop('checked', this.checked);
    });

    $inputElement.click(function(){
        var $parentElement = $(this).parents('.table__block_action');

        if ( $(this).hasClass('checked') ) {
            $(this).removeClass('checked');
            totalChecked--;
        } else {
            $(this).addClass('checked');
            totalChecked++;
        }

        if (totalCheck === totalChecked) {
            $parentElement.find('#check-all').prop('checked', true).addClass('checked');
        } else {
            $parentElement.find('#check-all').prop('checked', false).removeClass('checked');
        }
    });


//Side menu

    $('.page-menu__burger-box').click(function() {
        $(this).toggleClass('active');
        $(this).next('.page__menu_list').toggleClass('page__menu_list-active');
    });

    $('.side-menu__burger-box').click(function() {
        $(this).toggleClass('active');
        $(this).parent('.side-menu__header').toggleClass('side__menu-active');
    });


//Tab image-buttons

    $('.table__button_block-right .table__button').click(function(event){
        event.preventDefault();

        var that = $(this);

        that.parent().find('.button.table__button.active').removeClass('active');
        that.addClass( 'active' );


        $('.info__images').each(function (){

            var imageBlock =  $(this).find('.info__image_block');

            if ( that.hasClass('table__button-no') ) {
                imageBlock.addClass('dn');
            } else if ( that.hasClass('table__button-first') ) {
                imageBlock.addClass('dn');
                imageBlock.eq(0).removeClass('dn');
            } else {
                imageBlock.removeClass('dn');
            }
        });

    });


//Horizontal scroll

    $(".table__block_info-out").mousewheel(function(event, delta) {
        this.scrollLeft -= (delta * 100);
        this.scrollRight -= (delta * 100);
        this.style.transition = '1s';
        event.preventDefault();
    });

//Actions

    $('.table__button_action').click(function(event){
        event.preventDefault();

        if( $(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parents('.table__block').find('.table__block_out').addClass('table__block_acton');
        } else {
            $(this).addClass('active');
            $(this).parents('.table__block').find('.table__block_out').removeClass('table__block_acton');
        }
    });


//Modal

    $('.table__button_add').click(function(event){
        $('.ui.modal').modal('show');
    });

    // $('.table-modal__button').click(function(event){
    //     $('.ui.modal').modal('hide');
    // });


});