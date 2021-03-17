import React, { useState } from "react"
import "./main.css"
import CardList from "../../Components/CardList"
import { dummyCardLists, dummyTasks } from "../../dummyData"
import { TaskStatus } from "../../consts"

const Main: React.FC<any> = ({}) => {
  const [cardLists, setCardLists] = useState(dummyCardLists)
  const [tasks, setTasks] = useState(dummyTasks)

  const handleTaskChange = (id: number, status: TaskStatus) => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          task.status = status
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
          taskDatas={tasks.filter(task => task.status === cardList.status)}
          handleTaskChange={handleTaskChange}
        />
      ))}
    </div>
  )
}

export default Main
