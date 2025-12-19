import db from "@/data/db.json";

// Giả lập độ trễ mạng
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const productService = {
  async getAll() {
    await delay(200);
    return db.products;
  },
  async getById(id) {
    await delay(200);
    const product = db.products.find((p) => p.id === Number(id));
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  },
};

export const categoryService = {
  async getAll() {
    return db.categories;
  },
};
