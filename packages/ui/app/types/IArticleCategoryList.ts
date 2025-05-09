export interface IArticleCategoryItem {
  category: string
  titles: string[]
}

export type IArticleCategoryList = IArticleCategoryItem[]

export type IArticleCategoryListItem = IArticleCategoryListProps['list'][number]

export interface IArticleCategoryListProps {
  list: IArticleCategoryList
}
