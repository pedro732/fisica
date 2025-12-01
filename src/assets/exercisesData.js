export const exercisesData = {
  'Velocidad Instantánea': [
    {
      enunciado: `
        <p>La posición de una partícula que se mueve a lo largo del eje $x$ está dada por $x = 7.8 + 9.2t - 2.1t^3$, donde $x$ está en metros y $t$ en segundos. ¿Cuál es la velocidad instantánea en $t = 3.5\\text{ s}$?</p>
      `,
      solucion: `
        <p>La velocidad instantánea está dada por la derivada de la posición con respecto al tiempo:</p>
        $$ v_x = \\frac{dx}{dt} = \\frac{d}{dt}(7.8 + 9.2t - 2.1t^3) $$
        $$ v_x = 0 + 9.2 - (3)(2.1)t^2 = 9.2 - 6.3t^2 $$
        <p>En $t = 3.5\\text{ s}$:</p>
        $$ v_x = 9.2 - 6.3(3.5)^2 = 9.2 - 6.3(12.25) = 9.2 - 77.175 = -67.975\\text{ m/s} $$
      `,
    },
    {
      enunciado: `
        <p>Un automóvil viaja por un camino y las lecturas de su odómetro se grafican contra el tiempo en la figura 1-8. Encuentre la rapidez instantánea del vehículo en los puntos $A$ y $B$. ¿Cuál es la rapidez promedio del automóvil?</p>
        <div class="text-center my-4">
          <img src="/assets/grafica_odometro.png" alt="Figura 1-8" class="img-fluid" style="max-width: 100%; height: auto;">
          <p class="text-muted">Figura 1-8</p>
        </div>
      `,
      solucion: `
        <p>Como la rapidez se obtiene de la pendiente $\\Delta l/\\Delta t$ de la recta tangente, se toma una tangente a la curva en el punto $A$. En este caso, la recta tangente es la curva misma. Para el triángulo presentado en la figura $A$, se tiene</p>
        $$ \\frac{\\Delta l}{\\Delta t} = \\frac{4.0\\text{ m}}{8.0\\text{ s}} = 0.50\\text{ m/s} $$
        <p>Ésta también es la rapidez en el punto $B$ y en cualquier otro punto en la gráfica en línea recta. Por tanto, $v = 0.50\\text{ m/s} = v_{prom}$.</p>
      `,
    },
  ],
  Vectores: [
    {
      enunciado: `
        <p>Mediante el método gráfico, encuentre la resultante de los dos desplazamientos siguientes: $2.0\\text{ m}$ en $40^\\circ$ y $4.0\\text{ m}$ en $127^\\circ$, y los ángulos considerados en relación con el eje $+x$, como es costumbre. Proporcione la respuesta con dos cifras significativas. (Consulte en el apéndice A lo relacionado con las cifras significativas.)</p>
      `,
      solucion: `
        <p>Seleccione los ejes $x$ y $y$ presentados en la figura 1-9 y coloque los desplazamientos a escala, de punta a cola desde el origen. Observe que todos los ángulos se miden desde el eje $+x$. El vector resultante $\\vec{s}$ apunta del punto inicial al punto final, como se observa. Se mide su longitud en el diagrama a escala para encontrar su magnitud, $4.6\\text{ m}$. Con un transportador, se mide que su ángulo $\\theta$ es $101^\\circ$. Por tanto, el desplazamiento resultante es $4.6\\text{ m}$ en $101^\\circ$.</p>

        <div class="text-center my-4">
          <img src="/assets/figura_1_9_10.png" alt="Figura 1-9 y 1-10" class="img-fluid" style="max-width: 100%; height: auto;">
          <p class="text-muted">Figura 1-9 y 1-10</p>
        </div>
      `,
    },
    {
      enunciado: `
        <p>Encuentre las componentes $x$ y $y$ de un desplazamiento de $25.0\\text{ m}$ con un ángulo de $210.0^\\circ$.</p>
      `,
      solucion: `
        <p>El vector desplazamiento y sus componentes se presentan en la figura 1-10. Las componentes escalares son</p>
        $$ \\text{componente } x = -(25.0\\text{ m}) \\cos 30.0^\\circ = -21.7\\text{ m} $$
        $$ \\text{componente } y = -(25.0\\text{ m}) \\text{sen} 30.0^\\circ = -12.5\\text{ m} $$
        <p>Observe en particular que cada componente apunta en la dirección de la coordenada negativa y, por tanto, debe considerarse como negativa.</p>

        <div class="text-center my-4">
          <img src="/assets/figura_1_9_10.png" alt="Figura 1-10" class="img-fluid" style="max-width: 100%; height: auto;">
          <p class="text-muted">Figura 1-10</p>
        </div>
      `,
    },
    {
      enunciado: `
        <p>Mediante el método de componentes rectangulares, encuentre la resultante de los dos desplazamientos siguientes: $2.0\\text{ m}$ en $40^\\circ$ y $4.0\\text{ m}$ en $127^\\circ$.</p>
      `,
      solucion: `
        <p>Se resuelve cada vector en componentes rectangulares, igual que en las figuras 1-11a y b. (Se pone un símbolo de cruz en el vector original para mostrar que es reemplazado por sus componentes.) La resultante tiene componentes escalares de</p>
        $$ s_x = 1.53\\text{ m} - 2.41\\text{ m} = -0.88\\text{ m} $$
        $$ s_y = 1.29\\text{ m} + 3.19\\text{ m} = 4.48\\text{ m} $$
        <p>Observe que debe asignar un valor negativo a las componentes que apuntan en la dirección negativa. La resultante se presenta en la figura 1.11c; ahí se ve que</p>
        $$ s = \\sqrt{(0.88\\text{ m})^2 + (4.48\\text{ m})^2} = 4.6\\text{ m} $$
        $$ \\tan \\phi = \\frac{4.48\\text{ m}}{0.88\\text{ m}} $$
        <p>y $\\phi = 79^\\circ$, a partir de lo cual $\\theta = 180^\\circ - \\phi = 101^\\circ$. Por tanto, $\\vec{s} = 4.6\\text{ m}$ en $101^\\circ$ DESDE EL EJE $+x$; recuerde que las direcciones de los vectores deben expresarse de manera explícita.</p>

        <div class="text-center my-4">
          <img src="/assets/figura_1_11.png" alt="Figura 1-11" class="img-fluid" style="max-width: 100%; height: auto;">
          <p class="text-muted">Figura 1-11</p>
        </div>
      `,
    },
  ],
}

export function getExercises(title) {
  return exercisesData[title] || []
}
