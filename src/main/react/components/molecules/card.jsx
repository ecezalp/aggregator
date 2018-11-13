import React from 'react';

const Card = ({id, image, comments, title, description, url, theme}) => {

  const aStyle = {
    textDecoration: 'none',
  };
  const titleStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
    color: theme['accent'][100],
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
    padding: '1vh',
  };
  const linkStyle = {
    color: theme['accent'][70],
    textDecoration: 'underline',
  };

  return <div key={`item-container-${id}`} className="card" style={cardStyle}>
    <a href={url} target={"_blank"} style={aStyle} title={url}>
      {image && <img src={image} style={imgStyle}/>}
      <title style={titleStyle}>
        <h2 style={h2Style}>{title}</h2>
        <a href={url} style={linkStyle}>{url}</a>
        <h4 style={h4Style}>{description}</h4>
      </title>
      <div style={commentsStyle}>{comments}</div>
    </a>
  </div>
};

export default Card;