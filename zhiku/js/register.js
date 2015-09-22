
$(function(){
	//选填信息
	$('.xuan').click(function(){
		$('.xuan img').toggle();
		$('.xuantian').slideToggle();
	})
});

function check(){
	if($('#register')[0].username.value==""){
		$('#userts1')[0].innerHTML = '<img src="images/false.png" alt="1" />*用户名不能为空';
		return false;
	}
	if($('#register')[0].username.value.length <5 || $('#register')[0].username.value.length >20){
		$('#userts1')[0].innerHTML = '<img src="images/false.png" alt="1" />*用户名长度5-20位';
		return false;
	}
	if($('#register')[0].email.value==""){
		$('#email1')[0].innerHTML = '<img src="images/false.png" alt="2" />*邮箱不能为空';
		return false;
	}
	if($('#register')[0].passwd.value==""){
		$('#pwdts1')[0].innerHTML = '<img src="images/false.png" alt="2" />*密码不能为空';
		return false;
	}
	if($('#register')[0].passwd2.value==""){
		$('#pwdts2')[0].innerHTML = '<img src="images/false.png" alt="2" />*密码不能为空';
		return false;
	}else if($('#register')[0].passwd2.value != $('#register')[0].passwd.value){
		$('#pwdts2')[0].innerHTML = '<img src="images/false.png" alt="2" />*两次密码不一致';
		return false;
	}
	if($('#register')[0].xieyi.checked == false){
		$('#xieyi')[0].innerHTML = '<img src="images/false.png" alt="2" />*请认真阅读本协议';
		return false;
	}
}
function test(){
	if($('#register')[0].username.value!=""){
		$('#userts1')[0].innerHTML = '<img src="images/true.png" alt="1" />';
	}else{
		$('#userts1')[0].innerHTML = '<img src="images/false.png" alt="1" />*用户名不能为空';
	}
	if($('#register')[0].username.value.length >4 && $('#register')[0].username.value.length <20){
		$('#userts1')[0].innerHTML = '<img src="images/true.png" alt="1" />';
	}else{
		$('#userts1')[0].innerHTML = '<img src="images/false.png" alt="1" />*用户名长度5-20位';
	}
}
function test2(){
	if($('#register')[0].passwd.value ==""){
		$('#pwdts1')[0].innerHTML = '<img src="images/false.png" alt="1" />*密码不能为空';
	}else{
		$('#pwdts1')[0].innerHTML = '&nbsp;';
	}
}
function test4(){
	if($('#register')[0].passwd2.value ==""){
		$('#pwdts2')[0].innerHTML = '<img src="images/false.png" alt="1" />*密码不能为空';
	}else if($('#register')[0].passwd2.value != $('#register')[0].passwd.value){
		$('#pwdts2')[0].innerHTML = '<img src="images/false.png" alt="2" />*两次密码不一致';
		return false;
	}else{
		$('#pwdts2')[0].innerHTML = '&nbsp;';
	}
}

function test3(){
	if($('#register')[0].email.value!=""){
		$('#email1')[0].innerHTML = '&nbsp;';
	}else{
		$('#email1')[0].innerHTML = '<img src="images/false.png" alt="1" />*邮箱不能为空';
	}
}












