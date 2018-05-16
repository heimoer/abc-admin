package com.web.abc.dao;

import org.apache.ibatis.annotations.Param;

import com.web.abc.model.OrgUserModel;

public interface OrgUserMapper{
	/**
	 * Using:根据账号查找用户信息
	 * @param userAccount
	 * @return
	 */
	public OrgUserModel findByUserAccount(@Param("userAccount") String userAccount);
	
}
