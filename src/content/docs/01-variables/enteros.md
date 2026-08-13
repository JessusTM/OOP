---
title: Enteros
sidebar:
  order: 3001000
  attrs:
    data-sidebar-indent: child
---

Los enteros (`byte`, `short`, `int`, `long`) se usan para representar números *sin decimales*. La diferencia principal entre ellos es el **rango** de valores que pueden almacenar: a mayor cantidad de bits, mayor rango.

El rango disponible depende de la cantidad de bits asignados (a más bits, mayor rango):

* **`byte`**: 8 bits, de -128 a 127 (*útil para valores pequeños*)
* **`short`**: 16 bits, de -32,768 a 32,767
* **`int`**: 32 bits, de $-2^{31}$ a $2^{31}-1$ (*el entero más común*)
* **`long`**: 64 bits, de $-2^{63}$ a $2^{63}-1$ (*para valores muy grandes*)

> **Nota:** Overflow ocurre cuando un cálculo produce un número que no cabe en el rango permitido por el tipo entero. En ese caso, el valor no se guarda como se espera y el resultado se «da la vuelta»: pasa desde el máximo al mínimo (o viceversa) y continúa dentro del rango.
> - Por ejemplo, si `int` llega a su máximo (`2,147,483,647`) y se le suma 1, el resultado pasa a ser el mínimo (`-2,147,483,648`).

---

## Literales y Formatos

##### Literales 
En el código, un valor escrito directamente se llama *literal*. Un literal es un dato que aparece «tal cual» en el código fuente y representa un valor constante, sin venir desde una variable ni desde el resultado de una operación.

* Por ejemplo, pueden existir literales numéricas (`10`, `3.14`), de texto (`"Hola"`), de carácter (`'A'`) o lógicas (`true`, `false`).

##### Sufijos 
Cuando se escribe una literal numérica, el lenguaje aplica *tipos por defecto*. Por ejemplo, una literal entera se interpreta como `int` y una literal decimal se interpreta como `double`. En la mayoría de casos esto funciona sin problemas, pero a veces se necesita indicar de forma explícita el tipo de la literal.

Los **sufijos** se usan justamente para eso: se escriben en la *literal* (no en el tipo de la variable) y sirven para indicar *cómo debe interpretarse* el valor cuando el tipo por defecto no coincide con lo que se necesita.

Si la literal, interpretada con su tipo por defecto, es *compatible* con el tipo de la variable, la asignación funciona sin problemas:

```java
long a = 10; // 10 se interpreta como int, pero se puede asignar a long
````

Cuando la literal no cabe o no es compatible con el tipo por defecto, el compilador falla antes de asignar. En ese caso, el sufijo permite marcar el tipo correcto desde el inicio:

```java
long b = 3000000000L; // L hace que la literal se interprete como long
```

En literales decimales ocurre algo similar: suelen interpretarse como `double`, por lo que se usa `F` para indicar que una literal debe tratarse como `float`:

```java
float c = 1.5F; // F hace que la literal se interprete como float
```

##### Formatos 
También existen otras formas de escribir enteros que mejoran legibilidad o permiten representar valores en otras bases.

* `10L`: sufijo `L` para indicar `long`.
* `1_000_000`: guion bajo para separar dígitos y mejorar legibilidad.
* `0b1010`: literal binario.
* `0xFF`: literal hexadecimal.

---

## Código

El siguiente ejemplo muestra cómo declarar variables de cada tipo entero y cómo consultar su tamaño y rangos usando constantes disponibles. Además, incluye un caso simple de *overflow*.

```java
// ================================
// Tipo byte (1 byte = 8 bits)
// ================================
byte numeroByte = 7;
System.out.println("Número byte: " + numeroByte);

System.out.println("Bits en byte   : " + Byte.SIZE);      // 8
System.out.println("Bytes en byte  : " + Byte.BYTES);     // 1
System.out.println("Max byte       : " + Byte.MAX_VALUE);
System.out.println("Min byte       : " + Byte.MIN_VALUE);

// ================================
// Tipo short (2 bytes = 16 bits)
// ================================
short numeroShort = 30000;
System.out.println("\nNúmero short : " + numeroShort);

System.out.println("Bits en short  : " + Short.SIZE);      // 16
System.out.println("Bytes en short : " + Short.BYTES);     // 2
System.out.println("Max short      : " + Short.MAX_VALUE);
System.out.println("Min short      : " + Short.MIN_VALUE);

// ================================
// Tipo int (4 bytes = 32 bits)
// ================================
int numeroInt = Integer.MAX_VALUE;
System.out.println("\nNúmero int (MAX_VALUE): " + numeroInt);

System.out.println("Bits en int    : " + Integer.SIZE);      // 32
System.out.println("Bytes en int   : " + Integer.BYTES);     // 4
System.out.println("Max int        : " + Integer.MAX_VALUE);
System.out.println("Min int        : " + Integer.MIN_VALUE);

// Overflow (wrap-around)
int overflow = Integer.MAX_VALUE;
overflow++;
System.out.println("Overflow int (MAX + 1): " + overflow); // pasa a negativo

// ================================
// Tipo long (8 bytes = 64 bits)
// ================================
long numeroLong = Long.MAX_VALUE; // o 9223372036854775807L
System.out.println("\nNúmero long (MAX_VALUE): " + numeroLong);

System.out.println("Bits en long   : " + Long.SIZE);      // 64
System.out.println("Bytes en long  : " + Long.BYTES);     // 8
System.out.println("Max long       : " + Long.MAX_VALUE);
System.out.println("Min long       : " + Long.MIN_VALUE);

// Literales útiles:
long conSufijo    = 10L;       // sufijo 'L' => literal tratado como long
int conGuionBajo  = 1_000_000; // legibilidad
int binario       = 0b1010;    // 10
int hex           = 0xFF;      // 255

System.out.println("\nconSufijo   = " + conSufijo);
System.out.println("conGuionBajo  = " + conGuionBajo);
System.out.println("binario       = " + binario);
System.out.println("hex           = " + hex);
