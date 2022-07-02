CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  rating INT NOT NULL,
  date VARCHAR(30) NOT NULL,
  summary VARCHAR(200) NOT NULL,
  body VARCHAR NOT NULL,
  recommend BOOL NOT NULL,
  reported BOOL NOT NULL,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(75) NOT NULL,
  response VARCHAR(200),
  helpfulness INT NOT NULL
);

CREATE TABLE photos (
  id INT UNIQUE PRIMARY KEY,
  review_id INT NOT NULL,
  url VARCHAR(200),
  FOREIGN KEY (review_id)
    REFERENCES reviews (review_id)
);

CREATE TABLE characteristics (
  id INT UNIQUE PRIMARY KEY,
  char_name VARCHAR(20) NOT NULL,
  char_id INT NOT NULL,
  char_value VARCHAR(20) NOT NULL,
  review_id INT NOT NULL,
  FOREIGN KEY (review_id)
    REFERENCES reviews (review_id)
);