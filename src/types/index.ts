export interface Routine {
    id: string;
    name: string;
    description: string;
    type: string;
    frequency: string;
    resources: object;
    categories: string[];
  }
  
  export interface Category {
    _id: string;
    name: string;
    description: string;
    routines: string[];
  }