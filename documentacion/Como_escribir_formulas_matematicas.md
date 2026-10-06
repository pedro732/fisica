# Tutorial: cómo escribir fórmulas matemáticas

Este tutorial explica cómo agregar fórmulas a los contenidos de Física. El proyecto usa **KaTeX** para convertir expresiones escritas con sintaxis **LaTeX** en fórmulas renderizadas en el navegador.

## 1. Dónde se escriben las fórmulas

El contenido educativo está separado de los componentes de Vue:

- `src/assets/topicDetails.js`: teoría y explicaciones de los temas.
- `src/assets/exercisesData.js`: enunciados y soluciones de ejercicios.

Las fórmulas se escriben dentro de las cadenas `content`, `enunciado` o `solucion`. No es necesario modificar `TopicDetail.vue` ni `SolvedExercisesView.vue` para agregar una fórmula nueva.

## 2. Delimitadores: fórmula en línea o independiente

El proyecto reconoce dos formas de delimitar una expresión:

### Fórmula en línea: `$...$`

Se usa cuando la fórmula forma parte de un párrafo:

```js
enunciado: `
La segunda ley de Newton se expresa como $F = ma$.
`,
```

El resultado aparece integrado en la misma línea: \(F = ma\).

### Fórmula independiente: `$$...$$`

Se usa para ecuaciones que deben destacarse o centrarse:

```js
solucion: `
<p>Aplicamos la segunda ley de Newton:</p>
$$ F = ma $$
`,
```

En un ejercicio, el bloque se muestra como una ecuación separada:

$$F = ma$$

Como regla práctica, usa `$...$` para símbolos breves dentro de una oración y `$$...$$` para pasos de cálculo o ecuaciones importantes.

## 3. La regla más importante: escapar las barras en JavaScript

