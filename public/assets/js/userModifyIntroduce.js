/**
 * Created by tostaky on 10/08/17.
 */
$(function(){
    var introduce = $('.paragIntroduce');
    var formIntroduce = $('.formIntroduce');
    var button = $('.buttonModifyIntroduce');

    button.on('click', function(){
        introduce.toggle();
        formIntroduce.toggle();
    })
});