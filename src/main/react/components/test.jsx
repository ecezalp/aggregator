import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {getMeta} from '../constants/endpoints';

const mapStateToProps = state => ({...state.links});

class Test extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      info: []
    }
  }

  componentDidMount(){
    this.props.links.forEach(link => {
      axios.get(getMeta(link)).then(response => {
        let newState = [...this.state.info];
        newState.push(response.data)
        this.setState({info: newState});
      });
    })
  }

  renderItem({description, image, logo, title, url}, index){
    return <div className={`item-container-${index}`}>
      <img src={image} height={200} width={400}/>
      <h2><img src={logo}  height={32} width={32}/>{title}</h2>
      <h4>{description}</h4>
      <a href={url} target={"_blank"}>click</a>
    </div>
  }

  render(){
    return this.state.info.map(this.renderItem);
  }
}

export default connect(
  mapStateToProps,
)(Test);