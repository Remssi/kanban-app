import React, { useState } from "react"
import "./main.css"
import { CardList } from "../../Components"
import { dummyCardLists, dummyTasks } from "../../dummyData"
import { TaskStatus } from "../../consts"

const Main: React.FC<{}> = () => {
  const [cardLists] = useState(dummyCardLists)
  const [tasks, setTasks] = useState(dummyTasks)

  const handleTaskChange = (
    id: number,
    status: TaskStatus,
    lastIndex: number
  ) => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          task.status = status
          task.cardListIndex = lastIndex
        }
        return task
      })
    )
  }

  return (
    <div className="main">
      {cardLists.map(cardList => (
        <CardList
          key={cardList.id}
          title={cardList.title}
          status={cardList.status}
          taskDatas={tasks
            .filter(task => task.status === cardList.status)
            .sort(
              (prevTask, nextTask) =>
                prevTask.cardListIndex - nextTask.cardListIndex
            )}
          handleTaskChange={handleTaskChange}
        />
      ))}
    </div>
  )
}

export default Main
