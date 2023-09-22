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
            scripts = {"classpath:/sqlannotation/delete-users.sql", "classpath:/sqlannotation/insert-users.sql"},
            executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD
    )
    @Transactional
    void すべてのユーザーが取得できること() {
        List<Notification> notifications = notificationMapper.findByConditions("", null, null, "");
        assertThat(notifications)
                .hasSize(3)
                .contains(
                        new Notification("田中　太郎", "東京", LocalDate.of(2023, 7, 20), 1, "無し"),
                        new Notification("田中　太郎", "東京", LocalDate.of(2023, 7, 20), 1, "無し"),
                        new Notification("田中　太郎", "東京", LocalDate.of(2023, 7, 20), 1, "無し")
                );
    }

    @Test
    @Sql(
            scripts = {"classpath:/sqlannotation/delete-users.sql", "classpath:/sqlannotation/insert-users.sql"},
            executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD
    )
    @Transactional
    void IDに紐づくユーザーが1件取得できること() {
        Optional<User> users = userMapper.findById(1);
        assertThat(users)
                .contains(
                        new User(1, "清⽔", "Tokyo", 29)
                );
    }

    @Test
    @Sql(
            scripts = {"classpath:/sqlannotation/delete-users.sql", "classpath:/sqlannotation/insert-users.sql"},
            executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD
    )
    @Transactional
    void 存在しないユーザーのIDを指定したときに空のOptionalが返されること() {
        Optional<User> users = userMapper.findById(4);
        assertThat(users)
                .isEmpty();
    }

    @Test
    @DataSet(value = "datasets/users.yml")
    @ExpectedDataSet(value = "datasets/expectedUsers.yml", ignoreCols = "id")
    @Transactional
    void ユーザーを１件登録できること() {
        userMapper.createUser(new User(4, "山中", "Mie", 38));
    }

    @Test
    @DataSet(value = "datasets/users.yml")
    @ExpectedDataSet(value = "datasets/expectedUsers2.yml")
    @Transactional
    void IDを指定したときにユーザーを更新できること() {
        userMapper.updateUser(new User(3, "山中", "Mie", 38));
    }

    @Test
    @DataSet(value = "datasets/users.yml")
    @ExpectedDataSet(value = "datasets/expectedUsers3.yml")
    @Transactional
    void IDを指定したときにユーザーを削除できること() {
        userMapper.deleteUser(3);
    }
}

