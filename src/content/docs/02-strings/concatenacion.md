---
title: Concatenación
sidebar:
  order: 2000000
parent: 02. Strings
nav_order: 2
---

La concatenación de cadenas de texto (`String`) es una operación común que permite unir diferentes fragmentos de texto en una sola cadena. Esta operación aparece con frecuencia al construir mensajes, mostrar resultados o generar texto dinámico.

Existen distintas formas de concatenar en Java. Algunas son más simples de leer, y otras son más convenientes cuando se repite la operación muchas veces.

---

## Concatenación con el Operador `+`

La forma más básica de unir cadenas es usando el operador `+`.

```java
String texto1     = "Hola";
String texto2     = "Mundo";
String resultado  = texto1 + " " + texto2;
System.out.println(resultado);
````

**Salida:**

```
Hola Mundo
```

---

## Concatenación de `String` con Números

Cuando se mezcla texto con números, Java aplica el operador `+` de izquierda a derecha. Si en algún punto aparece un `String`, lo que sigue se interpreta como concatenación.

### Ejemplo: concatenación por orden de evaluación

```java
String mensaje  = "Resultado: ";
int numA        = 10;
int numB        = 5;
System.out.println(mensaje + numA + numB);
```

**Salida:**

```
Resultado: 105
```

En este caso, como `mensaje` es un `String`, la expresión se evalúa como concatenación.

### Uso de paréntesis para cambiar la precedencia

Si se quiere que primero se realice la suma, se usan paréntesis:

```java
System.out.println(mensaje + (numA + numB));
```

**Salida correcta:**

```
Resultado: 15
```

---

## Método `concat()`

Otra forma de unir cadenas es usando el método `concat()`, que pertenece a `String`.

```java
String texto1     = "Hola";
String texto2     = "Mundo";
String resultado  = texto1.concat(" ").concat(texto2);
System.out.println(resultado);
```

**Salida:**

```
Hola Mundo
```

> Nota: `concat()` no modifica el `String` original. En su lugar, construye y retorna un *nuevo* `String` con el resultado de la unión. Por eso, si no se guarda el resultado, la concatenación se pierde y la variable sigue apuntando al texto original. Para conservar el cambio, se asigna el resultado a una variable (ya sea una nueva o la misma).

---

## Concatenación con `StringBuilder`

Cuando se concatena texto muchas veces (por ejemplo, dentro de un bucle), usar `+` repetidamente puede ser menos eficiente. En esos casos se utiliza `StringBuilder`, que permite construir texto de forma incremental.

> Nota: Esto ocurre porque cada vez que se usa `+` con `String`, el resultado es un *nuevo* `String`. En una concatenación repetida, se van creando muchas cadenas intermedias que luego dejan de usarse, lo que genera trabajo extra para el programa. `StringBuilder` evita esto, ya que acumula el texto en una estructura que se va ampliando y solo al final se obtiene el `String` resultante.
      
---

## Código 

El siguiente ejemplo mide el tiempo aproximado de concatenar muchas veces usando `+` versus `StringBuilder`. Los valores pueden variar según el computador, pero suele observarse una diferencia clara cuando el número de repeticiones es alto.

```java id="6j90ex"
public class PruebaConcatenacion {
    public static void main(String[] args) {
        int n = 200_000;

        long inicioMas  = System.currentTimeMillis();
        String s        = "";
        for (int i = 0; i < n; i++) {
            s = s + "a";
        }
        long finMas = System.currentTimeMillis();
        System.out.println("Tiempo con '+': " + (finMas - inicioMas) + " ms");

        long inicioSb     = System.currentTimeMillis();
        StringBuilder sb  = new StringBuilder();
        for (int i = 0; i < n; i++) {
            sb.append("a");
        }
        String resultado  = sb.toString();
        long finSb        = System.currentTimeMillis();
        System.out.println("Tiempo con StringBuilder: " + (finSb - inicioSb) + " ms");
    }
}
````
