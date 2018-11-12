const initialState = {
  links: [
    {
      url: 'https://www.behance.net/gallery/68802783/Henricampelandia',
      comments: "test"
    },
    {
      url: "https://aestheticparadaisu.jimdo.com",
      comments: "test"
    },
    {
      url: "https://refactoringui.com/previews/building-your-color-palette/",
      comments: "test"
    },
    {
      url: "http://vihart.com/",
      comments: "test"
    },
    {
      url: "https://theveganstoner.blogspot.com/",
      comments: "test"
    },
    {
      url: "https://www.activism.net/cypherpunk/manifesto.html",
      comments: "test"
    },
    {
      url: "http://whitevinyldesign.com",
      comments: "test"
    },
    {
      url: "https://www.monkeyuser.com/2018/root-cause/",
      comments: "test"
    },
  ]
};

const links = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default links;