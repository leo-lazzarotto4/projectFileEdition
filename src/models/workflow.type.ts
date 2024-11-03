declare const moment: any; // Moment.js sera chargé globalement via le CDN, et TypeScript reconnaîtra moment 

export type Worflow = {
    id?: number,
    name: string,
    status?: string,
    data_source: string,
    steps: step[],
}

export type step = {
    step_type: stepType,
    parameters: any
}

export enum stepType {
  TRAIN = "train",
  PREDICT = "predict"
}

export class WorkflowClass {
  id: number;
  name: string;
  createdAt: string;

  constructor(id: number, name: string, createdAt: string) {
      this.id = id;
      this.name = name;
      this.createdAt = createdAt;
  }

  // Formate la date avec Moment.js
  getFormattedDate() {
      return moment(this.createdAt).format('DD/MM/YYYY');
  }
}

