package com.damian.backspring.controllers;

import com.damian.backspring.dto.LoginRequest;
import com.damian.backspring.dto.RegistrationRequest;
import com.damian.backspring.dto.ResponseMessage;
import com.damian.backspring.model.UserEntity;
import com.damian.backspring.service.AuthService;
import com.damian.backspring.service.UserService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@CrossOrigin("http://localhost:3000")
public class SecurityController {

    AuthService authService;
    UserService userService;

    @PostMapping(value = "/registration")
    public ResponseEntity<?> registration(@RequestBody RegistrationRequest request) {

        if (userService.existUserWithEmail(request.getEmail()))
            return ResponseEntity.badRequest().body(new ResponseMessage("Email is already taken"));

        var user = UserEntity.builder()
                .email(request.getEmail())
                .password(request.getPassword())
                .name(request.getName()).build();

        userService.saveUser(user);

        return ResponseEntity.ok(new ResponseMessage("You're successfully registered"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        return ResponseEntity.ok(authService.attemptLogin(request.getEmail(), request.getPassword()));
    }
}
