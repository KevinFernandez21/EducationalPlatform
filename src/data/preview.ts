const previewData = [
  {
    tema_principal: "Límites",
    resumen: [
      {
        titulo: "Concepto de Límite",
        contenido: "Definición y tipos de límites: finitos, infinitos y en el infinito.",
        resumen2: [
          {
            titulo: "Definición de Límite",
            contenido:"El concepto de límite es fundamental en cálculo y análisis matemático. Un límite describe cómo se comporta una función a medida que su argumento se aproxima a un valor específico.",
            resumen3:[
              {
                titulo:"Definicion Intuitiva",
                contenido:"El límite de f(x) cuando x tiende a a es L, si al acercarse x a a, f(x) se acerca a L.lim_{x -> a} f(x) = L",
                expresion:[],
                observacion:""
              },
              {
                titulo:"Definicion Epsilon Delta",
                contenido:"Para todo epsilon > 0 existe un delta > 0 tal que si 0 < |x - a| < delta, entonces |f(x) - L| < epsilon.",
                expresion:[],
                observacion:""
              }
            ],
            expresion:[""],
            observacion:""
          },
          {
            titulo:"Limites Finito Finito",
            contenido:"Estos límites ocurren cuando tanto el valor al que se aproxima x como el valor al que se aproxima f(x) son finitos.",
            resumen3:[],
            expresion:["lim_{x -> 3}(2x + 1) = 7"],
            observacion:"A medida que x se acerca a 3, la función 2x + 1 se acerca a 7."
          },
          {
            titulo:"Limites Infinitos",
            contenido:"Los límites infinitos describen el comportamiento de una función cuando se aproxima a un valor infinito o cuando la función tiende a infinito.",
            resumen3:[],
            expresion:["lim_{x -> infinity} (1/x) = 0"],
            observacion:"A medida que x crece sin límite, 1/x se aproxima a 0."
          },
          {
            titulo:"Limites En El Infinito",
            contenido:"Los límites en el infinito consideran el comportamiento de una función a medida que su argumento tiende a infinito.",
            resumen3:[],
            expresion:["lim_{x -> infinity} (3x^2 + 2x + 1) = infinity"],
            observacion:"A medida que x tiende a infinito, la función 3x^2 + 2x + 1 también tiende a infinito."
          },
        ],
        video:"https://www.youtube.com/watch?v=6e9ZD7vAmv4"
      },
      {
        titulo: "Cálculo de Límites",
        contenido: "Métodos para calcular límites: evaluación directa, factoreo y racionalización.",
        resumen2:[
          {
            titulo:"Evaluacion Directa",
            contenido:"La evaluación directa es el método más sencillo para calcular límites. Consiste en sustituir directamente el valor al que se aproxima x en la función f(x). Si la función es continua en ese punto, el valor obtenido será el límite.",
            resumen3:[],
            expresion:["lim_{x -> 3} (2x + 1) = 2(3) + 1 = 7"],
            observacion:"Este método solo funciona si la función es continua y no presenta indeterminaciones en el punto evaluado."
          },
          {
            titulo:"Factoreo",
            contenido:"El método de factoreo se utiliza cuando la evaluación directa da lugar a una forma indeterminada, como 0/0. Consiste en factorizar el numerador y/o el denominador para simplificar la expresión.",
            resumen3:[],
            expresion:["lim_{x -> 2} (x^2 - 4) / (x - 2)","Factorizamos el numerador: x^2 - 4 = (x - 2)(x + 2)","Simplificamos cancelando el término común: (x + 2)","lim_{x -> 2} (x + 2) = 2 + 2 = 4"],
            observacion:""
          },
          {
            titulo:"Racionalizacion",
            contenido:"La racionalización se utiliza principalmente cuando las expresiones contienen raíces cuadradas. Consiste en multiplicar y dividir por el conjugado de la expresión que contiene la raíz para eliminar la raíz en el numerador o denominador.",
            resumen3:[],
            expresion:["lim_{x -> 0} (sqrt(x + 1) - 1) / x","Multiplicamos y dividimos por el conjugado: (sqrt(x + 1) - 1) * (sqrt(x + 1) + 1) / (x * (sqrt(x + 1) + 1))","Simplificamos: x / (x * (sqrt(x + 1) + 1)) = 1 / (sqrt(x + 1) + 1)","lim_{x -> 0} 1 / (sqrt(x + 1) + 1) = 1 / 2"],
            observacion:""
          }
        ],
        video:"https://www.youtube.com/watch?v=yptVvhFVFIo"
      },
      {
        titulo: "Propiedades de los Límites",
        contenido: "Suma, diferencia, producto y cociente de límites.",
        resumen2:[
          {
            titulo:"Suma De Limites",
            contenido:"Si lim_{x -> a} f(x) = L y lim_{x -> a} g(x) = M, entonces lim_{x -> a} (f(x) + g(x)) = L + M.",
            resumen3:[],
            expresion:["lim_{x -> 2} (3x + 4) + lim_{x -> 2} (2x - 1) = (3(2) + 4) + (2(2) - 1) = 10 + 3 = 13"],
            observacion:""
          },
          {
            titulo:"Diferencia De Limites",
            contenido:"Si lim_{x -> a} f(x) = L y lim_{x -> a} g(x) = M, entonces lim_{x -> a} (f(x) - g(x)) = L - M.",
            resumen3:[],
            expresion:["lim_{x -> 3} (x^2 - 4x) - lim_{x -> 3} (x - 1) = (3^2 - 4(3)) - (3 - 1) = (9 - 12) - 2 = -3 - 2 = -5"],
            observacion:""
          },
          {
            titulo:"Producto De Limites",
            contenido:"Si lim_{x -> a} f(x) = L y lim_{x -> a} g(x) = M, entonces lim_{x -> a} (f(x) * g(x)) = L * M.",
            resumen3:[],
            expresion:["lim_{x -> 1} (x^2) * lim_{x -> 1} (2x + 3) = (1^2) * (2(1) + 3) = 1 * 5 = 5"],
            observacion:""
          },
          {
            titulo:"Cociente De Limites",
            contenido:"Si lim_{x -> a} f(x) = L, lim_{x -> a} g(x) = M y M != 0, entonces lim_{x -> a} (f(x) / g(x)) = L / M.",
            resumen3:[],
            expresion:[],
            observacion:"lim_{x -> 2} (x^2 - 1) / (x - 1) = (2^2 - 1) / (2 - 1) = (4 - 1) / 1 = 3 / 1 = 3"
          }
        ],
        video:"https://www.youtube.com/watch?v=PYBYCP6aeiI"
      },
      {
        titulo: "Límites Laterales",
        contenido: "Límites por la derecha y por la izquierda y su relación con la existencia de límites.",
        resumen2:[
          {
            titulo:"Limite Por LaDerecha",
            contenido:"El límite de f(x) cuando x se aproxima a a desde la derecha (es decir, para valores de x mayores pero cercanos a a) se denota como lim_{x -> a^+} f(x).",
            resumen3:[],
            expresion:["lim_{x -> 1^+} (3x - 2) = 1"],
            observacione:"A medida que x se aproxima a 1 desde la derecha, 3x - 2 se aproxima a 1."
          },
          {
            titulo:"Limite Por La Izquierda",
            contenido:"El límite de f(x) cuando x se aproxima a a desde la izquierda (es decir, para valores de x menores pero cercanos a a) se denota como lim_{x -> a^-} f(x).",
            resumen3:[],
            expresion:["lim_{x -> 1^-} (3x - 2) = 1"],
            observacione:"A medida que x se aproxima a 1 desde la izquierda, 3x - 2 se aproxima a 1."
          },
          {
            titulo:"Relacion Con La Existencia De Limites",
            contenido:"Para que el límite de una función en un punto exista, los límites laterales por la derecha y por la izquierda deben existir y ser iguales.",
            resumen3:[],
            expresion:["lim_{x -> a} f(x) = L si y solo si lim_{x -> a^-} f(x) = lim_{x -> a^+} f(x) = L","f(x) = {x + 1 si x < 2, 3 - x si x >= 2}","lim_{x -> 2^-} f(x) = 2 + 1 = 3","lim_{x -> 2^+} f(x) = 3 - 2 = 1"],
            observacione:"Los límites laterales no son iguales, por lo tanto, lim_{x -> 2} f(x) no existe"
          }
        ],
        video:"https://www.youtube.com/watch?v=7ahPOkG-uz0"
      },
      {
        titulo: "Límites Indeterminados",
        contenido: "Resolución de formas indeterminadas.",
        resumen2:[
          {
            titulo:"Formas Indeterminadas Comunes",
            contenido:"En cálculo, algunas veces al evaluar un límite, se obtienen expresiones que no proporcionan información útil directamente y se denominan formas indeterminadas. Estas formas requieren métodos adicionales para resolverse y determinar el valor del límite.",
            resumen3:[],
            expresion:["0/0","infinito/infinito","0 * infinito","infinito - infinito","0^0","infinito^0","1^infinito"],
            observacion:""
          }
          ,{
            titulo:"Metodos Para Resolver Formas Indeterminadas",
            contenido:"",
            resumen3:[
              {
                titulo:"Definicion Intuitiva",
                contenido:"El límite de f(x) cuando x tiende a a es L, si al acercarse x a a, f(x) se acerca a L.lim_{x -> a} f(x) = L",
                expresion:[],
                observacion:""
              }
              ,{
                titulo:"Definicion Intuitiva",
                contenido:"El límite de f(x) cuando x tiende a a es L, si al acercarse x a a, f(x) se acerca a L.lim_{x -> a} f(x) = L",
                expresion:[],
                observacion:""
              }
              ,{
                titulo:"Definicion Intuitiva",
                contenido:"El límite de f(x) cuando x tiende a a es L, si al acercarse x a a, f(x) se acerca a L.lim_{x -> a} f(x) = L",
                expresion:[],
                observacion:""
              }
              ,{
                titulo:"Definicion Intuitiva",
                contenido:"El límite de f(x) cuando x tiende a a es L, si al acercarse x a a, f(x) se acerca a L.lim_{x -> a} f(x) = L",
                expresion:[],
                observacion:""
              },{
                titulo:"Definicion Intuitiva",
                contenido:"El límite de f(x) cuando x tiende a a es L, si al acercarse x a a, f(x) se acerca a L.lim_{x -> a} f(x) = L",
                expresion:[],
                observacion:""
              }
            ],
            expresion:[],
            observacion:""
          }
        ],
        video:""
      },
      {
        titulo: "Teoremas Importantes",
        contenido: "Teorema del Sándwich, Teorema de la Acotación y el Teorema de Bolzano-Weierstrass.",
        resumen2:[],
        video:""
      },
      {
        titulo: "Límites y Continuidad",
        contenido: "Relación entre límites y continuidad, y tipos de discontinuidades.",
        resumen2:[],
        video:""
      },
      {
        titulo: "Aplicaciones de Límites",
        contenido: "Aplicaciones en derivadas, integrales y series infinitas.",
        resumen2:[],
        video:""
      }
    ]
  },
  {
    tema_principal: "Derivadas",
    resumen: [
      {
        titulo: "",
        contenido: "Proximanente..."
      },
    ]
  }
  // Puedes agregar más temas principales aquí
];

export default previewData;