Los contenidos se guardan en archivos JavaScript. En una cadena de JavaScript, una barra inversa (`\`) inicia una secuencia especial. Por eso, los comandos LaTeX deben escribirse con **dos barras inversas**:

```js
solucion: `
$$ W = Fd\\cos(\\theta) $$
`,
```

KaTeX recibe finalmente `W = Fd\cos(\theta)`.

### Ejemplos de escapes frecuentes

| Lo que debe recibir KaTeX | Cómo escribirlo en el archivo `.js` |
|---|---|
| `\frac{a}{b}` | `\\frac{a}{b}` |
| `\sqrt{x}` | `\\sqrt{x}` |
| `\theta` | `\\theta` |
| `\sin(\alpha)` | `\\sin(\\alpha)` |
| `\text{metros}` | `\\text{metros}` |
| `\cdot` | `\\cdot` |

Un error típico es escribir `\frac` directamente dentro de una cadena. Puede producir una fórmula incorrecta o un carácter inesperado porque JavaScript intenta interpretar el escape.

## 4. Sintaxis LaTeX útil para Física

### Fracciones, potencias e índices

```js
$$ v = \\frac{\\Delta x}{\\Delta t} $$
$$ E_c = \\frac{1}{2}mv^2 $$
$$ v_x = v\\cos(\\theta) $$
```

Se visualizan como:

$$v = \frac{\Delta x}{\Delta t}$$

$$E_c = \frac{1}{2}mv^2$$

$$v_x = v\cos(\theta)$$

### Raíces, productos y unidades

```js
$$ a = \\sqrt{a_x^2 + a_y^2} $$
$$ F = 12\\,\\text{N} $$
$$ W = F\\cdot d $$
```

- `\\sqrt{...}` crea una raíz.
- `\\,` agrega un pequeño espacio antes de una unidad.
- `\\text{...}` escribe texto normal dentro de la fórmula.
- `\\cdot` muestra un punto de multiplicación.

### Letras griegas y ángulos

```js
$\\alpha$, $\\beta$, $\\theta$, $\\Delta x$
```

Al estar dentro de JavaScript, las barras deben duplicarse aunque la fórmula sea en línea.

### Vectores y negritas

```js
$$ \\vec{F} = m\\vec{a} $$
$$ \\mathbf{v} = (v_x, v_y) $$
```

### Sistemas de ecuaciones

Para varias líneas, usa `aligned` dentro de un bloque `$$...$$`:

```js
solucion: `
$$
\\begin{aligned}
\\sum F_x &= ma_x \\\\
\\sum F_y &= ma_y
\\end{aligned}
$$
`,
```

Observa que el salto de línea de LaTeX `\\` también debe escribirse como `\\\\` en una cadena JavaScript.

## 5. Combinar HTML y fórmulas

El contenido admite HTML sencillo. Esto permite explicar cada paso y colocar la fórmula debajo:

```js
solucion: `
<p>El trabajo de una fuerza constante es:</p>
$$ W = Fd\\cos(\\theta) $$
<p>Si la fuerza y el desplazamiento tienen la misma dirección:</p>
$$ W = Fd $$
`,
```

También se pueden usar listas, tablas e imágenes. Mantén el HTML bien formado y coloca cada ecuación independiente entre sus propios delimitadores.

## 6. Ejemplo completo de un ejercicio

```js
{
  enunciado: `
    <p>
      Un objeto de masa $m = 2\\,\\text{kg}$ se mueve con aceleración
      $a = 3\\,\\text{m/s}^2$. ¿Cuál es la fuerza neta?
    </p>
  `,
  solucion: `
    <p>Aplicamos la segunda ley de Newton:</p>
    $$ F = ma $$
    <p>Sustituyendo los valores:</p>
    $$ F = (2\\,\\text{kg})(3\\,\\text{m/s}^2) = 6\\,\\text{N} $$
  `,
},
```

## 7. Cómo comprobar una fórmula

1. Ejecuta `npm run dev`.
2. Abre el tema o ejercicio que contiene la fórmula.
3. Comprueba que los subíndices, exponentes, fracciones y símbolos se vean correctamente.
4. Si la fórmula aparece como texto, revisa primero los delimitadores `$` y `$$`.
5. Si faltan símbolos, revisa que cada comando LaTeX tenga sus barras duplicadas en el archivo JavaScript.
6. Para una ecuación larga, verifica que no falten llaves `{}` ni paréntesis.

La vista de ejercicios usa `throwOnError: false`: cuando KaTeX no puede interpretar una expresión, conserva el texto problemático y registra el error en la consola del navegador. Esto permite localizar la fórmula sin ocultar el resto del contenido.

## 8. Errores frecuentes

### No duplicar la barra inversa

Incorrecto:

```js
$$ \frac{1}{2}mv^2 $$
```

Correcto:

```js
$$ \\frac{1}{2}mv^2 $$
```

### Confundir fórmula en línea con bloque

Incorrecto si se quiere una ecuación centrada:

```js
La energía es $E = mc^2$ y ocupa su propio paso.
```

Correcto:

```js
La energía es:
$$ E = mc^2 $$
```

### Olvidar cerrar un delimitador

Cada `$` debe tener su pareja y cada `$$` debe cerrarse con otro `$$`. No mezcles un inicio `$` con un cierre `$$`.

### Poner HTML dentro de una fórmula sin `\text`

Incorrecto:

```js
$$ F = 10 <strong>N</strong> $$
```

Correcto:

```js
$$ F = 10\\,\\text{N} $$
```

## 9. Resumen rápido

- Escribe el contenido en `topicDetails.js` o `exercisesData.js`.
- Usa `$...$` para fórmulas en línea.
- Usa `$$...$$` para fórmulas independientes.
- Duplica cada barra inversa de LaTeX dentro de JavaScript: `\\frac`, `\\sqrt`, `\\theta`.
- Encierra texto y unidades en `\\text{...}`.
- Usa `aligned` para varias líneas y recuerda escapar también sus saltos `\\\\`.
- Verifica el resultado con `npm run dev`.
