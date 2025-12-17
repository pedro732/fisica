export const topicDetails = {
  'Rapidez y velocidad': {
    title: 'Rapidez y velocidad',
    image: 'https://www.areaciencias.com/fisica/imagenes/velocidadyrapidez.jpg',
    content: `
      <h2>Desplazamiento, tiempo y velocidad media</h2>
      <p>Suponga que una piloto de autos de arrancones conduce su vehículo por una pista recta (figura 2.1). Para estudiar su movimiento, necesitamos un sistema de coordenadas. Elegimos que el eje $x$ vaya a lo largo de la trayectoria recta del auto, con el origen $O$ en la línea de salida. También elegimos un punto en el auto, digamos su extremo delantero, y representamos todo el vehículo con ese punto y lo tratamos como una <strong>partícula</strong>.</p>

      <div class="text-center my-4">
        <img src="/assets/auto_carrera.png" alt="Figura 2.1" class="img-fluid" style="max-width: 100%; height: auto;">
        <p class="text-muted">Figura 2.1</p>
      </div>

      <p>Una forma útil de describir el movimiento de la partícula —es decir, el punto que representa el automóvil— es en términos del cambio en su coordenada $x$ durante un intervalo de tiempo. Suponga que $1.0\\text{ s}$ después del arranque el frente del vehículo está en el punto $P_1$, a $19\\text{ m}$ del origen, y que $4.0\\text{ s}$ después del arranque está en el punto $P_2$, a $277\\text{ m}$ del origen. El <em>desplazamiento</em> de la partícula es un vector que apunta de $P_1$ a $P_2$ (véase la sección 1.7). La figura 2.1 muestra que este vector apunta a lo largo del eje $x$. La componente $x$ del desplazamiento es simplemente el cambio en el valor de $x$, $(277\\text{ m} - 19\\text{ m}) = 258\\text{ m}$, que hubo en un lapso de $(4.0\\text{ s} - 1.0\\text{ s}) = 3.0\\text{ s}$. Definimos la <strong>velocidad media</strong> del auto durante este intervalo de tiempo como una cantidad <em>vectorial</em>, cuya componente $x$ es el cambio en $x$ dividido entre el intervalo de tiempo: $(258\\text{ m})/(3.0\\text{ s}) = 86\\text{ m/s}$.</p>

      <p>En general, la velocidad media depende del intervalo de tiempo elegido. Durante un lapso de $3.0\\text{ s}$ <em>antes</em> del arranque, la velocidad media fue cero, porque el auto estaba en reposo en la línea de salida y tuvo un desplazamiento cero.</p>

      <p>Generalicemos el concepto de velocidad media. En el tiempo $t_1$ el auto está en el punto $P_1$, con la coordenada $x_1$, y en el tiempo $t_2$ está en el punto $P_2$ con la coordenada $x_2$. El desplazamiento del auto en el intervalo de $t_1$ a $t_2$ es el vector de $P_1$ a $P_2$. La componente $x$ del desplazamiento, denotada con $\\Delta x$, es el cambio en la coordenada $x$:</p>

      $$ \\Delta x = x_2 - x_1 \\quad (2.1) $$

      <p>El auto de arrancones se mueve sólo a lo largo del eje $x$, de manera que las componentes $y$ y $z$ del desplazamiento son iguales a cero.</p>

      <div class="alert alert-warning">
        <strong>CUIDADO El significado de $\\Delta x$</strong> Note que $\\Delta x$ <em>no</em> es el producto de $\\Delta$ y $x$; es sólo un símbolo que significa “el cambio en la cantidad $x$”. Siempre usaremos la letra griega mayúscula $\\Delta$ (delta) para representar un <em>cambio</em> en cierta cantidad, calculada restando el valor <em>inicial</em> del valor <em>final</em>, y nunca a la inversa. Asimismo, el intervalo de tiempo de $t_1$ a $t_2$ es $\\Delta t$, el cambio en la cantidad $t$: $\\Delta t = t_2 - t_1$ (tiempo final menos tiempo inicial).
      </div>

      <p>La componente $x$ de la velocidad promedio, o <strong>velocidad media</strong>, es la componente $x$ del desplazamiento, $\\Delta x$, dividida entre el intervalo de tiempo $\\Delta t$ en el que ocurre el desplazamiento. Usamos el símbolo $v_{med-x}$ para representar velocidad media (el subíndice “med” indica que se trata de un valor promedio y el subíndice $x$ indica que ésta es la componente $x$):</p>

      $$ v_{med-x} = \\frac{x_2 - x_1}{t_2 - t_1} = \\frac{\\Delta x}{\\Delta t} \\quad \\text{(velocidad media, movimiento rectilíneo)} \\quad (2.2) $$

      <p>En el ejemplo del auto de arrancones teníamos $x_1 = 19\\text{ m}$, $x_2 = 277\\text{ m}$, $t_1 = 1.0\\text{ s}$ y $t_2 = 4.0\\text{ s}$, así que la ecuación (2.2) da</p>

      $$ v_{med-x} = \\frac{277\\text{ m} - 19\\text{ m}}{4.0\\text{ s} - 1.0\\text{ s}} = \\frac{258\\text{ m}}{3.0\\text{ s}} = 86\\text{ m/s} $$

      <p>La velocidad media del auto es positiva. Esto significa que, durante el intervalo, la coordenada $x$ aumentó y el auto se movió en la dirección $+x$ (a la derecha en la figura 2.1).</p>

      <p>Si una partícula se mueve en la dirección $x$ negativa durante un intervalo de tiempo, su velocidad media en ese lapso es negativa. Por ejemplo, suponga que la camioneta de un juez se mueve hacia la izquierda sobre la pista (figura 2.2). La camioneta está en $x_1 = 277\\text{ m}$ en $t_1 = 16.0\\text{ s}$, y en $x_2 = 19\\text{ m}$ en $t_2 = 25.0\\text{ s}$. Entonces, $\\Delta x = (19\\text{ m} - 277\\text{ m}) = -258\\text{ m}$ y $\\Delta t = (25.0\\text{ s} - 16.0\\text{ s}) = 9.0\\text{ s}$. La componente $x$ de la velocidad media es $v_{med-x} = \\Delta x/\\Delta t = (-258\\text{ m})/(9.0\\text{ s}) = -29\\text{ m/s}$.</p>

      <div class="text-center my-4">
        <img src="/assets/camioneta.png" alt="Figura 2.2" class="img-fluid" style="max-width: 100%; height: auto;">
        <p class="text-muted">Figura 2.2</p>
      </div>

      <p>Hay algunas reglas sencillas para la velocidad media. <strong>Siempre que $x$ sea positiva y aumente o sea negativa y se vuelva menos negativa, la partícula se mueve en la dirección $+x$ y $v_{med-x}$ es positiva (figura 2.1). Siempre que $x$ sea positiva y disminuya, o sea negativa y se vuelva más negativa, la partícula se mueve en la dirección $-x$ y $v_{med-x}$ es negativa (figura 2.2).</strong></p>

      <p>En el movimiento rectilíneo por lo general llamaremos a $\\Delta x$ el desplazamiento y a $v_{med-x}$ la velocidad media. Sin embargo, no olvide que éstas son realmente las componentes $x$ de cantidades vectoriales que, en este caso especial, <em>sólo</em> tienen componentes $x$. En el capítulo 3, los vectores de desplazamiento, velocidad y aceleración tendrán dos o tres componentes distintas de cero.</p>

      <div class="text-center my-4">
        <img src="/assets/pediente.png" alt="Figura 2.3" class="img-fluid" style="max-width: 100%; height: auto;">
        <p class="text-muted">Figura 2.3</p>
      </div>

      <p>La figura 2.3 es una gráfica de la posición del auto de arrancones en función del tiempo, es decir, una gráfica $x-t$. La curva de la figura <em>no</em> representa la trayectoria del auto; ésta es una línea recta, como se observa en la figura 2.1. Más bien, la gráfica es una forma de representar visualmente cómo cambia la posición del auto con el tiempo. Los puntos $p_1$ y $p_2$ en la gráfica corresponden a los puntos $P_1$ y $P_2$ de la trayectoria del auto. La línea $p_1p_2$ es la hipotenusa de un triángulo rectángulo con cateto vertical $\\Delta x = x_2 - x_1$ y cateto horizontal $\\Delta t = t_2 - t_1$. Así, la velocidad media del auto $v_{med-x} = \\Delta x/\\Delta t$ es igual a la <em>pendiente</em> de la línea $p_1p_2$, es decir, el cociente del cateto vertical $\\Delta x$ y el cateto horizontal $\\Delta t$.</p>

      <p>La velocidad media depende sólo del desplazamiento total $\\Delta x = x_2 - x_1$ que se da durante el intervalo $\\Delta t = t_2 - t_1$, no en los pormenores de lo que sucede dentro de ese intervalo. En el tiempo $t_1$ una motocicleta podría haber rebasado al auto de arrancones en el punto $P_1$ de la figura 2.1, para después reventar el motor y bajar la velocidad, pasando por $P_2$ en el mismo instante $t_2$ que el auto. Ambos vehículos tienen el mismo desplazamiento en el mismo lapso, así que tienen la misma velocidad media.</p>

      <p>Si expresamos la distancia en metros y el tiempo en segundos, la velocidad media se mide en metros por segundo (m/s). Otras unidades de velocidad comunes son kilómetros por hora (km/h), pies por segundo (ft/s), millas por hora (mi/h) y nudos (1 nudo = 1 milla náutica/h = 6080 ft/h). La tabla 2.1 muestra algunas magnitudes típicas de velocidad.</p>

      <div class="my-4">
        <h5 class="text-center">Tabla 2.1 Magnitudes típicas de velocidad</h5>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Objeto</th>
              <th>Velocidad (m/s)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Reptar de caracol</td><td>$10^{-3}$</td></tr>
            <tr><td>Andar rápido</td><td>$2$</td></tr>
            <tr><td>Hombre más rápido</td><td>$11$</td></tr>
            <tr><td>Guepardo en carrera</td><td>$35$</td></tr>
            <tr><td>Automóvil más rápido</td><td>$341$</td></tr>
            <tr><td>Movimiento aleatorio de moléculas de aire</td><td>$500$</td></tr>
            <tr><td>Avión más rápido</td><td>$1000$</td></tr>
            <tr><td>Satélite de comunicación en órbita</td><td>$3000$</td></tr>
            <tr><td>Electrón en un átomo de hidrógeno</td><td>$2 \\times 10^6$</td></tr>
            <tr><td>Luz que viaja en el vacío</td><td>$3 \\times 10^8$</td></tr>
          </tbody>
        </table>
      </div>
    `,
  },
  'Velocidad Instantánea': {
    title: 'Velocidad Instantánea',
    image:
      'https://img.freepik.com/fotos-premium/velocimetro-numeros-10-0-el_1177960-24389.jpg?w=1060',
    content: `
      <div class="text-center my-4">
        <img src="/assets/auto_carrera.png" alt="Figura 2.1" class="img-fluid" style="max-width: 100%; height: auto;">
        <p class="text-muted">Figura 2.1</p>
      </div>

      <p>Para obtener la velocidad instantánea del auto de la figura 2.1 en el punto $P_1$, movemos el segundo punto $P_2$ cada vez más cerca del primer punto $P_1$ y calculamos la velocidad media $v_{med-x} = \\Delta x/\\Delta t$ para estos desplazamientos y lapsos cada vez más cortos. Tanto $\\Delta x$ y $\\Delta t$ se hacen muy pequeños; pero su cociente no necesariamente lo hace. En el lenguaje del cálculo, el límite de $\\Delta x/\\Delta t$ cuando $\\Delta t$ se acerca a cero es la <strong>derivada</strong> de $x$ con respecto a $t$ y se escribe $dx/dt$. La velocidad instantánea es el límite de la velocidad media conforme el intervalo de tiempo se acerca a cero; es igual a la tasa instantánea de cambio de posición con el tiempo. Usamos el símbolo $v_x$, sin “med” en el subíndice, para la velocidad instantánea en el eje $x$:</p>

      $$ v_x = \\lim_{\\Delta t \\to 0} \\frac{\\Delta x}{\\Delta t} = \\frac{dx}{dt} \\quad \\text{(velocidad instantánea, movimiento rectilíneo)} \\quad (2.3) $$
    `,
  },
  Vectores: {
    title: 'Vectores',
    image: '/assets/figura_1_9_10.png',
    content: `
      <h2>Vectores y Suma de Vectores</h2>
      <p>Muchas cantidades físicas, como el desplazamiento, la velocidad y la fuerza, son vectores. Un vector se caracteriza por tener magnitud y dirección. En contraste, una cantidad escalar solo tiene magnitud (como la temperatura o la masa).</p>

      <p>Para sumar vectores, podemos usar el método gráfico (método del triángulo o del paralelogramo) o el método analítico (usando componentes). En el método gráfico, dibujamos los vectores a escala y medimos la resultante. En el método analítico, descomponemos cada vector en sus componentes $x$ y $y$, sumamos las componentes, y luego encontramos la magnitud y dirección de la resultante.</p>

      <div class="text-center my-4">
        <img src="/assets/figura_1_9_10.png" alt="Suma de vectores" class="img-fluid" style="max-width: 100%; height: auto;">
        <p class="text-muted">Método gráfico para sumar vectores</p>
      </div>

      <hr class="my-5">

      <h3>Las Funciones Trigonométricas</h3>
      <p>Las funciones trigonométricas se definen en relación con un ángulo recto. Para el triángulo rectángulo de la figura 1-6, por definición:</p>

      $$ \\text{sen } \\theta = \\frac{\\text{opuesto}}{\\text{hipotenusa}} = \\frac{B}{C} \\quad \\cos \\theta = \\frac{\\text{adyacente}}{\\text{hipotenusa}} = \\frac{A}{C} \\quad \\tan \\theta = \\frac{\\text{opuesto}}{\\text{adyacente}} = \\frac{B}{A} $$

      <p>Se suelen utilizar en las formas:</p>
      $$ B = C \\text{sen } \\theta \\quad A = C \\cos \\theta \\quad B = A \\tan \\theta $$

      <div class="text-center my-4">
        <img src="/assets/teoria_trigonometria.png" alt="Figura 1-6" class="img-fluid" style="max-width: 100%; height: auto;">
        <p class="text-muted">Figura 1-6</p>
      </div>

      <h3>Componentes de un Vector</h3>
      <p><strong>UNA COMPONENTE DE UN VECTOR</strong> es su valor real en una dirección determinada. Por ejemplo, la componente $x$ de un desplazamiento es el desplazamiento paralelo al eje $x$ causado por el desplazamiento determinado. Un vector en tres direcciones se puede considerar como la resultante de sus vectores componentes resueltas a lo largo de tres direcciones <em>mutuamente perpendiculares</em>. Asimismo, un vector en dos dimensiones se resuelve en dos vectores componentes que actúan a lo largo de dos direcciones mutuamente perpendiculares. La figura 1-7 muestra el vector $\\vec{R}$ y sus vectores componentes $x$ y $y$, $\\vec{R}_x$ y $\\vec{R}_y$, los cuales tienen magnitudes</p>

      $$ |\\vec{R}_x| = |\\vec{R}| \\cos \\theta \\quad \\text{y} \\quad |\\vec{R}_y| = |\\vec{R}| \\text{sen } \\theta $$

      <p>lo cual equivale a</p>
      $$ R_x = R \\cos \\theta \\quad \\text{y} \\quad R_y = R \\text{sen } \\theta $$

      <div class="row my-4">
        <div class="col-md-6 text-center mb-3 mb-md-0">
          <img src="/assets/figura_1_17.png" alt="Figura 1.17 - Componentes de un vector" class="img-fluid" style="max-width: 100%; height: auto;">
          <p class="text-muted">Figura 1.17: Representación de un vector en términos de sus componentes</p>
        </div>
        <div class="col-md-6 text-center">
          <img src="/assets/figura_1_18.png" alt="Figura 1.18 - Componentes positivas y negativas" class="img-fluid" style="max-width: 100%; height: auto;">
          <p class="text-muted">Figura 1.18: Las componentes de un vector pueden ser números positivos o negativos</p>
        </div>
      </div>

      <h3>Método de Componentes para Sumar Vectores</h3>
      <p>Cada vector se resuelve en sus componentes $x$, $y$ y $z$, con las componentes que tienen direcciones negativas consideradas como negativas. La componente escalar $R_x$ de la resultante $\\vec{R}$ es la suma algebraica de todas las componentes escalares de $x$. Las componentes escalares de $y$ y de $z$ de la resultante se obtienen de manera similar. Con las componentes conocidas, la magnitud de la resultante se determina mediante</p>

      $$ R = \\sqrt{R_x^2 + R_y^2 + R_z^2} $$

      <p>En dos dimensiones, el ángulo de la resultante con el eje $x$ se encuentra a partir de la relación</p>
      $$ \\tan \\theta = \\frac{R_y}{R_x} $$

      <h3>Los Vectores Unitarios</h3>
      <p><strong>LOS VECTORES UNITARIOS</strong> tienen una magnitud de uno y se representan con un símbolo en negritas coronado con un acento circunflejo. Los vectores unitarios especiales $\\hat{\\mathbf{i}}$, $\\hat{\\mathbf{j}}$ y $\\hat{\\mathbf{k}}$ se asignan a los ejes $x$, $y$ y $z$, respectivamente. Un vector $3\\hat{\\mathbf{i}}$ representa un vector de 3 unidades en la dirección $+x$, mientras que $-5\\hat{\\mathbf{k}}$ representa un vector de 5 unidades en la dirección $-z$. Un vector $\\vec{R}$ que tiene componentes $x$, $y$ y $z$ escalares $R_x$, $R_y$ y $R_z$, respectivamente, se escribe como</p>
      $$ \\vec{R} = R_x\\hat{\\mathbf{i}} + R_y\\hat{\\mathbf{j}} + R_z\\hat{\\mathbf{k}} $$
    `,
  },
  aceleracion: {
    title: 'aceleracion',
    image: '/assets/aceleracion.png',
    content: `
      <h2>Aceleración media</h2>
      <p>Consideremos otra vez el movimiento de una partícula en el eje $x$. Suponga que, en el tiempo $t_1$, la partícula está en el punto $P_1$ y tiene una componente $x$ de velocidad (instantánea) $v_{1x}$; en instante posterior $t_2$ está en $P_2$ tiene una componente $x$ de velocidad $v_{2x}$. Así, la componente $x$ de la velocidad cambia en $\\Delta v_x = v_{2x} - v_{1x}$ en el intervalo $\\Delta t = t_2 - t_1$.</p>

      <p>Definimos la <strong>aceleración media</strong> de la partícula al moverse de $P_1$ a $P_2$ como una cantidad vectorial cuya componente $x$ es $a_{med-x}$ igual a $\\Delta v_x$, el cambio en la componente $x$ de la velocidad, dividido entre el intervalo de tiempo $\\Delta t$:</p>

      $$ a_{med-x} = \\frac{v_{2x} - v_{1x}}{t_2 - t_1} = \\frac{\\Delta v_x}{\\Delta t} \\quad \\text{(aceleración media, movimiento rectilíneo)} \\quad (2.4) $$

      <div class="text-center my-4">

        <p class="text-muted">Concepto de aceleración media</p>
      </div>

      <p>En el movimiento rectilíneo a lo largo del eje $x$, por lo general llamaremos $a_{med-x}$ a la aceleración media. (Veremos otras componentes del vector de aceleración media en el capítulo 3.)</p>

      <p>Si expresamos la velocidad en metros por segundo y el tiempo en segundos, la aceleración media está en metros por segundo por segundo, o bien (m/s)/s. Esto suele escribirse como m/s<sup>2</sup> y se lee "metros por segundo al cuadrado".</p>
       <img src="/assets/graf-aceler-media.png" alt="Aceleración media" class="img-fluid" style="max-width: 100%; height: auto;center">
      <div class="alert alert-warning">
        <strong>CUIDADO</strong> Aceleración contra velocidad ¿No confunda aceleración con velocidad! La velocidad describe qué tan rápido se mueve un cuerpo, qué tan deprisa cambia su posición con el tiempo; es una medida con unidades de distancia dividida entre tiempo, como m/s. La aceleración describe cómo cambia la velocidad con el tiempo; es decir, qué tan rápido cambia la rapidez y la dirección del movimiento. Podría ser útil recordar la frase "aceleración es a velocidad lo que velocidad es a posición". También ayudará imaginarse a usted mismo yendo en un automóvil con el cuerpo en movimiento. Si el auto acelera hacia delante y aumenta su rapidez, usted se sentirá empujado hacia atrás hacia el asiento. Si el auto frena, usted se sentirá empujado hacia delante. Si el auto hace una curva, la velocidad es constante y no hay aceleración, no sentirá sensación alguna. (Analizaremos la aceleración en curvas en la sección 3.2.)
      </div>

      <h3>Ejemplo: Aceleración media de un auto de arrancones</h3>
      <p>Un auto de arrancones "top fuel" puede alcanzar una rapidez de 100 m/s en los primeros 4.5 s de la carrera. Calcule la aceleración media durante este intervalo.</p>

      <p><strong>Solución:</strong></p>
      <p>Tomamos el eje $x$ a lo largo de la pista, con el origen en la línea de salida. La velocidad inicial es $v_{1x} = 0$ en $t_1 = 0$, y la velocidad final es $v_{2x} = 100$ m/s en $t_2 = 4.5$ s.</p>

      $$ a_{med-x} = \\frac{v_{2x} - v_{1x}}{t_2 - t_1} = \\frac{100\\,\\text{m/s} - 0\\,\\text{m/s}}{4.5\\,\\text{s} - 0\\,\\text{s}} = 22\\,\\text{m/s}^2 $$

      <p>La aceleración media es positiva, lo que significa que la velocidad aumenta en la dirección $+x$ (hacia adelante).</p>

      <h3 class="mt-5">Aceleración instantánea</h3>
      <p>Ya podemos definir la <strong>aceleración instantánea</strong> con el mismo procedimiento que seguimos para la velocidad instantánea. Como ejemplo, suponga que un piloto de carreras acaba de entrar en una recta como se muestra en la figura 2.11, y definir la aceleración instantánea en $P_1$, tomamos el segundo punto $P_2$ en la figura 2.11 cada vez más cerca del primer punto $P_1$, de modo que la aceleración media se calcula en intervalos cada vez más cortos.</p>

      <p><em>La aceleración instantánea es el límite de la aceleración media conforme el intervalo de tiempo se acerca a cero.</em> En el lenguaje del cálculo, la <strong>aceleración instantánea es la tasa instantánea de cambio de la velocidad con el tiempo.</strong> Así,</p>

      $$ a_x = \\lim_{\\Delta t \\to 0} \\frac{\\Delta v_x}{\\Delta t} = \\frac{dv_x}{dt} \\quad \\text{(aceleración instantánea, movimiento rectilíneo)} \\quad (2.5) $$

      <div class="text-center my-4">
        <img src="/assets/prix.png" alt="Auto de carreras en aceleración" class="img-fluid" style="max-width: 100%; height: auto;">
        <p class="text-muted">Figura 2.11: Piloto de carreras entrando en una recta</p>
      </div>

      <p class="alert alert-info">
        <strong>Nota:</strong> La aceleración instantánea nos permite conocer con precisión cómo cambia la velocidad en cada instante específico del movimiento, no solo en un intervalo promedio.
      </p>

      <hr class="my-5">

      <h3>Obtención de las ecuaciones del MRUA sin cálculo</h3>
      <p>Las ecuaciones del MRUA también se pueden obtener solo con conceptos de física básica y álgebra, sin hablar de derivadas ni integrales. Se usan las ideas de aceleración como cambio de velocidad por unidad de tiempo y de velocidad media como espacio recorrido por unidad de tiempo.</p>

      <h4>Aceleración como cambio de velocidad</h4>
      <p>Por definición en MRUA (aceleración constante):</p>
      $$ a = \\frac{\\Delta v}{\\Delta t} = \\frac{v - v_0}{t} $$
      <p>Despejando $v$:</p>
      $$ v = v_0 + a t $$
      <p>Esta es la primera ecuación: la velocidad aumenta de manera lineal porque cada segundo se suma la misma cantidad $a$.</p>

      <h4>Desplazamiento a partir de la velocidad media</h4>
      <p>En cualquier movimiento rectilíneo:</p>
      $$ \\text{velocidad media} = \\frac{\\text{desplazamiento}}{\\text{tiempo}} = \\frac{x - x_0}{t} $$
      <p>En MRUA el gráfico velocidad–tiempo es una recta, así que la velocidad media es el promedio entre la inicial y la final:</p>
      $$ v_{\\text{med}} = \\frac{v_0 + v}{2} $$

      <p>Igualando ambas expresiones:</p>
      $$ \\frac{x - x_0}{t} = \\frac{v_0 + v}{2} \\Rightarrow x = x_0 + \\frac{v_0 + v}{2}\\,t $$
      <p>Esta es la cuarta ecuación (posición usando velocidad media).</p>

      <h4>Posición en función del tiempo</h4>
      <p>Ahora se reemplaza en la ecuación anterior la expresión de $v$ obtenida antes $v = v_0 + a t$:</p>
      $$ x = x_0 + \\frac{v_0 + (v_0 + a t)}{2}\\,t = x_0 + \\frac{2v_0 + a t}{2}\\,t = x_0 + v_0 t + \\frac{1}{2} a t^2 $$
      <p>Esta es la segunda ecuación: combina el avance uniforme $v_0 t$ más el “extra” debido a la aceleración $\\tfrac{1}{2} a t^2$.</p>

      <h4>Relación entre velocidad y desplazamiento</h4>
      <p>Se parte de la ecuación de la velocidad media:</p>
      $$ x - x_0 = \\frac{v_0 + v}{2}\\,t $$
      <p>y se sustituye el tiempo usando $t = \\frac{v - v_0}{a}$ (de $a = \\frac{v - v_0}{t}$):</p>
      $$ x - x_0 = \\frac{v_0 + v}{2}\\,\\frac{v - v_0}{a} $$
      <p>El numerador es una diferencia de cuadrados:</p>
      $$ (v_0 + v)(v - v_0) = v^2 - v_0^2 $$
      <p>Entonces:</p>
      $$ x - x_0 = \\frac{v^2 - v_0^2}{2a} \\Rightarrow v^2 = v_0^2 + 2a(x - x_0) $$
      <p>Esta es la tercera ecuación, que relaciona directamente la velocidad con el desplazamiento sin usar el tiempo.</p>

      <hr class="my-5">

      <h3>Interpretación de Derivadas e Integrales en Física</h3>
      <p>Integrar y derivar son dos operaciones matemáticas complementarias: derivar estudia “cómo cambia” una magnitud, integrar suma o “acumula” cambios. En física se usan para pasar de posición a velocidad y aceleración (derivar) o al revés, de aceleración a velocidad y posición (integrar).</p>

      <h4>Qué significa derivar</h4>
      <ul>
        <li>Derivar mide la rapidez de cambio de una función: la derivada de $x(t)$ es la velocidad $v(t)$, y la derivada de $v(t)$ es la aceleración $a(t)$.</li>
        <li>Geométricamente, la derivada es la pendiente de la recta tangente a la curva en un punto (qué tan “empinada” está la gráfica allí).</li>
      </ul>

      <h5>Cuándo y por qué se deriva</h5>
      <ul>
        <li>Se deriva cuando se quiere pasar de una magnitud global a su cambio instantáneo: por ejemplo, de posición a velocidad, o de temperatura a “ritmo de enfriamiento”.</li>
        <li>En notación:
          <ul>
            <li>$v(t) = \\frac{dx}{dt}$: velocidad es cambio de posición respecto del tiempo.</li>
            <li>$a(t) = \\frac{dv}{dt}$: aceleración es cambio de velocidad respecto del tiempo.</li>
          </ul>
        </li>
      </ul>

      <h4>Qué significa integrar</h4>
      <ul>
        <li>Integrar es, en esencia, sumar infinitos aportes pequeños: el área bajo una curva.</li>
        <li>Si se conoce la aceleración $a(t)$, integrarla respecto del tiempo devuelve la velocidad $v(t)$; si se integra la velocidad, se obtiene la posición $x(t)$.</li>
      </ul>

      <h5>Cuándo y por qué se integra</h5>
      <ul>
        <li>Se integra cuando se conoce “cómo cambia algo” (su derivada) y se quiere recuperar la magnitud original.</li>
        <li>En notación:
          <ul>
            <li>Si $a(t) = \\frac{dv}{dt}$, entonces $v(t) = \\int a(t)\\,dt + C$.</li>
            <li>Si $v(t) = \\frac{dx}{dt}$, entonces $x(t) = \\int v(t)\\,dt + C$.</li>
          </ul>
        </li>
        <li>La constante $C$ se fija usando condiciones iniciales (por ejemplo, velocidad o posición en $t=0$).</li>
      </ul>

      <h4 class="mt-4">Cuadro resumen</h4>
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Concepto</th>
            <th>Derivada</th>
            <th>Integral</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Significado</strong></td>
            <td>Cambio instantáneo, pendiente</td>
            <td>Suma continua, área bajo la curva</td>
          </tr>
          <tr>
            <td><strong>Dirección</strong></td>
            <td>De función a su cambio</td>
            <td>De cambio a función original</td>
          </tr>
          <tr>
            <td><strong>Ejemplo físico</strong></td>
            <td>$v = \\frac{dx}{dt}$, $a = \\frac{dv}{dt}$</td>
            <td>$v = \\int a\\,dt$, $x = \\int v\\,dt$</td>
          </tr>
          <tr>
            <td><strong>Relación</strong></td>
            <td>Si se deriva y luego se integra (o viceversa) se vuelve, salvo la constante $C$.</td>
            <td>Operaciones inversas: derivar deshace integrar y al revés.</td>
          </tr>
        </tbody>
      </table>

      <hr class="my-5">

      <h3>Obtención de las ecuaciones del MRUA con cálculo</h3>
      <p>Las cuatro ecuaciones del MRUA se obtienen partiendo de que la aceleración es constante y usando las definiciones de velocidad y aceleración como razones de cambio (derivadas) e integrando respecto del tiempo.</p>

      <h4>Punto de partida: definiciones</h4>
      <ul>
        <li>Velocidad instantánea: $\\displaystyle v(t) = \\frac{dx}{dt}$.</li>
        <li>Aceleración instantánea: $\\displaystyle a(t) = \\frac{dv}{dt}$.</li>
      </ul>
      <p>En MRUA se cumple que la aceleración es constante: $a(t) = a$, un número fijo.</p>

      <h4>Primera ecuación: $v = v_0 + a t$</h4>
      <ol>
        <li>De la definición de aceleración con $a$ constante se tiene $\\frac{dv}{dt} = a$.</li>
        <li>Se integra respecto del tiempo entre $t = 0$ y un tiempo cualquiera $t$:
          $$ \\int_{v_0}^{v} dv = \\int_{0}^{t} a\\,dt $$
          En el lado izquierdo se cambia de $v_0$ a $v(t)$ porque la velocidad evoluciona, y en el derecho se mantiene $a$ constante.
        </li>
        <li>Al integrar: $v - v_0 = a t$.</li>
        <li>Se despeja $v$: $$ v = v_0 + a t $$</li>
      </ol>

      <h4>Segunda ecuación: $x = x_0 + v_0 t + \\tfrac{1}{2} a t^2$</h4>
      <ol>
        <li>De la definición de velocidad: $v(t) = \\frac{dx}{dt}$. Pero ya se conoce $v(t)$ de la ecuación anterior: $v(t) = v_0 + a t$.</li>
        <li>Sustituyendo: $\\frac{dx}{dt} = v_0 + a t$.</li>
        <li>Se integra respecto del tiempo entre $t=0$ y $t$:
          $$ \\int_{x_0}^{x} dx = \\int_{0}^{t} (v_0 + a t)\\, dt $$
        </li>
        <li>Al integrar el lado derecho término a término: $x - x_0 = v_0 t + \\tfrac{1}{2} a t^2$.</li>
        <li>Sumando $x_0$ a ambos lados:
          $$ x = x_0 + v_0 t + \\tfrac{1}{2} a t^2 $$
        </li>
      </ol>

      <h4>Tercera ecuación: $v^2 = v_0^2 + 2 a (x - x_0)$</h4>
      <p>Se quiere una relación entre $v$ y $x$ que no incluya explícitamente al tiempo.</p>
      <ol>
        <li>Se parte de la primera ecuación $v = v_0 + a t$ y se despeja el tiempo: $t = \\frac{v - v_0}{a}$.</li>
        <li>Se sustituye este $t$ en la segunda ecuación:
          $$ x = x_0 + v_0 \\left(\\frac{v - v_0}{a}\\right) + \\tfrac{1}{2} a \\left(\\frac{v - v_0}{a}\\right)^2 $$
        </li>
        <li>Se multiplica toda la ecuación por $2a$ para simplificar fracciones y, tras simplificar, se llega a:
          $$ v^2 = v_0^2 + 2a(x - x_0) $$
        </li>
      </ol>

      <h4>Cuarta ecuación: $x = x_0 + \\tfrac{1}{2}(v_0 + v)t$</h4>
      <p>Esta ecuación se basa en que, con aceleración constante, la velocidad promedio es el promedio aritmético de la velocidad inicial y final.</p>
      <ol>
        <li>La velocidad media en un intervalo se define como $v_{\\text{med}} = \\frac{x - x_0}{t}$.</li>
        <li>Si la aceleración es constante, la velocidad media es la media de $v_0$ y $v$: $v_{\\text{med}} = \\frac{v_0 + v}{2}$.</li>
        <li>Igualando y despejando $x$:
          $$ x = x_0 + \\tfrac{1}{2}(v_0 + v)t $$
        </li>
      </ol>

      <hr class="my-5">

      <h2>Ante aceleraciones variadas</h2>
      <p>Cuando la aceleración no es constante ya no se pueden usar las cuatro fórmulas “cerradas” del MRUA, porque todas se deducen suponiendo $a$ constante. En su lugar se trabaja directamente con las definiciones de velocidad y aceleración como derivadas, y se usan integrales para pasar de $a(t)$ a $v(t)$ y de $v(t)$ a $x(t)$.</p>

      <h3>Idea general del procedimiento</h3>
      <p>En una dimensión, las relaciones básicas son:</p>
      <ul>
        <li>$v(t) = \\dfrac{dx}{dt}$ (velocidad como derivada de la posición).</li>
        <li>$a(t) = \\dfrac{dv}{dt} = \\dfrac{d^2x}{dt^2}$ (aceleración como derivada de la velocidad).</li>
      </ul>

      <p>Según qué función conozcas:</p>
      <ul>
        <li><strong>Si conoces $a(t)$ y un dato inicial $v(t_0)=v_0$:</strong>
          <ol>
            <li>Integra $a(t)$ entre $t_0$ y $t$:
              $$ v(t)=v_0+\\int_{t_0}^{t} a(\\tau)\\,d\\tau $$
            </li>
            <li>Luego integra $v(t)$ para obtener $x(t)$ con $x(t_0)=x_0$:
              $$ x(t)=x_0+\\int_{t_0}^{t} v(\\tau)\\,d\\tau $$
            </li>
          </ol>
        </li>
        <li><strong>Si conoces $v(t)$ y $x(t_0)=x_0$:</strong>
          <ol>
            <li>Derivas $v(t)$ si necesitas $a(t)$: $a(t)=\\dfrac{dv}{dt}$.</li>
            <li>Integras $v(t)$ para hallar $x(t)$: $x(t)=x_0+\\int_{t_0}^{t} v(\\tau)\\,d\\tau$.</li>
          </ol>
        </li>
        <li><strong>Si conoces $a(x)$ o $a(v)$:</strong> se usan cambios de variable: por ejemplo, $a = v\\dfrac{dv}{dx}$ cuando $a$ es función de la posición.</li>
      </ul>

      <p class="alert alert-info"><strong>En resumen:</strong> con aceleración variable no hay una sola fórmula universal; se plantea el problema como una ecuación diferencial sencilla y se resuelve integrando con las condiciones iniciales apropiadas.</p>

      <hr class="my-5">

      <h3>Ejemplo 1: aceleración como función del tiempo</h3>
      <p>Una partícula se mueve en línea recta con aceleración $a(t) = 2t\\ \\text{m/s}^2$. En $t=0$ está en $x_0=1\\ \\text{m}$ y en reposo ($v_0=0$). Hallar $v(t)$ y $x(t)$.</p>

      <p><strong>1. De $a(t)$ a $v(t)$</strong></p>
      $$ v(t)=v_0+\\int_{0}^{t} 2\\tau\\, d\\tau = 0+\\left[\\tau^2\\right]_{0}^{t} = t^2\\ \\text{m/s} $$

      <p><strong>2. De $v(t)$ a $x(t)$</strong></p>
      $$ x(t)=x_0+\\int_{0}^{t} v(\\tau)\\, d\\tau = 1+\\int_{0}^{t} \\tau^2\\, d\\tau = 1+\\left[\\frac{\\tau^3}{3}\\right]_{0}^{t} = 1+\\frac{t^3}{3}\\ \\text{m} $$

      <p><strong>3. Ejemplo de uso:</strong> ¿dónde está y con qué velocidad a los $3\\ \\text{s}$?</p>
      <ul>
        <li>$v(3)=3^2=9\\ \\text{m/s}$</li>
        <li>$x(3)=1+\\dfrac{3^3}{3}=1+9=10\\ \\text{m}$</li>
      </ul>
      <p>Aquí no aparece ninguna fórmula tipo $x=v_0 t+\\tfrac12 a t^2$ porque $a$ no es constante.</p>

      <hr class="my-5">

      <h3>Ejemplo 2: velocidad dada como función del tiempo</h3>
      <p>Un automóvil se mueve en línea recta con velocidad $v(t) = 0.860\\, t^2\\ \\text{m/s}$ (para $0\\le t\\le 5\\ \\text{s}$).</p>
      <p><strong>a) Hallar la aceleración $a(t)$.</strong></p>
      $$ a(t)=\\frac{dv}{dt} = \\frac{d}{dt}(0.860\\, t^2) = 2\\cdot 0.860\\, t = 1.72\\, t\\ \\text{m/s}^2 $$
      <p>La aceleración crece linealmente con el tiempo; no es constante.</p>

      <p><strong>b) Hallar el desplazamiento entre $t=0$ y $t=5\\ \\text{s}$.</strong></p>
      <p>Tomando $x(0)=0$, el desplazamiento entre 0 y 5 s es:</p>
      $$ \\Delta x = \\int_{0}^{5} v(t)\\, dt = \\int_{0}^{5} 0.860\\, t^2\\, dt = 0.860 \\left[\\frac{t^3}{3}\\right]_{0}^{5} = 0.860\\cdot \\frac{125}{3} \\approx 35.8\\ \\text{m} $$

      <p class="alert alert-warning">Si se intentara usar $x=v_0 t+\\tfrac12 a t^2$ habría que elegir un solo valor de $a$, pero aquí $a$ cambia de 0 a $1.72\\cdot 5$, así que esa fórmula no describe correctamente el movimiento.</p>

      <hr class="my-5">

      <h3>Cómo abordar sistemáticamente estos problemas</h3>
      <ol>
        <li><strong>Identificar qué función te dan:</strong> ¿Te dan $a(t)$, $v(t)$, $x(t)$, $a(x)$ o $a(v)$?</li>
        <li><strong>Escribir las relaciones diferenciales correctas:</strong>
          <ul>
            <li>Si tienes $a(t)$: $dv = a(t)\\,dt$, $dx = v(t)\\,dt$.</li>
            <li>Si tienes $v(t)$: $a(t)=dv/dt$, $dx=v(t)\\,dt$.</li>
            <li>Si tienes $a(x)$: usar $a=v\\,dv/dx$.</li>
          </ul>
        </li>
        <li><strong>Integrar usando condiciones iniciales:</strong> Sustituir los datos iniciales (posición y velocidad en algún instante) para determinar constantes de integración.</li>
        <li><strong>Responder lo que pide el problema:</strong>
          <ul>
            <li>Desplazamientos: diferencias $x(t_2)-x(t_1)$.</li>
            <li>Velocidades en un instante: evaluar $v(t)$.</li>
            <li>Tiempos para cierto $x$ o $v$: resolver la ecuación resultante.</li>
          </ul>
        </li>
      </ol>
      <p>De esta manera, cualquier problema de cinemática unidimensional con aceleración variable se reduce a aplicar derivadas e integrales a las funciones dadas, en lugar de memorizar nuevas “fórmulas especiales”.</p>
    `,
  },
}

export function getTopicDetails(title) {
  return topicDetails[title] || null
}
