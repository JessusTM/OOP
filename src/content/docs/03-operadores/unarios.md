---
title: Unarios
sidebar:
  order: 4000000
parent: 03. Operadores
nav_order: 4
---

## Definición

Los operadores unarios actúan sobre un solo operando y sobre tipos numéricos (`int`, `double`, `float`, etc.) y se encuentran relacionados con el signo de los valores numéricos:

- `+` unario (mantiene el signo)
- `-` unario (invierte el signo)

Estos operadores pueden aplicarse tanto a literales como a variables numéricas.

---

## Operador Unario Positivo (`+`)

El operador `+` unario indica que el número mantiene su signo. Su uso es opcional, ya que no cambia el valor.

```java
int y = -5;
int j = +y; // j es -5
System.out.println(j);
````

En este caso, `+y` mantiene el mismo valor de `y`.

---

## Operador Unario Negativo (`-`)

El operador `-` unario invierte el signo del número, lo que equivale a multiplicar por `-1`.

```java id="m9z1l0"
int y = -5;
int k = -y; // k es 5
System.out.println(k);
```

Al aplicar `-` a `y`, ocurre `-(-5)`, lo que da `5`.
