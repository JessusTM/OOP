---
title: Char
sidebar:
  order: 3003000
  attrs:
    data-sidebar-indent: child
---

`char` permite almacenar *un solo carácter* usando comillas simples (`' '`), a diferencia de `String`, que representa *una secuencia de caracteres* y se escribe con comillas dobles (`" "`).

En Java, `char` ocupa **16 bits** y representa una *unidad de código* en UTF-16. Esto permite trabajar con letras, dígitos y símbolos de muchos idiomas, además de caracteres especiales.

`char` permite almacenar un *único carácter* y utiliza 16 bits (UTF-16). Se declara con comillas simples:

```java
char c = 'A';
```

---

## Definición y Uso

Un `char` se declara indicando el tipo y asignando un carácter entre comillas simples:

```java
char letra = 'A';
````

Un `char` solo puede almacenar un único carácter. Si se intenta escribir más de uno, el compilador genera un error:

```java
char error = 'AB'; // Error: unclosed character literal
```

---

## Unicode

Además de escribir el carácter directamente, un `char` también puede definirse usando su código Unicode con la forma `\uXXXX`, donde `XXXX` es un valor hexadecimal:

```java
char unicode = '\u0040';      // '@'
System.out.println(unicode);  // @
```

Esto es útil cuando se necesita representar símbolos específicos o caracteres que no son fáciles de escribir directamente en el teclado.

--- 

## Escapes 

En Java existen también *secuencias de escape*, que permiten representar caracteres especiales dentro del código. Se escriben con una barra invertida (`\`) seguida de una letra o símbolo.

* **Nueva Línea (`\n`)**: inserta un salto de línea.

```java
System.out.println("Primera línea\nSegunda línea");
```

* **Tabulación (`\t`)**: inserta una tabulación.

```java
System.out.println("Columna 1\tColumna 2");
```

* **Comillas Dobles (`\"`)**: permite escribir comillas dobles dentro de un texto.

```java
System.out.println("Ejemplo: \"Java\".");
```

* **Comillas Simples (`\'`)**: permite escribir comillas simples como carácter.

```java
System.out.println("Ejemplo: \'A\'.");
```

* **Barra Invertida (`\\`)**: permite escribir una barra invertida en el texto.

```java
System.out.println("Ruta: C:\\Users\\Usuario");
```
