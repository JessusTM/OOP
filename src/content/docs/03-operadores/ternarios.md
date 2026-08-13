---
title: Ternarios
sidebar:
  order: 8000000
parent: 03. Operadores
nav_order: 8
---

## Definición

El operador ternario permite elegir entre dos valores según una condición booleana. Es una forma compacta de expresar un caso simple de `if-else`, especialmente cuando se quiere asignar un valor a una variable.

La estructura general es:

```java
variable = (condición) ? valorSiVerdadero : valorSiFalso;
````

* **Condición**: expresión booleana que se evalúa como `true` o `false`.
* **Valor si verdadero**: se utiliza cuando la condición es `true`.
* **Valor si falso**: se utiliza cuando la condición es `false`.

---

## Comparación con `if-else`

Un operador ternario puede reemplazar un `if-else` simple que asigna un valor.

```java
String estado;
double promedio = 6.2;

if (promedio >= 4.0) {
    estado = "Aprobado";
} else {
    estado = "Rechazado";
}

System.out.println(estado);
```

La misma lógica con el operador ternario:

```java id="y7b3m1"
String estado = (promedio >= 4.0) ? "Aprobado" : "Rechazado";
System.out.println(estado);
```

---

## Tipos de datos soportados

El operador ternario puede producir distintos tipos de resultado, pero ambos valores deben ser compatibles entre sí para que la expresión tenga un tipo claro.

```java id="c8m1q9"
int numero      = (10 > 5) ? 1 : 0;
boolean esMayor = (18 >= 18) ? true : false;
String mensaje  = (true) ? "Activo" : "Inactivo";
```
