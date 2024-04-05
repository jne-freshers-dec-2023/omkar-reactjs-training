package com.spring.Login.Reposiratory;

import com.spring.Login.Entities.UserSignUp;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SignupReposiratory extends MongoRepository<UserSignUp,Integer> {
}
