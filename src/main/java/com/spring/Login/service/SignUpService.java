package com.spring.Login.service;

import com.spring.Login.Entities.UserSignUp;
import com.spring.Login.Reposiratory.SignupReposiratory;
import org.springframework.stereotype.Service;

@Service
public class SignUpService {

    private SignupReposiratory signupReposiratory;

    public SignUpService(SignupReposiratory signupReposiratory) {
        this.signupReposiratory = signupReposiratory;
    }

    public UserSignUp createSignup(UserSignUp Signup)
    {

        return signupReposiratory.save(Signup);
    }
}
