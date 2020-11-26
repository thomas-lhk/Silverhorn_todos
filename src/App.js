import React from 'react'
import { Layout } from 'antd'
import TodosView from './components/todoComponents/TodosView'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <>
      <Layout>
        <Layout.Content>
          <TodosView />
        </Layout.Content>
      </Layout>
    </>
  )
}

export default App;
