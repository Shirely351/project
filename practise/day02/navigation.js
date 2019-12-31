// 导航
$(function(){
    // 鼠标移入事件
    $('.nav>li').mousemove(function(){
        $(this).addClass('active').siblings('li').removeClass('active') // 为li添加名为active的class，并移除兄弟元素（li）上的名为active的class名
        $(this).children('.level').css("display","block");  //  使li的子元素level显示
    })
    // 鼠标移出事件
    $('.nav>li').mouseleave(function(){
        $(this).children('.level').css("display","none");  //使li的子元素level显示
    })
})