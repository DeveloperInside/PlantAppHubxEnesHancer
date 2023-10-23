import { STATUS } from 'constants/serviceStatus'

interface IQuestion {
  id: number
  title: string
  subtitle: string
  image_uri: string
  uri: string
  order: number
}

export interface IQuestionsState {
  status: STATUS
  data: IQuestion[]
  error: string | null | undefined
}
