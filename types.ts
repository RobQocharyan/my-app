export type CategoryType = {
  id: number
  name: string
}

export type ImagesType = {
  breeds: any[]
  categories: CategoryType[]
  height: number
  id: string
  url: string
  width: number
}
