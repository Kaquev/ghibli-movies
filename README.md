## DataLovers Studio Ghibli

### Descripción

Página web enfocada al estudio Ghibli y a su público. Los principales usuarios de la página son fans del Studio Ghibli que buscan conocer datos concretos de  las películas, sus personajes, locaciones etc  y algún dato curioso sobre el estudio.

Esta página ofrece las siguientes funcionalidades:

- Visualizar
- Ordenar
- Filtrar
- Calcular

Estas funciones seran alternadas dentro de las secciones de la pagina divididas en las siguientes Pestañas (Menú):

- Películas
- Personajes
- Locaciones
- vehículos
- curiosidades

> Cada pestaña tendrá su propia barra de navegación para buscar un dato en concreto y se podrá ordenar la data alfabéticamente.

## Detalle de funciones

#### Función Filtrar

- Películas ➡️ productor y  director
- Productor ➡️ films
- Director ➡️ films
- Personajes ➡️ género, especies y películas
- Locaciones ➡️ clima y tipo de terreno


#### Función Ordenar

Se podrá ordenar de forma alfabéticamente (ascendente y descendente). Disponible para:

- Películas
- Personajes
- Locaciones
- Vehículos


https://github.com/kimmvb/ghibli-data-lovers/assets/137528066/5f95af63-6278-4ed2-9927-57f093610ed3


# Proceso del proyecto

#### Prototipos de interfaz:

Se llevaron a cabo prototipos de la visualización de la página; uno de baja y otro de alta fidelidad.

Prototipo de baja fidelidad (se hizo a lápiz y papel)

![baja fidelidad](https://github.com/kimmvb/ghibli-data-lovers/assets/137528066/bc6bcd49-cc22-4313-8dd9-b93872fb4650)

Prototipo de alta fidelidad (se hizo en Figma)

![alra fidelidad](https://github.com/kimmvb/ghibli-data-lovers/assets/137528066/7164b80d-9677-470c-9c21-a70b72787e99)


# Historia de usuario
El proyecto fue dividido en cuatro HU.
#### Historia 1.

**Objetivo:** Visualización de la data, basada en los diseños de Interfaz.

La visualización de  la sección principal será en formato de grilla.
La información a mostrar para las peliculas será la siguiente:

- descripción
- fecha de lanzamiento
- rating
- director y productor

Estos datos serán mostrados con un tooltip que se desplegará al momento de pasar el cursor sobre el póster de la película.

#### Historia 2.

**Objetivo:** Ordenar data

La data de (películas, personajes, vehículos y locaciones) se podrá ordenar en orden alfabético, tanto ascendentemente como descendentemente.

La data de películas también se ordenarán por fecha de lanzamiento (más reciente a más antigua y más antigua a más reciente).


#### Historia 3.

**Objetivo:** Filtrar data

En la sección películas podrá filtrar por:
- Productor y director.

En la sección personajes se podrá filtrar por:
- Género, especie y título de película.

En la sección locaciones se podrá filtrar por:
- Clima y tipo de terreno.


> Se agregó una función extra para permitir que los filtros trabajarán en conjunto.

#### Historia 4.

**Objetivo:** Calcular y graficar data.


Estos datos se mostrarán en la sección "Trivia" y se basan en el porcentaje de éxito de las producciones, tanto como para directores y productores.

- Porcentaje de éxito total por la cantiad de peliculas
- Cantidad de películas por director
- Cantidad de películas por productor


> Estos datos serán visualizados con gráficos de barras laterales, mostrando por barra el detalle.


# Tests unitarios

Para confirmar la funcionalidad en diferentes situaciones del proyecto, se crearon tests para validar la correcta ejecución de las funciones.

- Ordenar
- Calcular
- Filtrar

A continuación un video de los tests:



https://github.com/kimmvb/ghibli-data-lovers/assets/137528066/cafe6e12-47fc-46cc-8c19-745691befbf4



#### Al pasar los tests se detectaron dos problemáticas:

- Las funciones de orden no se ejecutaron correctamente, los datos  estaban en minúsculas y mayúsculas.

- Las funciones de filtro no tenían una condición si  no hubiesen datos disponibles en el momento de uso.

> Ambas problemáticas fueron identificadas y resueltas gracias a los tests.

