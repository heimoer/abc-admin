/*
 * zhangting
 */
if(typeof window.easyui == "undefined"){
	window.easyui = {};
}
if(typeof window.easyui.treegrid == "undefined"){
	window.easyui.treegrid = {};
}
(
 	function (package) {
		//带工具条的treegrid
		package.tg = function(title,table_id,url,columns){
			$('#'+table_id).treegrid({
				title:title,
				url:url,
				loadMsg:'数据加载中..',
				treeField:'menuName',
				idField:'id',
				nowrap:"true",
				animate:"true",
				singleSelect:"true",
		        rownumbers:"true",
				frozenColumns:[[
	                {field:'ck',checkbox:true},
	                {title:'id',field:'id',width:80,sortable:true}
				]],
				columns:[[
						{field:'menuName',title:'导航名称',width:200},
						{field:'linkUrl',title:'Url',width:300},
						{field:'openWay',title:'打开方式',width:100},
						{field:'menuIcon',title:'菜单图标',width:100},
						{field:'orderNum',title:'排序号',width:100}
				]]
			});
			var p = $('#'+table_id).treegrid('getPager');
			easyui.common.pageToCn(p);
			 // 第一次加载时自动变化大小  
		    $('#' + table_id).resizeTreeGrid(0, 0, 450, 600);  
		    // 当窗口大小发生变化时，调整DataGrid的大小  
		    $(window).resize(function() {  
		        $('#' + table_id).resizeTreeGrid(0, 0, 450, 600);  
		    });  
		};
	}
)(easyui.treegrid);