//两个浮点数相加的时候会比较明显。
//调用：accAdd(arg1,arg2)
//返回值：arg1加上arg2的结果    
function accAdd(arg1, arg2) {
	var r1, r2, m;
	try {
		r1 = (1 * arg1).toString().split(".")[1].length;
	}
	catch (e) {
		r1 = 0;
	}
	try {
		r2 = (1 * arg2).toString().split(".")[1].length;
	}
	catch (e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2));
	return (arg1 * m + arg2 * m) / m;
}    
      
//两个浮点数相减
//调用：accSub(arg1,arg2)
//返回值：arg1减上arg2的结果    
function accSub(arg1, arg2) {
	return accAdd(arg1, -arg2);
}    
     
//两个浮点数相乘
//调用：accMul(arg1,arg2)
//返回值：arg1乘以arg2的结果    
function accMul(arg1, arg2) {
	var m = 0, s1 = (1 * arg1).toString(), s2 = (1 * arg2).toString();
	try {
		m += s1.split(".")[1].length;
	}
	catch (e) {
	}
	try {
		m += s2.split(".")[1].length;
	}
	catch (e) {
	}
	var ss = Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
	return Math.floor(ss * 1000000) / 1000000;
}    
     
//两个浮点数相除
//调用：accDiv(arg1,arg2)
//返回值：arg1除以arg2的结果    
function accDiv(arg1, arg2) {
	var t1 = 0, t2 = 0, r1, r2;
	try {
		t1 = (1 * arg1).toString().split(".")[1].length;
	}
	catch (e) {
	}
	try {
		t2 = (1 * arg2).toString().split(".")[1].length;
	}
	catch (e) {
	}
	with (Math) {
		r1 = Number((1 * arg1).toString().replace(".", ""));
		r2 = Number((1 * arg2).toString().replace(".", ""));
		var ss = (r1 / r2) * pow(10, t2 - t1);
		return Math.floor(ss * 10000000000) / 10000000000;
	}
}

//格式化
//s为要格式化的参数（浮点型），小数部分保留两位	
function formater(s){
	return s;
}	

function accPow(arg1, arg2){
	return Math.pow(arg1, arg2);
}
