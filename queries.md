# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT productname, categoryname 
FROM Products
JOIN categories ON products.categoryid = categories.categoryid;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT orderid, shippername 
FROM Orders
JOIN shippers ON orders.shipperid = shippers.shipperid
WHERE orderdate < '1997-01-09'
ORDER BY orderdate ASC;

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT productname, quantity 
FROM orderdetails
JOIN products ON orderdetails.productid = products.productid
WHERE orderid = 10251;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT orders.orderid, customers.customername, employees.lastname
FROM orders
JOIN customers ON orders.customerid = customers.customerid
JOIN employees ON orders.employeeid = employees.employeeid;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT categoryname, COUNT(categoryname) AS count 
FROM Products
JOIN categories ON products.categoryid = categories.categoryid
GROUP BY categoryname;

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

SELECT orderid, count(productid) AS ItemCount
FROM OrderDetails
GROUP BY orderid;