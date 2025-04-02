import  httpInstance  from "@/utiles/http.js";

export function getCategoryAPI(){
    return httpInstance({
        url:'home/category/head'
    })
} 