import { menu_info } from "./book.content"
export const calculateCost = (build, format) => {
    return build.map((item)=>{
        return menu_info[item].price[format]
    }).reduce((x,y)=>{
        return x+y})
}    
export const estimateTime = (build) => {
    return build.map((item)=>{
        return menu_info[item].labor
    }).reduce((x,y)=>{
        return x+y})
}