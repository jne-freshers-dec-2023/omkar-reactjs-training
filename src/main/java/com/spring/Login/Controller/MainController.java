package com.spring.Login.Controller;

import com.spring.Login.Entities.UserLogin;
import com.spring.Login.Entities.UserSignUp;
import com.spring.Login.service.LoginService;
import com.spring.Login.service.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
//http://localhost:8080/login
public class MainController {
    @Autowired
    public LoginService loginService;
    public SignUpService signUpService;
    public MainController(LoginService loginService, SignUpService signUpService) {
        this.loginService = loginService;
        this.signUpService = signUpService;
    }

    @PostMapping("/login")
    public UserLogin addemp(@RequestBody UserLogin employee){
        UserLogin loginForm=loginService.createLogin(employee);
        return loginForm;
    }

        @PostMapping("/signup")
    public UserSignUp signUp(@RequestBody UserSignUp signUpForm){
        UserSignUp signup = signUpService.createSignup(signUpForm);
        return signup;

    }
}
