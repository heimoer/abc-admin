package com.web.abc.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.web.abc.constant.LoginReturnEnum;
import com.web.abc.dao.OrgUserMapper;
import com.web.abc.model.OrgUserModel;
import com.web.abc.model.ReturnModel;
import com.web.abc.service.OrgUserService;
import com.web.abc.util.MD5;
@Service
public class OrgUserServiceImpl implements OrgUserService {
	@Autowired
	private OrgUserMapper orgUserMapper;


	@Override
	public ReturnModel<OrgUserModel> login(String userName, String password) {
		ReturnModel<OrgUserModel> ret = new ReturnModel<OrgUserModel>();
		if(StringUtils.isEmpty(userName)){
			ret.setCode(LoginReturnEnum.USERNAME_EMPTY.getValue());
			ret.setMsg(LoginReturnEnum.USERNAME_EMPTY.getName());
			return ret;
		}
		if(StringUtils.isEmpty(password)){
			ret.setCode(LoginReturnEnum.PWD_EMPTY.getValue());
			ret.setMsg(LoginReturnEnum.PWD_EMPTY.getName());
			return ret;
		}
		OrgUserModel model = orgUserMapper.findByUserAccount(userName);
		if(model==null){
			ret.setCode(LoginReturnEnum.USERNAME_NO.getValue());
			ret.setMsg(LoginReturnEnum.USERNAME_NO.getName());
			return ret;
		}
		MD5 md5=new MD5();
		if(!md5.toDigest(password).equals(model.getUserPassword())){
			ret.setCode(LoginReturnEnum.PWD_ERROR.getValue());
			ret.setMsg(LoginReturnEnum.PWD_ERROR.getName());
			return ret;
		}
		ret.setCode(LoginReturnEnum.SUCCESS.getValue());
		ret.setMsg(LoginReturnEnum.SUCCESS.getName());
		ret.setObj(model);
		return ret;
	}

}
