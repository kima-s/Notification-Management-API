DROP TABLE IF EXISTS notifications;

CREATE TABLE notifications (
 id int unsigned AUTO_INCREMENT,
 name VARCHAR(20) NOT NULL,
 address VARCHAR(20) NOT NULL,
 posting_date date NOT NULL,
 sending_times int unsigned NOT NULL,
 response VARCHAR(20) NOT NULL,
 PRIMARY KEY(id)
);

INSERT INTO notifications (name, address, posting_date, sending_times, response) VALUES ("田中 太郎", "東京", "2023-09-01", 1,"有り");
INSERT INTO notifications (name, address, posting_date, sending_times, response) VALUES ("木村 二郎", "福岡", "2023-08-06", 2,"無し");
INSERT INTO notifications (name, address, posting_date, sending_times, response) VALUES ("佐々木 三郎", "愛知", "2023-08-20", 3,"無し");
