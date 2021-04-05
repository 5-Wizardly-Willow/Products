/* // http://www.plantuml.com/plantuml/png/SoWkIImgAStDuGeeoayfJIvHiD7LLGWkgSn9vN9BJImfBKfLqDMrKu3ASWLdbuBuK1LW4iXN2CZ8BybNu0fApKaiIKr1re5Lp24rBmLe9m00
 */
DROP DATABASE IF EXISTS products_db;

CREATE DATABASE products_db;

use products_db;

CREATE TABLE Products (
    productId INT NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    slogan varchar(255),
    description varchar(255),
    category varchar(255),
    PRIMARY KEY (productId)
)

CREATE TABLE Features (
    featureId INT NOT NULL AUTO_INCREMENT,
    productId INT NOT NULL,
    feature varchar(255),
    value varchar(255),
    PRIMARY KEY (featureId),
    FOREIGN KEY (productId) REFERENCES Products(productId) ON DELETE CASCADE,
)

CREATE TABLE Styles (
    styleId INT NOT NULL AUTO_INCREMENT,
    productId INT NOT NULL,
    name varchar(255),
    price numeric(10,2),
    salePrice numeric(10,2),    
    PRIMARY KEY (styleId),
    FOREIGN KEY (productId) REFERENCES Products(productId) ON DELETE CASCADE
)   

CREATE TABLE Photos (
    photoId INT NOT NULL AUTO_INCREMENT,
    styleId INT NOT NULL,
    thumbnailUrl varchar(255) NOT NULL,
    url varchar(255 ) NOT NULL,
    PRIMARY KEY (photoId),
    FOREIGN KEY (styleId) REFERENCES Styles(styleId) ON DELETE CASCADE
)  

CREATE TABLE Skus (
    skuId INT AUTO_INCREMENT,
    styleId INT NOT NULL,
    sku varchar(255),
    quantity BIGINT,
    size varchar(255),
    PRIMARY KEY (skuId),
    FOREIGN KEY (styleId) REFERENCES Styles(styleId) ON DELETE CASCADE
)  

CREATE TABLE Related (
    relatedId INT NOT NULL AUTO_INCREMENT,
    fromProductId INT NOT NULL,
    toProductId INT NOT NULL,
    FOREIGN KEY (fromProductId) REFERENCES Products(productId) ON DELETE CASCADE,
    FOREIGN KEY (toProductId) REFERENCES Products(productId) ON DELETE CASCADE
)