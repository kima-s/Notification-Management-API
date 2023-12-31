package com.example.NotificationManagementAPI.repository;

import com.example.NotificationManagementAPI.entity.Notification;
import org.apache.ibatis.annotations.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Mapper
public interface NotificationMapper {

    @Select("SELECT id,name,address,posting_date AS postingDate,sending_times AS sendingTimes,response FROM notifications where id = #{id}")
    Optional<Notification> findById(int id);

 @Select("<script>"
            + " SELECT"
            + " id,name,address,posting_date AS postingDate,sending_times AS sendingTimes,response"
            + " FROM notifications"
            + "<where>"
            + "<if test=' name != null and name != \"\"'>"
            + "  AND name LIKE '%${name}%'"
            + "</if>"
            + "<if test=' borderDay != null '>"
            + "  AND posting_date <![CDATA[<]]>= '${borderDay}'"
            + "</if>"
            + "<if test=' sendingTimes != null '>"
            + "  AND sending_times = ${sendingTimes}"
            + "</if>"
            + "<if test=' response != null and response != \"\"'>"
            + "  AND response LIKE '${response}'"
            + "</if>"
            + "</where>"
            + " ORDER BY postingDate"
            + "</script>")
    List<Notification> findByConditions(String name, LocalDate borderDay, Integer sendingTimes, String response);

    @Insert("INSERT INTO notifications (name, address, posting_date, sending_times, response) VALUES (#{name},#{address},#{postingDate},#{sendingTimes},#{response})")
    @Options(useGeneratedKeys = true, keyColumn = "id", keyProperty = "id")
    void createNotification(Notification notification);

    @Update("UPDATE notifications SET name = #{name} , address = #{address} , posting_date = #{postingDate}, sending_times = #{sendingTimes} ,response = #{response} where id = #{id}")
    void updateNotification(Notification Notification);

    @Delete("DELETE FROM notifications where id = #{id}")
    void deleteNotification(int id);
}

