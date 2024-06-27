# DBMS<br>


## Verify the SQL database service is running <br>
  
 ```$ sudo systemctl status mysql
sudo systemctl status mysql 
 
 ```
 

## Connect to  SQL through the terminal.<br>
 ```sudo MySQL
sudo mysql
 ```

</p><br>

![Screenshot from 2024-06-27 07-25-25](https://github.com/vedant44-cyber/Task_Submission/assets/145666524/f4ed20f9-3f8d-4f7a-9157-eae432f19c23)
<br>
Connected to mysql sever Successfully<br>
<p>
<br>
<br>


  
## Create a new database named inventoryDB<br>
  
  ```CREATE DATABASE inventoryDB;
  CREATE DATABASE inventoryDB;
USE inventoryDB
```
New Database named inventoryDB will be created
<br>
<br>


```mysql
CREATE TABLE products ( 
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL, 
    description TEXT, 
    price DECIMAL(10, 2), 
    quantity INT,
    category VARCHAR(255)

});
```
To Create the products table
<br>
<br>

``` myql
INSERT INTO products (name, description, price, quantity, category) VALUES
('Tablet', 'A 10-inch tablet with 64GB storage and Wi-Fi.', 299.99, 50, 'Electronics'),
('Headphones', 'Noise-canceling over-ear headphones.', 199.99, 40, 'Electronics'),
('Blender', 'High-speed blender with multiple settings.', 89.99, 20, 'Appliances');

```
To Insert  3 sample product records into the products table using SQL INSERT statements
<br>
</p><br>
<br>


![Screenshot from 2024-06-27 07-31-11](https://github.com/vedant44-cyber/Task_Submission/assets/145666524/7aca370b-6e1e-41c0-88f7-c1cfa6efdbaa)
<br>
<br>

## SQL queries to perform the Task
``` MySQL
SELECT * FROM products;
```
To Retrieve all products from the products table.
<br>
<br>

``` MySQL
SELECT * FROM products WHERE price < 300.00;
```
Retrieve products with a price less than a
 300.00.
 <br>
 <br>

``` MySQL
SELECT * FROM products WHERE quantity > 20;
```
Retrieve products with more than a 20
 in stock.
 <br>
 <br>
 
``` MySQL
UPDATE products SET price = 179.99 WHERE name = 'Headphones';
```
Update the price of a Headphones to 179.99.
<br>
<br>
``` MySQL
DELETE FROM products WHERE name = 'Blender';

```
Delete Blender from the products table.
<br>
<br>

![Screenshot from 2024-06-27 07-33-52](https://github.com/vedant44-cyber/Task_Submission/assets/145666524/f77343fb-1d67-4491-8f5a-b88506d26c5e)
