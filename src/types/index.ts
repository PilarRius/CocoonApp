export interface Routine {
    _id: string;
    id?: string;
    name: string;
    description: string;
    type: string;
    frequency: string;
    resources: object;
    categories: string[];
    alarm?: {
      time: string;
      days: string[];
    };
  }
  
  export interface Category {
    _id: string;
    name: string;
    description: string;
    routines: string[];
  }