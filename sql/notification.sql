DROP TABLE IF EXISTS users;

CREATE TABLE users (
 id int unsigned AUTO_INCREMENT,
 name VARCHAR(20) NOT NULL,
 address VARCHAR(20) NOT NULL,
 posting_date　date NOT NULL,
 sending_times int unsigned NOT NULL,
 response VARCHAR(20) NOT NULL,
 PRIMARY KEY(id)
);

INSERT INTO users (notification_id, name, address, posting_date, sending_times, response) VALUES (1, "田中　太郎", "東京", 2023-01-01, 1,"有り");
INSERT INTO users (notification_id, name, address, posting_date, sending_times, response) VALUES (2, "木村　二郎", "福岡", 2023-05-06, 2,"無し");
INSERT INTO users (notification_id, name, address, posting_date, sending_times, response) VALUES (3, "佐々木　三郎", "愛知", 2023-07-08, 3,"無し");
