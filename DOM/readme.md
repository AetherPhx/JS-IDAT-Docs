# DOM (Document Object Model)

El modelo de objetos del documento HTML. Desde ahí se puede acceder a todo lo que pertenece al HTML. Esto incluye el texto, elementos, atributos, etc.

## Obtener elementos

### Mediante ID

Usando el método `getElementById()`, podemos obtener el elemento que posea el ID que le pasemos.

```js
const elemento = document.getElementById("id");
```

### Mediante Selectores

Usando el método `querySelector()`, podemos obtener el **primer** elemento que coincide con el selector que le pasemos.

```js
const elemento = document.querySelector("tag"); // Se usa el selector por etiqueta
const elemento = document.querySelector(".class"); // Se usa el selector por clase
```

Usando el metodo `querySelectorAll()`, podemos obtener **todos** los elementos que coincidan con el selector que le pasemos.

```js
const elementos = document.querySelectorAll("tag"); // Se usa el selector por etiqueta
const elementos = document.querySelectorAll(".class"); // Se usa el selector por clase
```

## Propiedades y atributos de los elementos

Los elementos HTML tienen muchas propiedades y atributos que se pueden manipular mediante JS.

### Modificar el contenido de un elemento

Usando `textContent`, podemos modificar el texto de un elemento.

```js
const elemento = document.querySelector("p");
elemento.textContent = "texto modificado"; // Modifica el texto del elemento
```

Otra alternativa es usar `innerHTML`. Con el cual podemos modificar no solo el texto sino el HTML interno del elemento.

```js
const elemento = document.querySelector("p");
elemento.innerHTML = "<span>texto modificado</span>"; // Modifica el texto del elemento
```

### Modificar el estilo de un elemento

Usando `style`, podemos modificar el estilo de un elemento.

```js
const elemento = document.querySelector("p");
elemento.style.color = "red"; // Modifica el color del texto del elemento
```

Una alternativa es usar `classList` para modificar las clases de un elemento y de esta manera brindarle o quitarle los estilos de estas clases.

```js
const elemento = document.querySelector("p");
elemento.classList.add("clase"); // Agrega la clase
elemento.classList.remove("clase"); // Quita la clase
```

## Padres y descendientes

Los elementos HTML pueden tener descendientes, convirtiendose en el padre de estos elementos.

Se puede utilizar el método `parentElement` para obtener o referirse al elemento padre de un elemento.

```js
const elemento = document.querySelector("p");
const elementoPadre = elemento.parentElement;
```
