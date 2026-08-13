---
title: Booleano
sidebar:
  order: 3004000
  attrs:
    data-sidebar-indent: child
---

`boolean` es un tipo de dato que permite representar una idea *lógica*: algo puede ser *verdadero* (`true`) o *falso* (`false`). 

Este tipo se utiliza para modelar condiciones y decisiones dentro de un programa, por ejemplo: *si un usuario está autenticado*, *si un número es mayor que otro*, o *si una operación fue exitosa*.

En la práctica, casi cualquier decisión en el código termina evaluándose como un `boolean`, ya que estructuras como `if`, `while` y `for` dependen de una condición que debe ser *verdadera* o *falsa*.

`boolean` representa un valor lógico: `true` o `false`. Se usa principalmente para condiciones y control de flujo.

---

## Definición y Uso

Un `boolean` puede asignarse directamente con `true` o `false`. Esto permite almacenar el resultado de una condición o representar un estado simple dentro del programa.

```java
boolean datoLogico = true;
System.out.println(datoLogico); // true
````

Una de sus aplicaciones más comunes es controlar el flujo del programa. Si la condición evaluada es `true`, se ejecuta un bloque; si es `false`, se ejecuta el bloque alternativo.

```java id="4t4c6y"
if (datoLogico) {
    System.out.println("La condición es verdadera");
} else {
    System.out.println("La condición es falsa");
}
```

---

## Comparación y Operadores Relacionales

Muchas veces un `boolean` no se asigna de forma directa, sino que se obtiene como resultado de una **comparación**. Para comparar valores se utilizan operadores relacionales:

* `>`  mayor que
* `<`  menor que
* `==` igual a
* `>=` mayor o igual que
* `<=` menor o igual que
* `!=` distinto de

El resultado de estas comparaciones siempre es `true` o `false`.

```java id="8ah14t"
double d = 200.0;
float  f = 123.45f;

boolean mayor = d > f;
System.out.println(mayor); // true (200.0 > 123.45)
```

Además, estas comparaciones pueden combinarse para construir condiciones más completas usando operadores lógicos como `&&` (*y*) y `||` (*o*). Estos operadores evalúan condiciones compuestas y se usan con frecuencia en expresiones de control.

---

## Expresiones Lógicas

Una **expresión lógica** es cualquier expresión cuyo resultado final es un `boolean`. Estas expresiones pueden formarse a partir de comparaciones, operaciones aritméticas y operadores relacionales.

```java id="x9t7gj"
boolean resultado = (3 - 2 == 1);
System.out.println(resultado); // true
```

Este tipo de expresiones se utiliza directamente en condiciones, por ejemplo, dentro de un `if` o un `while`.
