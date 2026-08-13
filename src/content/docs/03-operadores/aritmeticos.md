---
title: Aritméticos
sidebar:
  order: 2000000
parent: 03. Operadores
nav_order: 2
---

## Definición 

Los operadores aritméticos permiten realizar cálculos matemáticos dentro de un programa, como suma, resta, multiplicación, división y cálculo del resto de una división.

| Operador | Descripción | Ejemplo |
| --- | --- | --- |
| `+` | Suma | `a + b` |
| `-` | Resta | `a - b` |
| `*` | Multiplicación | `a * b` |
| `/` | División | `a / b` |
| `%` | Módulo (resto) | `a % b` |

Estos operadores se usan con tipos numéricos (`int`, `float`, `double`, etc.) y forman parte de expresiones más grandes.

> Nota: Si una expresión mezcla varios operadores, el orden de evaluación depende de la precedencia. Los paréntesis permiten forzar el orden deseado.

---

## Declaración y Uso 

En Java se pueden declarar múltiples variables del mismo tipo en una sola línea, y luego utilizarlas en expresiones aritméticas.

```java
int i = 5, j = 4;
int suma = i + j;
System.out.println(suma); // 9
````

---

## División 

Al dividir dos enteros, el resultado también es entero: se elimina la parte decimal.

```java id="4x7js0"
int division = 5 / 4;
System.out.println(division); // 1
```

Si se necesita un resultado con decimales, al menos uno de los operandos debe ser `float` o `double`.

```java id="q8r1b2"
float div = (float) 5 / 4;
System.out.println(div); // 1.25
```

> **Nota:** Para obtener división con decimales, al menos uno de los operandos debe ser float o double (por ejemplo usando un cast o una literal como 5f o 5.0

---

## Operador Módulo `%`

El operador `%` retorna el residuo de una división y es útil, por ejemplo, para saber si un número es par o impar.

```java id="2y3z8q"
int numero = 7;
if (numero % 2 == 0) {
    System.out.println("El número es par");
} else {
    System.out.println("El número es impar");
}
```

Ejemplo adicional:

```java id="y5b8m1"
int resto = 8 % 5;
System.out.println(resto); // 3
```

> **Nota:** El operador `+` también se utiliza para concatenar texto cuando aparece un `String` en la expresión. En ese caso, los números se transforman a texto para poder unirlos.
