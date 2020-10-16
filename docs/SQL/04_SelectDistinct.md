<!--- SQL/04_SelectDistinct.md --->

# SQL Farklı Seçme İfadesi

<small>_Son Güncellenme Tarihi: {docsify-updated}_</small>

## SQL SELECT DISTINCT İfadesi

SELECT DISTINCT ifadesi yalnızca distinct (farklı) değerleri döndürmek için kullanılır.

Bir tablonun içinde, bir sütun genellikle birçok aynı değeri içerir; ve bazen yalnızca farklı (distinct) değerleri listelemek istersiniz.

## SELECT DISTINCT Sözdizimi

```sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
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

## DISTINCT Olmadan SELECT Örneği

Aşağıdaki SQL ifadesi, "Customers" tablosundaki "City" sütunundan TÜM değerleri (kopyalar dahil) seçer:

```sql
SELECT Country FROM Customers;
```

Şimdi, yukarıdaki SELECT ifadesiyle DISTINCT anahtar kelimesini kullanalım ve sonucu görelim.

## SELECT DISTINCT Örneği

Aşağıdaki SQL ifadesi, "Customers" tablosundaki "City" sütunundan yalnızca DISTINCT (farklı) değerlerini seçer:

```sql
SELECT DISTINCT Country FROM Customers;
```

Aşağıdaki SQL ifadesi, farklı (distinct) müşteri ülkelerinin sayısını listeler:

```sql
SELECT COUNT(DISTINCT Country) FROM Customers;
```

MS Access için geçici çözüm:

```sql
SELECT Count(*) AS DistinctCountries
FROM (SELECT DISTINCT Country FROM Customers);
```
