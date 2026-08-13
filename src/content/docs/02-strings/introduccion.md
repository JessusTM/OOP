---
title: Introducción
sidebar:
  order: 1000000
parent: 02. Strings
nav_order: 1
---

`String` es un tipo de dato **no primitivo** y, por lo tanto, es un **tipo de referencia**. Esto significa que una variable de tipo `String` no guarda el texto directamente en la variable, sino una *referencia* que permite acceder al contenido almacenado en memoria.

Al ser un tipo de referencia, `String` incluye funcionalidades integradas para trabajar con texto (por ejemplo, obtener su longitud, extraer partes del texto o convertir a mayúsculas), lo que facilita su manipulación en el código.

> **Nota:** A diferencia de muchos otros tipos, `String` no necesita ser importado: está disponible por defecto porque pertenece al paquete `java.lang`, que Java incluye automáticamente.

---

## Creación de Strings

Existen dos formas comunes de crear valores de tipo `String`:

- **Usando el Operador `new`**:

  El operador `new` se utiliza para *crear* una nueva instancia en memoria. En este caso, se está creando explícitamente un nuevo `String` a partir de una cadena de texto.

```java
  String nombre = new String("Andrés");
````

* **De Forma literal**:

```java
String nombre = "Andrés";
```

Ambas formas generan un `String`. La diferencia práctica es que la forma literal permite que Java gestione internamente un *pool de strings* para reutilizar cadenas iguales y optimizar memoria.

> Nota: Un *pool de strings* es una estructura interna donde se almacenan cadenas literales reutilizables. Si dos variables usan la misma cadena literal, pueden referirse al mismo valor almacenado. En cambio, `new String("texto")` fuerza la creación de una nueva instancia, aunque el contenido sea el mismo.

---

## Características del tipo `String`

* **Secuencia de caracteres**: Un `String` representa una secuencia de caracteres basada en la codificación Unicode.

* **Inmutabilidad**: Una vez creado un `String`, su contenido no cambia. Si se realiza una operación que “parece” modificarlo, el resultado es un nuevo `String`.

* **Uso de caracteres de escape**: Se pueden incluir caracteres especiales mediante `\` (backslash). Por ejemplo, para escribir comillas dobles dentro del texto:

```java
String mensaje = "Texto de \"Ejemplo\"";
```
