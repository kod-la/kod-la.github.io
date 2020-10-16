<!--- SQL/01_Home.md --->

# SQL'e Giriş

<small>_Son Güncellenme Tarihi: {docsify-updated}_</small>

SQL, veritabanlarına erişmek ve verileri işlemek için standart bir dildir.

## SQL Nedir?

- SQL, Yapılandırılmış Sorgu Dili anlamına gelir
- SQL, veritabanlarına erişmenizi ve verileri değiştirmenizi sağlar
- SQL 1986'da Amerikan Ulusal Standartlar Enstitüsü (ANSI) ve 1987'de Uluslararası Standartlar Örgütü (ISO) standardı oldu

## SQL Neler Yapabilir?

- SQL bir veritabanında sorgu çalıştırabilir
- SQL bir veritabanından veri alabilir
- SQL bir veritabanına kayıt ekleyebilir
- SQL bir veritabanındaki kayıtları güncelleyebilir
- SQL kayıtları bir veritabanından silebilir
- SQL yeni veritabanları oluşturabilir
- SQL bir veritabanında yeni tablolar oluşturabilir
- SQL bir veritabanında depolanmış prosedürler oluşturabilir
- SQL bir veritabanında görünümler oluşturabilir
- SQL tablolar, prosedürler ve görünümlerde izinler ayarlayabilir

## SQL bir Standart - AMA ...

SQL bir ANSI / ISO standardı olmasına rağmen, SQL dilinin farklı sürümleri vardır.

Ancak, ANSI standardıyla uyumlu olmak için, hepsi benzer şekilde en azından ana komutları (SELECT, UPDATE, DELETE, INSERT, WHERE gibi) destekler.

?> **Not:** SQL veritabanı programlarının çoğunun SQL standardına ek olarak kendi özel uzantıları da vardır!

## Web Sitelerinde SQL Kullanımı

Veritabanından veri gösteren bir web sitesi oluşturmak için ihtiyacınız olan şeyler:

- Bir RDBMS veritabanı programı (MS Access, SQL Server, MySQL)
- PHP veya ASP gibi bir sunucu tarafı script dili kullanmak
- İstediğiniz verileri almak için SQL kullanmak
- Sayfaya stil vermek için HTML / CSS kullanmak

## RDMBS (VTYS)

RDBMS, (Relational Database Management System) İlişkisel Veritabanı Yönetim Sistemi anlamına gelir.

RDBMS, SQL ve MS SQL Server, IBM DB2, Oracle, MySQL ve Microsoft Access gibi tüm modern veritabanı sistemleri için temel oluşturur.

RDBMS'deki veriler, tablo adı verilen veritabanı nesnelerinde saklanır. Tablo, ilgili veri girişlerinin bir koleksiyonudur ve sütunlardan ve satırlardan oluşur.

"Musteriler" tablosuna (tabloyu bir sonraki bölümde vereceğim) bakalım:

```sql
SELECT * FROM Customers;
```

Her tablo alan adı verilen daha küçük varlıklara bölünür. Customers tablosundaki alanlar CustomerID, CustomerName, ContactName, Address, City, PostalCode ve Country. Alan, tablodaki her kayıt hakkında belirli bilgileri korumak için tasarlanmış bir kolondur.

Satır olarak da adlandırılan bir kayıt, tabloda var olan her bir girdidir. Örneğin, yukarıdaki Customers tablosunda 91 kayıt vardır. Kayıt, tablodaki yatay bir varlıktır.

Sütun, bir tablodaki belirli bir alanla ilişkili tüm bilgileri içeren bir tablodaki dikey bir varlıktır.
