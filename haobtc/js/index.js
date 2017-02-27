
$(function(){
	
//调用intlTelInput.js插件
	$("#signup_account,#login_account").intlTelInput({
		
    	preferredCountries: ['cn']//初始化识别为中国号码
    	
   }); 

/*顶端滑动固定导航栏*/
//思路：
//对文档添加滚动事件：
	//scrollTop>0:
		//1.更改背景颜色
		//2.导航栏添加阴影效果
		//3.改变文字颜色
		//4.改变汉堡按钮颜色
		//5.更改注册按钮边框颜色
		//6.更改祖册按钮文字颜色
		//7.更改logo。
	//scrollTop！>0 复原
//对窄框汉堡按钮添加点击事件：
 
navbarSwitch()
function navbarSwitch(){

	var logo_src = $('.navbar .navbar-brand img'),
        logo_origin = logo_src.attr('src'),
        logo_scroll = logo_src.attr('scroll-src');
    $(document).scroll(function() {
    	var scroll_top = $(this).scrollTop();
    	if (scroll_top>0) {
    		$(".navbar").css('backgroundColor', 'rgba(255,255,255,0.95)');
    		$(".navbar").css('boxShadow', '0 1px 3px rgba(0,0,0,0.14)');
    		$(".navbar .icon-bar").css('backgroundColor', '#2fa8e5');
    		$(".navbar .navbar-nav a").css('color', '#606060');
    		$(".navbar .navbar-nav button").css('color', '#606060');
    		$(".navbar .navbar-nav button").css('borderColor', '#606060');
    		logo_src.attr('src', logo_scroll);
    	}else{
    		$(".navbar").css('backgroundColor', 'transparent');
    		$(".navbar").css('boxShadow', 'none');
    		$(".navbar .icon-bar").css('backgroundColor', '#fff');
    		$(".navbar .navbar-nav a").css('color', '#ddd');
    		$(".navbar .navbar-nav button").css('color', '#ddd');
    		$(".navbar .navbar-nav button").css('borderColor', '#ddd');
    		logo_src.attr('src', logo_origin);
    	}
    });
    $('.navbar-toggle').click(function() {
      $('.navbar').css('background-color', 'rgba(255,255,255,1)');
      $('.navbar .icon-bar').css('background-color', '#2FA8E5');
      $('.navbar .navbar-nav a').css("color","#808080");
      $('.navbar .navbar-nav button').css("color","#808080");
    });
};

//登录注册切换
loginSwitch();
function loginSwitch(){

	var $tabSwitcherBtn = $(".tab-switcher li");

	$tabSwitcherBtn.click(function() {
	var $target =$( $(this).attr('target'));

	$(this).addClass('active')
		   .siblings().removeClass('active');
	$target.css('display', 'block')
		   .siblings().css('display', 'none');

	}).eq(1).click();//页面初始化

};

})
