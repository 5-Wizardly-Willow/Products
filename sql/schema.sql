DROP DATABASE IF EXISTS products_db;

CREATE DATABASE products_db;

use products_db;

CREATE TABLE Products = (
    productId INT NOT NULL,
    name varchar(255) NOT NULL,
    description varchar(255),
    slogan varchar(255),
    category varchar(255),
    styleId INT,
    PRIMARY KEY (productId),
    FOREIGN KEY (styleId) REFERENCES Styles(styleId)
)

CREATE TABLE Styles = (
    styleId INT,
    name varchar(255),
    price varchar(255),
    salePrice varchar(255),
    specId INT,
    photoId INT,
    PRIMARY KEY (styleId),
    FOREIGN KEY (photoId) REFERENCES Photos(photoId),
    FOREIGN KEY (specId) REFERENCES Specs(specId)
)   

CREATE TABLE Photos = (
    photoId INT AUTO_INCREMENT,
    thumbnailUrl varchar(255),
    url varchar(255),
    PRIMARY KEY (photoId)
)  

CREATE TABLE Specs = (
    specId INT AUTO_INCREMENT,
    sku varchar(255),
    quantity Number,
    size varchar(255),
    PRIMARY KEY (specId)
)  