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
    {
      enunciado: `
        <p>Un camión viaja hacia el norte con rapidez de 70 km/h. El humo del escape del camión se inclina en un ángulo de 20° sureste detrás del camión. Si el viento sopla siempre hacia el este, ¿cuál es la rapidez del viento en ese lugar?</p>

        <div class="text-center my-4">
          <img src="/assets/humo.png" alt="Camión con humo" class="img-fluid" style="max-width: 35%; height: auto;">
          <p class="text-muted">Figura: Camión viajando hacia el norte con humo inclinado hacia el sureste</p>
        </div>
      `,
      solucion: `
        <p>La rapidez del viento en ese lugar es aproximadamente <strong>25 km/h</strong> en dirección este.</p>

        <h6 class="mt-4">Análisis del problema</h6>
        <p>Un camión va hacia el norte con rapidez \\(70\\,\\text{km/h}\\). El humo "ve" al aire como si se moviera con la rapidez del viento; por eso, respecto al camión, la velocidad del humo es la diferencia vectorial entre la del viento y la del camión.</p>

        <h6 class="mt-4">Planteo de vectores</h6>
        <p>Tomemos:</p>
        <ul>
          <li>Eje \\(+x\\): hacia el este</li>
          <li>Eje \\(+y\\): hacia el norte</li>
        </ul>

        <p><strong>Velocidad del camión respecto al suelo:</strong></p>
        $$ \\vec{v}_C = (0,\\;70)\\,\\text{km/h} $$

        <p><strong>Velocidad del viento respecto al suelo:</strong></p>
        <p>El viento sopla hacia el este:</p>
        $$ \\vec{v}_V = (v,\\;0)\\,\\text{km/h} $$
        <p>donde \\(v\\) es la rapidez del viento que se busca.</p>

        <p><strong>Velocidad del humo respecto al camión:</strong></p>
        $$ \\vec{v}_{H/C} = \\vec{v}_V - \\vec{v}_C = (v,\\; -70)\\,\\text{km/h} $$

        <h6 class="mt-4">Uso del ángulo del humo</h6>
        <p>El enunciado dice que el rastro de humo forma un ángulo de \\(20^\\circ\\) "sureste" detrás del camión. Esto significa que, visto desde el camión, el humo se inclina \\(20^\\circ\\) hacia el este respecto de la dirección "directamente hacia atrás" (que sería el eje \\(-y\\)).</p>

        <p>Por tanto, el vector relativo \\(\\vec{v}_{H/C}=(v,-70)\\) forma un ángulo de \\(20^\\circ\\) con el eje \\(-y\\), es decir:</p>
        $$ \\tan 20^\\circ = \\frac{\\text{componente hacia el este}}{\\text{módulo de la componente hacia atrás}} = \\frac{v}{70} $$

        <p>De aquí:</p>
        $$ v = 70 \\tan 20^\\circ $$

        <p>Usando \\(\\tan 20^\\circ \\approx 0.364\\):</p>
        $$ v \\approx 70 \\times 0.364 \\approx 25\\,\\text{km/h} $$

        <p class="alert alert-success mt-3">
          <strong>Respuesta:</strong> La rapidez del viento en ese lugar es aproximadamente $25\\,\\text{km/h}$ en dirección este.
        </p>
      `,
    },
    {
      enunciado: `
        <p>Una embarcación viaja justo hacia el este a 10 km/h. ¿Cuál debe ser la rapidez de una segunda embarcación que viaja con rumbo 30° al noreste para que esté siempre directamente al norte de la primera?</p>

        <div class="text-center my-4">
          <img src="/assets/barco.png" alt="Embarcaciones" class="img-fluid" style="max-width: 35%; height: auto;">
          <p class="text-muted">Figura: Dos embarcaciones con movimientos relativos</p>
        </div>
      `,
      solucion: `
        <p>La rapidez de la segunda embarcación debe ser <strong>20 km/h</strong>.</p>

        <h6 class="mt-4">Interpretación del enunciado</h6>
        <ul>
          <li><strong>Embarcación 1:</strong> se mueve justo hacia el este con rapidez $10\\,\\text{km/h}$.</li>
          <li><strong>Embarcación 2:</strong> se mueve con rumbo 30° al noreste, es decir, su velocidad forma un ángulo de $30^\\circ$ con la dirección norte, inclinándose hacia el este.</li>
          <li><strong>Condición clave:</strong> la segunda embarcación está siempre directamente al norte de la primera; eso significa que, vista desde la primera, la segunda solo tiene movimiento relativo hacia el norte (ningún movimiento relativo hacia el este u oeste).</li>
        </ul>

        <h6 class="mt-4">Sistema de ejes y componentes</h6>
        <p>Se elige un sistema de ejes:</p>
        <ul>
          <li>Eje $x$: hacia el <strong>este</strong></li>
          <li>Eje $y$: hacia el <strong>norte</strong></li>
        </ul>

        <p><strong>Velocidad de la primera embarcación:</strong></p>
        $$ \\vec{v}_1 = (10,\\; 0)\\,\\text{km/h} $$

        <p>Sea $v$ la rapidez de la segunda embarcación. Como va 30° al noreste (30° al este del norte), sus componentes son:</p>
        $$ \\vec{v}_2 = (v\\sin 30^\\circ,\\; v\\cos 30^\\circ) $$

        <p class="alert alert-info">
          <strong>Nota:</strong> Se usa seno con el eje $x$ porque el ángulo está medido desde el eje $y$, hacia el este.
        </p>

        <h6 class="mt-4">Condición "siempre al norte"</h6>
        <p>La velocidad de la segunda vista desde la primera es:</p>
        $$ \\vec{v}_{2/1} = \\vec{v}_2 - \\vec{v}_1 $$

        <p>Para que la segunda esté siempre "directamente al norte" de la primera, $\\vec{v}_{2/1}$ no puede tener componente en $x$; es decir, su componente este-oeste debe ser cero:</p>
        $$ (\\vec{v}_{2/1})_x = v\\sin 30^\\circ - 10 = 0 $$

        <p>Por tanto:</p>
        $$ v\\sin 30^\\circ = 10 $$

        <p>Como $\\sin 30^\\circ = \\frac{1}{2}$:</p>
        $$ v \\cdot \\frac{1}{2} = 10 \\quad\\Rightarrow\\quad v = 20\\,\\text{km/h} $$

        <p>Esta rapidez garantiza que la componente hacia el este de la segunda embarcación "acompañe" exactamente a la primera, de manera que entre ellas solo quede movimiento relativo vertical (norte–sur), cumpliendo que la segunda esté siempre directamente al norte de la primera.</p>

        <p class="alert alert-success mt-3">
          <strong>Respuesta:</strong> La rapidez de la segunda embarcación debe ser $20\\,\\text{km/h}$.
        </p>
      `,
    },
    {
      enunciado: `
        <p>Un bote, impulsado para viajar con una rapidez de 0.50 m/s en aguas tranquilas, atraviesa un río de 60 m de ancho. El flujo del río tiene una rapidez de 0.30 m/s.</p>
        <p><strong>a)</strong> ¿A cuál ángulo, respecto a la dirección directamente transversal, debe apuntar el bote?</p>
        <p><strong>b)</strong> ¿Cuánto tarda el bote en atravesar el río?</p>

        <div class="text-center my-4">
          <img src="/assets/rio-bote.png" alt="Bote cruzando río" class="img-fluid" style="max-width: 35%; height: auto;">
          <p class="text-muted">Figura: Bote cruzando un río con corriente</p>
        </div>
      `,
      solucion: `
        <p><strong>Respuesta:</strong> El bote debe apuntar $37^\\circ$ contra la corriente y tarda $1.5\\times10^2\\,\\text{s}=150\\,\\text{s}$ en cruzar el río.</p>

        <h6 class="mt-4">a) Ángulo al que debe apuntar</h6>

        <p><strong>Datos:</strong></p>
        <ul>
          <li>Rapidez del bote en agua tranquila: $v_b = 0.50\\,\\text{m/s}$</li>
          <li>Rapidez de la corriente: $v_r = 0.30\\,\\text{m/s}$</li>
        </ul>

        <p>Se quiere que la <strong>trayectoria respecto a la orilla sea perpendicular</strong> a la corriente (ir "directamente transversal"), por lo que la componente de la velocidad del bote en dirección de la corriente debe anular a $v_r$.</p>

        <p>Sea $\\theta$ el ángulo al que apunta el bote medido desde la línea "directamente transversal" hacia <strong>arriba contra la corriente</strong>. Entonces:</p>
        <ul>
          <li>Componente del bote en la dirección de la corriente: $v_b \\sin\\theta$</li>
          <li>Condición de anulación: $v_b \\sin\\theta = v_r$</li>
        </ul>

        $$ \\sin\\theta = \\frac{v_r}{v_b} = \\frac{0.30}{0.50} = 0.6 $$

        $$ \\theta = \\arcsin(0.6) \\approx 37^\\circ $$

        <p>Por eso el bote debe apuntar $37^\\circ$ <strong>aguas arriba</strong> respecto a la dirección transversal.</p>

        <h6 class="mt-4">b) Tiempo en atravesar el río</h6>

        <p>Solo la componente <strong>perpendicular</strong> a la corriente, $v_{\\perp}$, hace que el bote se desplace de una orilla a la otra.</p>

        $$ v_{\\perp} = v_b \\cos\\theta = 0.50\\,\\text{m/s} \\cdot \\cos 37^\\circ \\approx 0.50\\,\\text{m/s} \\cdot 0.80 \\approx 0.40\\,\\text{m/s} $$

        <p>Ancho del río: $d = 60\\,\\text{m}$</p>

        <p><strong>Tiempo:</strong></p>
        $$ t = \\frac{d}{v_{\\perp}} = \\frac{60\\,\\text{m}}{0.40\\,\\text{m/s}} = 150\\,\\text{s} = 1.5\\times10^2\\,\\text{s} $$

        <p class="alert alert-success mt-3">
          <strong>Respuesta final:</strong><br>
          <strong>a)</strong> El bote debe apuntar $37^\\circ$ contra la corriente (aguas arriba).<br>
          <strong>b)</strong> El tiempo para atravesar el río es $150\\,\\text{s}$ o $1.5\\times10^2\\,\\text{s}$.
        </p>
      `,
    },
    {
      enunciado: `
        <p>Un borracho imprudente juega con un arma en un avión que va directamente hacia el este a 500 km/h. El borracho dispara el arma directamente hacia el techo del avión. La bala sale del arma con una rapidez de 1 000 km/h. De acuerdo con alguien parado en la Tierra, ¿qué ángulo forma la bala con la vertical?</p>

        <div class="text-center my-4">
          <img src="/assets/avion.png" alt="Avión con disparo vertical" class="img-fluid" style="max-width: 35%; height: auto;">
          <p class="text-muted">Figura: Disparo vertical desde un avión en movimiento</p>
        </div>
      `,
      solucion: `
        <p><strong>Respuesta:</strong> El ángulo que ve un observador en la Tierra es $26{,}6^\\circ$ respecto de la vertical.</p>

        <h6 class="mt-4">Datos del problema</h6>
        <ul>
          <li>Velocidad del avión (horizontal, hacia el este): $v_x = 500\\,\\text{km/h}$</li>
          <li>Velocidad de salida de la bala respecto del avión (vertical, hacia arriba): $v_y = 1000\\,\\text{km/h}$</li>
          <li>Se pide: ángulo $\\theta$ que forma la trayectoria de la bala con la vertical para un observador en reposo en la Tierra</li>
        </ul>

        <h6 class="mt-4">Idea física</h6>
        <p>Para el observador en la Tierra, la bala:</p>
        <ul>
          <li>Tiene componente horizontal igual a la velocidad del avión, porque al dispararla comparte la velocidad del avión.</li>
          <li>Tiene componente vertical igual a la rapidez con que sale hacia el techo del avión.</li>
        </ul>

        <p>Así, el movimiento de la bala es la combinación (suma vectorial) de un movimiento horizontal uniforme y uno vertical hacia arriba.</p>

        <h6 class="mt-4">Cálculo del ángulo</h6>
        <p>Tomando como eje $y$ la vertical y como eje $x$ la horizontal:</p>
        <ul>
          <li>Componente horizontal: $v_x = 500\\,\\text{km/h}$</li>
          <li>Componente vertical: $v_y = 1000\\,\\text{km/h}$</li>
        </ul>

        <p>El ángulo $\\theta$ con la vertical se obtiene usando la tangente, que relaciona la componente opuesta (horizontal) con la adyacente (vertical):</p>

        $$ \\tan\\theta = \\frac{v_x}{v_y} = \\frac{500}{1000} = 0{,}5 $$

        <p>Entonces:</p>
        $$ \\theta = \\arctan(0{,}5) \\approx 26{,}6^\\circ $$

        <p>Este es el ángulo que forma la velocidad (y por tanto la trayectoria inicial) de la bala con la línea vertical, visto desde la Tierra.</p>

        <p class="alert alert-success mt-3">
          <strong>Respuesta final:</strong> El ángulo que forma la bala con la vertical es aproximadamente $26{,}6^\\circ$.
        </p>
      `,
    },
  ],
  aceleracion: [
    {
      enunciado: `
        <p>Un guepardo acecha 20 m al este del escondite de un observador (figura 2-6a). En el tiempo $t = 0$, el guepardo ataca a un antílope y empieza a correr en línea recta. Durante los primeros 2.0 s del ataque, la coordenada $x$ del guepardo varía con el tiempo según la ecuación $x = 20\\,\\text{m} + (5.0\\,\\text{m/s}^2) t^2$.</p>

        <p>Obtenga:</p>
        <p><strong>a)</strong> El desplazamiento del guepardo entre $t_1 = 1.0\\,\\text{s}$ y $t_2 = 2.0\\,\\text{s}$.</p>
        <p><strong>b)</strong> Calcule la velocidad media en dicho intervalo.</p>
        <p><strong>c)</strong> Calcule la velocidad instantánea en $t_1 = 1.0\\,\\text{s}$ tomando $\\Delta t = 0.1\\,\\text{s}$, luego $\\Delta t = 0.01\\,\\text{s}$, luego $\\Delta t = 0.001\\,\\text{s}$.</p>
        <p><strong>d)</strong> Deduzca una expresión general para la velocidad instantánea en función del tiempo, y con ella calcule $v_x$ en $t = 1.0\\,\\text{s}$ y $t = 2.0\\,\\text{s}$.</p>
      `,
      solucion: `
        <div class="text-center my-4">
          <img src="/assets/guepardo.png" alt="Guepardo atacando" class="img-fluid" style="max-width: 50%; height: auto;">
          <p class="text-muted">Figura 2-6a: Guepardo en movimiento acelerado</p>
        </div>

        <p>El ejercicio describe el movimiento rectilíneo acelerado de un guepardo cuya posición sobre el eje $x$ viene dada por:</p>
        $$ x(t) = 20\\,\\text{m} + 5.0\\,\\text{m/s}^2\\,t^2 $$
        <p>durante los primeros $2.0\\,\\text{s}$ del ataque.</p>

        <h6 class="mt-4">a) Desplazamiento entre 1.0 s y 2.0 s</h6>
        <p><strong>Posición en $t_1 = 1.0\\,\\text{s}$:</strong></p>
        $$ x(1.0) = 20 + 5.0(1.0)^2 = 20 + 5.0(1) = 25\\,\\text{m} $$

        <p><strong>Posición en $t_2 = 2.0\\,\\text{s}$:</strong></p>
        $$ x(2.0) = 20 + 5.0(2.0)^2 = 20 + 5.0(4) = 40\\,\\text{m} $$

        <p><strong>Desplazamiento:</strong></p>
        $$ \\Delta x = x(2.0) - x(1.0) = 40 - 25 = 15\\,\\text{m} $$

        <h6 class="mt-4">b) Velocidad media en el intervalo</h6>
        <p>La velocidad media entre $t_1 = 1.0\\,\\text{s}$ y $t_2 = 2.0\\,\\text{s}$ es:</p>
        $$ v_{\\text{med}} = \\frac{\\Delta x}{\\Delta t} = \\frac{15\\,\\text{m}}{2.0 - 1.0\\,\\text{s}} = \\frac{15}{1.0} = 15\\,\\text{m/s} $$

        <h6 class="mt-4">c) Velocidad instantánea aproximada en $t_1 = 1.0\\,\\text{s}$</h6>
        <p>Se aproxima con el cociente incremental:</p>
        $$ v(t) \\approx \\frac{x(t + \\Delta t) - x(t)}{\\Delta t} $$
        <p>para distintos valores de $\\Delta t$.</p>

        <p><strong>1. Con $\\Delta t = 0.1\\,\\text{s}$:</strong></p>
        $$ x(1.0) = 25\\,\\text{m} $$
        $$ x(1.1) = 20 + 5(1.1)^2 = 20 + 5(1.21) = 26.05\\,\\text{m} $$
        $$ v \\approx \\frac{26.05 - 25}{0.1} = \\frac{1.05}{0.1} = 10.5\\,\\text{m/s} $$

        <p><strong>2. Con $\\Delta t = 0.01\\,\\text{s}$:</strong></p>
        $$ x(1.01) = 20 + 5(1.01)^2 \\approx 20 + 5(1.0201) = 25.1005\\,\\text{m} $$
        $$ v \\approx \\frac{25.1005 - 25}{0.01} = \\frac{0.1005}{0.01} = 10.05\\,\\text{m/s} $$

        <p><strong>3. Con $\\Delta t = 0.001\\,\\text{s}$:</strong></p>
        $$ x(1.001) = 20 + 5(1.001)^2 \\approx 20 + 5(1.002001) = 25.010005\\,\\text{m} $$
        $$ v \\approx \\frac{25.010005 - 25}{0.001} = \\frac{0.010005}{0.001} = 10.005\\,\\text{m/s} $$

        <p class="alert alert-info mt-3">Los valores se acercan a $10\\,\\text{m/s}$ conforme $\\Delta t$ disminuye.</p>

        <h6 class="mt-4">d) Expresión general de la velocidad instantánea y valores</h6>
        <p>La velocidad instantánea es la derivada de la posición:</p>
        $$ v_x(t) = \\frac{dx}{dt} = \\frac{d}{dt}\\left(20 + 5.0\\,t^2\\right) = 10.0\\,t $$

        <p><strong>Entonces:</strong></p>
        <ul>
          <li>En $t = 1.0\\,\\text{s}$:
            $$ v_x(1.0) = 10.0(1.0) = 10.0\\,\\text{m/s} $$
          </li>
          <li>En $t = 2.0\\,\\text{s}$:
            $$ v_x(2.0) = 10.0(2.0) = 20.0\\,\\text{m/s} $$
          </li>
        </ul>

        <p class="alert alert-success mt-3">
          <strong>Resumen:</strong><br>
          • Desplazamiento: $\\Delta x = 15\\,\\text{m}$<br>
          • Velocidad media: $v_{\\text{med}} = 15\\,\\text{m/s}$<br>
          • Velocidad instantánea aproximada en $t = 1.0\\,\\text{s}$: $\\approx 10\\,\\text{m/s}$<br>
          • Función de velocidad: $v_x(t) = 10t$<br>
          • $v_x(1.0\\,\\text{s}) = 10\\,\\text{m/s}$ y $v_x(2.0\\,\\text{s}) = 20\\,\\text{m/s}$
        </p>
      `,
    },
    {
      enunciado: `
        <p>Una astronauta sale de una nave espacial para probar una unidad personal de maniobras. Mientras se mueve en línea recta, su compañera a bordo mide su velocidad cada 2.0 s, empezando en el instante $t = 1.0$ s:</p>

        <table class="table table-bordered table-striped my-3">
          <thead>
            <tr>
              <th>$t$ (s)</th>
              <th>$v_x$ (m/s)</th>
              <th>$t$ (s)</th>
              <th>$v_x$ (m/s)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1.0</td><td>0.8</td><td>9.0</td><td>-0.4</td></tr>
            <tr><td>3.0</td><td>1.2</td><td>11.0</td><td>-1.0</td></tr>
            <tr><td>5.0</td><td>1.6</td><td>13.0</td><td>-1.6</td></tr>
            <tr><td>7.0</td><td>1.2</td><td>15.0</td><td>-0.8</td></tr>
          </tbody>
        </table>

        <p>Calcule la aceleración media y diga si la rapidez de la astronauta aumenta o disminuye para cada uno de estos intervalos:</p>
        <p><strong>a)</strong> $t_1 = 1.0$ s a $t_2 = 3.0$ s</p>
        <p><strong>b)</strong> $t_1 = 5.0$ s a $t_2 = 7.0$ s</p>
        <p><strong>c)</strong> $t_1 = 9.0$ s a $t_2 = 11.0$ s</p>
        <p><strong>d)</strong> $t_1 = 13.0$ s a $t_2 = 15.0$ s</p>
      `,
      solucion: `
        <div class="text-center my-4">
          <img src="/assets/astronauta.png" alt="Astronauta en el espacio" class="img-fluid" style="max-width: 70%; height: auto;">
          <p class="text-muted">Figura: Astronauta probando unidad personal de maniobras</p>
        </div>

        <p>La aceleración media en cada intervalo se obtiene con:</p>
        $$ a_{\\text{med}} = \\frac{v_2 - v_1}{t_2 - t_1} $$

        <p>Para este problema, el intervalo de cada inciso es $\\Delta t = 2.0\\,\\text{s}$, así que basta con restar velocidades consecutivas de la tabla y dividir entre 2; luego se analiza si la rapidez aumenta o disminuye según si la velocidad y la aceleración tienen el mismo signo o signos opuestos.</p>

        <h6 class="mt-4">Cálculo de aceleraciones medias</h6>

        <p><strong>a) De $t = 1.0$ s a $t = 3.0$ s:</strong></p>
        $$ a_{\\text{med}} = \\frac{1.2 - 0.8}{2.0} = \\frac{0.4}{2.0} = +0.20\\,\\text{m/s}^2 $$
        <p>Como $v_x > 0$ y $a > 0$ (mismo signo), la <strong>rapidez aumenta</strong>.</p>

        <p><strong>b) De $t = 5.0$ s a $t = 7.0$ s:</strong></p>
        $$ a_{\\text{med}} = \\frac{1.2 - 1.6}{2.0} = \\frac{-0.4}{2.0} = -0.20\\,\\text{m/s}^2 $$
        <p>Como $v_x > 0$ y $a < 0$ (signos opuestos), la <strong>rapidez disminuye</strong>.</p>

        <p><strong>c) De $t = 9.0$ s a $t = 11.0$ s:</strong></p>
        $$ a_{\\text{med}} = \\frac{-1.0 - (-0.4)}{2.0} = \\frac{-0.6}{2.0} = -0.30\\,\\text{m/s}^2 $$
        <p>Como $v_x < 0$ y $a < 0$ (mismo signo), la <strong>rapidez aumenta</strong>.</p>

        <p><strong>d) De $t = 13.0$ s a $t = 15.0$ s:</strong></p>
        $$ a_{\\text{med}} = \\frac{-0.8 - (-1.6)}{2.0} = \\frac{0.8}{2.0} = +0.40\\,\\text{m/s}^2 $$
        <p>Como $v_x < 0$ y $a > 0$ (signos opuestos), la <strong>rapidez disminuye</strong>.</p>

        <h6 class="mt-4">Resumen en tabla</h6>
        <table class="table table-bordered my-3">
          <thead>
            <tr>
              <th>Intervalo (s)</th>
              <th>$v_1$ (m/s)</th>
              <th>$v_2$ (m/s)</th>
              <th>$a_{\\text{med}}$ (m/s²)</th>
              <th>Cambio de rapidez</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1.0 – 3.0</td><td>0.8</td><td>1.2</td><td>+0.20</td><td>Aumenta</td></tr>
            <tr><td>5.0 – 7.0</td><td>1.6</td><td>1.2</td><td>−0.20</td><td>Disminuye</td></tr>
            <tr><td>9.0 – 11.0</td><td>−0.4</td><td>−1.0</td><td>−0.30</td><td>Aumenta</td></tr>
            <tr><td>13.0 – 15.0</td><td>−1.6</td><td>−0.8</td><td>+0.40</td><td>Disminuye</td></tr>
          </tbody>
        </table>

        <div class="alert alert-info mt-3">
          <strong>Regla importante:</strong> La rapidez aumenta cuando velocidad y aceleración tienen el mismo signo, y disminuye cuando tienen signos opuestos.
        </div>

        <div class="text-center my-4">
          <img src="/assets/grafica-veloc.png" alt="Gráfica de velocidad y aceleración contra tiempo" class="img-fluid" style="max-width: 80%; height: auto;">
          <p class="text-muted">Figura 2.10: Gráfica de velocidad contra tiempo (arriba) y aceleración media contra tiempo (abajo) para la astronauta</p>
        </div>
      `,
    },
    {
      enunciado: `
        <p>Suponga que la velocidad $v_x$ del auto en la figura 2.11 en el tiempo $t$ está dada por:</p>
        $$ v_x = 60\\,\\text{m/s} + (0.50\\,\\text{m/s}^3)t^2 $$

        <p>Calcule:</p>
        <p><strong>a)</strong> El cambio de velocidad del auto en el intervalo entre $t_1 = 1.0$ s y $t_2 = 3.0$ s.</p>
        <p><strong>b)</strong> La aceleración media en este intervalo.</p>
        <p><strong>c)</strong> Obtenga la aceleración instantánea en $t_1 = 1.0$ s tomando $\\Delta t$ primero como 0.1 s, después como 0.01 s, luego como 0.001 s.</p>
        <p><strong>d)</strong> Deduzca una expresión para la aceleración instantánea en cualquier instante y úsela para calcular la aceleración en $t = 1.0$ s y $t = 3.0$ s.</p>
      `,
      solucion: `
        <div class="text-center my-4">
          <img src="/assets/autito.png" alt="Auto en movimiento acelerado" class="img-fluid" style="max-width: 60%; height: auto;">
          <p class="text-muted">Ejemplo 2.3: Aceleraciones media e instantánea</p>
        </div>

        <p>La velocidad del auto está dada por $v_x(t) = 60\\,\\text{m/s} + (0.50\\,\\text{m/s}^3)t^2$. Con esta expresión se puede hallar el cambio de velocidad, la aceleración media y la aceleración instantánea usando cálculo básico.</p>

        <h6 class="mt-4">a) Cambio de velocidad</h6>
        <p>La velocidad es $v_x(t) = 60 + 0.50t^2$ (m/s).</p>

        <p><strong>En $t_1 = 1.0$ s:</strong></p>
        $$ v_1 = v_x(1) = 60 + 0.50(1)^2 = 60.5\\,\\text{m/s} $$

        <p><strong>En $t_2 = 3.0$ s:</strong></p>
        $$ v_2 = v_x(3) = 60 + 0.50(3)^2 = 60 + 4.5 = 64.5\\,\\text{m/s} $$

        <p><strong>Cambio de velocidad:</strong></p>
        $$ \\Delta v = v_2 - v_1 = 64.5 - 60.5 = 4.0\\,\\text{m/s} $$

        <h6 class="mt-4">b) Aceleración media en 1–3 s</h6>
        $$ a_{\\text{med}} = \\frac{\\Delta v}{\\Delta t} = \\frac{v_2 - v_1}{t_2 - t_1} = \\frac{4.0\\,\\text{m/s}}{3.0 - 1.0\\,\\text{s}} = 2.0\\,\\text{m/s}^2 $$
        <p>Por tanto, la aceleración media entre 1.0 s y 3.0 s es $2.0\\,\\text{m/s}^2$.</p>

        <h6 class="mt-4">c) Aceleración instantánea numérica en $t = 1.0$ s</h6>
        <p>Se usa la definición $a \\approx \\Delta v/\\Delta t$ con intervalos cada vez más pequeños alrededor de $t = 1$.</p>

        <p><strong>1. Para $\\Delta t = 0.1$ s:</strong></p>
        $$ v(1.1) = 60 + 0.50(1.1)^2 = 60.605\\,\\text{m/s} $$
        $$ a \\approx \\frac{60.605 - 60.5}{0.1} = 1.05\\,\\text{m/s}^2 $$

        <p><strong>2. Para $\\Delta t = 0.01$ s:</strong></p>
        $$ v(1.01) = 60 + 0.50(1.01)^2 \\approx 60.50505\\,\\text{m/s} $$
        $$ a \\approx \\frac{60.50505 - 60.5}{0.01} \\approx 1.005\\,\\text{m/s}^2 $$

        <p><strong>3. Para $\\Delta t = 0.001$ s:</strong></p>
        $$ v(1.001) = 60 + 0.50(1.001)^2 \\approx 60.5005005\\,\\text{m/s} $$
        $$ a \\approx \\frac{60.5005005 - 60.5}{0.001} \\approx 1.0005\\,\\text{m/s}^2 $$

        <p class="alert alert-info">Al hacer $\\Delta t$ muy pequeño, el valor se acerca a $1.0\\,\\text{m/s}^2$ en $t = 1$ s.</p>

        <h6 class="mt-4">d) Expresión de la aceleración instantánea y valores en 1 s y 3 s</h6>
        <p>La aceleración instantánea es la derivada de la velocidad:</p>
        $$ a(t) = \\frac{dv_x}{dt} = \\frac{d}{dt}\\left(60 + 0.50t^2\\right) = 1.0t \\quad (\\text{m/s}^2) $$

        <p><strong>Entonces:</strong></p>
        <ul>
          <li>$a(1) = 1.0(1) = 1.0\\,\\text{m/s}^2$</li>
          <li>$a(3) = 1.0(3) = 3.0\\,\\text{m/s}^2$</li>
        </ul>

        <h6 class="mt-4">Resumen numérico</h6>
        <table class="table table-bordered my-3">
          <thead>
            <tr>
              <th>Magnitud</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Cambio de velocidad $\\Delta v$</td><td>$4.0\\,\\text{m/s}$</td></tr>
            <tr><td>Aceleración media (1–3 s)</td><td>$2.0\\,\\text{m/s}^2$</td></tr>
            <tr><td>Aceleración instantánea $a(t)$</td><td>$a(t) = t\\,\\text{m/s}^2$</td></tr>
            <tr><td>$a(1.0\\,\\text{s})$</td><td>$1.0\\,\\text{m/s}^2$</td></tr>
            <tr><td>$a(3.0\\,\\text{s})$</td><td>$3.0\\,\\text{m/s}^2$</td></tr>
          </tbody>
        </table>

        <div class="alert alert-success mt-3">
          <strong>Observación:</strong> La aceleración instantánea aumenta linealmente con el tiempo según $a(t) = t$, mientras que la aceleración media en un intervalo es el promedio de las aceleraciones instantáneas en ese intervalo.
        </div>
      `,
    },
    {
      enunciado: `
        <p>Un robot llamado Fred se mueve inicialmente a 2.20 m/s por un pasillo en una terminal espacial. Después acelera a 4.80 m/s en un tiempo de 0.20 s. Determine el tamaño o la <em>magnitud</em> de su aceleración media a lo largo de la trayectoria recorrida.</p>
      `,
      solucion: `
        <p>La aceleración media se calcula con la expresión:</p>
        $$ a_{\\text{med}}=\\frac{v_f - v_i}{\\Delta t} $$

        <div class="text-center my-4">
          <img src="/assets/robot.png" alt="Robot Fred" class="img-fluid" style="max-width: 60%; height: auto;">
          <p class="text-muted">Figura: Robot Fred moviéndose por el pasillo</p>
        </div>

        <p>donde $v_i=2.20\\ \\text{m/s}$, $v_f=4.80\\ \\text{m/s}$ y $\\Delta t=0.20\\ \\text{s}$.</p>

        <p><strong>Sustituyendo:</strong></p>
        $$ a_{\\text{med}}=\\frac{4.80-2.20}{0.20} =\\frac{2.60}{0.20} =13\\ \\text{m/s}^2 $$

        <p>Por lo tanto, la magnitud de la aceleración media del robot a lo largo de la trayectoria recorrida es:</p>
        $$ \\boxed{13\\ \\text{m/s}^2} $$

        <div class="alert alert-success mt-3">
          <strong>Respuesta:</strong> La aceleración media del robot Fred es $13\\ \\text{m/s}^2$.
        </div>
      `,
    },
    {
      enunciado: `
        <p>Un objeto parte del reposo con una aceleración constante de $8.00\\ \\text{m/s}^2$ a lo largo de una línea recta. Encuentre:</p>
        <p><strong>a)</strong> la rapidez después de $5.00\\ \\text{s}$</p>
        <p><strong>b)</strong> la rapidez media para el intervalo de $5.00\\ \\text{s}$</p>
        <p><strong>c)</strong> la distancia total recorrida en los $5.00\\ \\text{s}$</p>
      `,
      solucion: `
        <p>El movimiento es rectilíneo uniformemente acelerado (MRUA), con velocidad inicial cero, aceleración constante de $8.00\\ \\text{m/s}^2$ y tiempo $t = 5.00\\ \\text{s}$.</p>

        <h6 class="mt-4">Datos</h6>
        <ul>
          <li>$v_0 = 0\\ \\text{m/s}$ (parte del reposo)</li>
          <li>$a = 8.00\\ \\text{m/s}^2$</li>
          <li>$t = 5.00\\ \\text{s}$</li>
        </ul>

        <h6 class="mt-4">a) Rapidez después de 5.00 s</h6>
        <p>Se usa la ecuación de MRUA $v = v_0 + a t$:</p>
        $$ v = 0 + (8.00)(5.00) = 40.0\\ \\text{m/s} $$
        <p>Por lo tanto, la rapidez al cabo de $5.00\\ \\text{s}$ es $40.0\\ \\text{m/s}$.</p>

        <h6 class="mt-4">b) Rapidez media en 5.00 s</h6>
        <p>Para aceleración constante, la rapidez media es el promedio entre rapidez inicial y final: $\\bar{v} = \\frac{v_0 + v}{2}$.</p>
        $$ \\bar{v} = \\frac{0 + 40.0}{2} = 20.0\\ \\text{m/s} $$

        <h6 class="mt-4">c) Distancia total recorrida</h6>
        <p>Se usa la ecuación $x = x_0 + v_0 t + \\frac{1}{2} a t^2$:</p>
        $$ x = 0 + 0\\cdot 5.00 + \\frac{1}{2}(8.00)(5.00)^2 $$
        $$ x = 4.00 \\times 25.0 = 100\\ \\text{m} $$
        <p>La distancia total recorrida en los $5.00\\ \\text{s}$ es $100\\ \\text{m}$.</p>

        <div class="text-center my-4">
          <img src="/assets/bus1.png" alt="Objeto con aceleración constante" class="img-fluid" style="max-width: 80%; height: auto;">
          <p class="text-muted">Figura: Enunciado del problema</p>
        </div>
      `,
    },
    {
      enunciado: `
        <p>La rapidez de un camión se incrementa uniformemente desde $15\\ \\text{km/h}$ hasta $60\\ \\text{km/h}$ en $20\\ \\text{s}$. Determine:</p>
        <p><strong>a)</strong> la rapidez promedio</p>
        <p><strong>b)</strong> la aceleración</p>
        <p><strong>c)</strong> la distancia recorrida</p>
        <p>todo en unidades de metros y segundos.</p>
      `,
      solucion: `
        <p>La situación describe un movimiento rectilíneo uniformemente acelerado: la rapidez pasa de $15\\ \\text{km/h}$ a $60\\ \\text{km/h}$ en $20\\ \\text{s}$. Se pide rapidez promedio, aceleración y distancia en unidades del SI.</p>

        <h6 class="mt-4">Conversión de unidades</h6>
        <p>Primero se convierten las velocidades a m/s usando que $1\\ \\text{km/h} = \\frac{1}{3.6}\\ \\text{m/s}$.</p>
        <ul>
          <li>Rapidez inicial:
            $$ v_i = 15\\ \\text{km/h} = \\frac{15}{3.6} \\approx 4.17\\ \\text{m/s} $$
          </li>
          <li>Rapidez final:
            $$ v_f = 60\\ \\text{km/h} = \\frac{60}{3.6} \\approx 16.67\\ \\text{m/s} $$
          </li>
        </ul>

        <h6 class="mt-4">a) Rapidez promedio</h6>
        <p>Con aceleración constante, la rapidez promedio es el promedio aritmético de $v_i$ y $v_f$.</p>
        $$ v_{\\text{prom}} = \\frac{v_i + v_f}{2} = \\frac{4.17 + 16.67}{2} \\approx 10.42\\ \\text{m/s} $$

        <h6 class="mt-4">b) Aceleración</h6>
        <p>Se usa la ecuación $a = \\frac{v_f - v_i}{\\Delta t}$.</p>
        $$ a = \\frac{16.67 - 4.17}{20} = \\frac{12.50}{20} \\approx 0.625\\ \\text{m/s}^2 $$

        <h6 class="mt-4">c) Distancia recorrida</h6>
        <p>En MRUA, la distancia se puede hallar como $d = v_{\\text{prom}} \\cdot t$, porque la rapidez promedio multiplicada por el tiempo da el espacio recorrido.</p>
        $$ d = 10.42\\ \\text{m/s} \\times 20\\ \\text{s} \\approx 208.4\\ \\text{m} $$

        <p class="mt-3">Por lo tanto:</p>
        <ul>
          <li>Rapidez promedio: $10.4\\ \\text{m/s}$ (aprox.).</li>
          <li>Aceleración: $0.625\\ \\text{m/s}^2$.</li>
          <li>Distancia recorrida: $2.08\\times10^2\\ \\text{m}$ (unos $208\\ \\text{m}$).</li>
        </ul>

        <div class="text-center my-4">
          <img src="/assets/scania.png" alt="Camión Scania" class="img-fluid" style="max-width: 80%; height: auto;">
          <p class="text-muted">Figura: Camión Scania acelerando</p>
        </div>
      `,
    },
    {
      enunciado: `
        <p>El movimiento vertical de un objeto está graficado en la figura 2-2. Describa su movimiento cualitativamente y calcule la velocidad instantánea en los puntos $A$, $B$ y $C$.</p>

        <div class="text-center my-4">
          <img src="/assets/grafica_tangente.png" alt="Gráfica desplazamiento vs tiempo" class="img-fluid" style="max-width: 60%; height: auto;">
          <p class="text-muted">Figura 2-2: Desplazamiento a lo largo del eje y vs Tiempo</p>
        </div>
      `,
      solucion: `
        <p>El gráfico muestra la posición vertical $y$ de un objeto en función del tiempo $t$. La velocidad instantánea en cada punto es la pendiente de la recta tangente a la curva $y(t)$ en ese punto, es decir $v = \\Delta y / \\Delta t$ tomando el triángulo dibujado alrededor de cada punto.</p>

        <h6 class="mt-4">Descripción cualitativa del movimiento</h6>
        <ul>
          <li>Desde $t=0$ hasta cerca del punto $B$, la curva sube cada vez más lentamente: el objeto se mueve hacia arriba, pero su velocidad disminuye (aceleración hacia abajo).</li>
          <li>En las cercanías de $B$ la curva es casi horizontal: allí el objeto alcanza su altura máxima y su velocidad instantánea es aproximadamente cero.</li>
          <li>Después de $B$ la curva desciende y se hace más inclinada: el objeto baja y su rapidez aumenta en sentido hacia abajo (velocidad negativa si se toma hacia arriba como positivo).</li>
        </ul>

        <h6 class="mt-4">Velocidad en el punto A</h6>
        <p>En $A$ se traza un triángulo rectángulo cuyo cateto horizontal es $\\Delta t_A$ (lectura del eje tiempo) y el vertical es $\\Delta y_A$ (lectura del eje desplazamiento). La velocidad instantánea se aproxima como:</p>
        $$ v_A \\approx \\frac{\\Delta y_A}{\\Delta t_A} $$
        <p>Usando los valores que se leen de la gráfica (la pendiente es positiva y bastante grande).</p>

        <h6 class="mt-4">Velocidad en el punto B</h6>
        <p>En $B$ la recta tangente es prácticamente horizontal, por lo que $\\Delta y_B \\approx 0$ aunque $\\Delta t_B \\neq 0$.</p>
        $$ v_B \\approx 0\\ \\text{cm/s} $$

        <h6 class="mt-4">Velocidad en el punto C</h6>
        <p>En $C$ el triángulo dibujado tiene pendiente negativa: $\\Delta y_C$ es negativo mientras que $\\Delta t_C$ es positivo. La velocidad es:</p>
        $$ v_C \\approx \\frac{\\Delta y_C}{\\Delta t_C} $$
        <p>que numéricamente resulta de varios $\\text{cm/s}$ negativos (valor de magnitud similar al de $A$, pero con signo opuesto).</p>

        <p class="alert alert-info mt-3">
          <strong>Resumen:</strong> Se lee cada triángulo de la gráfica y se divide su cambio vertical entre el cambio horizontal para obtener la velocidad instantánea en $A$, $B$ y $C$.
        </p>
      `,
    },
    {
      enunciado: `
        <p>Se deja caer una pelota, inicialmente en reposo, desde una altura de 50 m sobre el nivel del suelo.</p>
        <p><strong>a)</strong> ¿Cuál será la rapidez de la pelota justo en el momento anterior al choque contra el suelo?</p>
        <p><strong>b)</strong> ¿Cuánto tiempo requiere para llegar al suelo?</p>

        <div class="text-center my-4">
          <img src="/assets/futbol.png" alt="Caída libre" class="img-fluid" style="max-width: 60%; height: auto;">
          <p class="text-muted">Figura: Pelota en caída libre desde 50 m</p>
        </div>
      `,
      solucion: `
        <p>El ejercicio describe una caída libre desde 50 m, con velocidad inicial cero y aceleración constante $g = 9.81\\ \\text{m/s}^2$ hacia abajo. La rapidez justo antes de chocar con el suelo es aproximadamente $31.3\\ \\text{m/s}$ y el tiempo de caída es alrededor de $3.19\\ \\text{s}$.</p>

        <h6 class="mt-4">Datos e hipótesis</h6>
        <ul>
          <li>Altura inicial: $y_0 = 50\\ \\text{m}$.</li>
          <li>Velocidad inicial: $v_0 = 0\\ \\text{m/s}$ (se “deja caer” desde el reposo).</li>
          <li>Aceleración: $a = g = 9.81\\ \\text{m/s}^2$ hacia abajo (sin rozamiento con el aire).</li>
          <li>Se toma positiva la dirección de la caída, es decir, hacia abajo, por lo que todas las magnitudes serán positivas.</li>
        </ul>

        <h6 class="mt-4">Ecuaciones de MRUA para caída libre</h6>
        <p>La caída libre es un caso de movimiento rectilíneo uniformemente acelerado (MRUA), donde se usan estas dos ecuaciones cinemáticas:</p>
        <ul>
          <li>Posición en función del tiempo:<br>
          $$ y = y_0 + v_0 t + \\tfrac{1}{2} a t^2 $$</li>
          <li>Relación entre velocidades y desplazamiento:<br>
          $$ v^2 = v_0^2 + 2 a (y - y_0) $$</li>
        </ul>
        <p>Como $v_0 = 0$, estas expresiones se simplifican y permiten hallar primero el tiempo y luego la velocidad, o viceversa.</p>

        <h6 class="mt-4">Cálculo del tiempo de caída</h6>
        <p>Se sabe que el cuerpo recorre 50 m hasta el suelo; tomando la dirección de caída como positiva, el desplazamiento es $y - y_0 = 50\\ \\text{m}$. Con $v_0 = 0$, la ecuación de posición queda:</p>
        $$ 50 = \\tfrac{1}{2} \\cdot 9.81 \\cdot t^2 $$

        <p>Despejando $t$:</p>
        $$ t^2 = \\frac{2 \\cdot 50}{9.81} \\approx 10.19 $$
        $$ t \\approx 3.19\\ \\text{s} $$
        <p>Este es el tiempo que tarda la pelota en llegar al suelo.</p>

        <h6 class="mt-4">Cálculo de la rapidez final</h6>
        <p>Usando la ecuación que relaciona velocidad y desplazamiento, con $v_0 = 0$ y desplazamiento de 50 m:</p>
        $$ v^2 = 0 + 2 \\cdot 9.81 \\cdot 50 $$
        $$ v^2 \\approx 981, \\quad v \\approx 31.3\\ \\text{m/s} $$

        <p class="alert alert-success mt-3">
          <strong>Resumen:</strong> Esa es la rapidez justo antes del impacto, dirigida hacia abajo (la magnitud es 31.3 m/s).
        </p>

        <div class="text-center my-4">

        </div>
      `,
    },
    {
      enunciado: `
        <p>Un esquiador parte del reposo y se desliza $9.0\\ \\text{m}$ hacia abajo, por una pendiente, en $3.0\\ \\text{s}$. ¿Cuánto tiempo, después del inicio, el esquiador habrá adquirido una velocidad de $24\\ \\text{m/s}$? Considere la aceleración constante y la trayectoria recta.</p>
      `,
      solucion: `
        <p>El esquiador tiene una aceleración constante de $2\\ \\text{m/s}^2$ y tarda $12\\ \\text{s}$ desde que parte del reposo en alcanzar una velocidad de $24\\ \\text{m/s}$.</p>
         <img src="/assets/esquiador.png" alt="Esquiador" class="img-fluid" style="max-width: 60%; height: auto;">
        <h6 class="mt-4">Datos del problema</h6>
        <ul>
          <li>Parte del reposo: $v_0 = 0\\ \\text{m/s}$.</li>
          <li>Recorre $9.0\\ \\text{m}$ en $3.0\\ \\text{s}$ por una pendiente recta.</li>
          <li>Movimiento rectilíneo uniformemente acelerado (aceleración constante).</li>
        </ul>

        <h6 class="mt-4">Paso 1: hallar la aceleración</h6>
        <p>Se usa la ecuación de posición para MRUA:</p>
        $$ x = x_0 + v_0 t + \\tfrac{1}{2} a t^2 $$
        <p>Tomando $x_0 = 0$, $v_0 = 0$, $x = 9\\ \\text{m}$ y $t = 3\\ \\text{s}$:</p>
        $$ 9 = \\tfrac{1}{2} a (3)^2 = \\tfrac{1}{2} a \\cdot 9 $$
        $$ 9 = 4.5 a \\quad \\Rightarrow \\quad a = \\frac{9}{4.5} = 2\\ \\text{m/s}^2 $$
        <p>Así se obtiene que la aceleración del esquiador a lo largo de la pendiente es $a = 2\\ \\text{m/s}^2$.</p>

        <h6 class="mt-4">Paso 2: tiempo para llegar a 24 m/s</h6>
        <p>Ahora se usa la ecuación de velocidad en MRUA:</p>
        $$ v = v_0 + a t $$
        <p>Se sabe que $v = 24\\ \\text{m/s}$, $v_0 = 0$ y $a = 2\\ \\text{m/s}^2$:</p>
        $$ 24 = 0 + 2 t \\quad \\Rightarrow \\quad t = \\frac{24}{2} = 12\\ \\text{s} $$
        <p>Por tanto, el esquiador alcanzará una velocidad de $24\\ \\text{m/s}$ a los $12\\ \\text{s}$ de iniciado el movimiento.</p>
      `,
    },

    {
      enunciado: `
        <p>Un automóvil que se mueve en un camino recto a 30 m/s disminuye su rapidez uniformemente hasta un valor de 10 m/s en un tiempo de 5.0 s. Determine:</p>
        <p><strong>a)</strong> la aceleración del automóvil</p>
        <p><strong>b)</strong> la distancia que recorre en el tercer segundo</p>
      `,
      solucion: `
        <p><strong>Respuesta:</strong> La aceleración es $-4\\,\\text{m/s}^2$ y la distancia recorrida en el tercer segundo es $20\\,\\text{m}$.</p>
<div class="text-center my-4">
          <img src="/assets/auto1.png" alt="Automóvil frenando" class="img-fluid" style="max-width: 60%; height: auto;">
          <p class="text-muted">Figura: Automóvil desacelerando</p>
        </div>
        <h6 class="mt-4">Datos y fórmulas</h6>
        <ul>
          <li>Velocidad inicial: $v_0 = 30\\,\\text{m/s}$.</li>
          <li>Velocidad final: $v_f = 10\\,\\text{m/s}$.</li>
          <li>Tiempo total: $t = 5\\,\\text{s}$.</li>
          <li>Movimiento rectilíneo uniformemente acelerado (MRUA), se usan:
            <ul>
              <li>$a = \\dfrac{v_f - v_0}{t}$.</li>
              <li>$x(t) = v_0 t + \\dfrac{1}{2} a t^2$.</li>
            </ul>
          </li>
        </ul>

        <h6 class="mt-4">a) Aceleración del automóvil</h6>
        <p>Se calcula la aceleración promedio (constante) usando la variación de velocidad:</p>
        $$ a = \\frac{10 - 30}{5} = \\frac{-20}{5} = -4\\,\\text{m/s}^2 $$
        <p>El signo negativo indica que la velocidad disminuye (es una desaceleración).</p>

        <h6 class="mt-4">b) Distancia en el tercer segundo</h6>
        <p>El “tercer segundo” es el intervalo que va de $t=2$ s a $t=3$ s.</p>
        <p>Primero se calcula la posición en $t=2$ s:</p>
        $$ x(2) = 30(2) + \\frac{1}{2}(-4)(2^2) = 60 - 8 = 52\\,\\text{m} $$
        <p>Luego la posición en $t=3$ s:</p>
        $$ x(3) = 30(3) + \\frac{1}{2}(-4)(3^2) = 90 - 18 = 72\\,\\text{m} $$
        <p>La distancia recorrida durante el tercer segundo es la diferencia de posiciones:</p>
        $$ \\Delta x_{3\\text{er s}} = x(3) - x(2) = 72 - 52 = 20\\,\\text{m} $$
        <p class="alert alert-info mt-3">
          <strong>Nota:</strong> Si se considera redondeo con más precisión numérica en algunos textos, puede aparecer como aproximadamente 23 m según el método de cálculo, pero usando estas fórmulas básicas la distancia en ese intervalo resulta 20 m.
        </p>


      `,
    },
    {
      enunciado: `
        <p>La rapidez de un tren se reduce uniformemente desde 15 m/s hasta 7 m/s al recorrer una distancia de 90 m. Determine:</p>
        <p><strong>a)</strong> la aceleración</p>
        <p><strong>b)</strong> la distancia que recorrerá antes de alcanzar el reposo, si se mantiene la desaceleración</p>
      `,
      solucion: `
        <p><strong>Respuesta:</strong> La aceleración es aprox. $-0.98\\,\\text{m/s}^2$ y recorrerá unos $25\\,\\text{m}$ más hasta detenerse.</p>
<div class="text-center my-4">
          <img src="/assets/locomotora.png" alt="Tren desacelerando" class="img-fluid" style="max-width: 60%; height: auto;">
          <p class="text-muted">Figura: Tren frenando</p>
        </div>
        <h6 class="mt-4">Datos y ecuación útil</h6>
        <ul>
          <li>Velocidad inicial: $v_0 = 15\\,\\text{m/s}$.</li>
          <li>Velocidad intermedia (después de 90 m): $v = 7\\,\\text{m/s}$.</li>
          <li>Desplazamiento en ese tramo: $\\Delta x = 90\\,\\text{m}$.</li>
          <li>Movimiento rectilíneo con aceleración constante, se usa:
            $$ v^2 = v_0^2 + 2a\\Delta x $$
          </li>
        </ul>

        <h6 class="mt-4">a) Cálculo de la aceleración</h6>
        <p>Sustituyendo los datos:</p>
        $$ 7^2 = 15^2 + 2a(90) $$
        $$ 49 = 225 + 180a $$
        $$ 180a = 49 - 225 = -176 $$
        $$ a = \\frac{-176}{180} \\approx -0.98\\,\\text{m/s}^2 $$
        <p>El signo negativo indica frenado.</p>

        <h6 class="mt-4">b) Distancia hasta detenerse</h6>
        <p>Tomando como estado inicial $v_0 = 15\\,\\text{m/s}$ y estado final el reposo ($v_f = 0$):</p>
        $$ 0^2 = 15^2 + 2(-0.98)\\,\\Delta x_{\\text{total}} $$
        $$ 0 = 225 - 1.96\\,\\Delta x_{\\text{total}} $$
        $$ \\Delta x_{\\text{total}} = \\frac{225}{1.96} \\approx 115\\,\\text{m} $$
        <p>Como ya recorrió 90 m, la distancia adicional es:</p>
        $$ \\Delta x_{\\text{adicional}} = 115 - 90 \\approx 25\\,\\text{m} $$


      `,
    },
    {
      enunciado: `
        <p>Una piedra se lanza verticalmente hacia arriba y se eleva a una altura de 20 m. ¿Con qué rapidez se lanzó?</p>
        <div class="text-center my-4">
          <img src="/assets/niño-piedra.png" alt="Lanzamiento vertical" class="img-fluid" style="max-width: 60%; height: auto;">
          <p class="text-muted">Figura: Lanzamiento vertical hacia arriba</p>
        </div>
      `,
      solucion: `
        <p><strong>Respuesta:</strong> La piedra debe haberse lanzado con una rapidez de aproximadamente $20\\,\\text{m/s}$ hacia arriba.</p>

        <h6 class="mt-4">Datos y modelo físico</h6>
        <ul>
          <li>Altura máxima alcanzada: $h = 20\\,\\text{m}$.</li>
          <li>En la altura máxima, la velocidad instantánea es $v = 0\\,\\text{m/s}$ porque la piedra se detiene un instante antes de caer.</li>
          <li>Movimiento vertical con aceleración constante igual a la gravedad: $a = -g \\approx -9.8\\,\\text{m/s}^2$ (negativa porque apunta hacia abajo).</li>
          <li>Se usa la ecuación cinemática:
            $$ v^2 = v_0^2 + 2a h $$
          </li>
        </ul>

        <h6 class="mt-4">Cálculo de la rapidez inicial</h6>
        <p>En la altura máxima $v = 0$, por lo que:</p>
        $$ 0 = v_0^2 + 2(-9.8)(20) $$
        $$ 0 = v_0^2 - 392 $$
        $$ v_0^2 = 392 $$
        $$ v_0 = \\sqrt{392} \\approx 19.8\\,\\text{m/s} $$
        <p>Redondeando, la piedra se lanzó con una rapidez de $20\\,\\text{m/s}$ hacia arriba.</p>
      `,
    },
    {
      enunciado: `
        <p>Una piedra se lanza hacia arriba con una rapidez de 20 m/s. En su camino hacia abajo es atrapada en un punto situado a 5.0 m por encima del lugar desde donde se lanzó.</p>
        <p><strong>a)</strong> ¿Qué rapidez tenía cuando fue atrapada?</p>
        <p><strong>b)</strong> ¿Cuánto tiempo tomó el recorrido?</p>
        <div class="text-center my-4">
          <img src="/assets/niño-piedra2.png" alt="Piedra atrapada" class="img-fluid" style="max-width: 60%; height: auto;">
          <p class="text-muted">Figura: Piedra lanzada y atrapada más arriba</p>
        </div>
      `,
      solucion: `
        <p><strong>Respuesta:</strong> La rapidez al ser atrapada es $17\\,\\text{m/s}$ (hacia abajo).</p>

        <p>El desarrollo aplica la <strong>misma ecuación de movimiento vertical</strong>, pero ahora para o el tramo “desde que se lanza hasta que se atrapa la piedra” (considerando estados inicial y final).</p>

        <h6 class="mt-4">Qué representan los datos</h6>
        <p>En el texto se fija el eje positivo hacia arriba, de modo que:</p>
        <ul>
          <li>Velocidad inicial: $v_{yi} = 20\\,\\text{m/s}$ (hacia arriba).</li>
          <li>Desplazamiento total: $y = +5.0\\,\\text{m}$ (posición final 5 m sobre la inicial).</li>
          <li>Aceleración: $a = -9.81\\,\\text{m/s}^2$ (gravedad hacia abajo).</li>
        </ul>

        <h6 class="mt-4">Ecuación usada y sustitución</h6>
        <p>Se usa la ecuación cinemática:</p>
        $$ v_{yf}^2 = v_{yi}^2 + 2 a y $$

        <p>Sustituyendo:</p>
        $$ v_{yf}^2 = (20)^2 + 2(-9.81)(5.0) $$
        $$ v_{yf}^2 = 400 - 98.1 \\approx 302\\,\\text{(m}^2/\\text{s}^2) $$

        <p>Extrayendo raíz cuadrada:</p>
        $$ v_{yf} = \\pm \\sqrt{302} \\approx \\pm 17\\,\\text{m/s} $$

        <h6 class="mt-4">Por qué se elige el signo negativo</h6>
        <p>Matemáticamente hay dos soluciones, pero físicamente:</p>
        <ul>
          <li>El signo positivo sería velocidad hacia arriba (cuando sube).</li>
          <li>El signo negativo es velocidad hacia abajo (cuando baja).</li>
        </ul>
        <p>Como el enunciado dice que es atrapada "en su camino hacia abajo", la velocidad es descendente, correspondiente al sentido negativo.</p>
        <p>Por eso $v_{yf} = -17\\,\\text{m/s}$. La rapidez es el valor absoluto, $17\\,\\text{m/s}$.</p>
      `,
    },
    {
      enunciado: `
        <p>Se lanza una pelota verticalmente hacia arriba en la Luna y regresa a su punto de partida en 4.0 s. La aceleración debida a la gravedad en ese lugar es de 1.60 m/s². Encuentre la rapidez inicial.</p>
      `,
      solucion: `
        <p><strong>Respuesta:</strong> La rapidez inicial es $3.2\\,\\text{m/s}$.</p>
<div class="text-center my-4">
          <img src="/assets/balon-luna.png" alt="Piedra atrapada" class="img-fluid" style="max-width: 60%; height: auto;">
          <p class="text-muted">Figura:Balón lanzado en la luna</p>
        </div>
        <p>Considere el ascenso como positivo.</p>
        <p>Para el recorrido de principio a fin:</p>
        <ul>
          <li>El desplazamiento es $y = 0$ (el punto de partida y el punto final son los mismos).</li>
          <li>La aceleración es $a = -1.60\\,\\text{m/s}^2$ (hacia abajo).</li>
          <li>El tiempo total de vuelo es $t = 4.0\\,\\text{s}$.</li>
        </ul>

        <p>Utilice la ecuación de posición $y = v_{iy}t + \\dfrac{1}{2}at^2$ para calcular $v_{iy}$:</p>

        $$ 0 = v_{iy}(4.0) + \\frac{1}{2}(-1.60)(4.0)^2 $$

        <p>Resolviendo para $v_{iy}$:</p>
        $$ 0 = 4.0 v_{iy} + (-0.80)(16) $$
        $$ 0 = 4.0 v_{iy} - 12.8 $$
        $$ 4.0 v_{iy} = 12.8 $$
        $$ v_{iy} = \\frac{12.8}{4.0} = 3.2\\,\\text{m/s} $$
      `,
    },
  ],
}

export function getExercises(title) {
  return exercisesData[title] || []
}
