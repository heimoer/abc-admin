package com.web.abc.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.web.abc.constant.SessionConstant;
import com.web.abc.model.OrgUserModel;
import com.web.abc.model.ReturnModel;
import com.web.abc.service.OrgUserService;

@Controller
@RequestMapping("auth")
public class LoginController extends BaseController<LoginController>{
	Logger logger=Logger.getLogger(LoginController.class);
	
	@Autowired
	private OrgUserService orgUserService;
	
	/**
	 * 登录
	 * @return
	 */
	@RequestMapping("index")
	public String index() throws Exception{
		return "login";
	}
	
	/**
	 * 登录
	 * @return
	 */
	@RequestMapping("logindo")
	public String logindo(HttpServletRequest request,HttpServletResponse response,String userName,String pwd){
		ReturnModel<OrgUserModel> ret = orgUserService.login(userName, pwd);
		if("88".equals(ret.getCode())){
			OrgUserModel orgUser = ret.getObj();
			request.getSession().setAttribute(SessionConstant.user_key,orgUser);
			return this.returnRedirectAction("user/getUser");
		}
		request.setAttribute("msg", ret.getMsg());
		return "login";
	}
	
	/**
	 * 退出
	 * @return
	 */
	@RequestMapping("/loginout")
	public String loginout(HttpServletRequest request){
		request.getSession().invalidate();
		return this.returnRedirectAction("auth/index");
	}
	
}
