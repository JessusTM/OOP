---
title: Inmutabilidad
sidebar:
  order: 3000000
parent: 02. Strings
nav_order: 3
---

## Definición 

La *inmutabilidad* es una propiedad de algunos tipos de datos. Un tipo es *inmutable* cuando, una vez creado su valor, ese valor no cambia. Si se aplica una operación que parece modificarlo, el resultado es un **nuevo** valor y el original se mantiene igual.

Esto no depende de que el tipo sea *de referencia*: existen tipos de referencia *mutables* e *inmutables*.

---

## Inmutabilidad en `String`

`String` es un tipo de referencia *inmutable*. Esto significa que el texto almacenado en un `String` no se altera. En cambio, cualquier operación que transforme el texto entrega un **nuevo** `String` con el resultado.

Por esta razón, para conservar un cambio se debe asignar el resultado a una variable (ya sea una nueva o la misma).

### Ejemplos de operaciones que retornan un nuevo `String`

En los siguientes ejemplos, el `String` original se mantiene igual y el resultado aparece en una nueva variable.

#### `toUpperCase()`

```java
String texto = "Hola";
String mayus = texto.toUpperCase();

System.out.println(texto); // Hola
System.out.println(mayus); // HOLA
````

#### `replace()`

```java id="d1m7pb"
String texto      = "Hola Mundo";
String modificado = texto.replace('o', 'O');

System.out.println(texto);      // Hola Mundo
System.out.println(modificado); // HOlA MundO
```

#### `trim()`

```java id="2wy2az"
String texto  = "  Java  ";
String limpio = texto.trim();

System.out.println("[" + texto + "]");  // [  Java  ]
System.out.println("[" + limpio + "]"); // [Java]
```
