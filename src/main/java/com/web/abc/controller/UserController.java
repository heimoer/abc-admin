package com.web.abc.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.web.abc.constant.SessionConstant;
import com.web.abc.model.OrgUserModel;
import com.web.abc.model.ReturnPageObj;
import com.web.abc.model.UserModel;
import com.web.abc.service.UserService;

@Controller
@RequestMapping("user")
public class UserController extends BaseController<UserController>{
	Logger logger=Logger.getLogger(UserController.class);
	
	@Autowired
	private UserService userService;
	
	/**
	 * 去往用户列表页面
	 * @return
	 */
	@RequestMapping("/getUser")
	public String getUser(HttpServletRequest request,HttpServletResponse response){
		OrgUserModel orgUser = (OrgUserModel) request.getSession().getAttribute(SessionConstant.user_key);
		if(orgUser!=null){
			request.setAttribute("orgUser", orgUser);
			return "userList";
		}
		return this.returnRedirectAction("auth/index");
	}
	
	/**
	 * 得到所有的用户
	 * @param page
	 * @param rows
	 * @param user
	 * @return
	 */
	@ResponseBody
	@RequestMapping("/userList")
	public ReturnPageObj<UserModel> userList(String page,Integer rows,String name,String phone,String startTime,String endTime){
		return userService.queryUser(Integer.parseInt(page), rows, name,phone,startTime,endTime);
	}
	
	
	
}
