// BASE DE DATOS DEL MENÚ - Fácil de actualizar
const menuData = {
    nosotros: {
        titulo: "Nuestro Espacio",
        imagenes: [
            { 
                src: "images/nosotros/local-1.jpg", 
                descripcion: "Ambiente acogedor con luz cálida" 
            },
            { 
                src: "images/nosotros/local-2.jpg", 
                descripcion: "Nuestro equipo de cocina" 
            },
            { 
                src: "images/nosotros/terraza.jpg", 
                descripcion: "Terraza exterior con vista" 
            },
            { 
                src: "images/nosotros/barra.jpg", 
                descripcion: "Detalle de nuestra barra" 
            }
        ]
    },
    entradas: [
        { 
            nombre: "Tostones de Ceviche Nikkei",
            precio: "$9.90",
            descripcion: "Tostones de plátano verde con ceviche de corvina, leche de tigre de maracuyá, chips de camote y cilantro.",
            imagen: "images/entradas/tostones-ceviche.jpg"
        },
        { 
            nombre: "Gyozas de Pollo al Curry",
            precio: "$8.50",
            descripcion: "Gyozas rellenas de pollo con curry rojo tailandés, salsa de soja y aceite de sésamo.",
            imagen: "images/entradas/gyozas.jpg"
        },
        { 
            nombre: "Carpaccio de Pulpo",
            precio: "$12.90",
            descripcion: "Finas láminas de pulpo, crema de wasabi, lima, aceite de oliva y flores comestibles.",
            imagen: "images/entradas/carpaccio-pulpo.jpg"
        }
    ],
    principales: [
        { 
            nombre: "Ramen de Mariscos",
            precio: "$16.90",
            descripcion: "Caldo tonkotsu con camarones, calamar, huevo marinado, bambú y alga nori.",
            imagen: "images/principales/ramen.jpg"
        },
        { 
            nombre: "Lomo Saltado al Estilo Tandoori",
            precio: "$18.50",
            descripcion: "Lomo de res marinado en especias indias, salteado con cebolla, tomate, salsa de soja y papas fritas.",
            imagen: "images/principales/lomo-saltado.jpg"
        },
        { 
            nombre: "Risotto de Hongos con Trufa",
            precio: "$15.90",
            descripcion: "Arroz arborio cremoso con hongos silvestres, aceite de trufa y queso parmesano.",
            imagen: "images/principales/risotto.jpg"
        },
        { 
            nombre: "Pescado a la Talla Fusión",
            precio: "$21.00",
            descripcion: "Pescado entero con salsa de aji amarillo y miso, acompañado de arroz chaufa.",
            imagen: "images/principales/pescado-talla.jpg"
        }
    ],
    postres: [
        { 
            nombre: "Suspiro Limeño con Matcha",
            precio: "$7.90",
            descripcion: "Suspiro limeño tradicional con un toque de té matcha y bizcocho de almendras.",
            imagen: "images/postres/suspiro.jpg"
        },
        { 
            nombre: "Mochi de Mango y Maracuyá",
            precio: "$6.50",
            descripcion: "Helado de maracuyá envuelto en masa de mochi, salsa de mango fresco.",
            imagen: "images/postres/mochi.jpg"
        }
    ],
    bebidas: [
        { 
            nombre: "Maracuyá Sour",
            precio: "$8.90",
            descripcion: "Pisco, maracuyá, jarabe de goma, clara de huevo y amargo de angostura.",
            imagen: "images/bebidas/maracuya-sour.jpg"
        },
        { 
            nombre: "Cóctel de Chicha Morada",
            precio: "$7.50",
            descripcion: "Chicha morada infusionada con canela, ron, manzana verde y hielo.",
            imagen: "images/bebidas/chicha.jpg"
        },
        { 
            nombre: "Limonada de Jengibre",
            precio: "$4.90",
            descripcion: "Limonada natural con jengibre, hierbabuena y un toque de miel.",
            imagen: "images/bebidas/limonada.jpg"
        }
    ]
};