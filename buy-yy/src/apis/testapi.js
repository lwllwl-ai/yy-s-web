import  httpInstance  from "@/utiles/http";

export function getCategory(){
    return httpInstance({
        url:'home/category/head'
    })
}