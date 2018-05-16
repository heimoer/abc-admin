<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>用户列表</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<jsp:include page="include/datagridInclude.jsp"></jsp:include>
    <script type="text/javascript" src="js/orgUser.js"></script>
	<style type="text/css">
body {
	
	font: 14px/20px "微软雅黑", "宋体", Arial, sans-serif, Verdana, Tahoma;
	padding: 0;
	margin: 0;
}
<!---->
a:link {
 text-decoration: none;
 color: #ffffff;
}
a:visited {
 text-decoration: none;
}
a:hover {
 text-decoration: underline;
}
a:active {
 text-decoration: none;
}
.cs-north-logo {
	float: left;
    margin-left: 0px;
    margin-top: 30px;
    margin-right: 20px;
   	line-height:50px;
}
.cs-west {
	width:200px;padding:0px;border-left:1px solid #99BBE8;
}
.cs-south {
	height:25px;padding:0px;text-align:center;
}

.top_01{
	background-color: #ffffff;
	height: 40px;
    padding-left: 20px;
    line-height: 40px;
    overflow: hidden;
    font-size: 18px;
    text-align:right;
}
.top_01 a{
	color:#537dea;
	margin-left: 30px;
}
.platStatistics table tr{
	height: 30px;
}
.platStatistics table tr td{
	width: 240px;
}
</style>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  </head>
  
  <body class="easyui-layout">
		<div region="north" border="false" class="cs-north">
			<div class="top_01">
			<span>欢迎您：${orgUser.userAccount}</span>
			<a href="auth/loginout" >【安全退出】</a>
		</div>
	</div>
	
	<div region="center">
	<div class="easyui-panel" title="查询" style="width:98%;height:100px;padding:10px;background:#fafafa; margin-bottom:10px;">
    	<form id="searchForm">
    	<table border="0">
          <tr>
            <td align="left" class="title_txt">姓名:</td>
            <td align="left"><input type="text" name="name" id="name"></td>
            <td align="left" class="title_txt">手机号:</td>
            <td align="left"><input type="text" name="phone" id="phone"></td>
            <td align="left" class="title_txt">申请时间:</td>
            <td align="left">
            <input name="startTime" class="easyui-datebox" editable="false" />-<input name="endTime" class="easyui-datebox" editable="false" />
            </td>
            <td align="left">
            <input name="smt_btn" type="button" id="smt_btn" value="查找">
            <input type="button" id="clear_btn" value="清空" /></td>
          </tr>
        </table>
      </form>
    </div>
    <table id="tt" data-options="toolbar:'#tb'" style="width:98%"></table>
    </div>
	
	</div>
	<div region="south" border="false" class="cs-south">后台管理系统</div>
</body>
  
  
  
  
  
  
  
  
</html>
