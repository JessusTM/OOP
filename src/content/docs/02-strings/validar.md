---
title: Validar
sidebar:
  order: 4000000
parent: 02. Strings
nav_order: 4
---

Al trabajar con `String`, es común necesitar validaciones antes de usar el texto. Esto evita errores y asegura que el programa trabaje con datos en un formato esperado.

Las validaciones más habituales se relacionan con tres casos distintos:

- `null`: no existe un valor asociado (no hay referencia).
- `""`: existe un texto, pero está vacío.
- `"   "`: existe un texto, pero contiene solo espacios.

---

## Validación de `null`

Entendiendo que `null` significa *ausencia de referencia*, una variable no apunta a ningún texto. En este caso no existe un `String` sobre el cual trabajar, por lo que intentar usar métodos de `String` produce un error.

```java
String curso    = null;
boolean esNulo  = (curso == null);
System.out.println("Es nulo: " + esNulo); // true
````

Si se intenta invocar un método sobre `curso`, ocurre un `NullPointerException`:

```java id="ix4g0x"
System.out.println(curso.toUpperCase()); // Lanza NullPointerException
```

Por lo tanto, se valida antes de usar:

```java id="w1x6oz"
if (curso != null) {
    System.out.println(curso.toUpperCase());
}
```

---

## Validación de `String` Vacío

Un `String` vacío (`""`) significa que *sí existe un texto*, pero su contenido tiene longitud 0. En otras palabras, no está ausente: simplemente no tiene caracteres.

Para validar esto se puede usar `length()` o `isEmpty()`.

```java id="g3a64r"
String curso      = "";
boolean esVacio   = (curso.length() == 0);
boolean esVacio2  = curso.isEmpty();

System.out.println("Es vacío: " + esVacio);    // true
System.out.println("Es vacío 2: " + esVacio2); // true
```

> **Diferencia entre `null` y Vacío:** Mientrás que `null` representa *ausencia de texto* (no hay nada a lo que referirse), `""` representa *un texto existente pero sin caracteres*. Por eso, sobre `""` sí se pueden usar métodos de `String` sin provocar `NullPointerException`.

---

## Validación de Espacios en Blanco

Un `String` puede contener solo espacios en blanco. Esto significa que no está vacío, pero tampoco contiene caracteres reales que aporten información (por ejemplo, solo espacios, tabulaciones o saltos de línea).

Para detectar esto existe `isBlank()`.

```java id="r3b52c"
String curso      = "  ";
boolean esBlanco  = curso.isBlank();
System.out.println("Es blanco: " + esBlanco); // true
```

> Nota: `isBlank()` es útil cuando se quiere asegurar que el texto contenga caracteres distintos de espacios.
