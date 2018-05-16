package com.web.abc.constant;
/**
 * 投资人、借款人状态枚举类
 * @author wangyj
 *
 */
public enum LoginReturnEnum {
	
	USERNAME_EMPTY("用户名为空","1"),  
	USERNAME_NO("用户名不存在","2"),  
	PWD_EMPTY("密码为空","3"),  
	PWD_ERROR("密码错误","4"),  
	SUCCESS("成功","88");
	      
	String name ;
	String value; 
	LoginReturnEnum(String name,String value) {  
	   this.name = name;
	   this.value = value;
	}  
	    
	public String getName(){
	   return name;
	}
	public String getValue() {  
	   return value;  
	}  
} 
