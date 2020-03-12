import React, { Component } from 'react'
import PropTypes from 'prop-types'


class HeaderComponent extends Component{
  render(){
    return (
      <div id="header" style={this.props.isShow?{display:"block"}:{display:"none"}}>
        {this.props.title}
      </div>
    )
  }
}
//检查属性值的类型
HeaderComponent.propTypes={
  title:PropTypes.string.isRequired
}
//默认属性值
HeaderComponent.defaultProps={
  title:123123
}

export default HeaderComponent  