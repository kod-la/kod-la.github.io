<!--- SQL/05_Where.md --->

# SQL Nerede İfadesi

<small>_Son Güncellenme Tarihi: {docsify-updated}_</small>

## SQL WHERE İfadesi

WHERE ifadesi kayıtları filtrelemek için kullanılır.

WHERE ifadesi, yalnızca belirli bir koşulu karşılayan kayıtları ayıklamak için kullanılır.

## WHERE Sözdizimi

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

?> **Not:** WHERE ifadesi yalnızca **SELECT** ifadesinde kullanılmaz, aynı zamanda **UPDATE**, **DELETE** ifadelerinde vb. kullanılır!

## Demo Veritabanı

Aşağıda Northwind örnek veritabanındaki "Customers" tablosundan bir seçim verilmiştir:

| CustomerID | CustomerName                       | ContactName        | Address                       | City        | PostalCode | Country |
| ---------- | ---------------------------------- | ------------------ | ----------------------------- | ----------- | ---------- | ------- |
| 1          | Alfreds Futterkiste                | Maria Anders       | Obere Str. 57                 | Berlin      | 12209      | Germany |
| 2          | Ana Trujillo Emparedados y helados | Ana Trujillo       | Avda. de la Constitución 2222 | México D.F. | 05021      | Mexico  |
| 3          | Antonio Moreno Taquería            | Antonio Moreno     | Mataderos 2312                | México D.F. | 05023      | Mexico  |
| 4          | Around the Horn                    | Thomas Hardy       | 120 Hanover Sq.               | London      | WA1 1DP    | UK      |
| 5          | Berglunds snabbköp                 | Christina Berglund | Berguvsvägen 8                | Luleå       | S-958 22   | Sweden  |

## WHERE İfadesi Örneği

Aşağıdaki SQL ifadesi, "Customers" tablosunda "Mexico" ülkesindeki tüm müşterileri seçer:

```sql
SELECT * FROM Customers
WHERE Country='Mexico';
```

## Metin Alanları ve Sayısal Alanlar

SQL, metin değerlerinin etrafında tek tırnak işaretleri gerektirir (çoğu veritabanı sistemi ayrıca çift tırnağa izin verir).

Bununla birlikte, sayısal alanlar tırnak işaretleri arasına alınmamalıdır:

```sql
SELECT * FROM Customers
WHERE CustomerID=1;
```

## WHERE İfadesinde Operatörler

Aşağıdaki operatörler WHERE ifadesinde kullanılabilir:

| Operatör | Açıklama                                              |
| -------- | ----------------------------------------------------- |
| =        | Eşit                                                  |
| >        | Büyüktür                                              |
| <        | Küçüktür                                              |
| >=       | Büyük veya Eşit                                       |
| <=       | Küçük veya Eşit                                       |
| <>       | Eşit Değil                                            |
| BETWEEN  | Belirli bir aralık arasında                           |
| LIKE     | Belirli bir kalıp gibi                                |
| IN       | Bir sütun için birden çok olası değeri belirtmek için |

!> **Uyarı:** SQL'in bazı sürümlerinde `<>` bu operatör `!=` olarak yazılabilir.
