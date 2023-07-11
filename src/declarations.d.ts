declare module '*.png'
declare module '*.svg' {
  const content: string
  export default content
}

declare interface Dashboard  {
  dogList:any[],
  isBucketFull:boolean,
  paginationIndex:0,
  sortBy:String,
  allDataList:any[]
}

declare interface Dog {
  bred_for:String,
  breed_group:String,
  height:any,
  id:number,
  image?:any,
  origin:String,
  reference_image_id:String,
  temperament:String,
  weight:any,
  life_span?:String, 
  name:String,
  filteredHeight?:number,
  filteredLife?:number

}
