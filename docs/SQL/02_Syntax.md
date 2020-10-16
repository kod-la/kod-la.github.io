<!--- SQL/02_Syntax.md --->

# SQL Sözdizimi

<small>_Son Güncellenme Tarihi: {docsify-updated}_</small>

## Veritabanı Tabloları

Bir veritabanı genellikle bir veya daha fazla tablo içerir. Her tablo bir adla tanımlanır (örneğin "Customers" veya "Orders"). Tablolarda veriler içeren kayıtlar (satırlar) bulunur.

Örnek olarak iyi bilinen **Northwind** veritabanını kullanacağız (MS Access ve MS SQL Server'da bulunur).

"Customers" tablosundan bir parça:

| CustomerID | CustomerName                       | ContactName        | Address                       | City        | PostalCode | Country |
| ---------- | ---------------------------------- | ------------------ | ----------------------------- | ----------- | ---------- | ------- |
| 1          | Alfreds Futterkiste                | Maria Anders       | Obere Str. 57                 | Berlin      | 12209      | Germany |
| 2          | Ana Trujillo Emparedados y helados | Ana Trujillo       | Avda. de la Constitución 2222 | México D.F. | 05021      | Mexico  |
| 3          | Antonio Moreno Taquería            | Antonio Moreno     | Mataderos 2312                | México D.F. | 05023      | Mexico  |
| 4          | Around the Horn                    | Thomas Hardy       | 120 Hanover Sq.               | London      | WA1 1DP    | UK      |
| 5          | Berglunds snabbköp                 | Christina Berglund | Berguvsvägen 8                | Luleå       | S-958 22   | Sweden  |

Yukarıdaki tablo beş kayıt (her müşteri için bir tane) ve yedi sütun içerir (CustomerID, CustomerName, ContactName, Address, City, PostalCode, ve Country).

## SQL İfadeleri

Bir veritabanında gerçekleştirmeniz gereken işlemlerin çoğu SQL ifadeleriyle yapılır.

Aşağıdaki SQL ifadesi "Customers" tablosundaki tüm kayıtları seçer:

```sql
SELECT * FROM Customers;
```

?> **NOT** SQL büyük / küçük harfe duyarlı değildir: `SELECT` ile `select` aynıdır.

## SQL ifadelerinden sonra noktalı virgül?

Bazı veritabanı sistemleri, her SQL ifadesinin sonunda noktalı virgül gerektirir.

Noktalı virgül, sunucuya aynı çağrıda birden fazla SQL ifadesinin yürütülmesine izin veren veritabanı sistemlerindeki her SQL ifadesini ayırmanın standart yoludur.

## En Önemli SQL Komutlarından Bazıları

- **SELECT** - bir veritabanından veri getirir
- **UPDATE** - veritabanındaki verileri günceller
- **DELETE** - veritabanından veri siler
- **INSERT INTO** - veritabanına yeni veriler ekler
- **CREATE DATABASE** - yeni bir veritabanı oluşturur
- **ALTER DATABASE** - bir veritabanını değiştirir
- **CREATE TABLE** - yeni bir tablo oluşturur
- **ALTER TABLE** - modifies a table
- **DROP TABLE** - bir tabloyu değiştirir
- **CREATE INDEX** - bir dizin oluşturur (arama anahtarı)
- **DROP INDEX** - bir dizini siler
