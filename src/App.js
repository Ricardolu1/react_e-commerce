import React from 'react'
import ReactDOM from 'react-dom'
import HeaderComponent from './components/header'
import "./assets/css/app.css"

class App extends React.Component{
  constructor(){
    super(){
      
    }
  }
  componentDidMount(){
    console.log(this.refs.goods)
    let header = ReactDOM.findDOMNode(document.getElementById('header'))
    console.log(header.innerHTML)

  }
  
  render(){
    let name = "张三"
    let content=`<span style="color:red;">你好</span>`
    return (
      <div className="App">
        <HeaderComponent/>         
        {name}
        <div dangerouslySetInnerHTML={{__html:content}}></div>
        <div ref="goods">潮流女装</div>
        <div className="box"></div>
      </div>
    )
  }
}



export default App
