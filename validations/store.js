
function validateAndFormat(params) {
  // All input validations
  if (!params.Comercio) return null;
  if (!params.CUIT) return null;
  if (!(params["Balance actual"] && params["Balance actual"].includes("$"))) {
    return null;
  }
  const balance = Number(params["Balance actual"].replace("$", ""));
  if (!(Number.isInteger(balance) && balance > 0)) {
    return null;
  }
  if (!(params.Activo && (params.Activo === "Si" || params.Activo === "No"))) {
    return null;
  }
  if (!params["Ultima venta"]) return null;
  const date = new Date(Date.parse(params["Ultima venta"]));
  if (!(date instanceof Date && !isNaN(date))) return null;
  const concepts = Object.keys(params)
    .filter((key) => {
      return key.includes("Concepto") ? true : false;
    })
    .sort()
    .map((key) => {
      return params[key];
    });
  if (!concepts.length) return null;

  return {
    name: params.Comercio,
    cuit: params.CUIT,
    currentBalance: balance,
    active: params.Activo === "Si" ? true : false,
    lastSale: date,
    concepts: concepts,
  };
}

module.exports = {
  validateAndFormat,
};
