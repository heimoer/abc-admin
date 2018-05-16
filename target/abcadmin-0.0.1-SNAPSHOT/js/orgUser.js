/*! 获取用户信息js */
$(function(){
			var contextpath="<%=basePath%>";
			var col = [
				{field:'name',title:'姓名',width:'10%'},
				{field:'sex',title:'性别',width:'9%'},
				{field:'year',title:'年龄',width:'9%'},
				{field:'phone',title:'电话',width:'10%'},
				{field:'province',title:'城市',width:'20%'},
				{field:'city',title:'校区',width:'20%'},
				{field:'createDate',title:'提交时间',width:'20%',
					formatter: function (val, row) {
					    if (val != "" && val != null
					            && val != "null") {
					        var datetime = new Date();
					        datetime.setTime(val);
					        var year = datetime.getFullYear();
					        var month = datetime.getMonth() + 1 < 10 ? "0"
					                + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
					        var date = datetime.getDate() < 10 ? "0" + datetime.getDate()
					                : datetime.getDate();
					        var hour = datetime.getHours() < 10 ? "0" + datetime.getHours()
					                : datetime.getHours();
					        var minute = datetime.getMinutes() < 10 ? "0"
					                + datetime.getMinutes() : datetime.getMinutes();
					        var second = datetime.getSeconds() < 10 ? "0"
					                + datetime.getSeconds() : datetime.getSeconds();
					        return year + "-" + month + "-" + date + " " + hour + ":" + minute
					                + ":" + second;
					    } else {
					        return "";
					    }
				}}
			];
			easyui.datagrid.dg4("直投标列表","tt","user/userList",col);
			//重新加载
			$("#smt_btn").click(function(){
				$("#tt").datagrid("load", easyui.common.serialObj($("#searchForm").form()));
			});
			$("#clear_btn").click(function(){
				$('#searchForm').form('clear');
				$('#state').combobox('setValues','-1');  
			});
	});