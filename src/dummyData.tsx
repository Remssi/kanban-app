import { TaskType } from "./consts"

export const dummyTasks = [
  {
    id: 1,
    title: "A Task",
    bodyText: "Do this task.",
    taskType: TaskType.Bug
  },
  {
    id: 2,
    title: "A Task",
    bodyText: "Do this task.",
    taskType: TaskType.Feature
  },
  {
    id: 3,
    title: "A Task",
    bodyText: "Do this task.",
    taskType: TaskType.Chore
  },
  {
    id: 4,
    title: "A Task",
    taskType: TaskType.Documentation
  }
]
