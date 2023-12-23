package com.damian.backspring.dto;

import lombok.Builder;
import lombok.Getter;

import javax.sql.rowset.spi.SyncResolver;

@Getter
@Builder
public class LoginResponse {
    private final String accessToken;
}
