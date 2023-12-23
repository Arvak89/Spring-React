package com.damian.backspring.controllers;

import com.damian.backspring.model.UserEntity;
import com.damian.backspring.service.UserPrincipal;
import com.damian.backspring.service.UserService;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@FieldDefaults(makeFinal = true, level = AccessLevel.PRIVATE)
@CrossOrigin("http://localhost:3000/")
public class MainController {

    UserService userService;

    @GetMapping(value = "/user")
    public ResponseEntity<? extends UserEntity> userAccess(@AuthenticationPrincipal UserPrincipal principal) {

        System.out.println(principal.getEmail());

        UserEntity user = userService.findByEmail(principal.getEmail()).orElseThrow();

        return ResponseEntity.ok(user);
    }
}
