package com.example.NotificationManagementAPI.entity;

import java.time.LocalDate;
import java.util.Objects;

public class Notification {
    private int id;
    private String name;
    private String address;
    private LocalDate postingDate;
    private int sendingTimes;
    private String response;

    public Notification() {
    }

    public Notification(int id, String name, String address, LocalDate postingDate, int sendingTimes, String response) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.postingDate = postingDate;
        this.sendingTimes = sendingTimes;
        this.response = response;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Notification that)) return false;
        return id == that.id && sendingTimes == that.sendingTimes && Objects.equals(name, that.name) && Objects.equals(address, that.address) && Objects.equals(postingDate, that.postingDate) && Objects.equals(response, that.response);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, address, postingDate, sendingTimes, response);
    }
}
