import {resolve} from "path"


export default {
    root: resolve(__dirname, 'src'),
    build:{
        outDir: "../dist",
        rollupOptions:{
            input:{
                index: resolve(__dirname, "src/index.html"),
                signup: resolve(__dirname, "src/signup.html"),
                login: resolve(__dirname, "src/login.html"),
            },
        },
    },
    envDir: '../'
  }