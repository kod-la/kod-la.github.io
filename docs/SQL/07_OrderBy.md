<!--- SQL/07_OrderBy.md --->

# SQL Sırala Anahtar Sözcüğü

<small>_Son Güncellenme Tarihi: {docsify-updated}_</small>

## SQL ORDER BY Anahtar Sözcüğü

ORDER BY anahtar sözcüğü, sonuç kümesini artan veya azalan düzende sıralamak için kullanılır.

ORDER BY anahtar sözcüğü, kayıtları varsayılan olarak artan sırada sıralar. Kayıtları azalan sırada sıralamak için **DESC** anahtar sözcüğünü kullanın.

## ORDER BY Sözdizimi

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
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

## ORDER BY Örneği

Aşağıdaki SQL ifadesi, "Country" sütununa göre sıralanmış "Customers" tablosundaki tüm müşterileri seçer:

```sql
SELECT * FROM Customers
ORDER BY Country;
```

## ORDER BY DESC Örneği

Aşağıdaki SQL ifadesi, "Customers" tablosundan tüm müşterileri seçer ve "Country" sütununa göre **azalan** olarak sıralanır:

```sql
SELECT * FROM Customers
ORDER BY Country DESC;
```

## ORDER BY Çoklu Sütun Örneği

Aşağıdaki SQL ifadesi, "Country" ve "CustomerName" sütununa göre sıralanmış "Customers" tablosundaki tüm müşterileri seçer. Bu, **Country** ye göre **sıraladığı** anlamına gelir, ancak bazı satırlar aynı Ülkeye sahipse, bunları **CustomerName**'e göre sıralar:

```sql
SELECT * FROM Customers
ORDER BY Country, CustomerName;
```

## ORDER BY Çoklu Sütun Örneği 2

Aşağıdaki SQL deyimi, "Customers" tablosundan tüm müşterileri seçer, "Country" ye göre artan ve "CustomerName" sütununa göre azalan şekilde sıralanır:

```sql
SELECT * FROM Customers
ORDER BY Country ASC, CustomerName DESC;
```
