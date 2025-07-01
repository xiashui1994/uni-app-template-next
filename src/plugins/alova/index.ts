import type { AlovaGenerics, Method } from 'alova'
import AdapterUniapp from '@alova/adapter-uniapp'
import { createAlova } from 'alova'
import Loading from './loading'

const loading = new Loading()

// 获取 token
const getToken = (): string => uni.getStorageSync('token')

// 请求拦截器
function beforeRequest(method: Method<AlovaGenerics>) {
  method.meta = {
    loading: true, // 是否显示 loading
    error: true, // 是否显示错误提示
    ...method.meta,
  }
  loading.show(method.meta.loading)
  method.config.withCredentials = true
  method.config.headers.ContentType = 'application/json'
  getToken() && (method.config.headers.token = getToken())
}

// 响应拦截器
const responded = {
  onSuccess: async (response: AlovaGenerics['Response'], method: Method<AlovaGenerics>) => {
    try {
      return await handleCode(response)
    }
    catch (err: any) {
      method.meta?.error && showError(err)
      return Promise.reject(err)
    }
  },
  onError: (err: any) => showError(err),
  onComplete: () => loading.hide(),
}

// 处理响应数据
function handleCode(response: AlovaGenerics['Response']): Promise<any> {
  const { data } = response
  const code = data.code ?? data.Code
  const status: { [key: string]: () => any } = {
    0: () => data,
  }
  return status[code]?.() ?? Promise.reject(data)
}

// 显示错误信息
function showError(err: any): Promise<any> {
  return uni.showToast({
    title: err.msg || err.Msg || err.message || JSON.stringify(err).replace(/"/g, ''),
    icon: 'none',
    duration: 2000,
  })
}

// 创建请求实例
const alovaInstance = createAlova({
  baseURL: feConfig.api.base,
  ...AdapterUniapp(),
  beforeRequest,
  responded,
})

export default alovaInstance
