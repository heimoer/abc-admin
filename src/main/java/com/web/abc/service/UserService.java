package com.web.abc.service;

import com.web.abc.model.ReturnPageObj;
import com.web.abc.model.UserModel;



public interface UserService {

	public ReturnPageObj<UserModel> queryUser(Integer page,Integer rows,String name,String phone,String startTime,String endTime) ;
	
	
}
