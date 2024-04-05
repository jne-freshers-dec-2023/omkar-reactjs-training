package com.spring.Login.Entities;

import lombok.*;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class JwtResponce {
    private String jwtTocken;
    private String username;

    public JwtResponce() {

    }

    public JwtResponce(String jwtTocken, String username) {
        this.jwtTocken = jwtTocken;
        this.username = username;
    }

    public String getJwtTocken() {
        return jwtTocken;
    }

    public void setJwtTocken(String jwtTocken) {
        this.jwtTocken = jwtTocken;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }


}
