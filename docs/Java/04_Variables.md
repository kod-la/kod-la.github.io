<!--- Java/04_Variables.md --->

# Java Değişkenler

<small>_Son Güncellenme Tarihi: {docsify-updated}_</small>

Değişkenler, verileri depolamak için kullanılır.

Java'da farklı **değişken türleri** vardır, örneğin:

- `String` - "Merhaba" gibi metinleri depolar. Metin çift tırnak içerisine yazılır.
- `int` - '34' gibi tam sayıları depolar.
- `float` - '3,14' gibi ondalıklı sayıları depolar.
- `char` - 'A' ve 'b' gibi harfleri depolar.
- `boolean` - 'true' veya 'false' değerini depolar.

## Değişken Oluşturma

Değişken oluştururken önce değişkenin türünü belirtmeli sonrasında ise ona bir değer atamalıyız:

```java
type variable = value;
```

Burada `type` değişkenin türü, `variable` değişkenin adı ve `value` değişkenin değeridir. `=` işareti değişkenlere değer atamak için kullanılır.

Metin depolayan bir değişken oluşturalım:

<!-- tabs:start -->

# ** Kod **

```java
String isim = "Bahadır";
System.out.println(isim);
```

# ** Çıktı **

```text
Bahadır
```

<!-- tabs:end -->

Tamsayı depolayan bir değişken oluşturalım:

<!-- tabs:start -->

# ** Kod **

```java
int plaka = 34;
System.out.println(plaka);
```

# ** Çıktı **

```text
34
```

<!-- tabs:end -->

`int` türünde `plaka` adında bir değişken oluşturup içerisine `34` değerini atadık.

İstersek önce değişkenimizi oluşturup, içerisine sonradan değer atayabiliriz:

<!-- tabs:start -->

# ** Kod **

```java
float pi;
pi = 3.14f;
System.out.println(pi);
```

# ** Çıktı **

```text
3.14
```

<!-- tabs:end -->

Eğer önceden değeri olan bir değişkene, tekrar değer atarsak değeri son atadığımız değer olacaktır:

<!-- tabs:start -->

# ** Kod **

```java
int sayi = 5;
System.out.println(sayi);
sayi = 10;
System.out.println(sayi);
```

# ** Çıktı **

```text
5
10
```

<!-- tabs:end -->

## Final Değişkeni

Eğer bir değişkenin değerinin daha sonra değişmesini istemiyorsak `final` kelimesini yazarak, o değişkeni değiştirilemez hale getirebiliriz:

<!-- tabs:start -->

# ** Kod **

```java
final int sayi = 15;
sayi = 20; // final değişkeni olduğu için hata verecektir.
```

# ** Çıktı **

```text
DenemeClass.java:4: error: cannot assign a value to final variable sayi
    sayi = 20;
         ^
1 error
```

<!-- tabs:end -->

## Diğer Değişken Türleri

Diğer türde değişkenler nasıl oluşturulur görelim:

```java
int sayi = 5;
float ondalikliSayi = 1.95f;
char harf = 'C';
boolean dogruMu = true;
String metin = "Merhaba";
```

## Değişkenleri Ekrana Yazdırma

`println()` metodu genellikle değişkenleri ekrana yazdırmak için kullanılır.

Metin ve değişkenin değerini birleştirmek için `+` işaretini kullanabiliriz:

<!-- tabs:start -->

# ** Kod **

```java
String isim = "Bahadır";
System.out.println("Merhaba " + isim);
```

# ** Çıktı **

```text
Merhaba Bahadır
```

<!-- tabs:end -->

Ayrıca bir değişkenin değerini başka bir değişkenin değeriyle birleştirmek için de `+` işaretini kullanabiliriz:

<!-- tabs:start -->

# ** Kod **

```java
String isim = "Bahadır";
String soyIsim = " Güder";
String tamIsim = isim + soyIsım;
System.out.println(tamIsim);
```

# ** Çıktı **

```text
Bahadır Güder
```

<!-- tabs:end -->

Sayısal değerler için `+` işareti matematikteki + işaretiyle aynı görevi görür yani toplama yapar:

<!-- tabs:start -->

# ** Kod **

```java
int x = 5;
int y = 6;
System.out.println(x + y); // Ekrana x + y yi yazar.
```

# ** Çıktı **

```text
11
```

<!-- tabs:end -->

# Çoklu Değişken Oluşturma

...
