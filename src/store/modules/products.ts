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
            ClientSideStorageAccessor.setItem(
                "products",
                state.products
            );
        },
    },
    getters: {
        getProducts: (state: any) => {
            if (state.products.length === 0)
                state.products = ClientSideStorageAccessor.getItem("products")
            return state.products;
        }
    }
}