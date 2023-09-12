# Fullstackopen Course


# Part 0

## 0.4: nueva nota
En el capítulo Cargando una página que contiene JavaScript - revisada la cadena de eventos causada al abrir la página https://studies.cs.helsinki.fi/exampleapp/notes se representa como un diagrama de secuencia

El diagrama se hizo usando el servicio websequencediagrams de la siguiente manera:
-
```
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end notecopy
Crear un diagrama similar que describa la situación en la que el usuario crea una nueva nota en la página https://studies.cs.helsinki.fi/exampleapp/notes escribiendo algo en el campo de texto y haciendo clic en el botón submit.
```

Si es necesario, muestre las operaciones en el navegador o en el servidor como comentarios en el diagrama.

El diagrama no tiene por qué ser un diagrama de secuencia. Cualquier forma sensata de presentar los eventos está bien.

Toda la información necesaria para hacer esto, y los dos ejercicios siguientes, se pueden encontrar en el texto de esta parte. La idea de estos ejercicios es leer el texto una vez más y pensar en lo que está sucediendo allí. No es necesario leer el código de la aplicación pero, por supuesto, es posible.

## 0.5: Aplicación de una sola página
Cree un diagrama que describa la situación en la que el usuario accede a la versión de aplicación de una sola página de la aplicación de notas en https://studies.cs.helsinki.fi/exampleapp/spa.

## 0.6: Nueva nota
Cree un diagrama que represente la situación en la que el usuario crea una nueva nota utilizando la versión de una sola página de la aplicación.


# Part 1

## 1.1: información del curso, paso 1
La aplicación en la que comenzaremos a trabajar en este ejercicio se desarrollará más a fondo en algunos de los siguientes ejercicios. En este y otros conjuntos de ejercicios futuros de este curso, es suficiente enviar solo el estado final de la aplicación. Si lo desea, también puede crear un commit para cada ejercicio de la serie, pero esto es completamente opcional.

Use create-react-app para inicializar una nueva aplicación. Modifique index.js para que coincida con lo siguiente

```
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

copy y elimine archivos adicionales (App.js, App.css, App.test.js, logo.svg, setupTests.js, reportWebVitals.js).

Desafortunadamente, toda la aplicación está en el mismo componente. Refactorice el código para que conste de tres componentes nuevos: Header, Content y Total. Todos los datos aún residen en el componente App, que pasa los datos necesarios a cada componente mediante props. Header se encarga de representar el nombre del curso, Content representa las partes y su número de ejercicios y Total representa el número total de ejercicios.

El cuerpo del componente App será aproximadamente como sigue:

```
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
```

ADVERTENCIA create-react-app convierte automáticamente el proyecto en un repositorio de git a menos que la aplicación se cree dentro de un repositorio ya existente. Lo más probable es que no quieras que el proyecto se convierta en un repositorio, así que ejecuta el comando rm -rf .git en la raíz del proyecto.

## 1.2: información del curso, paso 2
Refactorice el componente Content para que no represente ningún nombre de partes o su número de ejercicios por sí mismo. En su lugar, solo representa tres componentes Part de los cuales cada uno representa el nombre y el número de ejercicios de una parte.

```
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```
