---
title: Declaración y Asignación
sidebar:
  order: 2000000
---

Para crear una variable en Java, primero se **declara** indicando su *tipo* y su *nombre*. Luego, opcionalmente, se le **asigna** un valor.

## Declaración y Asignación

- **Declaración**: Se crea la variable indicando su *tipo* y su *nombre* (identificador). En este paso, la variable queda definida, pero aún puede no tener un valor.

```java
String nombre; // declaración
````

* **Asignación**: Se le entrega un *valor* a una variable que ya existe, usando el operador `=`.

```java
nombre = "Nataly"; // asignación
```

* **Declaración + Asignación**: se declara la variable y se le asigna un valor *en la misma instrucción*.

```java
String nombre = "Nataly"; // declaración + asignación
```

---

## Convenciones de Nomenclatura

En programación, los nombres de variables, funciones, clases, etc.) suelen representar *ideas compuestas* como «nombre completo» o «total acumulado». Como en el código normalmente no se usan espacios en los identificadores, se necesita una forma estándar de **separar visualmente las palabras**. Ahí aparecen las llamadas convenciones de nomenclatura. Entre las más comunes:

- **camelCase**: la primera palabra va en minúscula y cada palabra siguiente empieza con mayúscula.  
  *Ejemplo:* `nombreCompleto`, `calcularPromedio`

- **PascalCase**: todas las palabras comienzan con mayúscula.  
  *Ejemplo:* `NombreCompleto`, `ClienteVip`

- **snake_case**: las palabras se separan con guion bajo (`_`).  
  *Ejemplo:* `nombre_completo`, `calcular_promedio`

- **UPPER_SNAKE_CASE**: variante de *snake_case* en mayúsculas, usada típicamente para constantes.  
  *Ejemplo:* `EDAD_MINIMA`, `MAX_INTENTOS`

Dentro de Java, las convenciones son utilizadas de la siguiente manera: 

- Para **variables** y **métodos** se usa **camelCase**.

```java
int edadPersona;
String nombreCompleto;

void calcularPromedio() {}
````

* Para **clases** e **interfaces** se usa **PascalCase**.

```java
class ClienteVip {}
interface RepositorioUsuarios {}
```

* Para **constantes** (usualmente `static final`) se usa **UPPER_SNAKE_CASE**.

```java
static final int EDAD_MINIMA = 18;
```

* Para **paquetes** se recomienda usar *minúsculas*.

```java
package cl.ufro.poo;
```

---

## Reglas

##### a) Inicialización

Si se intenta usar una variable *local* sin un valor asignado, el compilador muestra un error.

```java
String nombre;
System.out.println(nombre); // Error: variable nombre might not have been initialized
````

```java id="h7u1b3"
String nombre = "Nataly";
System.out.println(nombre); // Correcto
```

##### b) Alcance

El *alcance* indica en qué parte del código una variable existe y puede usarse.

* Una variable **local** solo existe dentro del bloque `{ ... }` donde se declara.
* Una variable **global** existe fuera de un bloque específico y puede ser utilizada por varias partes del programa (según las reglas del lenguaje y dónde haya sido declarada).

```java
int numero = 2;

if (numero > 10) {
    String nombre = "Nataly";
}

System.out.println(nombre); // Error: cannot find symbol (variable nombre)
```

Una solución común es declarar la variable antes del bloque, para que exista fuera del `if`:

```java 
int numero    = 2;
String nombre = "";

if (numero > 10) {
    nombre = "Nataly";
}

System.out.println(nombre); // Correcto
```

##### c) Nombres Válidos de Variables

* No se pueden usar *palabras reservadas* como nombres.

```java
int class       = 5;    // Error
boolean public  = true; // Error
```

* No pueden comenzar con un número.

```java
int 1edad = 25; // Error
int edad1 = 25; // Correcto
```

* Pueden comenzar con letra, `_` o `$` (aunque no se recomienda abusar de `_` y `$`).

```java
int _contador = 10;  // válido, pero poco recomendado
int $precio   = 100; // válido, pero poco común
```

* Se evitan caracteres especiales en identificadores.

```java
String telefono = "123456789"; // Recomendado
```

> **Nota:** Aunque algunos lenguajes permiten usar caracteres Unicode (como tildes o «ñ») en identificadores, se evita porque puede generar problemas en la práctica: diferencias de configuración de teclado, fuentes o codificación; dificultades al copiar/pegar entre sistemas; y errores o comportamientos inconsistentes en herramientas como editores, terminales, compiladores, control de versiones o sistemas de CI.
