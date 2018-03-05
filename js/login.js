$(function(){
	$("#login-pwd,#login-num").keyup(function(){
		var phone = $("#login-num").val();
		var pwd = $("#login-pwd").val();
	if(phone.length>1&&pwd.length>1){
		$("#login-btn").css({"cursor":"pointer"})
	}
	})
	function login(btn){
		btn.click(function(){
			//alert(1)
			
		})
	}
	login($("#login-btn"))
})