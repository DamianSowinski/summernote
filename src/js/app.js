$(document).ready(() => {
  $('.summernote').summernote({
    height: 300,
    tabsize: 2,
    fontName: 'source_sans_pro_regular',
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript']],
      ['font2', ['fontsize', 'forecolor', 'backcolor', 'clear']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['insert', ['link', 'cite', 'table']],
      ['view', ['undo', 'redo', 'fullscreen']],
    ],

    styleTags: [
      'p',
      {title: 'Title', tag: 'h3', style: 'article__title--preview', className: 'article__title', value: 'h3'},
      {
        title: 'Note',
        tag: 'blockquote',
        style: 'article__info--preview',
        className: 'article__info',
        value: 'blockquote',
      },
      {title: 'Code', tag: 'pre', className: 'pre2', value: 'pre'},
    ],

    // fontSizes: ['small', 'normal', 'big'],

    colors: [
      ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],
      // ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
      // ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
      ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
      // ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],
      // ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],
      ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],
      ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031'],
    ],

    // http://chir.ag/projects/name-that-color/
    // colorsName: [
    //   ['Black', 'Tundora', 'Dove Gray', 'Star Dust', 'Pale Slate', 'Gallery', 'Alabaster', 'White'],
    //   ['Red', 'Orange Peel', 'Yellow', 'Green', 'Cyan', 'Blue', 'Electric Violet', 'Magenta'],
    //   ['Azalea', 'Karry', 'Egg White', 'Zanah', 'Botticelli', 'Tropical Blue', 'Mischka', 'Twilight'],
    //   ['Tonys Pink', 'Peach Orange', 'Cream Brulee', 'Sprout', 'Casper', 'Perano', 'Cold Purple', 'Careys Pink'],
    //   ['Mandy', 'Rajah', 'Dandelion', 'Olivine', 'Gulf Stream', 'Viking', 'Blue Marguerite', 'Puce'],
    //   ['Guardsman Red', 'Fire Bush', 'Golden Dream', 'Chelsea Cucumber', 'Smalt Blue', 'Boston Blue', 'Butterfly Bush', 'Cadillac'],
    //   ['Sangria', 'Mai Tai', 'Buddha Gold', 'Forest Green', 'Eden', 'Venice Blue', 'Meteorite', 'Claret'],
    //   ['Rosewood', 'Cinnamon', 'Olive', 'Parsley', 'Tiber', 'Midnight Blue', 'Valentino', 'Loulou'],
    // ],

    icons: {
      'magic': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path fill="#0081d5" d="M483 86l-57-57a45 45 0 00-63 0l-53 53 120 120 53-53c17-17 17-46 0-63z"/>
  <path fill="#333" d="M144 146c-19 6-34 20-41 39L16 447l14 14 140-141a45 45 0 0141-64 45 45 0 11-19 86L51 482l14 14 262-87c19-7 33-22 39-41l40-142-120-120-142 40z"/>
</svg>`,
    },
  });
});
