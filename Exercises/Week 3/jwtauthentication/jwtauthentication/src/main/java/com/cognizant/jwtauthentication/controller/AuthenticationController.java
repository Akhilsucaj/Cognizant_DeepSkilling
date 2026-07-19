package com.cognizant.jwtauthentication.controller;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.jwtauthentication.model.AuthenticationResponse;
import com.cognizant.jwtauthentication.util.JwtUtil;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate(
            @RequestHeader("Authorization") String authHeader) {

        // Remove "Basic " from the Authorization header
        String base64Credentials = authHeader.substring(6);

        // Decode Base64 credentials
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(decodedBytes, StandardCharsets.UTF_8);

        // Split username and password
        String[] values = credentials.split(":", 2);

        String username = values[0];
        String password = values[1];

        // Print credentials (for testing)
        System.out.println("Username : " + username);
        System.out.println("Password : " + password);

        // Generate JWT Token
        String token = JwtUtil.generateToken(username);

        // Return JWT Token as JSON
        return new AuthenticationResponse(token);
    }
}