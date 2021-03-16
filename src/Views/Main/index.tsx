import React from "react"
import { Card } from "../../Components"
import { dummyTasks } from "../../dummyData"

const Main: React.FC<any> = ({}) => {
  return (
    <div>
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

export default Main
