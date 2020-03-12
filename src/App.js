import React, { Component } from 'react'

import ReactDOM from 'react-dom'
import HeaderComponent from './components/Header'
import "./assets/css/app.css"




class App extends Component{
  constructor(){
    super()
    this.state = {
      bShow:false,
      goods:[
        {id:"1",title:"潮流女装"},
        {id:"2",title:"品牌男装"},
        {id:"3",title:"手机电脑"}
      ]
    }
  }
  changeShow(){
    this.setState({
      bShow:!this.state.bShow,
      
    })

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
        <HeaderComponent title="首页" isShow={true} />         
        {name}
        <div dangerouslySetInnerHTML={{__html:content}}></div>
        <div ref="goods">潮流女装</div>
        {this.state.bShow && <div className="box"></div>}
        <button type="button" onClick={()=>this.changeShow()}>
          显示/隐藏
        </button>
        <ul>
          {
            this.state.goods.map(item=>{
              return (
                <li key={item.id}>{item.title}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}



export default App
