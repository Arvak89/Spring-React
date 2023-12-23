//package com.damian.backspring.controllers;
//
//import com.damian.backspring.dto.LoginRequest;
//import com.damian.backspring.dto.LoginResponse;
//import com.damian.backspring.service.AuthService;
//import com.damian.backspring.service.UserPrincipal;
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.core.annotation.AuthenticationPrincipal;
//import org.springframework.validation.annotation.Validated;
//import org.springframework.web.bind.annotation.*;
//
//@RestController
//@RequiredArgsConstructor
//public class TestController {
//
//    private final AuthService authService;
//
//    @GetMapping("/hello")
//    public String hello() {
//        return "Hello!";
//    }
//
//    @PostMapping("/auth/login")
//    public LoginResponse login(@RequestBody @Validated LoginRequest loginRequest) {
//        return authService.attemptLogin(loginRequest.getEmail(), loginRequest.getPassword());
//    }
//
//    @GetMapping("/secured")
//    public String secured(@AuthenticationPrincipal UserPrincipal principal) {
//
//        return "If you see this, then you're logged in system as user " + principal.getEmail()
//                + " User ID: " + principal.getId();
//    }
//
//    @GetMapping("/admin")
//    public String admin(@AuthenticationPrincipal UserPrincipal principal) {
//
//        return "If you see this, then you're logged in system as admin " + principal.getEmail()
//                + " User ID: " + principal.getId();
//    }
//}
