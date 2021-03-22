import { Task, TaskList, TaskStatus, TaskType } from "./consts"

export const dummyCardLists: TaskList[] = [
  { id: 1, title: "Backlog", status: TaskStatus.Backlog },
  { id: 2, title: "ToDo", status: TaskStatus.ToDo },
  { id: 3, title: "In Progress", status: TaskStatus.InProgress }
]

export const dummyTasks: Task[] = [
  {
    id: 1,
    title: "A Task",
    bodyText: "Do this task.",
    taskType: TaskType.Bug,
    status: TaskStatus.ToDo,
    cardListIndex: 2
  },
  {
    id: 2,
    title: "A Task",
    bodyText: "Do this task.",
    taskType: TaskType.Feature,
    status: TaskStatus.ToDo,
    cardListIndex: 1
  },
  {
    id: 3,
    title: "A Task",
    bodyText: "Do this task.",
    taskType: TaskType.Chore,
    status: TaskStatus.ToDo,
    cardListIndex: 0
  },
  {
    id: 4,
    title: "A Task",
    taskType: TaskType.Documentation,
    status: TaskStatus.InProgress,
    cardListIndex: 0
  }
]
