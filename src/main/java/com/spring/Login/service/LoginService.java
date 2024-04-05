package com.spring.Login.service;

import com.spring.Login.Entities.UserLogin;
import com.spring.Login.Reposiratory.LoginReposiratory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    private LoginReposiratory loginReposiratory;

    public UserLogin createLogin(UserLogin loginfo)
    {

        return loginReposiratory.save(loginfo);
    }
}
