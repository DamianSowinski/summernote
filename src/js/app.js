
$(document).ready(() => {

  $('.summernote').summernote({
    height: 300,
    tabsize: 2,
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript']],
      ['font-style', ['fontsize', 'forecolor', 'backcolor', 'clear']],
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

  });
});
