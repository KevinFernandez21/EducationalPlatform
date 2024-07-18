const previewData = [
  {
    tema_principal: "Límites",
    resumen: [
      {
        titulo: "Concepto de Límite",
        contenido: "Definición y tipos de límites: finitos, infinitos y en el infinito.",
        video: "https://www.youtube.com/watch?v=6e9ZD7vAmv4",
        resumen2: [
          {
            titulo: "Definición de Límite",
            contenido: "El concepto de límite es fundamental en cálculo y análisis matemático. Un límite describe cómo se comporta una función a medida que su argumento se aproxima a un valor específico.",
            resumen3: [
              {
                titulo: "Definición Intuitiva",
                contenido: "El límite de f(x) cuando x tiende a a es L, si al acercarse x a a, f(x) se acerca a L."
              },
              {
                titulo: "Definición Epsilon Delta",
                contenido: "Para todo epsilon > 0 existe un delta > 0 tal que si 0 < |x - a| < delta, entonces |f(x) - L| < epsilon."
              }
            ]
          },
          {
            titulo: "Límites Finitos",
            contenido: "Estos límites ocurren cuando tanto el valor al que se aproxima x como el valor al que se aproxima f(x) son finitos.",
            expresion: ["lim_{x -> 3}(2x + 1) = 7"],
            observacion: "A medida que x se acerca a 3, la función 2x + 1 se acerca a 7."
          },
          {
            titulo: "Límites Infinitos",
            contenido: "Los límites infinitos describen el comportamiento de una función cuando se aproxima a un valor infinito o cuando la función tiende a infinito.",
            expresion: ["lim_{x -> infinity} (1/x) = 0"],
            observacion: "A medida que x crece sin límite, 1/x se aproxima a 0."
          },
          {
            titulo: "Límites en el Infinito",
            contenido: "Los límites en el infinito consideran el comportamiento de una función a medida que su argumento tiende a infinito.",
            expresion: ["lim_{x -> infinity} (3x^2 + 2x + 1) = infinity"],
            observacion: "A medida que x tiende a infinito, la función 3x^2 + 2x + 1 también tiende a infinito."
          }
        ]
      },
      {
        titulo: "Cálculo de Límites",
        contenido: "Métodos para calcular límites: evaluación directa, factoreo y racionalización.",
        video: "https://www.youtube.com/watch?v=yptVvhFVFIo",
        resumen2: [
          {
            titulo: "Evaluación Directa",
            contenido: "La evaluación directa es el método más sencillo para calcular límites. Consiste en sustituir directamente el valor al que se aproxima x en la función f(x). Si la función es continua en ese punto, el valor obtenido será el límite.",
            expresion: ["lim_{x -> 3} (2x + 1) = 2(3) + 1 = 7"],
            observacion: "Este método solo funciona si la función es continua y no presenta indeterminaciones en el punto evaluado."
          },
          {
            titulo: "Factoreo",
            contenido: "El método de factoreo se utiliza cuando la evaluación directa da lugar a una forma indeterminada, como 0/0. Consiste en factorizar el numerador y/o el denominador para simplificar la expresión.",
            expresion: [
              "lim_{x -> 2} (x^2 - 4) / (x - 2)",
              "Factorizamos el numerador: x^2 - 4 = (x - 2)(x + 2)",
              "Simplificamos cancelando el término común: (x + 2)",
              "lim_{x -> 2} (x + 2) = 2 + 2 = 4"
            ],
            observacion: ""
          },
          {
            titulo: "Racionalización",
            contenido: "La racionalización se utiliza principalmente cuando las expresiones contienen raíces cuadradas. Consiste en multiplicar y dividir por el conjugado de la expresión que contiene la raíz para eliminar la raíz en el numerador o denominador.",
            expresion: [
              "lim_{x -> 0} (sqrt(x + 1) - 1) / x",
              "Multiplicamos y dividimos por el conjugado: (sqrt(x + 1) - 1) * (sqrt(x + 1) + 1) / (x * (sqrt(x + 1) + 1))",
              "Simplificamos: x / (x * (sqrt(x + 1) + 1)) = 1 / (sqrt(x + 1) + 1)",
              "lim_{x -> 0} 1 / (sqrt(x + 1) + 1) = 1 / 2"
            ],
            observacion: ""
          }
        ]
      },
      {
        titulo: "Propiedades de los Límites",
        contenido: "Suma, diferencia, producto y cociente de límites.",
        video: "https://www.youtube.com/watch?v=PYBYCP6aeiI",
        resumen2: [
          {
            titulo: "Suma de Límites",
            contenido: "Si lim_{x -> a} f(x) = L y lim_{x -> a} g(x) = M, entonces lim_{x -> a} (f(x) + g(x)) = L + M.",
            expresion: ["lim_{x -> 2} (3x + 4) + lim_{x -> 2} (2x - 1) = (3(2) + 4) + (2(2) - 1) = 10 + 3 = 13"],
            observacion: ""
          },
          {
            titulo: "Diferencia de Límites",
            contenido: "Si lim_{x -> a} f(x) = L y lim_{x -> a} g(x) = M, entonces lim_{x -> a} (f(x) - g(x)) = L - M.",
            expresion: ["lim_{x -> 3} (x^2 - 4x) - lim_{x -> 3} (x - 1) = (3^2 - 4(3)) - (3 - 1) = (9 - 12) - 2 = -3 - 2 = -5"],
            observacion: ""
          },
          {
            titulo: "Producto de Límites",
            contenido: "Si lim_{x -> a} f(x) = L y lim_{x -> a} g(x) = M, entonces lim_{x -> a} (f(x) * g(x)) = L * M.",
            expresion: ["lim_{x -> 1} (x^2) * lim_{x -> 1} (2x + 3) = (1^2) * (2(1) + 3) = 1 * 5 = 5"],
            observacion: ""
          },
          {
            titulo: "Cociente de Límites",
            contenido: "Si lim_{x -> a} f(x) = L, lim_{x -> a} g(x) = M y M ≠ 0, entonces lim_{x -> a} (f(x) / g(x)) = L / M.",
            expresion: ["lim_{x -> 2} (x^2 - 1) / (x - 1) = (2^2 - 1) / (2 - 1) = (4 - 1) / 1 = 3 / 1 = 3"],
            observacion: ""
          }
        ]
      },
      {
        titulo: "Límites Laterales",
        contenido: "Límites por la derecha y por la izquierda y su relación con la existencia de límites.",
        video: "https://www.youtube.com/watch?v=7ahPOkG-uz0",
        resumen2: [
          {
            titulo: "Límite por la Derecha",
            contenido: "El límite de f(x) cuando x se aproxima a a desde la derecha (es decir, para valores de x mayores pero cercanos a a) se denota como lim_{x -> a^+} f(x).",
            expresion: ["lim_{x -> 1^+} (3x - 2) = 1"],
            observacion: "A medida que x se aproxima a 1 desde la derecha, 3x - 2 se aproxima a 1."
          },
          {
            titulo: "Límite por la Izquierda",
            contenido: "El límite de f(x) cuando x se aproxima a a desde la izquierda (es decir, para valores de x menores pero cercanos a a) se denota como lim_{x -> a^-} f(x).",
            expresion: ["lim_{x -> 1^-} (3x - 2) = 1"],
            observacion: "A medida que x se aproxima a 1 desde la izquierda, 3x - 2 se aproxima a 1."
          },
          {
            titulo: "Relación con la Existencia de Límites",
            contenido: "Para que el límite de una función en un punto exista, los límites laterales por la derecha y por la izquierda deben existir y ser iguales.",
            expresion: [
              "lim_{x -> 2} f(x) = L si y solo si lim_{x -> 2^-} f(x) = lim_{x -> 2^+} f(x) = L",
              "f(x) = {x + 1 si x < 2, 3 - x si x >= 2}",
              "lim_{x -> 2^-} f(x) = 2 + 1 = 3",
              "lim_{x -> 2^+} f(x) = 3 - 2 = 1"
            ],
            observacion: "Los límites laterales no son iguales, por lo tanto, lim_{x -> 2} f(x) no existe"
          }
        ]
      },
      {
        titulo: "Límites Indeterminados",
        contenido: "Resolución de formas indeterminadas.",
        video: "https://www.youtube.com/watch?v=F4NrlZpANKc",
        resumen2: [
          {
            titulo: "Formas Indeterminadas Comunes",
            contenido: "En cálculo, algunas veces al evaluar un límite, se obtienen expresiones que no proporcionan información útil directamente y se denominan formas indeterminadas. Estas formas requieren métodos adicionales para resolverse y determinar el valor del límite.",
            expresion: ["0/0", "infinito/infinito", "0 * infinito", "infinito - infinito", "0^0", "infinito^0", "1^infinito"],
            observacion: ""
          },
          {
            titulo: "Métodos Para Resolver Formas Indeterminadas",
            contenido: "",
            resumen3: [
              {
                titulo: "Factoreo",
                contenido: "Este método consiste en factorizar el numerador y/o el denominador para cancelar términos y simplificar la expresión.",
                expresion: [
                  "lim_{x -> 2} (x^2 - 4) / (x - 2)",
                  "Factorizamos el numerador: x^2 - 4 = (x - 2)(x + 2)",
                  "Simplificamos cancelando el término común: (x + 2)",
                  "lim_{x -> 2} (x + 2) = 4"
                ],
                observacion: ""
              },
              {
                titulo: "Racionalización",
                contenido: "Este método se utiliza cuando las expresiones contienen raíces cuadradas. Consiste en multiplicar y dividir por el conjugado de la expresión que contiene la raíz para eliminar la raíz en el numerador o denominador.",
                expresion: [
                  "lim_{x -> 0} sqrt(x + 1) - 1 / x",
                  "Multiplicamos y dividimos por el conjugado: (sqrt(x + 1) - 1)(sqrt(x + 1) + 1) / (x(sqrt(x + 1) + 1))",
                  "Simplificamos: (x + 1 - 1) / (x(sqrt(x + 1) + 1)) = x / (x(sqrt(x + 1) + 1))",
                  "Evaluamos el límite directamente: 1 / (sqrt(x + 1) + 1)",
                  "lim_{x -> 0} 1 / (sqrt(x + 1) + 1) = 1 / 2"
                ],
                observacion: ""
              },
              {
                titulo: "Regla de L'Hôpital",
                contenido: "La regla de L'Hôpital se aplica a las formas indeterminadas 0/0 o infinito/infinito. Consiste en derivar el numerador y el denominador por separado y luego evaluar el límite de la nueva fracción.",
                expresion: [
                  "lim_{x -> 0} sin(x) / x",
                  "Directamente obtenemos 0/0, por lo que aplicamos la regla de L'Hôpital: lim_{x -> 0} cos(x) / 1",
                  "lim_{x -> 0} cos(x) = 1"
                ],
                observacion: ""
              },
              {
                titulo: "Expansión en Series de Taylor",
                contenido: "La expansión en series de Taylor se utiliza para aproximar funciones cerca de un punto y resolver formas indeterminadas.",
                expresion: [
                  "lim_{x -> 0} (e^x - 1) / x",
                  "Usamos la expansión de Taylor de e^x cerca de 0: e^x ≈ 1 + x + x^2/2! + ...",
                  "Evaluando el límite: lim_{x -> 0} (1 + x/2!) = 1"
                ],
                observacion: ""
              },
              {
                titulo: "Simplificación Algebraica",
                contenido: "A veces, simplificar la expresión algebraicamente puede resolver la indeterminación.",
                expresion: [
                  "lim_{x -> 0} sin(2x) / x",
                  "Simplificamos la fracción: sin(2x) / x = 2 * sin(2x) / (2x)",
                  "Sabemos que lim_{x -> 0} sin(x) / x = 1, por lo tanto: 2 * lim_{x -> 0} sin(2x) / (2x) = 2 * 1 = 2",
                  "lim_{x -> 0} sin(2x) / x = 2"
                ],
                observacion: ""
              }
            ]
          }
        ]
      },
      {
        titulo: "Teoremas Importantes",
        contenido: "Teorema del Sándwich, Teorema de la Acotación y el Teorema de Bolzano-Weierstrass.",
        video: "https://www.youtube.com/watch?v=Ggro0sCkG2U",
        resumen2: [
          {
            titulo: "Teorema del Sándwich",
            contenido: "El Teorema del Sándwich se utiliza para encontrar el límite de una función que está acotada entre dos funciones más simples cuyos límites son conocidos y son iguales en un punto particular.",
            expresion: [
              "lim_{x -> 0} x^2 sin(1/x)",
              "Sabemos que -1 <= sin(1/x) <= 1, por lo tanto: -x^2 <= x^2 sin(1/x) <= x^2",
              "lim_{x -> 0} (-x^2) = 0 y lim_{x -> 0} x^2 = 0, así: lim_{x -> 0} x^2 sin(1/x) = 0"
            ],
            observacion: ""
          },
          {
            titulo: "Teorema de la Acotación",
            contenido: "El Teorema de la Acotación asegura que una función continua en un intervalo cerrado y acotado está acotada y alcanza sus valores máximo y mínimo en ese intervalo.",
            expresion: [
              "f(x) = x^2 - x en el intervalo [0, 2]",
              "Evaluamos f en los extremos y en los puntos críticos dentro del intervalo: f(0) = 0, f(2) = 2, f'(x) = 2x - 1 resuelve f'(x) = 0 => x = 1/2, evaluamos f en x = 1/2: f(1/2) = 1/4 - 1/2 = -1/4",
              "Los valores máximo y mínimo de f en [0, 2] son 2 y -1/4 respectivamente."
            ],
            observacion: ""
          },
          {
            titulo: "Teorema de Bolzano-Weierstrass",
            contenido: "El Teorema de Bolzano-Weierstrass es un resultado fundamental en análisis que garantiza la existencia de una subsucesión convergente en cualquier sucesión acotada de números reales.",
            expresion: [
              "Considera la sucesión (a_n) donde a_n = (-1)^n. Esta sucesión está acotada ya que |a_n| <= 1 para todo n.",
              "La subsucesión a_2n = 1 converge a 1 y la subsucesión a_2n+1 = -1 converge a -1. Aunque (a_n) no converge, tiene subsucesiones que sí lo hacen, cumpliendo el Teorema de Bolzano-Weierstrass."
            ],
            observacion: ""
          }
        ]
      },
      {
        titulo: "Límites y Continuidad",
        contenido: "Relación entre límites y continuidad, y tipos de discontinuidades.",
        video: "https://www.youtube.com/watch?v=sHuqCyEVNCs",
        resumen2: [
          {
            titulo: "Relación Entre Límites y Continuidad",
            contenido: "Una función f(x) es continua en un punto x = a si se cumplen las siguientes tres condiciones: f(a) está definida, el límite de f(x) cuando x tiende a a existe, y el valor del límite es igual al valor de la función en ese punto.",
            expresion: [],
            observacion: ""
          },
          {
            titulo: "Tipos de Discontinuidades",
            contenido: "Las discontinuidades ocurren cuando una de las condiciones para la continuidad no se cumple.",
            resumen3: [
              {
                titulo: "Discontinuidad Evitable",
                contenido: "Ocurre cuando el límite de la función existe, pero no es igual al valor de la función en ese punto, o cuando el valor de la función no está definido en ese punto pero el límite sí existe.",
                expresion: [
                  "f(x) = {x^2 - 1 / x - 1 si x ≠ 1, 2 si x = 1}",
                  "lim_{x -> 1} (x^2 - 1) / (x - 1) = 2",
                  "f(1) = 2",
                  "Aunque lim_{x -> 1} f(x) = 2, f(1) = 2. Por lo tanto, la discontinuidad en x = 1 es evitable."
                ],
                observacion: ""
              },
              {
                titulo: "Discontinuidad Infinita",
                contenido: "Ocurre cuando el límite de la función tiende a infinito en un punto.",
                expresion: [
                  "f(x) = 1 / (x - 2)",
                  "lim_{x -> 2^+} 1 / (x - 2) = infinito",
                  "lim_{x -> 2^-} 1 / (x - 2) = -infinito"
                ],
                observacion: "La función tiene una discontinuidad infinita en x = 2."
              },
              {
                titulo: "Discontinuidad de Salto",
                contenido: "Ocurre cuando los límites laterales existen pero no son iguales.",
                expresion: [
                  "f(x) = {x + 2 si x < 1, x - 2 si x >= 1}",
                  "lim_{x -> 1^-} f(x) = 3",
                  "lim_{x -> 1^+} f(x) = -1"
                ],
                observacion: "Hay una discontinuidad de salto en x = 1."
              }
            ]
          }
        ]
      },
      {
        titulo: "Aplicaciones de Límites",
        contenido: "Aplicaciones en derivadas, integrales y series infinitas.",
        video: "https://www.youtube.com/watch?v=JyRQzZSjCJg",
        resumen2: [
          {
            titulo: "Derivadas",
            contenido: "Las derivadas se definen a través del concepto de límite. La derivada de una función en un punto mide la tasa de cambio instantánea de la función en ese punto y se define como el límite de la razón de cambio promedio cuando el intervalo de cambio se hace infinitesimalmente pequeño.",
            expresion: [
              "f'(a) = lim_{h -> 0} (f(a + h) - f(a)) / h",
              "f(x) = x^2",
              "f'(a) = lim_{h -> 0} ((a + h)^2 - a^2) / h",
              "lim_{h -> 0} (a^2 + 2ah + h^2 - a^2) / h = lim_{h -> 0} (2ah + h^2) / h = 2a",
              "f'(x) = 2x cuando x = a"
            ],
            observacion: ""
          },
          {
            titulo: "Integrales",
            contenido: "Las integrales también se definen utilizando el concepto de límite. La integral definida de una función sobre un intervalo representa el área bajo la curva de la función entre dos puntos y se define como el límite de una suma de Riemann.",
            expresion: [
              "∫_a^b f(x) dx = lim_{n -> ∞} Σ_{i=1}^n f(x_i)Δx donde Δx = (b-a)/n y x_i es un punto en el i-ésimo subintervalo.",
              "∫_0^1 x^2 dx",
              "lim_{n -> ∞} Σ_{i=1}^n ((i/n)^2) * (1/n) = lim_{n -> ∞} 1/n^3 * Σ_{i=1}^n i^2",
              "Σ_{i=1}^n i^2 = n(n + 1)(2n + 1)/6",
              "lim_{n -> ∞} 1/n^3 * n(n + 1)(2n + 1)/6 = 1/3"
            ],
            observacion: ""
          },
          {
            titulo: "Series Infinitas",
            contenido: "Las series infinitas se definen como la suma de los términos de una sucesión infinita y su valor se determina usando límites. Una serie infinita converge a un valor S si la sucesión de sumas parciales tiende a S a medida que el número de términos aumenta indefinidamente.",
            expresion: [
              "S = Σ_{n=1}^∞ a_n = lim_{N -> ∞} Σ_{n=1}^N a_n",
              "Σ_{n=0}^∞ r^n",
              "Converge si |r| < 1",
              "Σ_{n=0}^∞ r^n = 1 / (1 - r)"
            ],
            observacion: ""
          }
        ]
      }
    ]
  },
  {
    tema_principal: "Derivadas",
    resumen: [
      {
        titulo: "Introducción a Derivadas",
        contenido: "Próximamente..."
      }
    ]
  }
];

export default previewData;
