# Notas de transcripción — Física General (Schaum, 10.ª edición)

> **Propósito de este documento.** Es el *traspaso de contexto* del trabajo de transcripción
> del libro de Schaum hacia `src/assets/exercisesData.js`. Existe para que una sesión nueva
> (sin memoria de las anteriores) pueda continuar el trabajo sin re-descubrir rutas,
> convenciones, herramientas ni decisiones ya tomadas.
>
> **Mantenerlo actualizado.** Cada vez que se agregue un capítulo, una convención nueva o se
> detecte una discrepancia con el libro, actualizar la sección correspondiente.

---

## 1. Identificación del proyecto

| Dato | Valor |
|---|---|
| Proyecto | Aplicación Vue 3 + Vite de Física General |
| Raíz del proyecto | `C:\Projects\Fisica` |
| Datos de ejercicios | `C:\Projects\Fisica\src\assets\exercisesData.js` |
| Datos de teoría | `C:\Projects\Fisica\src\assets\topicDetails.js` |
| Imágenes servidas | `C:\Projects\Fisica\public\assets` → se referencian como `/assets/archivo.png` |
| Libro fuente (PDF) | `C:\Projects\Fisica\public\fisica-general-10ma--schaum.pdf` |
| Renderizador de fórmulas | KaTeX, usado en `src/views/SolvedExercisesView.vue` (`renderMath`) |
| Carpeta de trabajo temporal | `C:\Projects\.tmp_pdf` (herramientas propias; se puede borrar) |

**Ojo con las rutas:** el nombre real del PDF lleva **guion doble** (`10ma--schaum.pdf`) y la
carpeta se llama `public` en minúscula. En peticiones del usuario puede aparecer como
`projects/Fisica/Public/fisica-general-10ma-schaum.pdf`; no coincide literalmente.

**Nomenclatura de páginas:** *página del libro* = *página del PDF* − 11.
Ejemplo: la página 65 del libro corresponde a la página 76 de 407 que muestra el lector.
El PDF tiene 407 páginas.

---

## 2. Estado del trabajo de transcripción

### Capítulo 6 — Trabajo, energía y potencia
Clave del array en `exercisesData.js`: `'Trabajo , energía y Potencia'`
(observar los espacios exactos: espacio antes de la coma y sin tilde en "energia").

| Bloque | Ejercicios | Páginas del libro | Páginas del PDF | Estado |
|---|---|---|---|---|
| Problemas resueltos | 6.1 – 6.6 | 65 – 66 | 76 – 77 | Ya existían en el archivo |
| Problemas resueltos | **6.7 – 6.23** | 65 – 71 | 76 – 82 | ✅ Transcritos y resueltos |
| Problemas complementarios | **6.24 – 6.53** | 70 – 72 | 81 – 83 | ✅ Resueltos desde cero |
| Problema 6.54 (ejemplo de máquinas simples) | — | 73 | 84 | No solicitado |

**Total actual del array: 53 ejercicios.**

### Pendiente / posible continuación
- Capítulo 7 «Máquinas simples» (empieza en la página 73 del libro / 84 del PDF).
- Capítulos posteriores del libro.
- Completar los resueltos 6.1–6.6 con «explicación detallada» si se desea uniformidad
  (hoy 6.1 a 6.4 tienen soluciones breves, sin el bloque explicativo).

---

## 3. Convenciones de escritura (obligatorias)

1. **Estructura de cada ejercicio:** objeto con exactamente dos claves, `enunciado` y
   `solucion`, ambas cadenas de plantilla JavaScript (backticks).
2. **Matemáticas:** LaTeX con delimitadores que reconoce `SolvedExercisesView.vue`:
   `$...$` en línea y `$$...$$` para ecuaciones destacadas.
3. **Escapes en JavaScript:** toda barra inversa de LaTeX debe duplicarse
   (`\\frac`, `\\sqrt`, `\\theta`, `\\text`, `\\,`). Ver el tutorial del proyecto:
   `documentacion/Como_escribir_formulas_matematicas.md`.
4. **Nada de `$` dentro de `$$…$$`**, y cada delimitador debe cerrarse con su pareja.
   El regex de la vista es `/\$\$([\s\S]+?)\$\$/g` y luego `/\$([^$\n]+?)\$/g`: una fórmula
   en línea **no puede contener saltos de línea**.
5. **Unidades dentro de `\\text{}`:** `$9.81\\text{ m/s}^2$`, no `$9.81 m/s^2$`.
6. **HTML permitido** en el contenido: `<p>`, `<strong>`, `<em>`, `<sup>`, `<div class="text-center my-4">`.
7. **Imágenes** con el patrón ya usado en el archivo:
   ```html
   <div class="text-center my-4">
     <img src="/assets/figura6-cuenta.png" alt="Descripción" class="img-fluid" style="max-width: 90%; height: auto;">
     <p class="text-muted">Figura 6-3 — descripción breve</p>
   </div>
   ```
