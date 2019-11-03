import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import { ClientSideStorageAccessor } from '@/service/clientSideStorage/ClientSideStorageAccessor'

Vue.use(Vuex)

ClientSideStorageAccessor.selectDefaultStrategy();

export default new Vuex.Store({
  modules: {
    products,
  },
})

