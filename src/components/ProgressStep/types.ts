export type TStepValue = number | string
export interface TStep {
  value: TStepValue
  label: string
}
export type TStepType = 'number' | 'dot'
export type TSteps = TStep[]

export type TProgressStepProps = {
  steps: TSteps
  stepType: TStepType
  activeStep: TStepValue
  setActiveStep: (v: TStepValue) => void
  completedValues: TStepValue[]
}

export type TStepProps = {
  step: TStep
  index: number
  hasRightLine: boolean
  hasLeftLine: boolean
  stepType: TStepType
  onStepClick: (v: TStepValue) => void
  completedValues: TStepValue[]
  activeStep: TStepValue
}
export enum StepTypes {
  number = 'number',
  dot = 'dot'
}
