---
title: Punto Flotante
sidebar:
  order: 3002000
  attrs:
    data-sidebar-indent: child
---

Los números de punto flotante (`float`, `double`) se usan para representar valores *con decimales*. Este tipo de dato es útil cuando se trabaja con mediciones, promedios, porcentajes o valores que no son enteros.

En Java existen dos tipos principales de punto flotante: `float` y `double`. La diferencia más importante entre ambos es la *precisión* y el *rango* que pueden manejar, siendo `double` el más común en la mayoría de programas.

Se basan en el estándar IEEE 754, por lo que almacenan una *aproximación* del valor:

* **`float`**: 32 bits (*precisión simple*)
* **`double`**: 64 bits (*precisión doble* y el tipo decimal más usado)

---

## Notación y Literales

En el código, las literales decimales se interpretan como `double` por defecto. Si se quiere que una literal sea `float`, se debe indicar con el sufijo `F` o `f`.

```java
float real    = 1.0F;
double real2  = 1.0;
````

El sufijo permite que el lenguaje interprete el número como `float` desde el inicio, en lugar de tratarlo como `double`.

---

## Notación Científica

Para representar números muy grandes o muy pequeños de forma compacta se usa notación científica con `E` o `e`, que indica una potencia de 10.

```java
float valor3 = 2.12E3F;  // 2120.0
float valor5 = 1.5E-10F; // 0.00000000015
```

Este formato es común en contextos científicos o cuando se necesita escribir valores con muchos ceros de forma más legible.

---

## Código

Antes de revisar el código, conviene notar que Java entrega constantes que permiten consultar información básica sobre float y double, como su cantidad de bits, su tamaño en bytes y los valores extremos que pueden representar. 

El siguiente ejemplo muestra cómo obtener estos datos y cómo declarar una variable float y una double para observar la diferencia en su forma de escritura.

```java
System.out.println("==== Float ====");
System.out.println("Bits en Float                 : " + Float.SIZE);
System.out.println("Bytes en Float                : " + Float.BYTES);
System.out.println("Valor máximo de Float         : " + Float.MAX_VALUE);
System.out.println("Valor mínimo positivo Float   : " + Float.MIN_VALUE);

System.out.println("==== Double ====");
System.out.println("Bits en Double                : " + Double.SIZE);
System.out.println("Bytes en Double               : " + Double.BYTES);
System.out.println("Valor máximo de Double        : " + Double.MAX_VALUE);
System.out.println("Valor mínimo positivo Double  : " + Double.MIN_VALUE);

System.out.println("==== Diferencias entre Float y Double ====");
double numeroDouble = 3.1416;  // literal decimal => double
float numeroFloat   = 3.1416F; // 'F' indica float
System.out.println("Número Double : " + numeroDouble);
System.out.println("Número Float  : " + numeroFloat);
```
