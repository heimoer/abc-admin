package com.web.abc.model;

import java.util.ArrayList;
import java.util.List;

/**
 * 
 * 分页返回对象
 * 
 * @author zhangting
 */
public class ReturnPageObj<T> {
	/*
	 * 总记录数
	 */
	private Long total;
	/*
	 * 返回数据
	 */
	private List<T> rows = new ArrayList<T>();
	public Long getTotal() {
		return total;
	}
	public void setTotal(Long total) {
		this.total = total;
	}
	public List<T> getRows() {
		return rows;
	}
	public void setRows(List<T> rows) {
		this.rows = rows;
	}
	
	

}
