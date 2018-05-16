/*
 * zhangting
 */
if(typeof window.easyui == "undefined"){
	window.easyui = {};
}
if(typeof window.easyui.datagrid == "undefined"){
	window.easyui.datagrid = {};
}
(
 	function (package) {
		//初始化列表
		package.dg = function(title,table_id,url,columns,cudFun){
			$('#'+table_id).datagrid({
				title:title,
				//width:750,
				//height:525,
				fitColumns:true,
				nowrap: true,
				autoRowHeight: true,
				striped: true,
				collapsible:true,
				url:url,
				loadMsg:'数据加载中..',
				sortName: 'id',
				sortOrder: 'asc',
				remoteSort: true,
				idField:'id',
				frozenColumns:[[
	                {field:'ck',checkbox:true},
	                {title:'id',field:'id',width:80,sortable:true,hidden:true}
				]],
				columns:[columns],
				pagination:true,
				pageSize:20,
				rownumbers:true,
				toolbar:[{
					text:'添加',
					iconCls:'icon-add',
					handler:function(){
						cudFun[0]();
					}
				},'-',{
					text:'修改',
					iconCls:'icon-edit',
					handler:function(){
						cudFun[1]();
					}
				},'-',{
					text:'删除',
					iconCls:'icon-remove',
					handler:function(){
						cudFun[2]();
					}
				}]
			});
			var p = $('#'+table_id).datagrid('getPager');
			easyui.common.pageToCn(p);
			 // 第一次加载时自动变化大小  
//		    $('#' + table_id).resizeDataGrid(0, 0, 450, 600);  
//		    // 当窗口大小发生变化时，调整DataGrid的大小  
//		    $(window).resize(function() {  
//		        $('#' + table_id).resizeDataGrid(0, 0, 450, 600);  
//		    });  
		};
		//初始化列表
		package.dg1 = function(title,table_id,url,columns,cudFun){
			$('#'+table_id).datagrid({
				title:title,
				fitColumns:true,
				nowrap: true,
				autoRowHeight: true,
				striped: true,
				collapsible:true,
				url:url,
				loadMsg:'数据加载中..',
				sortName: 'id',
				sortOrder: 'asc',
				remoteSort: true,
				idField:'id',
				frozenColumns:[[
	                {field:'ck',checkbox:true},
	                {title:'id',field:'id',width:80,sortable:true}
				]],
				columns:[columns],
				pagination:true,
				rownumbers:true,
				toolbar:[{
					text:'新增角色',
					iconCls:'icon-add',
					handler:function(){
						cudFun[0]();
					}
				}]
			});
			var p = $('#'+table_id).datagrid('getPager');
			easyui.common.pageToCn(p);
		};
		//没有工具条
		package.dg2 = function(title,table_id,url,columns){
			$('#'+table_id).datagrid({
				title:title,
				nowrap: true,
				fitColumns:true,
				autoRowHeight: true,
				striped: true,
				collapsible:true,
				url:url,
				loadMsg:'数据加载中..',
				sortName: 'id',
				sortOrder: 'asc',
				remoteSort: true,
				idField:'id',
				frozenColumns:[[
	                {field:'ck',checkbox:true},
	                {title:'id',field:'id',width:80,sortable:true,hidden:true}
				]],
				columns:[columns],
				pagination:true,
				pageSize:20,
				rownumbers:true
			});
			var p = $('#'+table_id).datagrid('getPager');
			easyui.common.pageToCn(p);
		};
		//没有工具条(单选版)
		package.dg3 = function(title,table_id,url,columns){
			$('#'+table_id).datagrid({
				title:title,
				nowrap: true,
				fitColumns:true,
				autoRowHeight: true,
				striped: true,
				collapsible:true,
				url:url,
				loadMsg:'数据加载中..',
				sortName: 'id',
				sortOrder: 'asc',
				remoteSort: true,
				idField:'id',
				frozenColumns:[[
	                {field:'ck',checkbox:true},
	                {title:'id',field:'id',width:80,sortable:true}
				]],
				columns:[columns],
				pagination:true,
				pageSize:20,
				rownumbers:true,
				singleSelect:true
			});
			var p = $('#'+table_id).datagrid('getPager');
			easyui.common.pageToCn(p);
		};
		
		//没有选项框
		package.dg4 = function(title,table_id,url,columns){
			$('#'+table_id).datagrid({
				title:title,
				fitColumns:true,
				nowrap: true,
				autoRowHeight: true,
				striped: true,
				collapsible:true,
				url:url,
				loadMsg:'数据加载中..',
				remoteSort: true,
				columns:[columns],
				pagination:true,
				pageSize:20,
				rownumbers:true,
				singleSelect:true
			});
			var p = $('#'+table_id).datagrid('getPager');
			easyui.common.pageToCn(p);
		};
		
		//没有工具条(单选版)
		package.dg5 = function(title,table_id,url,columns){
			$('#'+table_id).datagrid({
				title:title,
				fitColumns:true,
				nowrap: true,
				autoRowHeight: true,
				striped: true,
				collapsible:true,
				url:url,
				loadMsg:'数据加载中..',
				sortOrder: 'asc',
				remoteSort: true,
				idField:'id',
				frozenColumns:[[
	                {field:'ck',checkbox:true}
				]],
				columns:[columns],
				pagination:true,
				pageSize:20,
				rownumbers:true,
				singleSelect:true
			});
			var p = $('#'+table_id).datagrid('getPager');
			easyui.common.pageToCn(p);
		};
		/** 
		 * JQuery扩展方法，用户对JQuery EasyUI的DataGrid控件进行操作。 
		 */  
		$.fn.extend({  
		    /** 
		     * 修改DataGrid对象的默认大小，以适应页面宽度。 
		     *  
		     * @param heightMargin 
		     *            高度对页内边距的距离。 
		     * @param widthMargin 
		     *            宽度对页内边距的距离。 
		     * @param minHeight 
		     *            最小高度。 
		     * @param minWidth 
		     *            最小宽度。 
		     *  
		     */  
		    resizeDataGrid : function(heightMargin, widthMargin, minHeight, minWidth) {  
		        var height = $(document.body).height() - heightMargin;  
		        var width = $(document.body).width() - widthMargin;  
		  
		        height = height < minHeight ? minHeight : height;  
		        width = width < minWidth ? minWidth : width;  
		  
		        $(this).datagrid('resize', {  
		            height : height,  
		            width : width  
		        });  
		    }  
		}); 
	}
)(easyui.datagrid);