package com.web.abc.controller;
import org.springframework.stereotype.Controller;



@Controller
public class BaseController<T> {
	
	/**
	 * Using:action转发
	 * @param action
	 * @return
	 */
	public String returnForwardAction(String action){
		return "forward:/"+action+"";
	}
	/**
	 * Using:action重定向
	 * @param action
	 * @return
	 */
	public String returnRedirectAction(String action){
		return "redirect:/"+action+"";
	}

}
