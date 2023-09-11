package com.example.NotificationManagementAPI.service;

import com.example.NotificationManagementAPI.entity.Notification;

import java.time.LocalDate;
import java.util.List;


public interface NotificationService {

    List<Notification> findByConditions(String name, LocalDate borderDay, Integer sendingTimes, String response);

    Notification createNotification(String name, String address, LocalDate postingDate, int sendingTimes, String response);

    void updateNotification(Notification updateNotification);

    void deleteNotification(int id);
}
