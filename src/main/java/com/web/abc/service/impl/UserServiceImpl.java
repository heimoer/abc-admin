package com.web.abc.service.impl;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.web.abc.dao.UserDAO;
import com.web.abc.model.ReturnPageObj;
import com.web.abc.model.UserModel;
import com.web.abc.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	Logger logger=Logger.getLogger(UserServiceImpl.class);
	
	@Autowired
	private UserDAO userDAO;
	
    @Override
    public ReturnPageObj<UserModel> queryUser(Integer pageNo,Integer rows,String name,String phone,String startTime,String endTime) {
    	ReturnPageObj<UserModel> rpo = new ReturnPageObj<UserModel>();
    	PageHelper.startPage(pageNo, rows);
    	List<UserModel> list = userDAO.getUser(name,phone,startTime,endTime);
    	PageInfo page = new PageInfo(list);
		rpo.setRows(page.getList());
		rpo.setTotal(page.getTotal());
		return rpo;
    }
}
