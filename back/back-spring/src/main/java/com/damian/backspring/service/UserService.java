package com.damian.backspring.service;

import com.damian.backspring.model.UserEntity;
import com.damian.backspring.repositories.UserRepository;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserService {

    UserRepository userRepository;
    PasswordEncoder passwordEncoder;

    public Optional<UserEntity> findByEmail(String email) {

        return userRepository.findByEmail(email);
    }

    public Boolean existUserWithEmail(String email){

        return userRepository.existsByEmail(email);
    }

    public void saveUser(UserEntity user) {

        userRepository.save(UserEntity.builder()
                .email(user.getEmail())
                .password(passwordEncoder.encode(user.getPassword()))
                .name(user.getName())
                .role("ROLE_USER")
                .build());
    }
}
