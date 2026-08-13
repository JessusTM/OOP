---
title: Lógicos
sidebar:
  order: 7000000
parent: 03. Operadores
nav_order: 7
---

## Definición

Los operadores lógicos permiten combinar expresiones booleanas para construir condiciones más completas. Se usan comúnmente en estructuras de control como `if`, `while` y `for`, donde una condición debe evaluarse como `true` o `false`.

Los operadores lógicos principales son:

- `&&` (AND)
- `||` (OR)
- `!`  (NOT)

---

## Operador AND (`&&`)

El operador `&&` retorna `true` solo si ambas condiciones son `true`.

```java
int x = 3;
int y = 7;
int k = 127;
int l = 2000;

boolean resultado = (x == y) && (k > l);
System.out.println(resultado); // false
````

En este ejemplo, `x == y` es `false`, por lo que el resultado final es `false`.

---

## Operador OR (`||`)

El operador `||` retorna `true` si al menos una condición es `true`.

```java id="k9m4x2"
int x = 3;
int y = 7;
int k = 127;
int l = 2000;

boolean resultado = (x == y) || (k < l);
System.out.println(resultado); // true
```

En este ejemplo, `k < l` es `true`, por lo que el resultado final es `true`.

---

## Operador NOT (`!`)

El operador `!` invierte el valor de una expresión booleana.

```java id="c2q7b1"
boolean valor = false;
System.out.println(!valor); // true
```

---

## Precedencia de Operadores Lógicos

En expresiones que mezclan comparaciones y operadores lógicos, la evaluación sigue un orden general:

* Primero se evalúan los operadores relacionales (`==`, `>`, `<`, etc.).
* Luego se evalúa `&&`.
* Finalmente se evalúa `||`.

Si se necesita controlar el orden, se utilizan paréntesis.
