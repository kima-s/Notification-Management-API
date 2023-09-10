package com.example.NotificationManagementAPI.entity;

import java.time.LocalDate;

public class Notification {
    private int id;
    private String name;
    private String address;
    private LocalDate postingDate;
    private int sendingTimes;
    private String response;

    public Notification() {
    }

    public Notification(String name, String address, LocalDate postingDate, int sendingTimes, String response) {
        this.name = name;
        this.address = address;
        this.postingDate = postingDate;
        this.sendingTimes = sendingTimes;
        this.response = response;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public LocalDate getPostingDate() {
        return postingDate;
    }

    public void setPostingDate(LocalDate postingDate) {
        this.postingDate = postingDate;
    }

    public int getSendingTimes() {
        return sendingTimes;
    }

    public void setSendingTimes(int sendingTimes) {
        this.sendingTimes = sendingTimes;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }
}
