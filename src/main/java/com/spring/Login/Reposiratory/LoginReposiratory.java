package com.spring.Login.Reposiratory;

import com.spring.Login.Entities.UserLogin;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginReposiratory extends MongoRepository<UserLogin,Integer> {
}
