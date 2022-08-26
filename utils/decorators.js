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
  checkParam,
};
