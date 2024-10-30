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

