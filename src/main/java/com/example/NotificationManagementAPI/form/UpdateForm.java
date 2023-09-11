package com.example.NotificationManagementAPI.form;

import com.example.NotificationManagementAPI.entity.Notification;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
public class UpdateForm {
    private int id;

    private String name;

    private String address;

    private LocalDate postingDate;

    private int sendingTimes;

    private String response;

    public Notification convertToNotification(int id) {
        Notification updateNotification = new Notification(name, address, postingDate, sendingTimes, response);
        updateNotification.setId(id);
        return updateNotification;
    }
}
