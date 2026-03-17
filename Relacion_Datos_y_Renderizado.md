# Arquitectura de Datos y Renderizado: Proyecto de Física

Este documento explica cómo se estructuran los datos del proyecto y cómo se transforman en la interfaz interactiva que ve el usuario.

---

## 1. El Tridente de Datos (Archivos Assets)

La aplicación utiliza tres archivos principales en `src/assets/` para gestionar todo el contenido sin necesidad de una base de datos externa:

### A. `fisica.json` (El Índice Maestro)
Es un archivo JSON que actúa como el catálogo de temas de la aplicación.
- **Función:** Define qué temas aparecen en la pantalla de inicio (`HomeView.vue`).
- **Estructura:** Contiene objetos con `title`, `image` y `description`.
- **Relación:** El título de cada objeto es la "llave" química que conecta con los otros archivos.

### B. `topicDetails.js` (El Alma de la Teoría)
Es un objeto JavaScript que contiene las lecciones teóricas.
- **Función:** Almacena textos largos con formato HTML y fórmulas LaTeX.
- **Estructura:** Un objeto donde cada **Clave** coincide exactamente con un `title` de `fisica.json`.
- **Relación:** Cuando eliges un tema, la aplicación busca esa clave aquí para mostrar la teoría.

### C. `exercisesData.js` (El Banco de Práctica)
Es un objeto JavaScript que organiza los ejercicios resueltos.
- **Función:** Contiene listas de problemas, enunciados y soluciones paso a paso.
- **Estructura:** Similar a `topicDetails.js`, usa los títulos de los temas como claves para agrupar arrays de ejercicios.

---

## 2. El Flujo de Renderizado (De Código a Pantalla)

La magia ocurre en las **Views** (vistas) que procesan estos datos dinámicamente:

### 1. Selección del Tema (`HomeView.vue`)
El usuario ve las tarjetas generadas desde `fisica.json`. Al hacer clic, se envía el `title` como un parámetro de ruta (ej: `/topic/Vectores/details`).

### 2. Carga de Teoría (`TopicDetail.vue`)
Este componente recibe el título.
- **Acción:** Busca en `topicDetails.js` el contenido asociado a ese título.
- **Proceso:** Extrae el HTML y lo inyecta en la página.

### 3. Carga de Ejercicios (`SolvedExercisesView.vue`)
Si el usuario pulsa en "Ejercicios":
- **Acción:** El componente busca en `exercisesData.js` el array de objetos correspondiente al título.
- **Proceso:** Genera una lista dinámica de tarjetas de ejercicios.

### 4. Transformación Matemática (`MathExpression.vue`)
Es el componente más importante para la legibilidad.
- **Rol:** Recibe cualquier texto que contenga símbolos como `$E = mc^2$`.
- **Tecnología:** Usa **KaTeX** para convertir ese código LaTeX "crudo" en fórmulas matemáticas bellas y perfectamente alineadas en el navegador.

---

## 3. Resumen de Conexiones

| Archivo de Origen | Consumido por | Propósito |
| :--- | :--- | :--- |
| `fisica.json` | `HomeView.vue` | Mostrar el menú principal de temas. |
| `topicDetails.js` | `TopicDetail.vue` | Proveer el texto de la lección teórica. |
| `exercisesData.js` | `SolvedExercisesView.vue` | Proveer la lista de problemas resueltos. |
| `MathExpression.vue` | Todas las Vistas | Convertir LaTeX a fórmulas visuales. |

---

*Documento generado automáticamente para el Proyecto de Física - 2026*
