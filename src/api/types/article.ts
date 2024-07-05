export type categoryInfoRequest = {
    id:number
    tag_id?:number
}
export type articleListRequest = {
    category_id?:number,
    tag_id?:number,
}

export type articleDetailResponse = {
    title:string,
    created_at?:string,
    content?:string,
    tags?:{
        name :string
    }[],
}
