$(document).ready(function() {
  // 侧边栏遮挡页面是否显示
   var ISZHEDANG_SHOW = false;
  //  介绍页是否显示
   var ISJIESHAO_SHOW = false;

   //侧边栏的底部按钮
   $('#btn_buttom').on('click',function(){
     if (!ISZHEDANG_SHOW) {
       $('#zhegai_div').animate({left:'200px'}, 1000);
       ISZHEDANG_SHOW = true;
     }else {
       $('#zhegai_div').animate({left:'100px'}, 1000);
       ISZHEDANG_SHOW = false;
     }
   });

  // 网站简单介绍
  $('#sample_inroduction').on('click',function(){
    if (!ISJIESHAO_SHOW) {
      $('#message_txt').show();
      $('#message_txt').removeClass("animated fadeOutUp");
      $('#message_txt').addClass("animated fadeInDown");
      ISJIESHAO_SHOW = true;
    }else{
      $('#message_txt').removeClass("animated fadeInDown");
      $('#message_txt').addClass("animated fadeOutUp");
      ISJIESHAO_SHOW = false;
    }
  });



});
