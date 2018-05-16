<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>欢迎管理用户登录</title>
    <link rel="stylesheet" type="text/css" href="css/security/login.css">
    <link href="css/common/asyncbox/skins/Ext/asyncbox.css" type="text/css" rel="stylesheet" />
    <script type="text/javascript" src="js/common/jquery-1.7.2.min.js"></script>
    
    <script type="text/javascript" src="js/common/asyncbox/asyncbox.js"></script>
    <script type="text/javascript">
        $(function(){
           var msg="${msg}";
           if(msg!='')
           {
               asyncbox.tips(msg);
           }
        });
        var userNameVal="请输入用户名";
        function getUserNameFocus()
        {
           var userName = $("input[name='userName']").val();
	       if(userName==userNameVal)
	       {
	          $("input[name='userName']").val("");
	       }
        }
        function getUserNameBlur()
        {
           var userName = $("input[name='userName']").val();
	       if(userName == "" || userName == null) {
	    	 $("input[name='userName']").val(userNameVal);
	       }
        }
        
        function login(){
           var userName = $("input[name='userName']").val();
           var pwd = $("input[name='pwd']").val();
           if(userName==userNameVal){
	          asyncbox.tips("请输入用户名!");
	          return false;
	       }
           if(pwd==''){
	          asyncbox.tips("请输入密码!");
	          return false;
	       }
           frmMain.submit();
        }
        //两个文本输入框绑定回车事件
        $(function(){
        $("input[name='userName']").bind('keypress',function(event){
            if(event.keyCode == "13")    
            {
                login();
            }
        });
        $("input[name='pwd']").bind('keypress',function(event){
            if(event.keyCode == "13")    
            {
                login();
            }
        });
    });
    </script>
    <script type="text/javascript">

		$(document).ready(function(e) {
		   $('#backend-login').css({ 
				position:'absolute', 
				left: ($(window).width() - $('#backend-login').outerWidth())/2, 
				top: ($(window).height() - $('#backend-login').outerHeight())/2 + $(document).scrollTop() 
		    });  
		});
		
		$(window).resize(function(){
			$('#admin_login').css({ 
				position:'absolute', 
				left: ($(window).width() - $('#backend-login').outerWidth())/2, 
				top: ($(window).height() - $('#backend-login').outerHeight())/2 + $(document).scrollTop() 
			}); 
		}); 
	</script>
	<script type="text/javascript">
	if(window != top) 
	top.location.href = location.href; 
	</script>
  </head>
  
  <body>
      <form name="frmMain" method="post" action="auth/logindo">
         
          <div id="backend-login">
		    	<img class="login-logo" src="images/login/logo_r1_c1.png">
		    	<input class="form-text bg1 font-color" type="text" value="${cookie.userName.value}" name="userName"  onblur="getUserNameBlur()" onfocus="getUserNameFocus()">
		    	<input class="form-text bg2" type="password"  name="pwd">    
		        <div class="sub">
	          <input class="form-button"  style="cursor: pointer;" type="button" name="" value="登录" onclick="login()">
	        </div>
		</div>
	</form>
  </body>
</html>
