CREATE TABLE vendors(
id SERIAL PRIMARY KEY,
vendor_id VARCHAR(4),
name TEXT,
phone TEXT UNIQUE,
approved BOOLEAN DEFAULT false
);

CREATE TABLE daily_stock(
id SERIAL PRIMARY KEY,
vendor_id VARCHAR(4),
date DATE,
batter25_stock INT,
batter35_stock INT,
batter25_sold INT DEFAULT 0,
batter35_sold INT DEFAULT 0,
sales_started BOOLEAN DEFAULT false
);

CREATE TABLE sales_log(
id SERIAL PRIMARY KEY,
vendor_id VARCHAR(4),
type INT,
price INT,
created_at TIMESTAMP DEFAULT NOW()
);