---
title: Relacionales
sidebar:
  order: 6000000
parent: 03. Operadores
nav_order: 6
---

## Definición

Los operadores relacionales permiten comparar dos valores y determinar la relación entre ellos, devolviendo un resultado de tipo `boolean` (`true` o `false`). Se utilizan con frecuencia en condiciones dentro de estructuras como `if`, `while` y `for`.

| Operador | Descripción       |
| --- | --- |
| `==` | Igualdad |
| `!=` | Diferente |
| `>`  | Mayor que |
| `<`  | Menor que |
| `>=` | Mayor o igual que |
| `<=` | Menor o igual que |

Estos operadores pueden aplicarse a tipos numéricos (`int`, `double`, etc.) y a `char`. En el caso de `boolean`, solo se pueden usar `==` y `!=`.

---

## Ejemplos

```java
int a = 10;
int b = 7;

System.out.println(a > b);   // true
System.out.println(a == b);  // false
System.out.println(a != b);  // true
````

```java id="q3v9w1"
char c1 = 'A';
char c2 = 'B';

System.out.println(c1 < c2); // true
```

---

## Comparación con Tipos de Referencia

Cuando se comparan tipos de referencia con `==`, el resultado indica si ambas variables se refieren al mismo valor en memoria (misma referencia), no si tienen el mismo contenido.

En el caso de `String`, para comparar el contenido se usa `.equals()`.

```java id="p1k8a3"
String texto1 = "Hola";
String texto2 = new String("Hola");

System.out.println(texto1 == texto2);        // false
System.out.println(texto1.equals(texto2));   // true
```
