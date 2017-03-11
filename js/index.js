//	时钟
	function $(id){return document.getElementById(id);}
	var s = 0,m = 0, h = 0, ms = 0;
	setInterval(function(){
	var date = new Date();
	ms = date.getMilliseconds();
	s = date.getSeconds() + ms/1000;
	m = date.getMinutes() + s/60;
	h = date.getHours() % 12 + m / 60;
//	谷歌支持的CSS3
	$("second").style.webkitTransform = "rotate("+ s*6 +"deg)";
	$("minute").style.webkitTransform = "rotate("+ m*6 +"deg)";
	$("hour").style.webkitTransform = "rotate("+ h*30 +"deg)";
//	火狐支持的CSS3
	$("second").style.MozTransform = "rotate("+ s*6 +"deg)";
	$("minute").style.MozTransform = "rotate("+ m*6 +"deg)";
	$("hour").style.MozTransform = "rotate("+ h*30 +"deg)";
	},10)
//小提示
	var child = $("tip").children;
	var date = new Date();
	var hours = date.getHours();
	if(hours<6){
		child[0].innerHTML = "现在是包夜上网时间，请大家保持上网安静!" ;
	}else if(hours <9){
		child[0].innerHTML = "早上好！新的一天新的开始!" ;
	}else if(hours <12){
		child[0].innerHTML = "上午好！新上架很多新零食欢迎选购!" ;
	}else if(hours <18){
		child[0].innerHTML = "下午好！困了？来瓶红牛提提神吧!" ;
	}else if(hours <=22){
		child[0].innerHTML = "晚上好！10点后可以开包夜上网时长哦!" ;
	}else if(hours >22){
		child[0].innerHTML = "现在是包夜上网时间，请大家保持上网安静!" ;
	}
//互动区留言板
	var btn = document.getElementById("act").getElementsByTagName("button")[0];
	var txt = document.getElementsByTagName("textarea")[0];
	var ul = document.createElement("ul");
	$("msg").appendChild(ul);
	var count = 10;
	var timer = null;
	btn.onclick = function(){
		if(txt.value =="防止恶意刷屏 10秒内可发送一条留言")
		{
			alert("输入不能为空")
			return false;
		}
		else if(txt.value =="")
		{
			alert("输入不能为空")
			return false;
		}
		this.disabled = true;
		var that = this;
		timer = setInterval(sendTextMessage,1000);
		function sendTextMessage(){
			count--;
			if(count >= 0)
			{
				that.innerHTML = "发送("+count+")";
			}
			else
			{
				that.innerHTML = "发送";
				that.disabled = false;
				clearInterval(timer);
				count = 10;
			}
		}
		var newli = document.createElement("li");
		newli.innerHTML = "xx："+txt.value +"<a href = 'javascript:;'>删除留言</a>";
		txt.value = "防止恶意刷屏 10秒内可发送一条留言";
		txt.style.color = "#777";
		var lis = ul.children;
		if(lis.length == 0)
		{
			ul.appendChild(newli);
		}
		else
		{
			ul.insertBefore(newli,lis[0]);
		}
		var as = $("act").getElementsByTagName("a");
		for(var i = 0;i<as.length; i++)
		{
			as[i].onclick =function(){
				ul.removeChild(this.parentNode);
			}
		}
	}
//	菜单和更换背景
	var lis = $("menu").getElementsByTagName("li");
	var divs = $("m-l").getElementsByTagName("div");
	for(var i=0;i<lis.length;i++){
		lis[i].index = i;
		lis[i].onmouseover = function(){
			for(var j=0;j<lis.length;j++)
			{
				lis[j].className = "";
				divs[j].style.display = "none";
			$("dbg").style.backgroundImage = "url(img/"+this.index+".jpg)";
			}
			this.className = "orange";
			divs[this.index].style.display = "block";
		}
	}
//商品数量
	var subs = document.getElementsByName("sub");
	var numbers = document.getElementsByName("number");
	
	for(var i=0;i<subs.length;i++){
		subs[i].index = i;
	subs[i].onclick = function(){
		
		var j = numbers[this.index].value;
		if(j>1)
		{
			numbers[this.index].value = j-1;
		}
	}
	}
	var adds = document.getElementsByName("add");
	for(var i=0;i<adds.length;i++){
		adds[i].index = i;
	adds[i].onclick = function(){
		var j = number[this.index].value;
		if(j<10)
		{
			numbers[this.index].value =	parseInt(j)+ 1;
		}
	}
	}
