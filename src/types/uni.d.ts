import type { Alova } from 'alova'

declare global {
  interface Uni {
    $http: Alova<AlovaGenerics>
  }
  interface ApiResponse<T = any> {
    code: number
    data: T
    msg: string
  }
  const feConfig: {
    api: {
      base: string
    }
  }
}

declare module 'alova' {
  interface AlovaCustomTypes {
    meta: {
      loading: boolean
      error: boolean
    }
  }
}
