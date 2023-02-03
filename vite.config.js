import path from "path";


export default {
    root: path.resolve(__dirname, "src"),
    build:{
        outDir: "../dist",
        rollupOptions:{
            input:{
                index: path.resolve(__dirname, "src/index.html"),
            }
        }
    }
  }