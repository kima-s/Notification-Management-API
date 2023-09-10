package com.example.NotificationManagementAPI.form;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
public class CreateForm {
    private int id;

    @NotBlank
    private String name;

    @NotBlank
    private String address;
    
    private LocalDate postingDate;

    @NotNull
    private int sendingTimes;

    @NotBlank
    private String response;
}
