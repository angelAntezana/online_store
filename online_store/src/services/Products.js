import https from "./https-axios-products";

class serviceProducts {
    getAllProducts() {
        return https.get("/products?limit=10");
    }

    getProduct(idProduct) {
        return https.get(`/products/${idProduct}`);
    }
}

export default new serviceProducts();