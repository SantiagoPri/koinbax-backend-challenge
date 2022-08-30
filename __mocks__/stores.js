const mockedSuccesfullStore = {
  Comercio: "La gran tienda",
  CUIT: " 33-52652082-9",
  "Balance actual": "$300",
  Activo: "Si",
  "Ultima venta": "2022-3-3",
  "Concepto 1": "Juegos",
  "Concepto 2": "Viajes",
  "Concepto 3": "Panaderia",
  "Concepto 4": "Transporte",
  "Concepto 5": "Turismo",
  "Concepto 6": "Ferreteria",
};

const mockedStoresFromDB = [
  {
    _id: {
      $oid: "6308d10247b39338fceb87a4",
    },
    concepts: [
      "Juegos",
      "Viajes",
      "Panaderia",
      "Transporte",
      "Turismo",
      "Ferreteria",
    ],
    name: "La gran tienda",
    cuit: " 33-52652082-9",
    currentBalance: 300,
    active: true,
    lastSale: {
      $date: {
        $numberLong: "1650430800000",
      },
    },
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: "1661522178044",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661522178044",
      },
    },
  },
  {
    _id: {
      $oid: "6308d10247b39338fceb87a6",
    },
    concepts: [
      "Licoreria",
      "Entretenimiento",
      "Cocteleria",
      "Club nocturno",
      "Turismo",
      "Comidas rapidas",
    ],
    name: "La llorona",
    cuit: " 33-28652282-9",
    currentBalance: 600,
    active: false,
    lastSale: {
      $date: {
        $numberLong: "1586494800000",
      },
    },
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: "1661522178044",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661522178044",
      },
    },
  },
  {
    _id: {
      $oid: "6308d10247b39338fceb87aa",
    },
    concepts: ["Constructora", "Naviera", "Ingenieria", "Cantera"],
    name: "Constructora Azul",
    cuit: " 31-28652190-9",
    currentBalance: 6500,
    active: true,
    lastSale: {
      $date: {
        $numberLong: "1649134800000",
      },
    },
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: "1661522178045",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661522178045",
      },
    },
  },
  {
    _id: {
      $oid: "6308d10247b39338fceb87ad",
    },
    concepts: [
      "Belleza",
      "Salud",
      "Spa",
      "Estetica",
      "Peluqueria",
      "Cosmetologia",
    ],
    name: "Rosado suave",
    cuit: " 30-35402081-9",
    currentBalance: 500,
    active: true,
    lastSale: {
      $date: {
        $numberLong: "1647320400000",
      },
    },
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: "1661522178045",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661522178045",
      },
    },
  },
  {
    _id: {
      $oid: "6308d10247b39338fceb87b1",
    },
    concepts: [
      "Construccion",
      "miscelanea",
      "Electricidad",
      "Herramientas",
      "Distribuidor",
      "Cantera",
    ],
    name: "Construsas",
    cuit: " 30-526520345-0",
    currentBalance: 5200,
    active: true,
    lastSale: {
      $date: {
        $numberLong: "1646197200000",
      },
    },
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: "1661522178046",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661522178046",
      },
    },
  },
  {
    _id: {
      $oid: "6308d10247b39338fceb87b1",
    },
    concepts: [
      "Construccion",
      "miscelanea",
      "Electricidad",
      "Herramientas",
      "Distribuidor",
      "Cantera",
    ],
    name: "Construsas",
    cuit: " 30-526520345-0",
    currentBalance: 5200,
    active: true,
    lastSale: {
      $date: {
        $numberLong: "1646197200000",
      },
    },
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: "1661522178046",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661522178046",
      },
    },
  },
  {
    _id: {
      $oid: "6308d10247b39338fceb87b1",
    },
    concepts: [
      "Construccion",
      "miscelanea",
      "Electricidad",
      "Herramientas",
      "Distribuidor",
      "Cantera",
    ],
    name: "Construsas",
    cuit: " 30-526520345-0",
    currentBalance: 5200,
    active: true,
    lastSale: {
      $date: {
        $numberLong: "1646197200000",
      },
    },
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: "1661522178046",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661522178046",
      },
    },
  },
  {
    _id: {
      $oid: "6308d10247b39338fceb87b1",
    },
    concepts: [
      "Construccion",
      "miscelanea",
      "Electricidad",
      "Herramientas",
      "Distribuidor",
      "Cantera",
    ],
    name: "Construsas",
    cuit: " 30-526520345-0",
    currentBalance: 5200,
    active: true,
    lastSale: {
      $date: {
        $numberLong: "1646197200000",
      },
    },
    __v: 0,
    createdAt: {
      $date: {
        $numberLong: "1661522178046",
      },
    },
    updatedAt: {
      $date: {
        $numberLong: "1661522178046",
      },
    },
  },
];

const mockedFormatedStore = {
  concepts: [
    "Construccion",
    "miscelanea",
    "Electricidad",
    "Herramientas",
    "Distribuidor",
    "Cantera",
  ],
  name: "Construsas",
  cuit: " 30-526520345-0",
  currentBalance: 5200,
  active: true,
  lastSale: "1646197200000",
};

module.exports = {
  mockedSuccesfullStore,
  mockedStoresFromDB,
  mockedFormatedStore,
};
