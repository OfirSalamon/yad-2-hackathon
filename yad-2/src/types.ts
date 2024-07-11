export interface IEntity {
  id: number;
  key: string;
  value: string;
  description: string;
  updated_at: string;
}
export interface IOptions {
  id: number;
  name: string;
}

export interface IDetails {
  settings: IEntity[];
  materials: IOptions[];
  conditions: IOptions[];
  manufacturers: IEntity[];
  colors: IEntity[];
}
