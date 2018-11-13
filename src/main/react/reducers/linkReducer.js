const initialState = {
  links: [
    {
      url: 'https://wonjunhong.com',
      comments: "askim I love you big league"},
    {
      url: 'https://www.behance.net/gallery/68802783/Henricampelandia',
      comments: "Nam cras primis. Ullamcorper donec quis dui lobortis mauris, nec vel nisl facilisis non, pretium facilisi justo per vestibulum leo, suscipit placerat magna nulla orci nibh semper, tristique nec litora aenean ut. Tortor facilisis leo laoreet tellus molestie. Sit nec a, fusce lacus tellus,"
    }, {
      url: 'https://www.artic.edu/collection?is_public_domain=1',
      comments: "Lorem ipsum dolor sit amet, dui blandit dui orci tristique, malesuada tellus sit quis ut vitae faucibus, duis ipsum sed pellentesque sed luctus, est amet est. Elementum et, vestibulum ut quisque condimentum, iaculis quam nulla. Ut sodales dolor elit vel dapibus, mi integer augue sollicitudin amet suspendisse amet. At nonummy pharetra risus, ut aliquet neque molestie et. Enim lacus mauris sapien, velit nibh ullamcorper libero nunc, sodales reprehenderit neque platea faucibus. Lobortis turpis etiam felis posuere consequat eleifend, mauris malesuada nec gravida sociosqu, dictumst porta adipiscing justo, vitae ipsum non sed commodo vitae."
    },
    {
      url: "https://aestheticparadaisu.jimdo.com",
      comments: "Quisque vitae rerum nec lorem, accumsan nec est, ante eget. In congue, scelerisque suspendisse sed, vel blandit maecenas, posuere curabitur curabitur donec, velit ligula auctor.\n" +
      "\n" +
      "Porta est, euismod viverra urna lectus inceptos eu quam. Ac nibh ut eum, sed suspendisse arcu fermentum ultricies."
    },
    {
      url: "https://refactoringui.com/previews/building-your-color-palette/",
      comments: "test"
    },
    {
      url: "http://vihart.com",
      comments: "test"
    },
    {
      url: "https://theveganstoner.blogspot.com",
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
      url: "https://www.monkeyuser.com/2018/root-cause",
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