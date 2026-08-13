---
title: Introducción
sidebar:
  order: 1000000
parent: 03. Operadores
nav_order: 1
---

Los operadores permiten construir *expresiones* que combinan valores para obtener un resultado. De forma general:

- Un **operando** es el valor sobre el que actúa el operador (por ejemplo, una variable, un literal o el resultado de otra expresión).
- Un **operador** es el símbolo que indica la operación (por ejemplo, `+`, `==`, `&&`).
- Una **expresión** es la combinación completa de operandos y operadores (por ejemplo, `a + b`, `x > 10`, `edad >= 18 && activo`).

---

## Categorías Principales

- **Aritméticos**: Realizan cálculos numéricos (`+`, `-`, `*`, `/`, `%`).
- **Asignación**: Asignan valores y combinan asignación con operación (`=`, `+=`, `-=`, etc.).
- **Unarios**: Operan sobre un solo operando (por ejemplo, `+` y `-` como signo).
- **Incremento y Decremento**: Aumentan o disminuyen una variable en 1 (`++`, `--`).
- **Relacionales**: Comparan valores y retornan `boolean` (`==`, `!=`, `>`, `<`, `>=`, `<=`).
- **Lógicos**: Combinan condiciones booleanas (`&&`, `||`, `!`).
- **Ternario**: Selecciona un valor según una condición (`condición ? a : b`).

---

## Precedencia y Paréntesis

En una expresión, no todos los operadores se evalúan en el mismo orden. La **precedencia** define qué operaciones se realizan primero. Cuando se quiere forzar un orden específico, se usan paréntesis.

```java
int a = 5 + 4 * 2;    // primero 4 * 2, luego suma => 13
int b = (5 + 4) * 2;  // primero paréntesis, luego multiplicación => 18
````

---

## Orden de Evaluación

Cuando varios operadores tienen la misma precedencia, la evaluación suele ocurrir de izquierda a derecha. Esto se nota especialmente al combinar texto y números con `+`.

```java id="e2n8q0"
String mensaje  = "Resultado: ";
int x           = 10;
int y           = 5;

System.out.println(mensaje + x + y);     // "Resultado: 105"
System.out.println(mensaje + (x + y));   // "Resultado: 15"
```

> **Nota:** En el primer caso, al aparecer un `String`, el operador `+` concatena lo que sigue. Con paréntesis se fuerza que primero se calcule la suma.
