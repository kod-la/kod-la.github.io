<!--- SQL/06_AndOrNot.md --->

# SQL Ve, Veya & Değil Operatörleri

<small>_Son Güncellenme Tarihi: {docsify-updated}_</small>

## SQL AND, OR & NOT Operatörleri

WHERE ifadesi AND, OR ve NOT operatörleriyle birleştirilebilir.

AND ve OR operatörleri, kayıtları birden fazla koşula göre filtrelemek için kullanılır:

- AND operatörü, AND ile ayrılan tüm koşullar **doğru** ise bir kayıt görüntüler.
- OR operatörü, OR ile ayrılan koşullardan herhangi biri **doğru** ise bir kayıt görüntüler.

NOT operatörü, koşul (lar) **doğru değil** ise bir kayıt görüntüler.

## AND Sözdizimi

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;
```

## OR Sözdizimi

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;
```

## NOT Sözdizimi

```sql
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;
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

## AND Örneği

Aşağıdaki SQL ifadesi, ülkenin "Germany" **ve** şehrin "Berlin" olduğu "Customers" dan tüm alanları seçer:

```sql
SELECT * FROM Customers
WHERE Country='Germany' AND City='Berlin';
```

## OR Örneği

Aşağıdaki SQL ifadesi, şehrin "Berlin" **veya** "München" olduğu "Customers" dan tüm alanları seçer:

```sql
SELECT * FROM Customers
WHERE City='Berlin' OR City='München';
```

Aşağıdaki SQL ifadesi, ülkenin "Germany" **veya** "Spain" olduğu "Customers" dan tüm alanları seçer:

```sql
SELECT * FROM Customers
WHERE Country='Germany' OR Country='Spain';
```

## NOT Örneği

Aşağıdaki SQL ifadesi, ülkenin "Germany" **olmadığı** "Customers" dan tüm alanları seçer:

```sql
SELECT * FROM Customers
WHERE NOT Country='Germany';
```

## AND, OR ve NOT'un birleştirilmesi

Ayrıca AND, OR ve NOT operatörlerini de birleştirebilirsiniz.

Aşağıdaki SQL ifadesi, ülkenin "Germany" **ve** şehrin "Berlin" **veya** "München" olması gereken "Customers" dan tüm alanları seçer (karmaşık ifadeler oluşturmak için parantez kullanın):

```sql
SELECT * FROM Customers
WHERE Country='Germany' AND (City='Berlin' OR City='München');
```

Aşağıdaki SQL ifadesi, ülkenin "Germany" **olmadığı** ve "USA" **olmadığı** "Customers" dan tüm alanları seçer:

```sql
SELECT * FROM Customers
WHERE NOT Country='Germany' AND NOT Country='USA';
```
