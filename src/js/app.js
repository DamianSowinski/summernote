
$(document).ready(function() {
  $('.summernote').summernote({
    height: 300,
    tabsize: 2,

    icons: {
      'magic': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path fill="#0081d5" d="M483 86l-57-57a45 45 0 00-63 0l-53 53 120 120 53-53c17-17 17-46 0-63z"/>
  <path fill="#333" d="M144 146c-19 6-34 20-41 39L16 447l14 14 140-141a45 45 0 0141-64 45 45 0 11-19 86L51 482l14 14 262-87c19-7 33-22 39-41l40-142-120-120-142 40z"/>
</svg>`,
    },
  });
});
