import { atom } from 'recoil'

export const searchAtom = atom({
    key: "searchAtom",
    default: {
        name: "",
        code1: "",
        code2: ""
    }
})