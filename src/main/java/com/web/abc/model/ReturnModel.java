package com.web.abc.model;

/**
 * 返回结果
 * @author zhangting
 *
 */
public class ReturnModel<T> {
	private String code="00";
	private String msg="";
	private T obj;
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public T getObj() {
		return obj;
	}
	public void setObj(T obj) {
		this.obj = obj;
	}
	
}
