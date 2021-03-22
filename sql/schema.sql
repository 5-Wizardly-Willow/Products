DROP DATABASE IF EXISTS products_db;

CREATE DATABASE products_db;

use products_db;

CREATE TABLE Products = (
    productId INT NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    slogan varchar(255),
    
    description varchar(255),
    category varchar(255),
    styleId INT,
    PRIMARY KEY (productId),
    FOREIGN KEY (styleId) REFERENCES Styles(styleId) ON DELETE CASCADE
)

CREATE TABLE features = (
    featureId INT NOT NULL AUTO_INCREMENT,
    feature varchar(255),
    value varchar(255),
    PRIMARY KEY (featureId)
)

CREATE TABLE Styles = (
    styleId INT NOT NULL AUTO_INCREMENT,
    name varchar(255),
    price BIGINT,
    salePrice BIGINT,
    specId INT,
    photoId INT,
    PRIMARY KEY (styleId),
    FOREIGN KEY (photoId) REFERENCES Photos(photoId) ON DELETE CASCADE,
    FOREIGN KEY (specId) REFERENCES Specs(specId) ON DELETE CASCADE
)   

CREATE TABLE Photos = (
    photoId INT NOT NULL AUTO_INCREMENT,
    thumbnailUrl varchar(255) NOT NULL,
    url varchar(255 ) NOT NULL,
    PRIMARY KEY (photoId)
)  

CREATE TABLE Specs = (
    specId INT AUTO_INCREMENT,
    sku varchar(255),
    quantity BIGINT,
    size varchar(255),
    PRIMARY KEY (specId)
)  

CREATE TABLE Related = (
    relatedId INT NOT NULL AUTO_INCREMENT ,
    FOREIGN KEY (productId) REFERENCES Related(relatedId) ON DELETE CASCADE,
)