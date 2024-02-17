import https from "./https-axios-products";

class serviceProducts {
    getAllProducts() {
        return https.get("/products?limit=10");
    }

    getProduct(idProduct) {
        return https.get(`/products/${idProduct}`);
    }

    postProduct(product) {
        return https.post('/products/add',product);
    }

    putProduct(idProduct,product) {
        // No modifica los productos. Simula updated.
        return https.put(`/products/${idProduct}`, product);
    }
}

export default new serviceProducts();