8. **Estructura didáctica de cada solución:** pasos numerados
   (`<strong>Paso 1. …</strong>`), las ecuaciones clave en `$$…$$`, y al final un bloque
   `<p><strong>Explicación detallada.</strong> …</p>` que justifique **por qué** se usa cada
   expresión (por qué el coseno, por qué `mgh`, por qué se conserva la energía, etc.).
   Este bloque explicativo es un requisito explícito del usuario, no un adorno.
9. **Fidelidad al libro:** conservar los enunciados con su redacción original en español
   (incluidos los guiones de partición de palabras del PDF, que deben re-unirse).
10. **Idioma:** todo el contenido en español.

---

## 4. Herramientas propias (en `C:\Projects\.tmp_pdf`)

No hay `pdftotext`, Ghostscript, ImageMagick ni red para instalar PyMuPDF. Por eso se
escribió un parser de PDF en Python puro. Archivos relevantes:

| Archivo | Función |
|---|---|
| `pdfx.py` | Parser de PDF: objetos, xref streams, object streams, filtros (Flate, LZW, ASCII85), `Ref`, `Stream`, `Parser` |
| `extract.py` | Extracción de texto con posiciones, fuentes, `ToUnicode`, y creación de páginas (`build_pages`, `PageExtractor`) |
| `dump.txt` / `pages.json` | Volcados de texto por página (se regeneran) |
| `render.py`, `fullrender.py` | Rasterizador propio (incompleto; ver limitaciones) |
| `linetext.py` | Genera una imagen PNG reflowada línea a línea desde los fragmentos de texto |
| `mkfigs.py`, `mkfigs2.py` | Generadores de las figuras PNG con Pillow |
| `checkkatex.mjs`, `verify.mjs`, `verify2.mjs` | Validación de todas las expresiones con KaTeX y de las rutas de imagen |

### Comandos útiles

```powershell
# Volcar el texto de un rango de páginas del PDF (1-based, según el lector)
cd C:\Projects\.tmp_pdf
python extract.py "C:/Projects/Fisica/public/fisica-general-10ma--schaum.pdf" 81-83
python makedump.py      # escribe dump.txt legible en UTF-8

# Extraer las imágenes embebidas (¡son las FÓRMULAS!) a imgtest/
python testccitt2.py

# Generar/regenerar las figuras de los ejercicios
python mkfigs.py        # capítulo 6, resueltos 6.8–6.19
python mkfigs2.py       # complementarios 6.39, 6.40, 6.42, 6.51

# Verificar que TODAS las fórmulas renderizan con KaTeX y que existen las imágenes
node verify2.mjs
```

### Hallazgos clave sobre este PDF (evitan perder tiempo)

1. **Las fórmulas no son texto: son imágenes CCITT embebidas.** Los párrafos se extraen como
   texto normal, pero cada ecuación aparece como un XObject de imagen con filtro
   `CCITTFaxDecode`. Se decodifican perfectamente con Pillow envolviéndolas en un contenedor
   TIFF mínimo (función `tiff_ccitt` en `testccitt2.py`). **Este es el método para leer las
   fórmulas con exactitud**, mejor que intentar reconstruirlas del texto.
2. **Las fuentes matemáticas son subconjuntos** `MathematicalPi-One/Three`, `MathPiOneItalic`.
   Su `ToUnicode` está casi vacío, pero la tabla `Differences` tiene nombres de glifo del tipo
   `H11005`, `H9253`, donde el número **es el código Unicode** (`H11005` → U+2B0D, que se usa
   como signo `=`; `H9253` → γ). En `extract.py` esto se resuelve con `glyph_name_to_char` y el
   diccionario `GLYPH_FIX`.
3. **Numeración de páginas confirmada:** página del libro = página del PDF − 11.
4. **El PDF está linealizado**: el orden de los objetos no coincide con el orden de las páginas;
   hay que recorrer el árbol de páginas (`/Root` → `/Pages` → `/Kids`).
5. **El rasterizador propio (`render.py`) no está terminado**: acierta con gráficos vectoriales
   simples y con el texto, pero produce artefactos (bandas negras y líneas) en algunas páginas.
   **No confiar en él**; para leer contenido usar `linetext.py` y las imágenes CCITT extraídas.

---

## 5. Figuras creadas

Todas en `C:\Projects\Fisica\public\assets`. Se generan con Pillow (supersampling ×2) y se
referencian como `/assets/<nombre>`.

### Capítulo 6 — problemas resueltos 6.7–6.23
| Archivo | Se usa en | Contenido |
|---|---|---|
| `figura6-caida.png` | 6.8 | Masa de 2.0 kg que cae 400 cm |
| `figura6-atwood.png` | 6.13 | Máquina de Atwood (800 g y 700 g, 120 cm) |
| `figura6-cuenta.png` | 6.14, 6.15 | Cuenta en un alambre, puntos A, B, C con alturas 0.80 / 0.50 m |
| `figura6-auto-pendiente.png` | 6.16 | Automóvil cuesta abajo 30°, fuerza de frenado F |
| `figura6-pendulo.png` | 6.17 | Péndulo L = 1.80 m, altura h, ángulo θ |
| `figura6-bloque-plano.png` | 6.18 | Bloque sobre plano inclinado 25.0° con fricción |

