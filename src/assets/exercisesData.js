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
    {
      enunciado: `
        <p>Un avión viaja hacia el este con una rapidez de 500 km/h. Pero un viento de 90 km/h sopla hacia el sur. ¿Cuáles son la dirección y la rapidez respecto al suelo?</p>
      `,
      solucion: `
        <p>La rapidez respecto al suelo es aproximadamente $508$ km/h y la dirección es hacia el sureste, formando un ángulo de unos $10^\\circ$ al sur del eje Este.</p>

        <h6 class="mt-4">Vectores a usar</h6>
        <p>Toma como eje $x$ el Este y como eje $y$ el Norte.</p>
        <ul>
          <li>Vector velocidad del avión respecto al aire:<br/>
          $\\vec{v}_a = (500, 0)$ km/h (500 km/h hacia el Este).</li>
          <li>Vector velocidad del viento (aire respecto al suelo):<br/>
          $\\vec{v}_v = (0, -90)$ km/h (90 km/h hacia el Sur).</li>
        </ul>

        <p>La velocidad del avión respecto al suelo es la suma vectorial:</p>
        $$ \\vec{v}_g = \\vec{v}_a + \\vec{v}_v = (500, -90) \\text{ km/h} $$

        <h6 class="mt-4">Cálculo de rapidez y dirección</h6>
        <p><strong>Rapidez (módulo):</strong></p>
        $$ |\\vec{v}_g| = \\sqrt{500^2 + 90^2} \\approx 508 \\text{ km/h} $$

        <p><strong>Ángulo respecto al Este:</strong></p>
        $$ \\theta = \\arctan\\left(\\frac{90}{500}\\right) \\approx 10^\\circ $$
        <p>hacia el Sur, es decir "$10^\\circ$ al sur del Este".</p>
      `,
    },
    {
      enunciado: `
        <p>Un avión viaja hacia el este con una velocidad de 500 km/h. Pero un viento de 90 km/h viaja hacia el sur. ¿Cuál dirección debe tomar el avión para viajar hacia el este con respecto a la tierra?</p>
      `,
      solucion: `
        <p>La suma de la velocidad del avión en el aire y la velocidad del viento será la velocidad resultante del avión respecto a la Tierra. Esto se aprecia en el diagrama de vectores de la figura 1-18. Observe que, tal como se requiere, la velocidad resultante es hacia el este. Sin olvidar que la rapidez del viento se proporciona a dos cifras significativas, se ve que $\\vec{v} = (90 \\text{ km/h})/(500 \\text{ km/h})$, a partir de lo cual $\\theta = 10^\\circ$. El avión debe girar $10^\\circ$ hacia el norte para avanzar hacia el este respecto a la Tierra.</p>

        <p>Para determinar la rapidez hacia el este del avión, se observa en la figura que $v_{\\text{AVIÓN-SUELO}} = (500 \\text{ km/h}) \\cos \\theta = 4.9 \\times 10^2 \\text{ m/h}$.</p>

        <div class="text-center my-4">
          <img src="/assets/figura_1_17_18.png" alt="Figuras 1-17 y 1-18" class="img-fluid" style="max-width: 100%; height: auto;">
          <p class="text-muted">Figuras 1-17 y 1-18: Diagrama de vectores mostrando cómo el avión debe compensar el viento</p>
        </div>

        <h6 class="mt-4">Explicación detallada</h6>
        <p><strong>Vectores involucrados:</strong></p>
        <ul>
          <li>$\\vec{v}_{\\text{AVIÓN-AIRE}}$: Velocidad del avión respecto al aire = 500 km/h (dirección a determinar)</li>
          <li>$\\vec{v}_{\\text{VIENTO}}$: Velocidad del viento = 90 km/h hacia el sur</li>
          <li>$\\vec{v}_{\\text{AVIÓN-SUELO}}$: Velocidad resultante del avión respecto al suelo = hacia el este (dirección deseada)</li>
        </ul>

        <p><strong>Relación vectorial:</strong></p>
        $$ \\vec{v}_{\\text{AVIÓN-SUELO}} = \\vec{v}_{\\text{AVIÓN-AIRE}} + \\vec{v}_{\\text{VIENTO}} $$

        <p><strong>Cálculo del ángulo:</strong></p>
        <p>Del triángulo formado (ver Figura 1-18):</p>
        $$ \\sin \\theta = \\frac{90 \\text{ km/h}}{500 \\text{ km/h}} = 0.18 $$
        $$ \\theta = \\arcsin(0.18) \\approx 10^\\circ $$

        <p><strong>Rapidez hacia el este:</strong></p>
        $$ v_{\\text{AVIÓN-SUELO}} = 500 \\cos(10^\\circ) \\approx 490 \\text{ km/h} = 4.9 \\times 10^2 \\text{ km/h} $$

        <p class="alert alert-info mt-3"><strong>Conclusión:</strong> El avión debe dirigirse $10^\\circ$ al norte del este para compensar el viento y viajar directamente hacia el este respecto a la Tierra, con una rapidez de aproximadamente 490 km/h.</p>
      `,
    },
    {
      enunciado: `
        <p>¿Qué desplazamiento debe sumarse a un desplazamiento de 50 cm en la dirección $+x$ para obtener un desplazamiento resultante de 85 cm a $25^\\circ$?</p>
      `,
      solucion: `
        <p>El desplazamiento que hay que sumar es un vector de aproximadamente $45{,}7\\text{ cm}$ con dirección de $54^\\circ$ sobre el eje $+x$.</p>

        <h6 class="mt-4">1. Interpretar el enunciado</h6>
        <ul>
          <li>Tienes un primer desplazamiento $\\vec{d}_1 = 50\\text{ cm}$ a lo largo del eje $+x$ (horizontal, hacia la derecha).</li>
          <li>Quieres que la <strong>resultante</strong> sea $\\vec{d}_R$ de magnitud $85\\text{ cm}$ que forma $25^\\circ$ con el eje $+x$.</li>
          <li>Buscas el vector $\\vec{d}_2$ tal que $\\vec{d}_1 + \\vec{d}_2 = \\vec{d}_R$.</li>
        </ul>

        <h6 class="mt-4">2. Pasar la resultante a componentes</h6>
        <p>Toma un sistema de ejes $x$–$y$ donde $x$ es horizontal y $y$ vertical; el ángulo se mide desde $+x$ hacia arriba.</p>
        <p>Para un vector de magnitud $D$ y ángulo $\\theta$, las componentes son:</p>
        $$ D_x = D\\cos\\theta, \\quad D_y = D\\sin\\theta $$

        <p>Aplicado a la resultante $|\\vec{d}_R| = 85\\text{ cm}$ y $\\theta = 25^\\circ$:</p>
        $$ d_{Rx} = 85\\cos 25^\\circ \\approx 77{,}0\\text{ cm} $$
        $$ d_{Ry} = 85\\sin 25^\\circ \\approx 35{,}9\\text{ cm} $$

        <h6 class="mt-4">3. Escribir los vectores conocidos</h6>
        <ul>
          <li>Primer desplazamiento solo tiene componente en $x$:<br/>
          $\\vec{d}_1 = (50, 0)\\text{ cm}$</li>
          <li>Resultante:<br/>
          $\\vec{d}_R = (77{,}0, 35{,}9)\\text{ cm}$</li>
        </ul>

        <p>La suma vectorial en componentes debe cumplir:</p>
        $$ \\vec{d}_1 + \\vec{d}_2 = \\vec{d}_R \\Rightarrow (d_{1x} + d_{2x}, d_{1y} + d_{2y}) = (d_{Rx}, d_{Ry}) $$

        <h6 class="mt-4">4. Hallar las componentes de $\\vec{d}_2$</h6>
        <p>De la igualdad de componentes:</p>
        <ul>
          <li>En $x$: $50 + d_{2x} = 77{,}0 \\Rightarrow d_{2x} = 27{,}0\\text{ cm}$</li>
          <li>En $y$: $0 + d_{2y} = 35{,}9 \\Rightarrow d_{2y} = 35{,}9\\text{ cm}$</li>
        </ul>

        <p>Por lo tanto $\\vec{d}_2 = (27{,}0, 35{,}9)\\text{ cm}$.</p>

        <h6 class="mt-4">5. Magnitud y dirección del desplazamiento buscado</h6>
        <p><strong>Magnitud:</strong></p>
        <p>La magnitud de $\\vec{d}_2$ se obtiene con Pitágoras:</p>
        $$ |\\vec{d}_2| = \\sqrt{27{,}0^2 + 35{,}9^2} \\approx 45{,}7\\text{ cm} $$

        <p><strong>Dirección:</strong></p>
        <p>La dirección se halla con la tangente:</p>
        $$ \\tan\\phi = \\frac{d_{2y}}{d_{2x}} = \\frac{35{,}9}{27{,}0} \\Rightarrow \\phi \\approx 53{,}1^\\circ $$
        <p>medidos desde el eje $+x$ hacia arriba.</p>

        <p class="alert alert-success mt-3"><strong>Respuesta final:</strong> El desplazamiento que debes sumar es un vector de aproximadamente $45{,}7\\text{ cm}$ que forma aproximadamente $54^\\circ$ con el eje $+x$.</p>
      `,
    },
    {
      enunciado: `
        <p>Encuentre la magnitud y el ángulo de $\\vec{R} = 7.0\\hat{i} - 12\\hat{j}$.</p>
      `,
      solucion: `
        <p>La magnitud de $\\vec{R} = 7.0\\hat{i} - 12\\hat{j}$ es aproximadamente $14$ y el ángulo medido desde el eje $x$ positivo es aproximadamente $-60^\\circ$ (o $300^\\circ$ si se mide en sentido antihorario).</p>

        <h6 class="mt-4">Magnitud de $\\vec{R}$</h6>
        <p>Para un vector en el plano con componentes $(R_x, R_y)$, la magnitud se obtiene con:</p>
        $$ |\\vec{R}| = \\sqrt{R_x^2 + R_y^2} $$

        <p>En este problema:</p>
        <ul>
          <li>$R_x = 7$</li>
          <li>$R_y = -12$</li>
        </ul>

        <p>Entonces:</p>
        $$ |\\vec{R}| = \\sqrt{7^2 + (-12)^2} = \\sqrt{49 + 144} = \\sqrt{193} \\approx 13{,}89 \\approx 14 $$

        <h6 class="mt-4">Ángulo de $\\vec{R}$</h6>
        <p>El ángulo $\\theta$ con el eje $x$ positivo se obtiene usando:</p>
        $$ \\tan\\theta = \\frac{R_y}{R_x} $$

        <p>Sustituyendo:</p>
        $$ \\tan\\theta = \\frac{-12}{7} \\Rightarrow \\theta = \\arctan\\left(\\frac{-12}{7}\\right) \\approx -59{,}74^\\circ \\approx -60^\\circ $$

        <p>Como $R_x > 0$ y $R_y < 0$, el vector está en el <strong>cuarto cuadrante</strong>, por lo que el ángulo estándar medido en sentido antihorario desde el eje $x$ puede escribirse como:</p>
        $$ \\theta \\approx 360^\\circ - 60^\\circ = 300^\\circ $$

        <p class="alert alert-info mt-3">
          <strong>Nota:</strong> El vector $\\vec{R} = 7.0\\hat{i} - 12\\hat{j}$ apunta hacia la derecha y hacia abajo (cuarto cuadrante). Su magnitud es aproximadamente 14 unidades y forma un ángulo de $-60^\\circ$ (o $300^\\circ$) con el eje $x$ positivo.
        </p>
      `,
    },
    {
      enunciado: `
        <p>Un vector $(15\\hat{i} - 16\\hat{j} + 27\\hat{k})$ se suma a un vector $(23\\hat{j} - 40\\hat{k})$. ¿Cuál es la magnitud de la resultante?</p>
      `,
      solucion: `
        <p>La magnitud de la resultante es aproximadamente $21$ unidades.</p>

        <h6 class="mt-4">1. Identificar los vectores</h6>
        <p>Tenemos dos vectores en el espacio tridimensional:</p>
        <ul>
          <li>Primer vector: $\\vec{A} = 15\\hat{i} - 16\\hat{j} + 27\\hat{k}$</li>
          <li>Segundo vector: $\\vec{B} = 0\\hat{i} + 23\\hat{j} - 40\\hat{k}$</li>
        </ul>

        <p class="alert alert-info">
          <strong>Nota:</strong> El segundo vector no tiene componente en $\\hat{i}$, por lo que su componente $x$ es $0$.
        </p>

        <h6 class="mt-4">2. Suma de vectores (componente por componente)</h6>
        <p>Para sumar vectores en notación de vectores unitarios, sumamos las componentes correspondientes:</p>
        $$ \\vec{R} = \\vec{A} + \\vec{B} = (A_x + B_x)\\hat{i} + (A_y + B_y)\\hat{j} + (A_z + B_z)\\hat{k} $$

        <p>Sustituyendo los valores:</p>
        <ul>
          <li>Componente $x$: $15 + 0 = 15$</li>
          <li>Componente $y$: $-16 + 23 = 7$</li>
          <li>Componente $z$: $27 + (-40) = -13$</li>
        </ul>

        <p>Por lo tanto, el vector resultante es:</p>
        $$ \\vec{R} = 15\\hat{i} + 7\\hat{j} - 13\\hat{k} $$

        <h6 class="mt-4">3. Cálculo de la magnitud</h6>
        <p>La magnitud de un vector tridimensional se calcula con:</p>
        $$ |\\vec{R}| = \\sqrt{R_x^2 + R_y^2 + R_z^2} $$

        <p>Sustituyendo las componentes del vector resultante:</p>
        $$ |\\vec{R}| = \\sqrt{15^2 + 7^2 + (-13)^2} $$
        $$ |\\vec{R}| = \\sqrt{225 + 49 + 169} $$
        $$ |\\vec{R}| = \\sqrt{443} $$
        $$ |\\vec{R}| \\approx 21.05 \\approx 21 \\text{ unidades} $$

        <p class="alert alert-success mt-3">
          <strong>Respuesta final:</strong> La magnitud del vector resultante $\\vec{R} = 15\\hat{i} + 7\\hat{j} - 13\\hat{k}$ es aproximadamente $21$ unidades.
        </p>
      `,
    },
  ],
}

export function getExercises(title) {
  return exercisesData[title] || []
}
