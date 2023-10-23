import { STATUS } from 'constants/serviceStatus'

interface ICategory {
  id: number
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  title: string
  rank: number
  image: {
    id: number
    name: string
    alternativeText: string | null
    caption: string | null
    width: number
    height: number
    formats: string | null
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: string | null
    createdAt: string
    updatedAt: string
  }
}

export interface ICategoriesState {
  status: STATUS
  data: ICategory[]
  error: string | null | undefined
}
