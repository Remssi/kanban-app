import React from "react"
import "./card.css"
import { TaskType } from "../../consts"
import { setColorByTaskType } from "./setColorByTaskType"

interface Props {
  title: string
  bodyText?: string
  taskType: TaskType
}

const Card: React.FC<Props> = ({ title, bodyText, taskType }) => {
  return (
    <div className="card-wrapper">
      <div className="card-content">
        <div className="title">{title}</div>
        <div className="body-text">{bodyText}</div>
      </div>
      <div
        className={"task-color-aside" + " " + setColorByTaskType(taskType)}
      />
    </div>
  )
}

export default Card
