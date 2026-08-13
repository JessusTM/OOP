---
title: Incremento y Decremento
sidebar:
  order: 5000000
parent: 03. Operadores
nav_order: 5
---

## Definición

Los operadores `++` y `--` permiten modificar el valor de una variable numérica en 1 unidad. Existen dos variantes para cada uno:

- **Pre-incremento / pre-decremento**: Se aplica el cambio antes de usar el valor en la expresión.
- **Post-incremento / post-decremento**: Se usa el valor actual en la expresión y luego se aplica el cambio.

---

## Incremento

### Pre-incremento (`++i`)

El operador `++` colocado antes de la variable incrementa su valor en 1 *antes* de utilizar el valor de la variable.

```java
int i = 1;
int j = ++i;
System.out.println("i: " + i); // 2
System.out.println("j: " + j); // 2
````

En este caso, `i` se incrementa primero y luego ese nuevo valor se asigna a `j`.

### Post-incremento (`i++`)

El operador `++` colocado después de la variable incrementa su valor en 1 *después* de utilizar el valor de la variable.

```java id="d4s1n7"
int i = 2;
int j = i++;
System.out.println("i: " + i); // 3
System.out.println("j: " + j); // 2
```

En este caso, `j` recibe primero el valor actual de `i`, y luego `i` se incrementa.

---

## Decremento

### Pre-decremento (`--i`)

El operador `--` colocado antes de la variable decrementa su valor en 1 *antes* de utilizar el valor de la variable.

```java id="o7k2m3"
int i = 3;
int j = --i;
System.out.println("i: " + i); // 2
System.out.println("j: " + j); // 2
```

### Post-decremento (`i--`)

El operador `--` colocado después de la variable decrementa su valor en 1 *después* de utilizar el valor de la variable.

```java id="f9p1q2"
int i = 4;
int j = i--;
System.out.println("i: " + i); // 3
System.out.println("j: " + j); // 4
```
