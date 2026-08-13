---
title: Conversión
sidebar:
  order: 6000000
---

La *conversión de tipos* ocurre cuando un valor pasa de un tipo de dato a otro. 

Esto es común al trabajar con distintos tipos numéricos (por ejemplo, `int` y `long`) o cuando se necesita interpretar un número como carácter (`char`).

En Java existen dos formas principales de conversión entre tipos primitivos:

- **Conversión Implícita**: El lenguaje la realiza automáticamente cuando la conversión es segura.
- **Conversión Explícita (casting)**: El programador la indica cuando existe riesgo de pérdida de información.

---

## Conversión Explícita (casting)

La conversión explícita se utiliza cuando se intenta pasar de un tipo con mayor capacidad a uno con menor capacidad. En ese caso, Java exige indicar el tipo de destino con un *cast* usando paréntesis.

```java
int valorEntero = 10000;
char valorChar  = (char) valorEntero;
System.out.println("Valor convertido a char: " + valorChar);
````

Esta conversión puede provocar *pérdida de información* si el valor original no cabe en el rango del tipo de destino. En el caso de `char`, su rango es de `0` a `65,535`. Si el entero está fuera de ese rango, el resultado ya no representa el valor original.

> **Nota:** El *casting* no «corrige» el valor para que encaje; simplemente fuerza a almacenarlo en el tipo más pequeño, lo que puede cambiar el resultado.

---

## Conversión Implícita

La conversión implícita ocurre cuando se asigna un valor de menor capacidad a un tipo de mayor capacidad. Como el tipo de destino puede representar todos los valores del tipo de origen, Java permite la conversión automáticamente.

```java
int valorEntero = 10000;
long valorLong  = valorEntero; // conversión implícita
System.out.println("Valor convertido a long: " + valorLong);
```

En este caso, la conversión es segura porque `long` puede representar todos los valores posibles de un `int`.

---

## Restricciones 

No todas las conversiones entre tipos primitivos están permitidas. Por ejemplo, no es posible convertir un `int` a `boolean` porque representan conceptos distintos y no existe una relación numérica directa entre ellos.

```java
int valorEntero       = 1;
boolean valorBooleano = (boolean) valorEntero; // Error de compilación
```

Esto se debe a que `boolean` solo admite `true` o `false`, y no puede recibir valores numéricos.
