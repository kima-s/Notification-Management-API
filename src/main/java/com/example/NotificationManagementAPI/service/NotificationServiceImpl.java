package com.example.NotificationManagementAPI.service;

import com.example.NotificationManagementAPI.entity.Notification;
import com.example.NotificationManagementAPI.exception.ResourceNotFoundException;
import com.example.NotificationManagementAPI.repository.NotificationMapper;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class NotificationServiceImpl implements NotificationService {
    private final NotificationMapper notificationMapper;

    public NotificationServiceImpl(NotificationMapper notificationMapper) {
        this.notificationMapper = notificationMapper;
    }
    
    @Override
    public Notification findById(int id) {
        Optional<Notification> notification = this.notificationMapper.findById(id);
        return notification.orElseThrow(() -> new ResourceNotFoundException("resource not found"));
    }

    @Override
    public List<Notification> findByConditions(String name, LocalDate borderDay, Integer sendingTimes, String response) {
        return notificationMapper.findByConditions(name, borderDay, sendingTimes, response);
    }

    @Override
    public Notification createNotification(String name, String address, LocalDate postingDate, int sendingTimes, String response) {
        Notification notification = new Notification(name, address, postingDate, sendingTimes, response);
        notificationMapper.createNotification(notification);
        return notification;
    }

    @Override
    public void updateNotification(Notification notification) {
        notificationMapper.updateNotification(notification);
    }

    @Override
    public void deleteNotification(int id) {
        notificationMapper.deleteNotification(id);
    }
}
