import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { API_CONFIG } from '@/lib/constants/api'
import type { IResponse } from '@/types/api.types'

// Crear instancia de Axios
export const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor - Agregar token JWT si existe
apiClient.interceptors.request.use(
  (config) => {
    // En el futuro, obtener token de localStorage o cookies
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor - Manejar errores globalmente
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    // Manejar errores de red
    if (!error.response) {
      console.error('Network error:', error.message)
      return Promise.reject({
        status: 500,
        message: 'Error de conexión. Por favor verifica tu conexión a internet.',
        data: null,
      })
    }

    // Manejar errores de autenticación
    if (error.response.status === 401) {
      // Limpiar token y redirigir a login (futuro)
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token')
        // window.location.href = '/login'
      }
    }

    return Promise.reject(error)
  }
)

// Helper function para hacer requests tipados
export async function makeRequest<T>(
  config: AxiosRequestConfig
): Promise<IResponse<T>> {
  try {
    const response = await apiClient.request<IResponse<T>>(config)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data as IResponse<T>
    }

    // Error de red u otro error
    return {
      status: 500,
      message: 'Error inesperado. Por favor intenta de nuevo.',
      data: null,
    }
  }
}
