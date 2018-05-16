package com.web.abc.model;

/**
 *后台用户
 * @author zlr
 *
 */
public class OrgUserModel {
	
	//ID
	private Long id;
	//账号
	private String userAccount;
	//密码
	private String userPassword;
	//姓名
	private String userName;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUserAccount() {
		return userAccount;
	}
	public void setUserAccount(String userAccount) {
		this.userAccount = userAccount;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
}
