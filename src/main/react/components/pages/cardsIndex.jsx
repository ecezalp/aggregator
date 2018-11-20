import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {getMeta} from '../../constants/endpoints';
import Card from '../molecules/card';

const mapStateToProps = state => ({...state.links, ...state.theme});

class CardsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    }
  }

  componentDidMount() {
    this.props.links.forEach(link => {
      axios.get(getMeta(link.url)).then(response => {
        let newState = [...this.state.info];
        newState.push({...response.data, comments: link.comments});
        this.setState({info: newState});
      });
    })
  }

  renderItem = (props, index) => {
    return <Card {...props} id={index} theme={this.props.theme}/>
  };

  render() {
    const style = {
      width: '40vw',
    };

    return <div className={'cards-index-page'} style={style}>
      <h1>{this.props.username}</h1>
      {this.state.info.map(this.renderItem)}
    </div>
  }
}

export default connect(
  mapStateToProps,
)(CardsIndex);