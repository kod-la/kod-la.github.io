<!--- SQL/03_Select.md --->

# SQL Seçme İfadesi

<small>_Son Güncellenme Tarihi: {docsify-updated}_</small>

## SQL SELECT İfadesi

SELECT ifadesi, bir veritabanından veri seçmek için kullanılır.

Döndürülen veriler, sonuç kümesi adı verilen bir sonuç tablosunda saklanır.

## SELECT Sözdizimi

```sql
SELECT column1, column2, ...
FROM table_name;
```

Burada, column1, column2, ..., içinden veri seçmek istediğiniz tablonun alan adlarıdır. Tabloda bulunan tüm alanları seçmek istiyorsanız, aşağıdaki sözdizimini kullanın:

```sql
SELECT * FROM table_name;
```

## Demo Veritabanı

Aşağıda **Northwind** örnek veritabanındaki "Customers" tablosundan bir seçim verilmiştir:

| CustomerID | CustomerName                       | ContactName        | Address                       | City        | PostalCode | Country |
| ---------- | ---------------------------------- | ------------------ | ----------------------------- | ----------- | ---------- | ------- |
| 1          | Alfreds Futterkiste                | Maria Anders       | Obere Str. 57                 | Berlin      | 12209      | Germany |
| 2          | Ana Trujillo Emparedados y helados | Ana Trujillo       | Avda. de la Constitución 2222 | México D.F. | 05021      | Mexico  |
| 3          | Antonio Moreno Taquería            | Antonio Moreno     | Mataderos 2312                | México D.F. | 05023      | Mexico  |
| 4          | Around the Horn                    | Thomas Hardy       | 120 Hanover Sq.               | London      | WA1 1DP    | UK      |
| 5          | Berglunds snabbköp                 | Christina Berglund | Berguvsvägen 8                | Luleå       | S-958 22   | Sweden  |

## SELECT Sütun Örneği

Aşağıdaki SQL ifadesi, "Customers" tablosundan "CustomerName" ve "City" sütunlarını seçer:

```sql
SELECT CustomerName, City FROM Customers;
```

## SELECT \* Örneği

Aşağıdaki SQL ifadesi, "Customers" tablosundaki tüm sütunları seçer:

```sql
SELECT * FROM Customers;
```
