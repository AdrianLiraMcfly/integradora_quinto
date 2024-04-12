export interface Mongo {
  data: Data
}

export interface Data {
  _id: string
  Temperatura: Temperatura
  Humedad: Humedad
  Lluvia: Lluvia
  Suelo: Suelo
  Agua: Agua
  Luz: Luz
  Movimiento: Movimiento
  Vibracion: Vibracion
  updated_at: string
  created_at: string
}

export interface Temperatura {
  Valor: number
  Unidad: string
  Fecha: string
}

export interface Humedad {
  Valor: number
  Unidad: string
  Fecha: string
}

export interface Lluvia {
  Valor: number
  Unidad: string
  Fecha: string
}

export interface Suelo {
  Valor: number
  Unidad: string
  Fecha: string
}

export interface Agua {
  Valor: number
  Unidad: string
  Fecha: string
}

export interface Luz {
  Valor: number
  Unidad: string
  Fecha: string
}

export interface Movimiento {
  Valor: number
  Unidad: string
  Fecha: string
}

export interface Vibracion {
  Valor: number
  Unidad: string
  Fecha: string
}