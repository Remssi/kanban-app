import React from "react"
import "./cardList.css"
import { dummyTasks } from "../../dummyData"
import { Card } from ".."

interface Props {
  title: string
}

const CardList: React.FC<Props> = ({ title }) => {
  return (
    <div className="card-list-wrapper">
      <div className="title">{title}</div>
      {dummyTasks.map(task => (
        <Card
          key={task.id}
          title={task.title}
          bodyText={task.bodyText}
          taskType={task.taskType}
        />
      ))}
    </div>
  )
}

export default CardList
