import React from 'react'

type Props = {
  title: string
}

const AppList = () => {
  return (
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
  )
}

const AppHeader = (props: Props) => {
  return <h1>Hello {props.title}</h1>
}

const App = () => {
  return (
    <>
    <AppHeader title='App.js'/>
    <AppHeader title='React js'/>
    <AppList/>
    </>
  )
}

export default App

