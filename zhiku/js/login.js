function check(){
	if($('#login')[0].username.value==""){
		$('#userts1')[0].innerHTML = '<img src="images/false.png" alt="1" />*用户名不能为空';
		return false;
	}
	if($('#login')[0].username.value.length <5 || $('#login')[0].username.value.length >20){
		$('#userts1')[0].innerHTML = '<img src="images/false.png" alt="1" />*用户名长度5-20位';
		return false;
	}
	if($('#login')[0].passwd.value==""){
		$('#pwdts1')[0].innerHTML = '<img src="images/false.png" alt="2" />*密码不能为空';
		return false;
	}
	if($('#login')[0].yzm.value==""){
		$('#yzm')[0].innerHTML = '<img src="images/false.png" alt="2" />*验证码不能为空';
		return false;
	}else if($('#login')[0].yzm.value !="HJ18X"){
		$('#yzm')[0].innerHTML = '<img src="images/false.png" alt="2" />*验证码不正确';
		return false;
	}
}
function test(){
	if($('#login')[0].username.value!=""){
		$('#userts1')[0].innerHTML = '<img src="images/true.png" alt="1" />';
	}else{
		$('#userts1')[0].innerHTML = '<img src="images/false.png" alt="1" />*用户名不能为空';
	}
	if($('#login')[0].username.value.length >4 && $('#login')[0].username.value.length <20){
		$('#userts1')[0].innerHTML = '<img src="images/true.png" alt="1" />';
	}else{
		$('#userts1')[0].innerHTML = '<img src="images/false.png" alt="1" />*用户名长度5-20位';
	}
}
function test2(){
	if($('#login')[0].passwd.value ==""){
		$('#pwdts1')[0].innerHTML = '<img src="images/false.png" alt="1" />*密码不能为空';
	}else{
		$('#pwdts1')[0].innerHTML = '&nbsp;';
	}
}

function test3(){
	if($('#login')[0].yzm.value!=""){
		$('#yzm')[0].innerHTML = '<img src="images/true.png" alt="1" />';
	}else{
		$('#yzm')[0].innerHTML = '<img src="images/false.png" alt="1" />*验证码不能为空';
	}
	if($('#login')[0].yzm.value !="HJ18X"){
		$('#yzm')[0].innerHTML = '<img src="images/false.png" alt="2" />*验证码不正确';
	}
}












