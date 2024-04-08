export interface PlantData {
    id: number;
    plant: string;
    status: number;
    sensors: string[];
  }

  export interface PlantRegistrer {
    plant: string;
  }

  export interface PlantUpdate {
    plant: string;
    status: number;
  }