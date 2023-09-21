package com.example.NotificationManagementAPI.form;

import com.example.NotificationManagementAPI.entity.Notification;
import lombok.AllArgsConstructor;
import lombok.Getter;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;

@Getter
@AllArgsConstructor
public class UpdateForm {
    private int id;

    @NotBlank
    private String name;

    @NotBlank
    private String address;
    
    @NotNull
    private LocalDate postingDate;

    @NotNull
    private int sendingTimes;
    
    @NotBlank
    private String response;

    public Notification convertToNotification(int id) {
        Notification updateNotification = new Notification(name, address, postingDate, sendingTimes, response);
        updateNotification.setId(id);
        return updateNotification;
    }
}
