import https from "./https-axios-products";

class serviceProducts {
    getAllProducts() {
        return https.get("/products?limit=10");
    }
}

export default new serviceProducts();