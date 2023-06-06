$(function(){
    $('.header_main_content_menu_mobile_obj').on('click', function(){
        $('.header_main_content_menu_mobile_sub').toggleClass('ds_none');
        $(this).toggleClass('active')
    });
});