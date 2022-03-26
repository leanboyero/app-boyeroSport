const products = [
    {
       "id":"1",
       "name":"Zapatillas Pony City Wings Ox",
       "price":"$6.999,00",
       "sizes":["39", "40",  "41", "42", "43", "44", "45"],
       "images":[
          {
             "id":1,
             "image":"assents/images/01.jpg"
          },
          {
             "id":2,
             "image":"assents/images/01_2.jpg"
          },
          {
             "id":3,
             "image":"assents/images/01_3.jpg"
          },
          {
             "id":4,
             "image":"assents/images/01_4.jpg"
          }
       ],
       "description":"Capellada compuesta por cuero Sintético, su suela de goma  y ajuste a cordones. Disfruta de un clásico que te remonta al pasado con las Zapatillas Pony City Wings Ox Ghost. Cuentan con un diseño limpio y fácil de llevar en tu rutina para sacarle el máximo provecho."
    },
    {
       "id":"2",
       "name":"Camiseta Nike Striped Disivion III Kids",
       "price":"$2.499,00",
       "sizes":["S", "M", "L", "XL"],
       "images":[
          {
             "id":1,
             "image":"assents/images/02.jpg"
          },
          {
             "id":2,
             "image":"assents/images/02_2.jpg"
          }
       ],
       "description":"Este producto está hecho de tejido de poliéster 100% reciclado y cuenta con la tecnología Dri-FIT que brinda una evaporación más rápida, ayudándote a mantenerte seco y cómodo."
    },
    {
       "id":"3",
       "name":"Camiseta Nike Striped Disivion III Kids",
       "price":"$2.499,00",
       "sizes":["S", "M", "L", "XL"],
       "images":[
          {
             "id":1,
             "image":"assents/images/03.jpg"
          }
       ],
       "description":"Este producto está hecho de tejido de poliéster 100% reciclado y cuenta con la tecnología Dri-FIT que brinda una evaporación más rápida, ayudándote a mantenerte seco y cómodo."
    },
    {
       "id":"4",
       "name":"Gorra Under Armour Estudiantes de la Plata",
       "price":"$2.749,00",
       "sizes":null,
       "images":[
          {
             "id":1,
             "image":"assents/images/04.jpg"
          },
          {
             "id":2,
             "image":"assents/images/04_2.jpg"
          }
       ],
       "description":"Diseñada con calce UA Free Fit para adaptarla mejor a tu cabeza y una tela elástica y duradera que proporciona confort en todo momento. Cuenta con protección FPS 30 para los días donde el sol no da tregua y paneles de malla para mejorar la ventilación."
    },
    {
       "id":"5",
       "name":"Zapatillas Pony Turbulence Ox",
       "price":"$6.999,0",
       "sizes":[ "39", "40","41","42","43", "44","45"],
       "images":[
          {
             "id":1,
             "image":"assents/images/05.jpg"
          },
          {
             "id":2,
             "image":"assents/images/05_2.jpg"
          },
          {
             "id":3,
             "image":"assents/images/05_3.jpg"
          },
          {
             "id":4,
             "image":"assents/images/05_4.jpg"
          }
       ],
       "description":"son otro de los modelos que la marca neoyorquina nacida en 1972 trae a las grandes ciudades para contagiarse con el mismo estilo. Inspiradas en diseños más deportivos y modernos, su ajuste con sistema de cordones te ofrece el control necesario para la mayor comodidad, mientras que la suela de goma te proporciona el agarre necesario en la superficie."
    },
    {
       "id":"6",
       "name":"Short Kappa Aldosivi Player 2019/2020",
       "price":"$2.799,00",
       "sizes":["S", "M", "L", "XL"],
       "images":[
          {
             "id":1,
             "image":"assents/images/06.jpg"
          },
          {
             "id":2,
             "image":"assents/images/06_2.jpg"
          },
          {
             "id":3,
             "image":"assents/images/06_3.jpg"
          }
       ],
       "description":"Su confección en poliéster y ajuste con elástico y cordón hacen que sea una prenda ideal para todos tus días. Hecho para hinchas incondicionales."
    },
    {
       "id":"7",
       "name":"Camiseta y Short Adidas River Plate Home 2020/2021 Baby",
       "price":"$7.999,00",
       "sizes":[4, 5],
       "images":[
          {
             "id":1,
             "image":"assents/images/07.jpg"
          },
          {
             "id":2,
             "image":"assents/images/07_2.jpg"
          },
          {
             "id":3,
             "image":"assents/images/07_3.jpg"
          },
          {
             "id":4,
             "image":"assents/images/07_4.jpg"
          }
       ],
       "description":" Este uniforme adidas para niños le da a tu pequeño hincha del River Plate la oportunidad de compartir su pasión por el fútbol con el mundo entero. Este producto está hecho con Primegreen, una serie de materiales reciclados de alto rendimiento."
    },
    {
       "id":"8",
       "name":"Zapatillas Kappa Giorgia",
       "price":"$6.999,00",
       "sizes":[35, 36, 37, 38, 39, 40, 41],
       "images":[
          {
             "id":1,
             "image":"assents/images/08.jpg"
          },
          {
             "id":2,
             "image":"assents/images/08_2.jpg"
          },
          {
             "id":3,
             "image":"assents/images/08_3.jpg"
          }
       ],
       "description":"Ideales para quienes buscan confort y respirabilidad. Parte superior con tejido abiertos para la circulación del aire durante la carrera y un sistema especial de ajuste de cordones para mayor confort. Suela con tecnología que absorbe los impactos, protegiendo el ciclo de la pisada."
    },
    {
       "id":"9",
       "name":"Pantalón Nike Neymar Jr",
       "price":"$4.999,00",
       "sizes":["S", "M", "L", "XL"],
       "images":[
          {
             "id":1,
             "image":"assents/images/09.jpg"
          },
          {
             "id":2,
             "image":"assents/images/09_2.jpg"
          },
          {
             "id":3,
             "image":"assents/images/09_3.jpg"
          },
          {
             "id":4,
             "image":"assents/images/09_4.jpg"
          }
       ],
       "description":"Los pantalones Nike Essential ofrecen un diseño ligero para tu ruta favorita. Confeccionado en poliéster y elastano que en su tejido lleva tecnología Nike Dri-FIT que absorbe y seca el sudor rápidamente. Es de corte clásico, de cintura elástica y ajuste por cordones. Cuentan con almacenamiento actualizado para artículos esenciales."
    },
    {
       "id":"10",
       "name":"Conjunto Deportivo Under Armour Tricot",
       "price":"$10.999,00",
       "sizes":["S", "M"],
       "images":[
          {
             "id":1,
             "image":"assents/images/10.jpg"
          },
          {
             "id":2,
             "image":"assents/images/10_2.jpg"
          },
          {
             "id":3,
             "image":"assents/images/10_3.jpg"
          }
       ],
       "description":"Este es un conjunto con el que puedes entrenar. Es ligero pero cálido, se estira para que puedas moverte y respira mientras te calientas. Pegado a la piel, pero sin apretar. Exterior de punto de tricot suave con interior cepillado para una comodidad y calidez suaves. El material absorbe el sudor y se seca muy rápido. Campera con Bolsillos abiertos para las manos y puños y dobladillo inferior acanalados."
    },
    {
       "id":"11",
       "name":"Camiseta Nike Dri-Fit Strike",
       "price":"$7.299,00",
       "sizes":["S", "M", "L", "XL"],
       "images":[
          {
             "id":1,
             "image":"assents/images/11.jpg"
          },
          {
             "id":2,
             "image":"assents/images/11_2.jpg"
          },
          {
             "id":3,
             "image":"assents/images/11_3.jpg"
          }
       ],
       "description":"La camiseta Nike Dri-FIT Strike cuenta con detalles de diseño específicamente personalizados para las estrellas más prometedoras del fútbol. Cuenta con un ajuste entallado y estilizado para que nada se interponga entre el balón y tú, y su tela absorbente de sudor te ayuda a mantener la frescura y la concentración mientras perfeccionas tus habilidades. Este producto está fabricado al 100% con fibras de poliéster reciclado."
    },
    {
       "id":"12",
       "name":"Camiseta Adidas River Plate Away Kids 2020/2021",
       "price":"$6.799,00",
       "sizes":["S", "M", "L", "XL","XXL"
       ],
       "images":[
          {
             "id":1,
             "image":"assents/images/12.jpg"
          },
          {
             "id":2,
             "image":"assents/images/12_2.jpg"
          }
       ],
       "description":"Diseñada para envolver al hincha en comodidad, presenta un tejido absorbente de tacto sedoso y un corte ligeramente más holgado que el de la camiseta que usan los jugadores. Luce el escudo del club tejido en el pecho."
    }
 ];

export const getProducts = new Promise ((resolve, reject) => {
    let condition = true;
    if (condition){
        setTimeout(()=>{
                resolve(products);
        },3000);
    }else{
        reject('No se obtuvieron los productos.');
    }

});