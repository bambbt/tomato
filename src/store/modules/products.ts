import { Product } from '@/types/product';

export default {
    namespace: true,
    state: {
        products: [] as Array<Product>
    },
    // actions,
    mutations: {
        addProduct: (state: any, product: Product) => {
            state.products.push(product);
        },
        setProducts(state: any, products: Array<Product>) {
            state.products = products
        },
    },
    getters: {
        getProductById: (state: any) => (id: bigint) => {
            return state.products.find((product: { id: any; }) => product.id == id);
        },
        getProducts: (state: any) => {
            return state.products;
        }
    }
}