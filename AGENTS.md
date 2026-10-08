# Instrucciones del proyecto Física

Aplicación Vue 3 + Vite para el estudio de Física General (libro de Schaum, 10.ª edición).

## Contexto de transcripción del libro

Hay un trabajo en curso de transcripción de los ejercicios del libro de Schaum hacia
`src/assets/exercisesData.js`.

**Antes de continuar ese trabajo, lee:**
`documentacion/Notas_Transcripcion_Schaum.md`

Ese documento contiene todo lo necesario para retomar sin contexto previo:

- rutas exactas del proyecto, del PDF fuente y de las imágenes;
- la convención de numeración (página del libro = página del PDF − 11);
- qué capítulos y ejercicios ya están transcritos y cuáles faltan;
- las convenciones obligatorias de escritura (KaTeX, escapes, HTML, estructura de las soluciones);
- las herramientas propias en `C:\Projects\.tmp_pdf` y cómo usarlas;
- hallazgos clave sobre el PDF (las fórmulas son imágenes CCITT, no texto);
- las discrepancias detectadas con las respuestas del libro y por qué son deliberadas;
- el procedimiento paso a paso para agregar un capítulo nuevo.

**Mantén ese documento actualizado** cada vez que se agregue un capítulo, cambie una
convención o se detecte una discrepancia nueva.

## Convenciones esenciales (resumen)

- Las fórmulas van en `src/assets/*.js` con LaTeX: `$...$` en línea y `$$...$$` destacado.
- Dentro de JavaScript, duplica cada barra inversa: `\\frac`, `\\sqrt`, `\\theta`, `\\text`.
- Cada ejercicio es un objeto con exactamente dos claves: `enunciado` y `solucion`.
- Las soluciones deben incluir, al final, un bloque `<p><strong>Explicación detallada.</strong> …</p>`
  que justifique por qué se usa cada expresión matemática.
- Las imágenes se guardan en `public/assets` y se referencian como `/assets/archivo.png`.
- Todo el contenido va en español.

## Particularidades del entorno

- `npm run build` y `npx vite` fallan con `spawn EPERM` dentro del sandbox (esbuild usa un
  pipe IPC). Para validar sin esbuild, usar los scripts de Node descritos en las notas.
- No hay `pdftotext`, Ghostscript ni ImageMagick, y no hay red para instalar paquetes:
  la extracción del PDF se hace con el parser propio de `C:\Projects\.tmp_pdf`.
