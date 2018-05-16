/*
 * zhangting
 */
if(typeof window.easyui == "undefined"){
	window.easyui = {};
}
if(typeof window.easyui.common == "undefined"){
	window.easyui.common = {};
}
(
 	function (package) {
		 /*将form表单内的元素序列化为对象，扩展Jquery的一个方法*/
		package.serialObj = function (form) {
			var o = {};
			$.each(form.serializeArray(), function (index) {
				if(o[this['name']]) {
					o[this['name']] = o[this['name']] + "," + this['value'];
				} else {
					o[this['name']] = this['value'];
				}
			});
			return o;
		};
		//列表中获取选中的行（只能选中一行，修改时用）
		package.selectObj = function(div_id){
			var rows = $("#"+div_id).datagrid('getSelections');
			if(rows.length==0){
				alert('请选择要修改的数据');
				return;
			}
			if(rows.length>1){
				alert('请选择一行');
				return;
			}
			return rows[0];
		}
		////
		
		package.selectObj2 = function(div_id){
			var rows = $("#"+div_id).datagrid('getSelections');
			
			return rows[0];
		}
		
		//列表中获取选中的行（可以选中多行，删除时用）
		package.selectObjDel = function(div_id){
			var rows = $("#"+div_id).datagrid('getSelections');
			if(rows.length==0){
				alert('请选择要修改的数据');
				return;
			}
			return rows;
		}
		//列表中获取选中的行（只能选中一行）
		package.selectParent = function(div_id){
			var rows = $("#"+div_id).datagrid('getSelections');
			if(rows.length>1){
				alert('只能选择一个上级目录');
				return;
			}
			return rows[0];
		}
		/*根据id删除数据，并刷新当前页面
		url:请求地址
		id:删除对象的id
		*/
		package.delFun = function(table_id,url){
			var rows = easyui.common.selectObjDel(table_id);
			if(typeof rows == "undefined"){
				return;
			}
			var ids = new Array();
			for(var i = 0; i<rows.length;i++){
				ids.push(rows[i].id);
			}
			var msg = "确定要删除这条数据吗？";
			if(confirm(msg)){
				$.ajax({
					url: url,
					data: {"id":ids.toString()},
					dataType: "json",
					type: "POST",
					cache: false,
					success: function(data) {
						if(data.code == 'true'){
							alert(data.msg);
							window.location.reload();
						}else{
							alert(data.msg);
							window.location.reload();
						}
					}
				});
			}
		};
		/* 添加/修改按钮提交
		form_id:form的id
		*/
		package.addOrUpdate = function(form_id){
			var url = jQuery("#"+form_id).attr("action");
			$.ajax({
				url: url,
				data: jQuery("#"+form_id).serialize(),
				dataType: "json",
				type: "POST",
				cache: false,
				success: function(data) {
					if(data.code == 'true'){
						alert(data.msg);
						window.parent.location.reload();
					}else{
						alert(data.msg);
						window.location.reload();
					}
				}
			});
		};
		/* 添加/修改按钮提交。针对弹出窗口
		form_id:form的id
		*/
		package.addOrUpdate2 = function(form_id){
			var url = jQuery("#"+form_id).attr("action");
			$.ajax({
				url: url,
				data: jQuery("#"+form_id).serialize(),
				dataType: "json",
				type: "POST",
				cache: false,
				success: function(data) {
					if(data.code == 'true'){
						alert(data.msg);
						window.parent.obj.close();
						window.parent.location.reload();
					}else{
						alert(data.msg);
						window.location.reload();
					}
				}
			});
		};
		
		/* 添加/修改按钮提交（有关导航菜单的）
		form_id:form的id
		*/
		package.addOrUpdate3 = function(form_id){
			var url = jQuery("#"+form_id).attr("action");
			$.ajax({
				url: url,
				data: jQuery("#"+form_id).serialize(),
				dataType: "json",
				type: "POST",
				cache: false,
				success: function(data) {
					if(data.code == 'true'){
						alert(data.msg);
						window.location.reload();
					}else{
						alert(data.msg);
						window.location.reload();
					}
				}
			});
		};
		
		//清空查询form中的数据
		package.clearSeachData = function(form_id){
			jQuery("#"+form_id+" input[type=text]").each(function(i){
				jQuery(this).val("");
			});
			jQuery("#"+form_id+" #sub_btn").val("确定");
			jQuery("#"+form_id+" #cancel_btn").val("取消");
		};
		//清空添加form中的数据
		package.clearVal = function(form_id){
			jQuery("#"+form_id+" input").each(function(i){
				jQuery(this).val("");
			});
			jQuery("#"+form_id+" #sub_btn").val("确定");
			jQuery("#"+form_id+" #cancel_btn").val("取消");
		};
		//清空添加form中的数据
		package.clearValText = function(form_id){
			jQuery("#"+form_id+" input[ type='text' ]").each(function(i){
				jQuery(this).val("");
			});
			jQuery("#"+form_id+" input[ type='hidden' ]").each(function(i){
				jQuery(this).val("");
			});
			jQuery("#"+form_id+" #sub_btn").val("确定");
			jQuery("#"+form_id+" #cancel_btn").val("取消");
		};
		//弹出层
		package.divDialog = function(div_id,title,width,height){
			var obj = jQuery("#"+div_id);
			if(typeof title == "undefined"){
				title="";
			}
			//宽度
			if(typeof width == "number"){
				width = width
			}else{
				width = "auto";
			}
			//高度
			if(typeof height == "number"){
				height = height
			}else{
				height = "auto";
			}
			obj.show();
			obj.dialog({
				title:title,
				width: width,
				height:height,
				modal: true
			});
			obj.close = function(func){
				if(typeof func == "function"){
					func.apply(this,arguments);
				}
				obj.dialog("close");
			};
			return obj;
		};
		/**
		 *	载入参数为URL的弹出框
		 *  参数：id 消息内容 width:消息框宽度，可不填
		 */
		package.showUrlBox = function(url,title,width,height){
			var divid = "dialog" + parseInt(10000000*Math.random());
			var obj;		
			if(typeof width == "number"){
				width = width;
			}else{
				width = "auto";
			}
			if(typeof height == "number"){
				height = height;
			}else{
				height = "auto";
			}
			if(typeof title == "undefined"){
				title = "";
			}
			var msgBoxHtml = "<div id='"+divid+"' title='"+title+"' style='width:"+width+"'><iframe width='"+(width-40)+"' height='"+(height-20)+"' frameborder='0'></iframe></div>";
			jQuery("body").append(msgBoxHtml);
			obj = jQuery('#'+divid);
			//防止二次请求
//			obj.find("#iframDialog").attr("src",url);
			obj.find("iframe").attr("src",url);
			obj.dialog({
				title:title,
				top:50,
				modal:true
			});
			obj.close = function(){
				obj.dialog("close");
			};
			return obj;
		};
		/**
		 *	载入参数为URL的弹出框
		 *  参数：id 消息内容 width:消息框宽度，可不填
		 */
		package.showUrlBoxNoClose = function(url,title,width,height){
			var divid = "dialog" + parseInt(10000000*Math.random());
			var obj;		
			if(typeof width == "number"){
				width = width;
			}else{
				width = "auto";
			}
			if(typeof height == "number"){
				height = height;
			}else{
				height = "auto";
			}
			if(typeof title == "undefined"){
				title = "";
			}
			var msgBoxHtml = "<div id='"+divid+"' title='"+title+"' style='width:"+width+"'><iframe width='"+(width-40)+"' height='"+(height-20)+"' frameborder='0'></iframe></div>";
			jQuery("body").append(msgBoxHtml);
			obj = jQuery('#'+divid);
			//防止二次请求
//			obj.find("#iframDialog").attr("src",url);
			obj.find("iframe").attr("src",url);
			obj.dialog({
				title:title,
				closable: false,
				top:50,
				modal: true
			});
			return obj;
		};
		/*格式化控件分页显示信息
		@param pager 控件对应的pagination组件
		*/
		package.pageToCn = function(pager){
			$(pager).pagination({
				pageSize: 20,//每页显示的记录条数，默认为20 
				beforePageText: '第',//页数文本框前显示的汉字 
				afterPageText: '页    共 {pages} 页', 
				displayMsg: '当前显示 {from} - {to} 条记录   共 {total} 条记录'
			});
		};
	}
)(easyui.common);