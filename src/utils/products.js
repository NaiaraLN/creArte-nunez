import producto1 from "../assets/cuevaMisteriosa.png"
import producto2 from "../assets/galaxia.png"
import producto3 from "../assets/leon.png"
import producto4 from "../assets/mujerOleo.png"
import producto5 from "../assets/ojoOleo.png"

export const products = [{
    id: 1,
        name: "Cueva Misteriosa",
        price: 900,
        img: producto1,
        stock: 20,
        initial: 1,
        category: "prints",
        description: "Cueva misteriosa ficticia.",
        technique: "Arte Digital",
        size: "16x20"
    },
    {   
        id: 2,
        name: "Galaxia",
        price: 1200,
        img: producto2,
        stock: 10,
        initial: 1,
        category: "prints",
        description: "Mujer en una galaxia.",
        technique: "Arte Digital",
        size: "16x20"
    },
    {
        id: 3,
        name: "León",
        price: 800,
        img: producto3,
        stock: 9,
        initial: 1,
        category: "prints",
        description: "León colorido abstracto.",
        technique: "Arte Digital",
        size: "16x20"
    },
    {
        id: 4,
        name: "Poder Femenino",
        price: 1000,
        img: producto4,
        stock: 12,
        initial: 1,
        category: "cuadros",
        description: "Pintura abstracta de una mujer con rulos.",
        technique: "Pintura al óleo",
        size: "30x40"
    },
    {
        id: 5,
        name: "Visión",
        price: 1300,
        img: producto5,
        stock: 15,
        initial: 1,
        category: "cuadros",
        description: "Ojo abstracto",
        technique: "Pintura al óleo",
        size: "30x40"
    }
]