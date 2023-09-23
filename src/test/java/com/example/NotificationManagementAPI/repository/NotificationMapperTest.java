package com.example.NotificationManagementAPI.repository;

import com.example.NotificationManagementAPI.entity.Notification;
import com.github.database.rider.core.api.dataset.DataSet;
import com.github.database.rider.core.api.dataset.ExpectedDataSet;
import com.github.database.rider.spring.api.DBRider;
import org.junit.jupiter.api.Test;
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@DBRider
@MybatisTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class NotificationMapperTest {

    @Autowired
    NotificationMapper notificationMapper;

    @Test
    @Sql(
            scripts = {"classpath:/sqlannotation/delete-notifications.sql", "classpath:/sqlannotation/insert-notifications.sql"},
            executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD
    )
    @Transactional
    void すべてのお知らせが取得できること() {
        List<Notification> notifications = notificationMapper.findByConditions("", null, null, "");
        assertThat(notifications)
                .hasSize(3)
                .contains(
                        new Notification(1, "田中　太郎", "東京", LocalDate.of(2023, 7, 20), 1, "無し"),
                        new Notification(2, "山田　茜", "山形", LocalDate.of(2023, 8, 5), 2, "有り"),
                        new Notification(3, "佐藤　四郎", "福岡", LocalDate.of(2023, 6, 13), 1, "無し")
                );
    }

    @Test
    @Sql(
            scripts = {"classpath:/sqlannotation/delete-notifications.sql", "classpath:/sqlannotation/insert-notifications.sql"},
            executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD
    )
    @Transactional
    void IDに紐づくお知らせが1件取得できること() {
        Optional<Notification> notifications = notificationMapper.findById(1);
        assertThat(notifications)
                .contains(
                        new Notification(1, "田中　太郎", "東京", LocalDate.of(2023, 7, 20), 1, "無し")
                );
    }

    @Test
    @Sql(
            scripts = {"classpath:/sqlannotation/delete-notifications.sql", "classpath:/sqlannotation/insert-notifications.sql"},
            executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD
    )
    @Transactional
    void 存在しないお知らせのIDを指定したときに空のOptionalが返されること() {
        Optional<Notification> notifications = notificationMapper.findById(4);
        assertThat(notifications)
                .isEmpty();
    }

    @Test
    @DataSet(value = "datasets/notifications.yml")
    @ExpectedDataSet(value = "datasets/expectedNotifications.yml", ignoreCols = "id")
    @Transactional
    void お知らせを１件登録できること() {
        notificationMapper.createNotification(new Notification(4, "太田　幸子", "熊本", LocalDate.of(2023, 9, 12), 2, "有り"));
    }

    @Test
    @DataSet(value = "datasets/notifications.yml")
    @ExpectedDataSet(value = "datasets/expectedNotifications2.yml")
    @Transactional
    void IDを指定したときにお知らせを更新できること() {
        notificationMapper.updateNotification(new Notification(3, "松田　力", "富山", LocalDate.of(2023, 9, 20), 3, "有り"));
    }

    @Test
    @DataSet(value = "datasets/notifications.yml")
    @ExpectedDataSet(value = "datasets/expectedNotifications3.yml")
    @Transactional
    void IDを指定したときにお知らせを削除できること() {
        notificationMapper.deleteNotification(3);
    }
}

