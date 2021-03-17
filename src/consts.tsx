export const DragItemTypes = {
  Card: "card"
}

export interface Task {
  id: number
  title: string
  bodyText?: string
  taskType: TaskType
  status: TaskStatus
}

export enum TaskType {
  Bug = "bug",
  Feature = "feature",
  Chore = "chore",
  Documentation = "documentation"
}

export enum TaskStatus {
  Backlog = "backlog",
  ToDo = "toDo",
  InProgress = "inProgress"
}
