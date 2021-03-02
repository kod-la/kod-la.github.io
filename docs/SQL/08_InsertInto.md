<!--- SQL/08_InsertInto.md --->

# SQL İçine Ekleme İfadesi

<small>_Son Güncellenme Tarihi: {docsify-updated}_</small>

## SQL INSERT INTO İfadesi

INSERT INTO ifadesi, bir tabloya yeni kayıtlar eklemek için kullanılır.

## INSERT INTO Sözdizimi

INSERT INTO ifadesini iki şekilde yazmak mümkündür.

İlk yol, hem sütun adlarını hem de eklenecek değerleri belirtmektir:

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

Tablonun tüm sütunları için değer ekliyorsanız, SQL sorgusunda sütun adlarını belirtmeniz gerekmez. Ancak, değerlerin sırasının tablodaki sütunlarla aynı sırada olduğundan emin olun. INSERT INTO sözdizimi aşağıdaki gibi olacaktır:

```sql
INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```

## Demo Veritabanı

Aşağıda **Northwind** örnek veritabanındaki "Customers" tablosundan bir seçim verilmiştir:

| CustomerID | CustomerName         | ContactName     | Address                     | City     | PostalCode | Country |
| ---------- | -------------------- | --------------- | --------------------------- | -------- | ---------- | ------- |
| 89         | White Clover Markets | Karl Jablonski  | 305 - 14th Ave. S. Suite 3B | Seattle  | 98128      | USA     |
| 90         | Wilman Kala          | Matti Karttunen | Keskuskatu 45               | Helsinki | 21240      | Finland |
| 91         | Wolski               | Zbyszek         | ul. Filtrowa 68             | Walla    | 01-012     | Poland  |

## INSERT INTO Örneği

Aşağıdaki SQL ifadesi "Müşteriler" tablosuna yeni bir kayıt ekler:

```sql
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Simge Market', 'Mehmet Yılmaz', 'Paşabahçe Mah. Beykoz', 'İstanbul', '34800', 'Türkiye');
```
