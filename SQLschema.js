CREATE TABLE reviews (
  review_id int UNIQUE PRIMARY KEY,
  product_id int NOT NULL,
  rating int NOT NULL,
  summary varchar(200) NOT NULL,
  body varchar(250) NOT NULL,
  recommend bool NOT NULL,
  name varchar(50) NOT NULL,
  email varchar(75) NOT NULL
);

CREATE TABLE photos (
  id int UNIQUE PRIMARY KEY,
  url varchar(200),
  review_id int NOT NULL,
  FOREIGN KEY (review_id)
    REFERENCES reviews (review_id)
);

CREATE TABLE characteristics (
  id int UNIQUE PRIMARY KEY,
  char_name varchar(20) NOT NULL,
  char_id int NOT NULL,
  char_value varchar(20) NOT NULL,
  review_id int NOT NULL,
  FOREIGN KEY (review_id)
    REFERENCES reviews (review_id)
);
