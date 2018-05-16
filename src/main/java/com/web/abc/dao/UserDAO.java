package com.web.abc.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.web.abc.model.UserModel;

public interface UserDAO {
	
	public List<UserModel> getUser(@Param("name")String name,@Param("phone")String phone,
			@Param("startTime")String startTime,@Param("endTime")String endTime);
	
	
}
