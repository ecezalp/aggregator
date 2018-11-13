import React from 'react';

class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hovered: false,
    }
  }

  handleMouseEnter = () => {
    this.setState({hovered: true});
  };

  handleMouseLeave = () => {
    this.setState({hovered: false});
  };

  render() {
    const {id, image, comments, title, description, url, theme} = this.props;
    const {hovered} = this.state;
    const aStyle = {
      textDecoration: 'none',
    };
    const titleStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: '3vh',
    };
    const imgStyle = {
      width: '100%',
      height: 'auto',
      border: `1px solid ${theme['main'][10]}`,
    };
    const h2Style = {
      color: theme['main'][100],
      display: 'flex',
      alignItems: 'center',
      margin: '1vh 0',
    };
    const h4Style = {
      color: theme['main'][60],
      margin: '0.5vh 0',
    };
    const cardStyle = {
      padding: '1vh',
      margin: '5vh 0',
      backgroundColor: theme['main'][0],
      boxShadow: '0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)',
    };
    const commentsStyle = {
      backgroundColor: theme['gray'][0],
      border: `1px solid ${theme['gray'][10]}`,
      color: theme['gray'][100],
      padding: '3vh',
    };
    const linkStyle = {
      color: theme['main'][20],
      textTransform: 'lowercase',
      fontFamily: `'Anonymous Pro', monospace`,
      fontSize: '1rem',
    };
    const hoverLinkStyle = {
      color: theme['main'][30],
      textTransform: 'lowercase',
      fontFamily: `'Anonymous Pro', monospace`,
      fontSize: '1rem',
      textDecoration: 'underline',
    };

    return <div key={`item-container-${id}`} className="card" style={cardStyle}>
      <a href={url} target={"_blank"} style={aStyle} title={url}>
        {image && <img src={image} style={imgStyle}/>}
        <title style={titleStyle} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          <h2 style={h2Style}>{title}</h2>
          <a href={url} style={hovered ? hoverLinkStyle : linkStyle}>{url.replace(/(^\w+:|^)\/\//, '')}</a>
          <h4 style={h4Style}>{description}</h4>
        </title>
        <div style={commentsStyle}>{comments}</div>
      </a>
    </div>
  }
};

export default Card;