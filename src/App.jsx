import './App.css'

import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import Content from './components/content'
import Layout from './Layout/Layout'

function App() {
  return (
   <Layout>
    <Header></Header>
    <Sidebar></Sidebar>
    <Content></Content>
    <Footer></Footer>
   </Layout>
  )
}

export default App
