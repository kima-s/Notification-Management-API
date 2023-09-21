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

INSERT INTO notifications (name, address, posting_date, sending_times, response) VALUES ("田中　太郎", "東京", "2023-09-01", 1,"有り");
INSERT INTO notifications (name, address, posting_date, sending_times, response) VALUES ("木村　二郎", "福岡", "2023-08-06", 2,"無し");
INSERT INTO notifications (name, address, posting_date, sending_times, response) VALUES ("山田　一郎", "愛知", "2023-09-07", 3,"無し");
INSERT INTO notifications (name, address, posting_date, sending_times, response) VALUES ("沢田　孝", "栃木", "2023-08-13", 2,"無し");
INSERT INTO notifications (name, address, posting_date, sending_times, response) VALUES ("井出　肇", "福島", "2023-09-10", 1,"有り");
INSERT INTO notifications (name, address, posting_date, sending_times, response) VALUES ("前田　剛", "青森", "2023-05-12", 3,"無し");
INSERT INTO notifications (name, address, posting_date, sending_times, response) VALUES ("佐藤　健太", "岐阜", "2023-07-28", 2,"有り");
INSERT INTO notifications (name, address, posting_date, sending_times, response) VALUES ("千葉　元気", "佐賀", "2023-09-15", 4,"無し");