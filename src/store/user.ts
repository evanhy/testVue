import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => {
        return {
            name: '张三',
        }
    },
    actions: {
        updateName(name: string) {
            this.name = name
        },
    },
    persist: {
        enabled: true,
        strategies: [
            {
                storage: localStorage,
                key: 'UserName',
            },
        ],
    },
})
