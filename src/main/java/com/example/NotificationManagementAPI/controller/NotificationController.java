package com.example.NotificationManagementAPI.controller;

import com.example.NotificationManagementAPI.entity.Notification;
import com.example.NotificationManagementAPI.exception.ResourceNotFoundException;
import com.example.NotificationManagementAPI.form.CreateForm;
import com.example.NotificationManagementAPI.form.UpdateForm;
import com.example.NotificationManagementAPI.service.NotificationService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class NotificationController {
    private final NotificationService notificationService;

    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @GetMapping("/notifications/{id}")
    public Notification getById(@PathVariable("id") int id) {
        return notificationService.findById(id);
    }

    @GetMapping("/notifications")
    public List<Notification> get(@RequestParam(name = "name", required = false) String name, @RequestParam(name = "elapsedDays", required = false) Integer elapsedDays, @RequestParam(name = "sendingTimes", required = false) Integer sendingTimes, @RequestParam(name = "response", required = false) String response) {
        Optional<Integer> nullableDays = Optional.ofNullable(elapsedDays);
        LocalDate borderDay = LocalDate.now().minusDays(nullableDays.orElse(0));
        return notificationService.findByConditions(name, borderDay, sendingTimes, response);
    }

    @PostMapping("/notifications")
    public ResponseEntity<Map<String, String>> create(
            @RequestBody @Validated CreateForm form, UriComponentsBuilder uriBuilder) {
        Notification notification = notificationService.createNotification(form.getName(), form.getAddress(), form.getPostingDate(), form.getSendingTimes(), form.getResponse());
        URI url = uriBuilder
                .path("/notifications/" + notification.getId())
                .build()
                .toUri();
        return ResponseEntity.created(url).body(Map.of("message", "notification successfully created"));
    }

    @PatchMapping("/notifications/{id}")
    public ResponseEntity<Map<String, String>> update(
            @PathVariable("id") int id, @RequestBody UpdateForm form) {
        notificationService.updateNotification(form.convertToNotification(id));
        return ResponseEntity.ok(Map.of("message", "notification successfully updated"));
    }

    @DeleteMapping("/notifications/{id}")
    public ResponseEntity<Map<String, String>> delete(@PathVariable("id") int id) {
        notificationService.deleteNotification(id);
        return ResponseEntity.ok(Map.of("message", "notification successfully deleted"));
    }

    @ExceptionHandler(value = ResourceNotFoundException.class)
    public ResponseEntity<Map<String, String>> handleNoResourceFound(
            ResourceNotFoundException e, HttpServletRequest request) {
        Map<String, String> body = Map.of(
                "timestamp", ZonedDateTime.now().toString(),
                "status", String.valueOf(HttpStatus.NOT_FOUND.value()),
                "error", HttpStatus.NOT_FOUND.getReasonPhrase(),
                "message", e.getMessage(),
                "path", request.getRequestURI());
        return new ResponseEntity(body, HttpStatus.NOT_FOUND);
    }
}

