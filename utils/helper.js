function getAvailableTypes(products) {
    const types = ["All"];
    products.forEach((item) =>  {
      if (!types.includes(item.type)) {
        types.push(item.type);
      }
    });
    return types;
}

const productHelper = {
    getAvailableTypes,
};

export default productHelper;