---
title: Introducción 
sidebar:
  order: 1000000
---

## Definición 

Una **variable** es un identificador que permite *nombrar* un dato para que el código pueda *referirse a él*, permitiendo que un programa pueda *recordar información* y *trabajar con ella*.

> **Estado**  
> Se entiende por *estado* la información almacenada por un programa que puede ser *consultada* y *modificada* a medida que el programa avanza.

En términos más formales, una variable establece un **vínculo** entre:

- **Nombre**: el identificador usado en el código.
- **Valor**: la información que representa en un momento dado.
- **Tipo**: el conjunto de valores posibles y las operaciones válidas.
- **Alcance**: la parte del programa donde el nombre existe y puede utilizarse.
- **Tiempo de vida**: cuándo la variable se crea y cuándo deja de existir.

En la práctica, una variable se utiliza para *modelar estado*, es decir, para representar información relevante del problema que el programa necesita mantener mientras se ejecuta.

Java es un lenguaje de **tipado estático** y **fuertemente tipado**:

##### Tipado Estático 
El *tipo* de una variable se indica (o se puede deducir) *desde que se declara*, y *no cambia* durante el programa. 

> **Ejemplo:** Si una variable es `int`, se usará para enteros; no puede pasar a ser `String` después.

##### Fuertemente Tipado
Un lenguaje es *fuertemente tipado* cuando aplica reglas *estrictas* sobre los tipos de datos, evitando que se mezclen tipos incompatibles sin una conversión *explícita*.  

> **Ejemplo:** Si se tiene un valor que está en formato *texto* (por ejemplo, `«123»`) y se necesita usarlo como *número*, el lenguaje exige indicar de manera explícita la conversión, en lugar de asumirla automáticamente.

En este tipo de lenguajes, las operaciones solo se permiten si los tipos son compatibles, y si se desea cambiar de tipo, el programa debe indicarlo de forma clara.


Existen dos grandes categorías de tipos en Java: **primitivos** y **de referencia** (a veces llamados «no primitivos»).

---

## Tipos Primitivos

Los **tipos primitivos** son los tipos de datos más *básicos* del lenguaje.

Se llaman «primitivos» porque son las **unidades mínimas** con las que se representan valores: no se descomponen en estructuras más pequeñas y cada variable de este tipo guarda *un solo valor*.

En un tipo primitivo, el **valor de la variable se guarda directamente en la propia variable** (es decir, el espacio de memoria asignado a esa variable contiene el dato).

En general, un tipo primitivo se caracteriza por:

- Representar un valor *simple* (por ejemplo, un número, un carácter o un valor lógico).
- Tener un conjunto de valores posible bien definido (por ejemplo, un rango numérico).
- Permitir operaciones directas propias de su categoría (por ejemplo, suma/resta en números, comparaciones lógicas, etc.).

Principales tipos primitivos:

- **Números Enteros**: `byte`, `short`, `int`, `long`
- **Números Decimales**: `float`, `double`
- **Carácter**: `char`
- **Lógico**: `boolean`

---

## Tipos de Referencia (No Primitivos)

En los **tipos de referencia**, la variable no guarda directamente el contenido (por ejemplo, un texto completo o una colección de elementos). 

En su lugar, la variable guarda una **referencia**, es decir, un dato pequeño que indica *dónde está* el contenido real en memoria. Esto se hace debido a:

- **Tamaño Variable**
  - El contenido puede crecer o reducirse durante la ejecución, como el tamaño de un texto.
  - Esto genera que resulte más eficiente que la variable guarde solo cómo llegar al contenido, en lugar de intentar meter todo dentro sin conocer el espacio necesario.
- **Eficiencia al Asignar o Copiar**
  - Al asignar una variable a otra, es más eficiente copiar un dato pequeño (la referencia) que duplicar todo el contenido. 
  - De este modo, la operación se vuelve más rápida y evita copiar grandes cantidades de información.
- **Compartir el Mismo Contenido**
  - Varias variables pueden guardar la misma referencia y, por lo tanto, *apuntar al mismo contenido real* en memoria. 
  - Esto permite reutilizar el mismo contenido sin duplicarlo; sin embargo, si ese contenido es modificable, un cambio podría verse reflejado desde todas las variables que lo referencian.

> **Nota:** En los tipos primitivos esto no es necesario porque el valor es *pequeño* y de *tamaño fijo* (por ejemplo, un `int` siempre ocupa lo mismo), por lo que se puede guardar directamente en la variable.

A esta idea de *cómo llegar al valor* se le llama **referencia**.

Una característica importante de estos tipos es que suelen incluir **funciones disponibles** para trabajar con sus valores (por ejemplo, operaciones para manipular texto, revisar longitud, buscar elementos, etc.).

Ejemplos de tipos de referencia:

- `String`
- Arrays
- Clases
- Interfaces

> **Nota:** Un tipo de referencia puede tener el valor `null`, que representa *ausencia de referencia* (la variable no apunta a ningún dato). Los tipos primitivos no pueden ser `null`.

> **Nota**: En Java, los tipos primitivos se escriben en **minúscula** (`int`), mientras que la mayoría de tipos de referencia comienzan con **mayúscula** (`String`) porque siguen la convención de nombres de tipos definidos como *clases*.

