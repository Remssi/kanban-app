import { TaskType } from "../../consts"

export const setColorByTaskType = (taskType: TaskType) => {
  switch (taskType) {
    case TaskType.Bug:
      return "task-bug"
    case TaskType.Feature:
      return "task-feature"
    case TaskType.Chore:
      return "task-chore"
    case TaskType.Documentation:
      return "task-documentation"
  }
}