### Capítulo 6 — problemas complementarios 6.24–6.53
| Archivo | Se usa en | Contenido |
|---|---|---|
| `figura6-7-pendulo.png` | 6.39 | Péndulo de la figura 6-7; A y C sobre B por 0.736 m y 0.148 m |
| `figura6-8-alambre.png` | 6.43, 6.44, 6.45 | Cuenta en alambre de la figura 6-8; h1 (A sobre C) y h2 (B bajo C) |
| `figura6-auto-bajando.png` | 6.40 | Automóvil bajando 15 m por pendiente de 20° |
| `figura6-elevador.png` | 6.42 | Elevador subiendo 25 m con fricción de 500 N |
| `figura6-turbina.png` | 6.51 | Agua cayendo 120 m a una turbina de 80% de eficiencia |

**Nota:** existen en el proyecto assets preexistentes `6-1.png`, `6-2.png`, `6-3.jpeg` … `6-6.jpeg`
que son **ilustraciones decorativas** (estilo caricatura: un niño, una excavadora…), no las
figuras técnicas del libro. Se conservan tal como estaban.

---

## 6. Discrepancias detectadas con las respuestas del libro

Se documentan aquí porque son deliberadas: en cada caso la solución incluye una nota
explicando el cálculo correcto con los datos impresos en **esta** edición.

| Ejercicio | Respuesta del libro | Cálculo con los datos de esta edición | Motivo |
|---|---|---|---|
| 6.19 | 0.28 km | **0.27 km** (274 m) | Redondeo o valor de g distinto |
| 6.26 | 3.0 kJ | 1.2 – 1.7 kJ según se gire o se ice | La respuesta parece incluir pérdidas por fricción |
| 6.44 | 1.47 mN | **3.68 mN** | 1.47 mN corresponde a un desnivel de 20 cm, no de 50 cm: la respuesta impresa se calculó con otro par de alturas |
| 6.45 | a) 10.2 m/s; b) 105 mJ | a) 11.5 m/s (o 9.5 m/s según criterio de alturas); b) 149 mJ | Igual que el anterior: la figura de esa edición tiene otra geometría |
| 6.51 | 63 hp | 63 hp ✔ (con η = 80%) | Coincide; 58.9 kW × 0.80 = 47.1 kW = 63 hp |

Comprobaciones que sí coinciden exactamente con el libro: 6.24, 6.25, 6.27–6.43, 6.46–6.50,
6.52, 6.53.

---

## 7. Rutas y comandos de verificación

```powershell
# 1) ¿Compila y renderiza el proyecto?
cd C:\Projects\Fisica
npm run build          # requiere permiso fuera del sandbox (esbuild usa pipes IPC → spawn EPERM)

# 2) ¿Todas las fórmulas son válidas para KaTeX y existen las imágenes?
cd C:\Projects\.tmp_pdf
node verify2.mjs       # imprime: total de ejercicios, expresiones renderizadas, problemas, rutas OK/FALTA

# 3) ¿La estructura de cada entrada es correcta?
node -e "import('file:///C:/Projects/Fisica/src/assets/exercisesData.js').then(m=>{const a=m.getExercises('Trabajo , energía y Potencia');console.log('total',a.length)})"
```

**Nota sobre el sandbox:** `npm run build` y `npx vite` fallan con `spawn EPERM` porque esbuild
abre un pipe IPC que el sandbox de archivos bloquea. Hay que ejecutarlos pidiendo permisos
ampliados, o bien validar con los scripts de Node (que no necesitan esbuild).

---

## 8. Cómo continuar con un capítulo nuevo (procedimiento)

1. Localizar el capítulo en el PDF: `python extract.py "<ruta pdf>" <página_inicial>-<página_final>`
   y revisar `dump.txt`. Recordar: página del libro = página del PDF − 11.
2. Extraer las **imágenes CCITT** de esas páginas (`python testccitt2.py`) y mirarlas: contienen
   las fórmulas exactas.
3. Separar los enunciados de las respuestas (`Resp.`) cuando el capítulo tenga problemas
   complementarios a dos columnas.
4. Resolver cada problema desde cero, verificando cada resultado contra la respuesta del libro y
   anotando las discrepancias en la sección 6 de este documento.
5. Generar las figuras necesarias con un script de Pillow siguiendo el estilo de `mkfigs2.py`.
6. Insertar los objetos en el array correspondiente **antes de** `\n  ],\n}\n` del archivo, con
   un script de Node (leer, insertar, escribir en UTF-8).
7. Ejecutar `node verify2.mjs` y `npm run build`.
8. Actualizar las secciones 2, 5 y 6 de este documento.

---

*Última actualización: transcripción de los capítulos 6 (problemas resueltos 6.7–6.23 y
complementarios 6.24–6.53).*
