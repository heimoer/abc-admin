package com.web.abc.service;
import com.web.abc.model.OrgUserModel;
import com.web.abc.model.ReturnModel;
/**
 * 后台用户管理
 * @author wenliu
 *
 */
public interface OrgUserService {

	/**
	 * 登录
	 * @param userName：用户名
	 * @param password：密码
	 * @return
	 */
	ReturnModel<OrgUserModel> login(String userName,String password);
}
