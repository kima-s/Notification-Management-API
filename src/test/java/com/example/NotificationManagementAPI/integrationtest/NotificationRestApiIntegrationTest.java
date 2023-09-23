package com.example.NotificationManagementAPI.integrationtest;

import com.example.NotificationManagementAPI.exception.ResourceNotFoundException;
import com.github.database.rider.core.api.dataset.DataSet;
import com.github.database.rider.core.api.dataset.ExpectedDataSet;
import com.github.database.rider.spring.api.DBRider;
import org.junit.jupiter.api.Test;
import org.skyscreamer.jsonassert.Customization;
import org.skyscreamer.jsonassert.JSONAssert;
import org.skyscreamer.jsonassert.JSONCompareMode;
import org.skyscreamer.jsonassert.comparator.CustomComparator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.transaction.annotation.Transactional;

import java.nio.charset.StandardCharsets;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@AutoConfigureMockMvc
@DBRider
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class NotificationRestApiIntegrationTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    @DataSet(value = "datasets/notifications.yml")
    @Transactional
    void お知らせが全件取得できること() throws Exception {
        String response = mockMvc.perform(MockMvcRequestBuilders.get("/notifications"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn().getResponse().getContentAsString(StandardCharsets.UTF_8);

        JSONAssert.assertEquals("""
                [{
                   "id": 3,
                   "name": "松田　力",
                   "address": "富山",
                   "postingDate": "2022-09-15",
                   "sendingTimes": 2,
                   "response": "無し"
                },
                {
                   "id": 2,
                   "name": "田中　美和子",
                   "address": "群馬",
                   "postingDate": "2022-09-18",
                   "sendingTimes": 2,
                   "response": "無し"
                },
                {
                   "id": 1,
                   "name": "清⽔　健太",
                   "address": "奈良",
                   "postingDate": "2022-09-20",
                   "sendingTimes": 1,
                   "response": "有り"
                }]
                """, response, JSONCompareMode.STRICT);
    }

    @Test
    @DataSet(value = "datasets/notifications.yml")
    @Transactional
    void IDに紐づくお知らせが1件取得できること() throws Exception {
        String response = mockMvc.perform(MockMvcRequestBuilders.get("/notifications/1"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn().getResponse().getContentAsString(StandardCharsets.UTF_8);

        JSONAssert.assertEquals("""
                {
                   "id": 1,
                   "name": "清⽔　健太",
                   "address": "奈良",
                   "postingDate": "2022-09-20",
                   "sendingTimes": 1,
                   "response": "有り"
                }
                """, response, JSONCompareMode.STRICT);
    }

    @Test
    @DataSet(value = "datasets/notifications.yml")
    @Transactional
    void 存在しないIDを指定してお知らせを取得するときに例外が返されること() throws Exception {
        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/notifications/99"))
                .andExpect(MockMvcResultMatchers.status().isNotFound())
                .andReturn();

        Exception exception = result.getResolvedException();
        assertThat(exception.getClass()).isEqualTo(ResourceNotFoundException.class);
    }

    @Test
    @DataSet(value = "datasets/notifications.yml")
    @Transactional
    void 存在しないIDを指定してお知らせを取得するときにNotFoundレスポンスが返されること() throws Exception {
        String response = mockMvc.perform(MockMvcRequestBuilders.get("/notifications/99"))
                .andExpect(MockMvcResultMatchers.status().isNotFound())
                .andReturn().getResponse().getContentAsString(StandardCharsets.UTF_8);

        JSONAssert.assertEquals("""
                {
                   "message": "resource not found",
                   "timestamp": "2023-07-11T23:00:01.451993+09:00[Asia/Tokyo]",
                   "error": "Not Found",
                   "path": "/notifications/99",
                   "status": "404"
                }
                """, response, new CustomComparator(JSONCompareMode.STRICT,
                new Customization("timestamp", ((o1, o2) -> true))));
    }

    @Test
    @DataSet(value = "datasets/notifications.yml")
    @ExpectedDataSet(value = "datasets/expectedNotifications.yml", ignoreCols = "id")
    @Transactional
    void お知らせを１件登録できること() throws Exception {
        String response = mockMvc.perform(MockMvcRequestBuilders.post("/notifications")
                        .contentType(MediaType.APPLICATION_JSON).content("""
                                {
                                   "id": 4,
                                   "name": "太田　幸子",
                                   "address": "熊本",
                                   "postingDate": "2023-09-12",
                                   "sendingTimes": 2,
                                   "response": "有り"
                                }
                                """))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andReturn().getResponse().getContentAsString(StandardCharsets.UTF_8);

        JSONAssert.assertEquals("""
                {
                   "message": "notification successfully created"
                }
                """, response, JSONCompareMode.STRICT);
    }

    @Test
    @DataSet(value = "datasets/notifications.yml")
    @ExpectedDataSet(value = "datasets/expectedNotifications2.yml")
    @Transactional
    void お知らせを１件更新できること() throws Exception {
        String response = mockMvc.perform(MockMvcRequestBuilders.patch("/notifications/3")
                        .contentType(MediaType.APPLICATION_JSON).content("""
                                {
                                   "id": 3,
                                   "name": "松田　力",
                                   "address": "富山",
                                   "postingDate": "2023-09-20",
                                   "sendingTimes": 3,
                                   "response": "有り"
                                }
                                """))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn().getResponse().getContentAsString(StandardCharsets.UTF_8);

        JSONAssert.assertEquals("""
                {
                   "message": "notification successfully updated"
                }
                """, response, JSONCompareMode.STRICT);
    }

    @Test
    @DataSet(value = "datasets/notifications.yml")
    @ExpectedDataSet(value = "datasets/expectedNotifications3.yml")
    @Transactional
    void お知らせを１件削除できること() throws Exception {
        String response = mockMvc.perform(MockMvcRequestBuilders.delete("/notifications/3"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn().getResponse().getContentAsString(StandardCharsets.UTF_8);

        JSONAssert.assertEquals("""
                {
                   "message": "notification successfully deleted"
                }
                """, response, JSONCompareMode.STRICT);
    }

}
