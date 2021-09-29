import productHelper from "./helper.js";

describe("helper functions", () => {

  it("test getting all available product types function", () => {
    const productsData = [
        {
            index: 0,
            isSale: true,
            price: "$4.99",
            productImage: "Product_4.jpeg",
            productName: "Panhead CH Johnny Octane Can",
            type: "Beer"
        },
        {
            index: 1,
            isSale: false,
            price: "$25.99",
            productImage: "Product_5.jpeg",
            productName: "Aquila Spark SauvB Bottle",
            type: "Wine"
        },
        {
            index: 2,
            isSale: false,
            price: "$49.99",
            productImage: "Product_8.jpeg",
            productName: "Scrumpy RBerry 6x1.25L",
            type: "Cider"
        },
        {
            index: 3,
            isSale: false,
            price: "$25.99",
            productImage: "Product_5.jpeg",
            productName: "Aquila Spark SauvB Bottle",
            type: "Wine"
        },
    ];
    expect(productHelper.getAvailableTypes(productsData)).toEqual(["All", "Beer", "Wine", "Cider"]);
  });
});
