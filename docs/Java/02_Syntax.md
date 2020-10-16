<!--- Java/02_Syntax.md --->

# Java Sözdizimi

<small>_Son Güncellenme Tarihi: {docsify-updated}_</small>

Sözdizimini açıklamak için bir örnek oluşturalım.

<!-- tabs:start -->

# ** DenemeClass.java **

```java
public class DenemeClass {
    public static void main(String[] args) {
        System.out.println("Merhaba, Dünya!");
    }
}
```

<!-- tabs:end -->

### Örneği Açıklayalım

Java'da çalışan her kod satırı bir `class` içinde olmalıdır. Örneğimizde, **DenemeClass** sınıfını oluşturduk. Bir sınıf her zaman büyük harfli ilk harfle başlamalıdır.

!> **Not** Java büyük / küçük harfe duyarlıdır: `DenemeClass` ve `denemeClass` farklı anlamlara sahiptir.

Java dosyasının adı sınıf adıyla **aynı olmalıdır**. Dosyayı kaydederken, sınıf adıyla kaydetmeliyiz ve dosya adının sonuna ".java" ekleyebiliriz.

## main() Metodu

`main()` metodu programımızın çalışması için gereklidir. Derleyici bu metodu kullanarak programımızı çalıştırmaya başlar.

```java
public static void main(String[] args)
```

Derleyici `main()` metodunun içindeki bütün kodları çalıştırır. Şimdilik metodun önündeki ve arkasındaki kelimeleri öğrenmek zorunda değiliz. Onlara daha sonra değineceğiz.

## System.out.println()

`main()` metodunun içinde, `println()` metodunu kullanarak ekrana yazı yazdırabiliriz.

<!-- tabs:start -->

# ** DenemeClass.java **

```java
public static void main(String[] args) {
    System.out.println("Merhaba, Dünya!");
}
```

# ** Çıktı **

```text
Merhaba, Dünya!
```

<!-- tabs:end -->

?> **Not** Süslü parantezler `{}` bir kod bloğunun başını ve sonunu gösterir. Her kod ifadesi noktalı virgülle bitmelidir.
