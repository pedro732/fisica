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
  MUA: {
    title: 'MUA',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/MUA_grafica_v_t.svg/1200px-MUA_grafica_v_t.svg.png',
    content: `
      <p>El <strong>Movimiento Uniformemente Acelerado (MUA)</strong> es aquel movimiento en el que la aceleración que experimenta un cuerpo permanece constante (en magnitud y dirección) en el transcurso del tiempo.</p>
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
    `,
  },
}

export function getTopicDetails(title) {
  return topicDetails[title] || null
}
