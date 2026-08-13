---
title: Conversión entre String y Primitivos
sidebar:
  order: 4000000
---

En muchos programas, los datos llegan en formato texto (por ejemplo, desde el teclado, archivos o formularios). Para poder realizar cálculos, comparar cantidades o tomar decisiones numéricas, se necesita convertir ese texto a tipos numéricos o lógicos. De forma inversa, también es común convertir valores a `String` para mostrarlos en pantalla o construir mensajes.

En este apunte se presentan dos direcciones de conversión:

- `String` → *primitivo* (*parseo*).
- *primitivo* → `String` (*conversión a texto*).

---

## `String` → Primitivo (parseo)

El *parseo* es el proceso de tomar un texto (`String`) y obtener desde él un valor con significado numérico o lógico.

En Java, este proceso se hace con métodos estándar que siguen el patrón `parseX`, donde `X` indica el tipo de destino. Estos métodos leen el contenido del texto y, si el formato es válido, entregan el valor correspondiente.

En la práctica, el parseo se usa cuando el programa recibe información como texto, pero se necesita trabajar con ella como número o como condición.

##### Enteros

Para convertir texto a enteros se utilizan métodos como `Integer.parseInt` y `Long.parseLong`.

```java
String numeroStr  = "50";
int numero        = Integer.parseInt(numeroStr);
````

El mismo concepto aplica para enteros más grandes usando `long`:

```java
String numeroLargoStr = "3000000000";
long numeroLargo      = Long.parseLong(numeroLargoStr);
```

##### Decimales

Para convertir texto con decimales se utiliza `Double.parseDouble` (y, si se requiere, `Float.parseFloat`).

```java
String decimalStr   = "65.43";
double numeroDouble = Double.parseDouble(decimalStr);
```

También se acepta notación científica en el texto, lo que permite representar valores de forma compacta:

```java
double x = Double.parseDouble("9.76543e2"); // 976.543
```

##### Booleano

En el caso de `boolean`, se utiliza `Boolean.parseBoolean`:

```java
String booleanStr     = "True";
boolean valorBooleano = Boolean.parseBoolean(booleanStr); // true
```

> **Nota**: `parseBoolean` retorna `true` solo si el texto (ignorando mayúsculas y minúsculas) es `true`. Cualquier otro valor retorna `false`.

---

## Primitivo → `String` (conversión a texto)

Convertir un valor primitivo a `String` permite representarlo como texto para imprimirlo, construir mensajes o guardarlo en un formato legible. Esta conversión no interpreta el contenido como número, sino que genera su representación textual.

Existen dos enfoques comunes:

* `String.valueOf(...)` como forma general y uniforme para distintos tipos.
* `X.toString(...)` usando una clase estándar asociada al tipo.

### `String.valueOf(...)`

`String.valueOf(...)` es una opción práctica porque funciona para varios tipos primitivos con la misma forma.

```java
int n     = 100;
String s  = String.valueOf(n);
System.out.println(s); // 100
```

Con decimales se aplica el mismo enfoque:

```java
double x  = 123.45;
String sx = String.valueOf(x);
System.out.println(sx); // 123.45
```

Y también con valores lógicos:

```java
boolean estado  = true;
String se       = String.valueOf(estado);
System.out.println(se); // true
```

### `toString(...)`

Otra opción es usar `toString(...)` a través de una clase estándar asociada al tipo:

```java
int n       = 100;
String s    = Integer.toString(n);
```

```java
double x    = 123.45;
String sx   = Double.toString(x);
```

```java
char letra  = 'A';
String sl   = Character.toString(letra);
```
