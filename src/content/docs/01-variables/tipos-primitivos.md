---
title: Tipos Primitivos
sidebar:
  order: 3000000
---

En Java, los **tipos primitivos** son los tipos de datos más *fundamentales* del lenguaje. Se usan para representar valores *básicos* (números, caracteres y valores lógicos) y se caracterizan porque cada variable de tipo primitivo guarda **directamente** un único valor, sin capas intermedias.

Un primitivo **almacena el valor directamente**. En cambio, un tipo de referencia (como `String`) almacena una **referencia** a un objeto.

## Cantidad Fija de Bits 

Los tipos primitivos presentan una cantidad fija de bits debido a que los computadores actuales almacenan toda la información en *bits* (0 y 1). Para representar números o caracteres, se reserva una cantidad **fija** de bits, y esa cantidad determina dos aspectos clave:

* *Cuánta memoria ocupa* el valor.
* *Qué rango de valores puede representar*.

En los tipos primitivos, la cantidad de bits es predeterminada para que el lenguaje pueda garantizar:

* **Rango Predecible**: Con *n* bits solo se puede representar un conjunto finito de valores. En enteros con signo, el rango es $-2^{\,n-1} \le x \le 2^{\,n-1}-1$. Por ejemplo:
  * Con 8 bits (`byte`) se obtiene $-128\ldots 127$.
  * Con 32 bits (`int`) se obtiene aproximadamente $-2.1\times 10^{9}\ldots 2.1\times 10^{9}$.

* **Eficiencia**: Al trabajar con tamaños fijos, la máquina y la JVM pueden realizar operaciones rápidas, como sumas y comparaciones, sin tener que aumentar o disminuir la cantidad de memoria utilizada de manera dinámica para cada valor.

* **Portabilidad**: En Java, los tamaños de `byte`, `short`, `int`, `long`, `char`, `float` y `double` están definidos de forma estándar para que el mismo programa se comporte igual en distintas máquinas.

---

## Clases Wrapper

Además de los tipos primitivos, Java ofrece *tipos equivalentes* que agregan funcionalidades útiles para trabajar con estos valores. A estos tipos se les suele llamar **wrapper**, porque funcionan como una «envoltura» del valor primitivo y permiten realizar tareas comunes como conversiones, comparaciones o acceso a constantes (por ejemplo, valores máximos y mínimos).

> Nota: Por ahora basta con entender que existen como una alternativa para trabajar con valores primitivos cuando se necesitan herramientas extra. Más adelante, cuando se estudie POO, se verá con más detalle qué significa que estos tipos tengan funciones asociadas.

---

## Tipos Primitivos Disponibles

Java incluye los siguientes tipos primitivos:

- **Enteros**: `byte`, `short`, `int`, `long`
- **Decimales**: `float`, `double`
- **Carácter**: `char`
- **Lógico**: `boolean`

---

## Resumen 

| Tipo      | Descripción                            | Tamaño           | Wrapper Class | Valor por Defecto |
| --------- | -------------------------------------- | ---------------- | ------------- | ----------------- |
| `boolean` | Valor lógico (`true` o `false`)        | no especificado* | `Boolean`     | `false`           |
| `char`    | Un solo carácter Unicode (UTF-16)      | 16 bits          | `Character`   | `'\u0000'`        |
| `byte`    | Entero pequeño                         | 8 bits           | `Byte`        | `0`               |
| `short`   | Entero de 16 bits                      | 16 bits          | `Short`       | `0`               |
| `int`     | Entero de 32 bits                      | 32 bits          | `Integer`     | `0`               |
| `long`    | Entero de 64 bits                      | 64 bits          | `Long`        | `0L`              |
| `float`   | Número en coma flotante (prec. simple) | 32 bits          | `Float`       | `0.0f`            |
| `double`  | Número en coma flotante (prec. doble)  | 64 bits          | `Double`      | `0.0`             |


> Nota: El estándar del lenguaje no fija un tamaño en bits para `boolean` a nivel de memoria; lo importante es que solo representa dos valores.
