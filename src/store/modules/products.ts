import { Product } from '@/types/product';
import { ClientSideStorageAccessor } from '@/service/clientSideStorage/ClientSideStorageAccessor';

export default {
    namespace: true,
    state: {
        products: [] as Array<Product>
    },
    mutations: {
        addProduct: (state: any, product: Product) => {
            state.products.push(product);
        },
        setProducts: (state: any, products: Array<Product>) => {
            state.products.splice(0);
            state.products.concat(products);
        },
    },
    getters: {
        getProductById: (state: any) => (id: bigint) => {
            return state.products.find((product: { id: any; }) => product.id == id);
        },
        getProducts: (state: any) => {
            if (state.products.length === 0)
                state.products = ClientSideStorageAccessor.getItem("products")
            return state.products;
        }
    }
}