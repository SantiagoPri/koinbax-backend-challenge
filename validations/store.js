function validateAndFormat(params) {
  // All input validations
  if (!params.Comercio) {
    return {
      message: `Comercio field is required`,
    };
  }
  if (!params.CUIT) {
    return {
      message: `CUIT field is required`,
    };
  }
  if (!(params["Balance actual"] && params["Balance actual"].includes("$"))) {
    return {
      message: `Balance actual field is required and must contain an $`,
    };
  }
  const balance = Number(params["Balance actual"].replace("$", ""));
  if (!(Number.isInteger(balance) && balance > 0)) {
    return {
      message: `Balance actual field must be a number and not contain any special character but $`,
    };
  }
  if (!(params.Activo && (params.Activo === "Si" || params.Activo === "No"))) {
    return {
      message: `Activo field is required and must be 'Si' or 'No'`,
    };
  }
  if (!params["Ultima venta"]) {
    return {
      message: `Ultima venta field is required`,
    };
  }
  const date = new Date(Date.parse(params["Ultima venta"]));
  if (!(date instanceof Date && !isNaN(date))) {
    return {
      message: `Ultima venta field must be a 'YYYY-MM-DD' formated Date`,
    };
  }
  const concepts = Object.keys(params)
    .filter((key) => {
      return key.includes("Concepto") ? true : false;
    })
    .sort()
    .map((key) => {
      return params[key];
    });
  if (!concepts.length) {
    return {
      message: `There must be at least one Concepto field`,
    };
  };

  return {
    name: params.Comercio,
    cuit: params.CUIT,
    currentBalance: balance,
    active: params.Activo === "Si" ? true : false,
    lastSale: date,
    concepts,
  };
}

function formatDocumentOut(formatedStore) {
  const date = new Date(formatedStore.lastSale);
  const store = {
    ID: formatedStore._id,
    Comercio: formatedStore.name,
    CUIT: formatedStore.cuit,
    "Balance actual": `$${formatedStore.currentBalance}`,
    Activo: formatedStore.active ? "Si" : "No",
    "Ultima venta": `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`,
  };
  formatedStore.concepts.forEach((concept, index) => {
    store[`Concepto ${index + 1}`] = concept;
  });
  return store;
}

const checkParam = (fn) => {
  return (param) => {
    const query = param.q ? JSON.parse(param.q) : null;
    if (!(query && query.page && query.limit)) {
      throw new Error("invalidQuery")
    }
    const { page, limit } = query;
    return fn(page,limit);
  };
};

module.exports = {
  validateAndFormat,
  formatDocumentOut,
  checkParam
};
