declare module '*.png'
declare module '*.svg' {
  const content: string
  export default content
}

declare interface dashboardState  {
  dogList:any[],
  isBucketFull:boolean,
  paginationIndex:0
}
