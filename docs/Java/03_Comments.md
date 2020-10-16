<!--- Java/03_Comments.md --->

# Java Yorum Satırları

<small>_Son Güncellenme Tarihi: {docsify-updated}_</small>

Yorumlar, kodu açıklamak ve daha okunabilir hale getirmek için kullanılır. Ayrıca istemediğimiz bir kodu çalışırmayı engellemek için de kullanılır.

Tek satırlı yorumlar `//` ile başlar.

`//` ile satırın sonu arasında kalan metinler çalıştırılmaz.

Bu örnekte koddan önce kullanmayı görelim:

```java
// Bu bir yorum satırı!
System.out.println("Merhaba, Dünya!");
```

Bu örnekte is koddan yanında kullanmayı görelim:

```java
System.out.println("Merhaba, Dünya!");  // Bu bir yorum satırı!
```

## Çok Satırlı Yorumlar

Çok satırlı yorumlar `/*` ile başlar ve `*/` ile biter.

`/*` ve `*/` arasındaki metinler çalıştırılmaz.

Bu örnekte çok satırlı yorumları kullanmayı görelim:

```java
/* Bu bir
çok satırlı yorum! */
System.out.println("Merhaba, Dünya!");
```
