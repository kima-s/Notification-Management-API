package com.example.NotificationManagementAPI.service;

import com.example.NotificationManagementAPI.entity.Notification;
import com.example.NotificationManagementAPI.exception.ResourceNotFoundException;
import com.example.NotificationManagementAPI.repository.NotificationMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class NotificationServiceImplTest {

    @InjectMocks
    NotificationServiceImpl notificationServiceImpl;

    @Mock
    NotificationMapper notificationMapper;

    @Test
    public void IDに紐づくお知らせが1件取得できること() throws Exception {
        doReturn(Optional.of(new Notification("田中　太郎", "東京", LocalDate.of(2023, 7, 20), 1, "無し"))).when(notificationMapper).findById(1);

        Notification actual = notificationServiceImpl.findById(1);
        assertThat(actual).isEqualTo(new Notification("田中　太郎", "東京", LocalDate.of(2023, 7, 20), 1, "無し"));
        verify(notificationMapper, times(1)).findById(1);
    }

    @Test
    public void 条件に該当するお知らせの情報を全て返すこと() throws Exception {
        doReturn(List.of(new Notification("山田　太郎", "東京", LocalDate.of(2023, 7, 20), 1, "有り")
                , new Notification("山田　千秋", "滋賀", LocalDate.of(2023, 9, 13), 1, "有り")))
                .when(notificationMapper).findByConditions("山田", LocalDate.of(2023, 9, 14), 1, "有り");

        List<Notification> actual = notificationServiceImpl.findByConditions("山田", LocalDate.of(2023, 9, 14), 1, "有り");
        assertThat(actual).isEqualTo(List.of(new Notification("山田　太郎", "東京", LocalDate.of(2023, 7, 20), 1, "有り"), new Notification("山田　千秋", "滋賀", LocalDate.of(2023, 9, 13), 1, "有り")));
    }

    @Test
    public void 存在しないお知らせのIDを指定したときに例外が返されること() throws Exception {
        doReturn(Optional.empty()).when(notificationMapper).findById(99);

        assertThatThrownBy(
                () -> notificationServiceImpl.findById(99)
        ).isInstanceOfSatisfying(
                ResourceNotFoundException.class, e -> assertThat(e.getMessage()).isEqualTo("resource not found")
        );
    }

    @Test
    public void お知らせが１件登録されること() throws Exception {
        LocalDate postingDate = LocalDate.of(2023, 7, 20);
        Notification notification = new Notification("田中　太郎", "東京", postingDate, 1, "無し");
        doNothing().when(notificationMapper).createNotification(notification);

        notificationServiceImpl.createNotification("田中　太郎", "東京", postingDate, 1, "無し");
        verify(notificationMapper, times(1)).createNotification(notification);
    }

    @Test
    public void 存在するお知らせのIDを指定したときにお知らせを更新できること() throws Exception {
        Notification updateNotification = new Notification("田中　太郎", "東京", LocalDate.of(2023, 7, 20), 1, "無し");
        updateNotification.setId(1);

        notificationServiceImpl.updateNotification(updateNotification);
        verify(notificationMapper, times(1)).updateNotification(updateNotification);
    }

    @Test
    public void 存在するお知らせのIDを指定したときにお知らせを削除できること() throws Exception {
        notificationServiceImpl.deleteNotification(1);
        verify(notificationMapper, times(1)).deleteNotification(1);
    }
}
