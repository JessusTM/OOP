---
title: Asignación
sidebar:
  order: 3000000
parent: 03. Operadores
nav_order: 3
---

## Definición

Los operadores de asignación permiten guardar un valor en una variable y, en muchos casos, actualizar ese valor en una sola expresión. Son comunes cuando se trabaja con acumuladores, contadores o cálculos progresivos.

---

## Operador de Asignación Básico (`=`)

El operador `=` asigna a una variable el valor que se encuentra a la derecha.

```java
int i = 5;
````

Una asignación puede guardar un literal, el resultado de una operación o el resultado de una expresión más compleja.

```java id="u9x2m7"
int a         = 10;
int b         = 4;
int resultado = a * b;
```

---

## Operadores de Asignación Combinados

Los operadores combinados permiten realizar una operación y asignar el resultado a la misma variable, evitando repetir el nombre de la variable.

* `+=` suma y asigna
* `-=` resta y asigna
* `*=` multiplica y asigna
* `/=` divide y asigna
* `%=` aplica módulo y asigna

```java id="cw1p3x"
int i = 5;
i     += 2;  // equivalente a: i = i + 2;
System.out.println(i); // 7
```

```java id="x5y4c0"
int j = 9;
j     -= 4;  // equivalente a: j = j - 4;
System.out.println(j); // 5
```

```java id="q7y2d9"
int k = 5;
k     *= 3;  // equivalente a: k = k * 3;
System.out.println(k); // 15
```

```java id="5m9t6k"
int m = 10;
m     /= 2;  // equivalente a: m = m / 2;
System.out.println(m); // 5
```

```java id="d7f4k1"
int n = 10;
n     %= 3;  // equivalente a: n = n % 3;
System.out.println(n); // 1
```

---

## Asignación Compuesta con `String`

El operador `+=` también se puede usar con `String` para concatenar texto.

```java id="wn3t2x"
String mensaje  = "Hola";
mensaje         += " Mundo";
System.out.println(mensaje); // Hola Mundo
```
