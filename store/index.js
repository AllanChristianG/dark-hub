import {reactive, provide, inject} from 'vue';

const store = reactive({
    data: {},
    selectedVoices: null
})

const provideStore = () => (
    provide('store', store)
)

const useStore = () => {
    const store = inject('store')
    return !store 
        ? console.log('Could not injext store :/. Please make sure to call provideStore() in the parent component')
        : store
}

export { useStore, provideStore }