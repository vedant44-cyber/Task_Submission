
-- Create the database
CREATE DATABASE inventoryDB;
USE inventoryDB;

-- Create the products table
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    quantity INT,
    category VARCHAR(255)
);

-- Insert sample product records
INSERT INTO products (name, description, price, quantity, category) VALUES
('Tablet', 'A 10-inch tablet with 64GB storage and Wi-Fi.', 299.99, 50, 'Electronics'),
('Headphones', 'Noise-canceling over-ear headphones.', 199.99, 40, 'Electronics'),
('Blender', 'High-speed blender with multiple settings.', 89.99, 20, 'Appliances');

-- Retrieve all products from the products table
SELECT * FROM products;

-- Retrieve products with a price less than a specified amount
SELECT * FROM products WHERE price < 300.00;

-- Retrieve products with more than a specified quantity in stock
SELECT * FROM products WHERE quantity > 20;

-- Update the price of a specific product
UPDATE products SET price = 179.99 WHERE name = 'Headphones';

-- Delete a product from the products table
DELETE FROM products WHERE name = 'Blender';
