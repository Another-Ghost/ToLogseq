在关系数据库中，主键（Primary Key）是一个或多个字段的组合，用于唯一标识表中的每行记录。主键的主要目的是确保表中每个记录的唯一性，以及作为其他表引用的目标（通过外键）。主键字段不允许有重复的值，也不允许有空值。

### 主键的主要特征和作用

1. **唯一性**：
   - 主键的值必须是唯一的，这意味着每个记录都可以通过其主键值被唯一标识。

2. **不可变性**：
   - 一旦定义，主键字段的值通常不应更改。主键的不变性有助于保持数据的一致性和完整性。

3. **索引**：
   - 数据库自动为主键创建索引，以加快数据访问速度。索引使得查找、排序和数据操作更加高效。

4. **引用完整性**：
   - 主键是外键关系的基础。其他表可以通过外键引用主键表的记录，从而建立表与表之间的关系。

### 主键的示例

考虑一个简单的数据库，包含一个 `Employees` 表，该表用来存储员工信息。可以选择员工的 `EmployeeID` 作为主键：

- **Employees 表**：
  - EmployeeID (主键)
  - FirstName
  - LastName
  - Email
  - Phone

每个员工都有一个唯一的 `EmployeeID`，这个 `EmployeeID` 用来标识不同的员工记录。

### SQL 创建主键

创建带有主键的表的 SQL 语句示例：

```sql
CREATE TABLE Employees (
  EmployeeID int NOT NULL,
  FirstName varchar(255),
  LastName varchar(255),
  Email varchar(255),
  Phone varchar(255),
  PRIMARY KEY (EmployeeID)
);
```

在这个例子中，`EmployeeID` 列被定义为主键，这保证了 `Employees` 表中每行都可以通过一个唯一的 `EmployeeID` 来识别。

### 复合主键

当单一字段不足以唯一标识表中的记录时，可以使用由多个字段组成的复合主键。例如，在一个订单详情表中，可能需要使用 `OrderID` 和 `ProductID` 的组合作为主键，因为单独的 `OrderID` 或 `ProductID` 并不能唯一标识表中的记录。

```sql
CREATE TABLE OrderDetails (

  OrderID int,
  ProductID int,
  Quantity int,
  PRIMARY KEY (OrderID, ProductID)
);
```

在这个例子中，`OrderID` 和 `ProductID` 一起作为复合主键，唯一地标识了订单详情表中的每一行。

主键是关系数据库设计中至关重要的一部分，确保了数据的组织性和可管理性。


<!------------------------------------------------------->


MySQL 支持许多关键字和保留字，这些词用于执行特定的数据库操作、定义数据结构或控制事务等。这里列举一些常见的 MySQL 关键字，并提供每个关键字的使用示例：

### 1. SELECT
用于从数据库表中检索数据。
```sql
SELECT name, age FROM users WHERE age > 18;
```

### 2. INSERT
用于向表中添加新的行。
```sql
INSERT INTO users (name, age) VALUES ('Alice', 22);
```

### 3. UPDATE
用于修改表中的数据。
```sql
UPDATE users SET age = 23 WHERE name = 'Alice';
```

### 4. DELETE
用于从表中删除数据。
```sql
DELETE FROM users WHERE name = 'Alice';
```

### 5. CREATE
用于创建新的数据库对象，如数据库、表、视图等。
```sql
CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100), age INT);
```

### 6. DROP
用于删除数据库对象。
```sql
DROP TABLE users;
```

### 7. ALTER
用于修改数据库表的结构。
```sql
ALTER TABLE users ADD email VARCHAR(255);
```

### 8. JOIN
用于结合两个或多个表的行。
```sql
SELECT users.name, orders.amount FROM users JOIN orders ON users.id = orders.user_id;
```

### 9. WHERE
用于指定选择条件。
```sql
SELECT * FROM users WHERE age >= 18;
```

### 10. GROUP BY
用于根据一个或多个列对结果集进行分组。
```sql
SELECT age, COUNT(*) FROM users GROUP BY age;
```

### 11. ORDER BY
用于对结果集进行排序。
```sql
SELECT name, age FROM users ORDER BY age DESC;
```

### 12. LIMIT
用于限制查询结果的数量。
```sql
SELECT * FROM users LIMIT 10;
```

### 13. UNION
用于合并两个或多个 SELECT 语句的结果集。
```sql
SELECT name FROM users UNION SELECT name FROM admins;
```

### 14. LIKE
用于在 WHERE 子句中搜索列中的指定模式。
```sql
SELECT * FROM users WHERE name LIKE 'A%';
```

### 15. BETWEEN
用于在 WHERE 子句中选择给定范围内的值。
```sql
SELECT * FROM users WHERE age BETWEEN 18 AND 25;
```

### 16. IN
用于在 WHERE 子句中指定多个可能的值。
```sql
SELECT * FROM users WHERE name IN ('Alice', 'Bob');
```

### 17. CASE
用于在 SQL 语句中执行 IF-THEN-ELSE 类型的操作。
```sql
SELECT name, age, CASE WHEN age >= 18 THEN 'adult' ELSE 'minor' END AS status FROM users;
```

这些关键字是编写有效和高效 SQL 查询的基础，可以应对广泛的数据操作和查询需求。


- ### 创建正则表达式
  
  有两种方式在JavaScript中创建正则表达式：  
	- **使用字面量语法**：直接在两个斜杠之间写入表达式。boldsymbol
	  logseq.order-list-type:: number
		-
		  logseq.order-list-type:: number
		  ```javascript
		   let regex = /ab+c/;
		  ```
	- **使用`RegExp`构造函数**：传递一个字符串作为参数。
	  logseq.order-list-type:: number
		-
		  logseq.order-list-type:: number
		  ```javascript
		  let regex = new RegExp('ab+c');
		  ```