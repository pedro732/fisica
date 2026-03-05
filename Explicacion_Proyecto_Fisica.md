# Documentación del Proyecto de Física

Este documento ofrece una explicación general de las tecnologías empleadas, la arquitectura del proyecto, la función de cada archivo principal y la lógica interna de la aplicación web de Física interactiva.

---

## 1. Tecnologías y Lenguajes Empleados

- **Lenguaje Principal:** JavaScript (JS), apoyado fuertemente por HTML5 y CSS3 dentro de componentes integrados.
- **Framework Principal:** **Vue 3** (el popular framework progresivo de JavaScript para construir interfaces de usuario interactivas).
- **Herramienta de Construcción (Bundler):** **Vite**, que permite un entorno de desarrollo extremadamente rápido y la compilación óptima para producción.
- **Enrutamiento:** **Vue Router**, que permite la navegación fluida entre páginas (por ejemplo, de la página principal a la página de teoría o ejercicios) sin recargar el navegador (Single Page Application - SPA).
- **Gestión del Estado:** **Pinia**, que sirve para almacenar datos globales de manera accesible a lo largo de toda la aplicación.
- **Estilos y UI:** **Bootstrap 5**, utilizando clases de utilidad estándar de Bootstrap para el diseño responsivo, botones y tarjetas, además de \`bootstrap-vue-3\`.
- **Renderizado Matemático:** **KaTeX** y \`mathjs\`, indispensables para transformar el código LaTeX incrustado matemáticamente puro en hermosas ecuaciones directamente en la web.

---

## 2. Estructura de Archivos y sus Funciones

El código fuente del proyecto radica principalmente en la carpeta \`src/\`. A continuación, se detalla la función de los archivos y directorios clave:

### Archivos de Configuración y Entrada

- \`package.json\`: Es el manifiesto del proyecto. Aquí se listan las dependencias (como Vue, Bootstrap, KaTeX, Vite), metadatos, y los scripts para correr o empaquetar la aplicación (\`npm run dev\`).
- \`src/main.js\`: Es el punto de entrada de la aplicación. Su rol es inicializar Vue 3, conectar Vue Router, conectar Pinia para el estado libre e incorporar el framework UI Bootstrap, montando todo en la vista principal.
- \`src/App.vue\`: Es el Componente Raíz. Normalmente contiene el esquema fundamental de la página (como una barra de navegación si la hay) y el elemento \`<RouterView>\` donde se inyectan las demás páginas.

### Directorio: \`src/views/\` (Vistas de Página)

Representan las páginas completas a las que navega el usuario.

- **\`HomeView.vue\`**: La página de inicio o "Landing Page". Generalmente donde el usuario elige el tema de física que desea estudiar.
- **\`TopicDetail.vue\`**: Es la vista dedicada a la teoría. Recibe el tema elegido y muestra toda la lección de teoría con imágenes y formulación. Precisamente aquí incluimos los botones "Ir al final" e "Ir al inicio".
- **\`SolvedExercisesView.vue\`**: La vista dedicada a la práctica. Su rol es renderizar uno detrás de otro los ejercicios resueltos, estructurando la lectura paso a paso.

### Directorio: \`src/components/\` (Componentes Reutilizables)

Partes pequeñas de la UI que se programan una vez y se usan en múltiples vistas.

- **\`CardComponent.vue\`**: Molde usado para mostrar "Tarjetas" visuales agradables (usadas habitualmente en el menú \`HomeView\` para presentar los distintos temas).
- **\`MathExpression.vue\`**: Función crítica de la aplicación. Su rol es tomar cualquier texto que tenga fórmulas encapsuladas en los signos de dólar y usar KaTeX para renderizar la notación matemática compleja directamente en el HTML del usuario sin complicaciones.
- **\`ImageLightbox.vue\` y \`ModalIndex.vue\`**: Componentes de usabilidad para hacer zoom, visualización tipo galería y ventanas emergentes cuando se clickea una imagen.

### Directorio: \`src/assets/\` (Datos Estáticos e Imágenes)

Almacena el "alma" teórica y práctica del software.

- **\`exercisesData.js\`**: Un archivo de base de datos local escrito en JSON/JS. Contiene enormes listas en la forma de \`{ enunciado: "...", solucion: "..." }\`. Su importancia recae en albergar los innumerables ejercicios y problemas de física de distintos temas que renderiza \`SolvedExercisesView\`.
- **\`topicDetails.js\`**: Actúa en conjunto con el anterior, pero en vez de ejercicios concentra la **Teoría**. Alberga extensas explicaciones físicas que sirven a \`TopicDetail.vue\`.
- **Imágenes (\`.png\`)**: Usadas para brindar contexto gráfico a las explicaciones y diagramas de cuerpo libre.

---

## 3. Lógica General del Programa

La experiencia de la aplicación sigue una arquitectura tipo **Single Page Application (SPA)**, que hace que funcione más como una app de escritorio que como un sitio web antiguo:

1. **Inicialización**: Cuando el usuario entra por primera vez, \`main.js\` renderiza \`App.vue\` vacío en el navegador e inicia \`Vue Router\`.
2. **Menú (\`HomeView.vue\`)**: El router inyecta el menú. Éste lee una lista de posibles temas (Mecánica, Newton, Vectores, etc) y genera un \`CardComponent.vue\` para cada uno de forma dinámica mediante ciclos renderizados en Vue (\`v-for\`).
3. **Selección de Teoría (\`TopicDetail.vue\`)**: Si el usuario clica en estudiar la teoría sobre "Fuerzas y Principios de Newton", Vue Router cambia la URL pero no recarga. El componente \`TopicDetail.vue\` busca dentro del diccionario alojado en \`src/assets/topicDetails.js\` utilizando la clave "Fuerzas y principios de Newton". Extrae todo el bloque de texto y gracias a \`v-html\` inyecta el contenido con formato y fórmulas (vía \`MathExpression.vue\`) directamente al centro de la pantalla.
4. **Selección de Práctica (\`SolvedExercisesView.vue\`)**: Si busca ejercicios del mismo tema, la llamada se dirige a \`src/assets/exercisesData.js\`. La vista hace una iteración \`v-for\` por cada objeto \`{enunciado, solucion}\` en la lista, mostrándolos organizadamente frente al lector e invocando a la tecnología KaTeX para transformar todo el lenguaje LaTeX que contienen a matemáticas legibles.

Todo este flujo se basa fuertemente en separar el **"Contenedor"** (los archivos \`.vue\`) del **"Contenido"** (los archivos \`.js\` de datos), lo que te ha permitido a ti (el autor del proyecto) modificar tan solo los archivos de texto JS para poblar a toda la página de nuevo contenido sin tocar el código estructurante (HTML) de la aplicación.

---

## 4. Estructura de Carpetas Generada por Vite y Pinia

Cuando se crea un proyecto moderno con **Vue 3**, **Vite** y **Pinia**, el andamiaje básico de directorios suele verse de la siguiente manera. Tu aplicación está construida estrictamente bajo este estándar oficial:

\`\`\`text
proyecto-fisica/
├── public/ # Archivos estáticos crudos que no pasan por el proceso de compilación de Vite (ej: favicon).
├── src/ # Todo tu código fuente está aquí.
│ ├── assets/ # Recursos importables como JS de datos (exercisesData.js), CSS globales e imágenes.
│ ├── components/ # Piezas pequeñas, reutilizables y sin estado ("dumb components") como MathExpression o CardComponent.
│ ├── router/ # Configuraciones de enrutamiento (Vue Router). Describe qué URL carga qué Vista.
│ ├── stores/ # El corazón de Pinia. Aquí se almacena el estado global de tu aplicación.
│ ├── views/ # Las pantallas completas o páginas que cambian al navegar.
│ ├── App.vue # El contenedor maestro de Vue.
│ └── main.js # Punto de entrada de la app donde unimos Vue, Vite, el Router y Pinia.
├── package.json # Lista de dependencias NPM y metadatos del proyecto.
├── vite.config.js # Archivo de configuración propio de Vite (plugins de Vue, configuración de red, alias de carpetas).
└── index.html # El esqueleto estático original donde Vite "inyecta" tu aplicación final.
\`\`\`

---

## 5. Profundizando en Vite y Pinia

### ¿Qué es y para qué sirve Vite?

Históricamente, los proyectos web usaban herramientas pesadas como _Webpack_ para empaquetar el código antes de que pudieses verlo funcionar en el navegador. Conforme el proyecto crecía, esto podía tardar varios segundos (o minutos).

**Vite** es una herramienta de construcción ("bundler") de **nueva generación** extremadamente rápida.

1. **Desarrollo instantáneo:** Cuando ejecutas \`npm run dev\`, el servidor arranca en milisegundos. En lugar de procesar todo tu código, Vite confía en que los navegadores modernos ya entienden los Módulos Nativos de JavaScript (ES Modules).
2. **Hot Module Replacement (HMR) ultrarrápido:** Cuando cambias una línea de \`exercisesData.js\` y guardas, Vite solo actualiza esa pequeñísima parte en tu navegador casi a la velocidad de la luz, sin refrescar toda la página web ni perder tu posición en la lectura.
3. **Optimización de Producción:** Al hacer \`npm run build\` para subir la página a internet, Vite empaqueta todo tu código haciéndolo minúsculo para que cargue rapidísimo a los usuarios reales.

### ¿Qué es y para qué sirve Pinia?

En aplicaciones web interactivas, los datos (o el "State") mutan constantemente. Imagina que el usuario iniciase sesión, guardara su progreso, o habilitara un modo oscuro.

**Pinia** es el **gestor de estado ("State Management") oficial de Vue**.
Esencialmente, Pinia te permite tener un lugar centralizado (los \`stores/\`) donde puedes almacenar variables "A nivel global", en lugar de estar pasándote esos datos manualmente, ventana a ventana y componente a componente. Cualquier Vista (como un menú o página completa) puede acceder al Estado (en \`stores\`), leerlo y modificarlo simultáneamente.

A medida que crece tu app de Física Interactiva y añades características, como recordar en qué tema se quedó estudiando el usuario, calificar problemas o tener puntuaciones ("scores"), es aquí en Pinia donde esos datos deben existir.

---

## 6. Inicialización de un nuevo Proyecto (Comando Oficial)

Para poder iniciar un proyecto desde cero exactamente con esta infraestructura arquitectónica (Vue 3 + Vite + Pinia + Vue Router), asumiendo que tienes instalado Node.js, solo necesitas abrir tu terminal en una ruta vacía y correr este **comando oficial interactivo:**

\`\`\`bash
npm create vue@latest
\`\`\`

Después de dar "Entrar", Node.js descargará el instalador `create-vue` y te hará preguntas en cascada de sí o no para construir tu proyecto:

1. **Project name:** Eliges el nombre (p.ej: `mi-proyecto`).
2. **Add TypeScript?** (Recomendado Sí para proyectos de largo plazo, No si prefiéres un JavaScript más flexible).
3. **Add JSX Support?** (Usualmente No en favor de `.vue` SFC).
4. **Add Vue Router?** (Dices que **Sí** para apps con múltiples pestañas como la tuya).
5. **Add Pinia?** (Dices que **Sí** para añadir la estructura de `stores/`).
6. **Add ESLint / Prettier?** (Sí, ayuda a auditar y formatear errores).

Se generará de inmediato una sub-carpeta estructurada igual que \`proyecto-fisica\`. Entras y ejecutas \`npm install\` para descargar las librerías al momento, y listos para trabajar.
