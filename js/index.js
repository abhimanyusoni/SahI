$('.content_titlebar .heading h2').click(function(){
    $(this).siblings('.sub_menu').toggleClass('open');
})
$(document).mouseup(function(e) 
{
    var container = $(".sub_menu");
    var menu = $(".content_titlebar .heading h2");

    // if the target of the click isn't the container nor a descendant of the container
    if ((!container.is(e.target) && container.has(e.target).length === 0) && ((!menu.is(e.target) && menu.has(e.target).length === 0)))
    {
        container.removeClass('open');
    }
});
$('.mobile_toggler').click(function(){
    $('.left_sidebar').toggleClass('opened');
})
$(document).mouseup(function(e) 
{
    var container = $(".left_sidebar");
    var menu = $(".mobile_toggler");

    // if the target of the click isn't the container nor a descendant of the container
    if ((!container.is(e.target) && container.has(e.target).length === 0) && ((!menu.is(e.target) && menu.has(e.target).length === 0)))
    {
        container.removeClass('opened');
    }
});