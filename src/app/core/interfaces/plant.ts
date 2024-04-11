export interface PlantOneData {
    data: plant
  }
  
  export interface plant {
    id: number
    plant: string
    user_id: number
    status: number
    sensors: Sensor[]
  }
  
  export interface Sensor {
    id: number
    name: string
    status: number
    pivot: Pivot
  }
  
  export interface Pivot {
    plant_id: number
    sensor_id: number
  }
  