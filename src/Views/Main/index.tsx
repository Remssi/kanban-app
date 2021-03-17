import React from "react"
import "./main.css"
import CardList from "../../Components/CardList"

const Main: React.FC<any> = ({}) => {
  return (
    <div className="main">
      <CardList title="Backlog" />
      <CardList title="ToDo" />
      <CardList title="In Progress" />
    </div>
  )
}

export default Main
