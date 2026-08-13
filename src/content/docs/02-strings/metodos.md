---
title: Métodos
sidebar:
  order: 5000000
parent: 02. Strings
nav_order: 5
---

A continuación se presentan algunos de los métodos más importantes disponibles para trabajar con `String`. Estos métodos permiten consultar información del texto, comparar cadenas y generar nuevas cadenas a partir de transformaciones comunes.

---

## Longitud

El método `.length()` retorna la cantidad de caracteres en una cadena.

```java
System.out.println("Hola".length()); // Salida: 4
````

---

## Mayúsculas y Minúsculas

* `.toUpperCase()`: convierte la cadena a mayúsculas.
* `.toLowerCase()`: convierte la cadena a minúsculas.

```java id="y2qv1a"
System.out.println("Hola Mundo".toUpperCase()); // Salida: HOLA MUNDO
System.out.println("Hola Mundo".toLowerCase()); // Salida: hola mundo
```

---

## Comparación de Cadenas

* `.equals(String otraCadena)`: compara dos cadenas considerando mayúsculas y minúsculas.
* `.equalsIgnoreCase(String otraCadena)`: compara dos cadenas ignorando mayúsculas y minúsculas.

```java id="w0q0pp"
System.out.println("Hola".equals("Hola")); // Salida: true
System.out.println("Hola".equals("hola")); // Salida: false
System.out.println("Hola".equalsIgnoreCase("hola")); // Salida: true
```

---

## Comparación Lexicográfica

El método `.compareTo(String otraCadena)` compara dos cadenas basándose en su orden en la tabla Unicode.

```java id="m6nfx7"
System.out.println("Hola".compareTo("Mundo")); // número negativo
System.out.println("Hola".compareTo("Hola"));  // 0
System.out.println("Mundo".compareTo("Hola")); // número positivo
```

Si el resultado es:

* **Menor que `0`:** La primera cadena es menor lexicográficamente.
* **Igual a `0`:** Ambas cadenas son iguales.
* **Mayor que `0`:** La primera cadena es mayor lexicográficamente.

> **Nota:** La comparación lexicográfica corresponde a un orden similar al de un diccionario, donde se comparan los caracteres de izquierda a derecha.

---

## Obtener Caracteres

El método `.charAt(int índice)` permite obtener un carácter en una posición específica.

```java id="xk83qr"
System.out.println("Hola".charAt(0)); // Salida: H
System.out.println("Hola".charAt(3)); // Salida: a
```

> **Nota:** Si se intenta acceder a un índice fuera del rango, ocurre un `StringIndexOutOfBoundsException`.

Para obtener el último carácter de forma dinámica:

```java id="d2q7a1"
System.out.println("Hola".charAt("Hola".length() - 1)); // Salida: a
```

---

## Subcadenas

El método `.substring(int inicio)` devuelve la subcadena desde la posición `inicio` hasta el final.
El método `.substring(int inicio, int fin)` devuelve la subcadena desde `inicio` hasta `fin - 1`.

```java id="v1q9af"
System.out.println("Hola Mundo".substring(1));    // Salida: ola Mundo
System.out.println("Hola Mundo".substring(1, 4)); // Salida: ola
```

Para obtener los últimos `n` caracteres de una cadena:

```java id="5x5e5t"
System.out.println("Hola Mundo".substring("Hola Mundo".length() - 2)); // Salida: do
```

---

## Reemplazo con `replace()`

El método `replace()` permite reemplazar todas las ocurrencias de un carácter dentro de una cadena por otro.

```java id="g4p2i2"
String trabalenguas = "trabalenguas";
String nuevaCadena  = trabalenguas.replace('a', '.');
System.out.println(nuevaCadena); // Salida: tr.b.lengu.s
```

Este método no modifica la cadena original, sino que retorna un nuevo `String` con los cambios.

---

## Búsqueda con `indexOf()` y `lastIndexOf()`

El método `indexOf()` retorna la posición de la primera ocurrencia de un carácter o subcadena dentro de una cadena.

```java id="t7r4nt"
int posicion = trabalenguas.indexOf('a');
System.out.println(posicion); // Salida: 2
```

El método `lastIndexOf()` retorna la posición de la última ocurrencia.

```java id="z9e7j9"
int ultimaPosicion = trabalenguas.lastIndexOf('a');
System.out.println(ultimaPosicion); // Salida: 10
```

Si el carácter o subcadena no se encuentra, ambos métodos retornan `-1`.

---

## Verificación de Contenido con `contains()`

El método `contains()` verifica si una cadena contiene una secuencia de caracteres específica.

```java id="7b0y50"
boolean contiene = trabalenguas.contains("lenguas");
System.out.println(contiene); // Salida: true
```

---

## Inicio y Fin con `startsWith()` y `endsWith()`

`startsWith()` verifica si una cadena comienza con una secuencia específica.
`endsWith()` verifica si finaliza con una secuencia específica.

```java id="k1o0g5"
boolean iniciaCon = trabalenguas.startsWith("traba");
System.out.println(iniciaCon); // Salida: true

boolean terminaCon = trabalenguas.endsWith("guas");
System.out.println(terminaCon); // Salida: true
```

---

## Limpieza con `trim()`

El método `trim()` elimina los espacios en blanco al inicio y al final de una cadena.

```java id="d9q3bx"
String texto        = "  trabalenguas  ";
String textoLimpio  = texto.trim();
System.out.println("[" + textoLimpio + "]"); // Salida: [trabalenguas]
```

Este método es útil al validar datos ingresados por el usuario.
