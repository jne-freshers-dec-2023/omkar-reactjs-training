package com.spring.Login.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
public class AppConfig {

    @Bean
    public UserDetailsService userDetailsService(){
        UserDetails userDetails=User.builder().username("omkar").password(passwordEncoder().encode("123")).roles("ADMIN").build();
        UserDetails userDetails1=User.builder().username("Admin").password(passwordEncoder().encode("123")).roles("ADMIN").build();

        return new InMemoryUserDetailsManager(userDetails,userDetails1);
    }

    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
