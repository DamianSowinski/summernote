import $ from 'jquery';
import ui from './ui';
import './summernote-en-US';
import './summernote';
import dom from './core/dom';
import range from './core/range';
import lists from './core/lists';
import Editor from './module/Editor';
import Clipboard from './module/Clipboard';
import Dropzone from './module/Dropzone';
import Codeview from './module/Codeview';
import Statusbar from './module/Statusbar';
import Fullscreen from './module/Fullscreen';
import Handle from './module/Handle';
import AutoLink from './module/AutoLink';
import AutoSync from './module/AutoSync';
import AutoReplace from './module/AutoReplace';
import Placeholder from './module/Placeholder';
import Buttons from './module/Buttons';
import Toolbar from './module/Toolbar';
import LinkDialog from './module/LinkDialog';
import LinkPopover from './module/LinkPopover';
import ImageDialog from './module/ImageDialog';
import ImagePopover from './module/ImagePopover';
import TablePopover from './module/TablePopover';
import VideoDialog from './module/VideoDialog';
import HelpDialog from './module/HelpDialog';
import AirPopover from './module/AirPopover';
import HintPopover from './module/HintPopover';

import '../styles/summernote.scss';

$.summernote = $.extend($.summernote, {
  ui_template: ui,
  interface: 'lite',
  version: '@@VERSION@@',
  plugins: {},

  dom: dom,
  range: range,
  lists: lists,

  options: {
    langInfo: $.summernote.lang['en-US'],
    editing: true,
    modules: {
      'editor': Editor,
      'clipboard': Clipboard,
      'dropzone': Dropzone,
      'codeview': Codeview,
      'statusbar': Statusbar,
      'fullscreen': Fullscreen,
      'handle': Handle,
      // FIXME: HintPopover must be front of autolink
      //  - Script error about range when Enter key is pressed on hint popover
      'hintPopover': HintPopover,
      'autoLink': AutoLink,
      'autoSync': AutoSync,
      'autoReplace': AutoReplace,
      'placeholder': Placeholder,
      'buttons': Buttons,
      'toolbar': Toolbar,
      'linkDialog': LinkDialog,
      'linkPopover': LinkPopover,
      'imageDialog': ImageDialog,
      'imagePopover': ImagePopover,
      'tablePopover': TablePopover,
      'videoDialog': VideoDialog,
      'helpDialog': HelpDialog,
      'airPopover': AirPopover,
    },

    buttons: {},

    lang: 'en-US',

    followingToolbar: false,
    toolbarPosition: 'top',
    otherStaticBar: '',

    // toolbar
    codeviewKeepButton: false,
    toolbar: [
      ['style', ['style']],
      ['font', ['bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript']],
      ['font-style', ['fontsize', 'textsize', 'forecolor', 'backcolor', 'clear']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['insert', ['link', 'cite', 'table', 'codeview']],
      ['view', ['undo', 'redo', 'fullscreen']],
    ],

    // popover
    popatmouse: true,
    popover: {
      image: [
        ['resize', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
        ['float', ['floatLeft', 'floatRight', 'floatNone']],
        ['remove', ['removeMedia']],
      ],
      link: [
        ['link', ['linkDialogShow', 'unlink']],
      ],
      table: [
        ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
        ['delete', ['deleteRow', 'deleteCol', 'deleteTable']],
      ],
      air: [
        ['color', ['color']],
        ['font', ['bold', 'underline', 'clear']],
        ['para', ['ul', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture']],
        ['view', ['fullscreen', 'codeview']],
      ],
    },

    // air mode: inline editor
    airMode: false,
    overrideContextMenu: false, // TBD

    width: null,
    height: 300,
    linkTargetBlank: true,
    useProtocol: true,
    defaultProtocol: 'https://',

    focus: false,
    tabDisabled: false,
    tabSize: 4,
    styleWithCSS: false,
    shortcuts: true,
    textareaAutoSync: true,
    tooltip: 'auto',
    container: null,
    maxTextLength: 0,
    blockquoteBreakingLevel: 2,
    spellCheck: true,
    disableGrammar: false,
    placeholder: null,
    inheritPlaceholder: false,
    // TODO: need to be documented
    recordEveryKeystroke: false,
    historyLimit: 200,

    // TODO: need to be documented
    showDomainOnlyForAutolink: false,

    // TODO: need to be documented
    hintMode: 'word',
    hintSelect: 'after',
    hintDirection: 'bottom',

    styleTags: [
      {
        title: 'Normal',
        tag: 'p',
        value: 'p',
        className: '',
        style: `
          padding: 4px; 
          `,
      },
      {
        title: 'Title',
        tag: 'h3',
        value: 'h3',
        className: 'o-title',
        style: `
          padding: 4px; 
          font-size: 18px;
          `,
      },
      {
        title: 'Notice',
        tag: 'blockquote',
        value: 'blockquote',
        className: 'o-txt--notice',
        style: `
          margin: 0;
          padding: 4px;
          border: 1px solid rgba(gray, 0.05);
          background-color: rgba(gray, 0.2);
          border-radius: 4px;
          `,
      },
      {
        title: 'Code',
        tag: 'pre',
        value: 'pre',
        className: 'o-txt--code',
        style: `
          margin: 0;
          padding: 4px;
          border: 1px solid rgba(#2a8ed4, 0.8);
          border-radius: 4px;
          background-color: rgba(#2a8ed4, 0.5);
          `,
      },
    ],

    fontNames: [
      'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',
      'Helvetica Neue', 'Helvetica', 'Impact', 'Lucida Grande',
      'Tahoma', 'Times New Roman', 'Verdana',
    ],
    fontNamesIgnoreCheck: [],
    addDefaultFonts: true,

    fontSizes: ['12', '16', '24'],

    fontSizeUnits: ['px', 'pt'],

    // pallete colors(n x n)
    colors: [
      ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],
      ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
      ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
      ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
      ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],
      ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],
      ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],
      ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031'],
    ],

    highlightColors: [
      ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
      ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
      ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
    ],

    // http://chir.ag/projects/name-that-color/
    colorsName: [
      ['Black', 'Tundora', 'Dove Gray', 'Star Dust', 'Pale Slate', 'Gallery', 'Alabaster', 'White'],
      ['Red', 'Orange Peel', 'Yellow', 'Green', 'Cyan', 'Blue', 'Electric Violet', 'Magenta'],
      ['Azalea', 'Karry', 'Egg White', 'Zanah', 'Botticelli', 'Tropical Blue', 'Mischka', 'Twilight'],
      ['Tonys Pink', 'Peach Orange', 'Cream Brulee', 'Sprout', 'Casper', 'Perano', 'Cold Purple', 'Careys Pink'],
      ['Mandy', 'Rajah', 'Dandelion', 'Olivine', 'Gulf Stream', 'Viking', 'Blue Marguerite', 'Puce'],
      ['Guardsman Red', 'Fire Bush', 'Golden Dream', 'Chelsea Cucumber', 'Smalt Blue', 'Boston Blue', 'Butterfly Bush', 'Cadillac'],
      ['Sangria', 'Mai Tai', 'Buddha Gold', 'Forest Green', 'Eden', 'Venice Blue', 'Meteorite', 'Claret'],
      ['Rosewood', 'Cinnamon', 'Olive', 'Parsley', 'Tiber', 'Midnight Blue', 'Valentino', 'Loulou'],
    ],

    highlightColorName: [
      ['Azalea', 'Karry', 'Egg White', 'Zanah', 'Botticelli', 'Tropical Blue', 'Mischka', 'Twilight'],
      ['Tonys Pink', 'Peach Orange', 'Cream Brulee', 'Sprout', 'Casper', 'Perano', 'Cold Purple', 'Careys Pink'],
      ['Red', 'Orange Peel', 'Yellow', 'Green', 'Cyan', 'Blue', 'Electric Violet', 'Magenta'],
    ],

    colorButton: {
      foreColor: '#000000',
      backColor: '#FFFF00',
    },

    lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],

    tableClassName: 'table table-bordered',

    insertTableMaxSize: {
      col: 10,
      row: 10,
    },

    // By default, dialogs are attached in container.
    dialogsInBody: false,
    dialogsFade: false,

    maximumImageFileSize: null,
    acceptImageFileTypes: "image/*",

    callbacks: {
      onBeforeCommand: null,
      onBlur: null,
      onBlurCodeview: null,
      onChange: null,
      onChangeCodeview: null,
      onDialogShown: null,
      onEnter: null,
      onFocus: null,
      onImageLinkInsert: null,
      onImageUpload: null,
      onImageUploadError: null,
      onInit: null,
      onKeydown: null,
      onKeyup: null,
      onMousedown: null,
      onMouseup: null,
      onPaste: null,
      onScroll: null,
    },

    codemirror: {
      mode: 'text/html',
      htmlMode: true,
      lineNumbers: true,
    },

    codeviewFilter: true,
    codeviewFilterRegex: /<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml)[^>]*?>/gi,
    codeviewIframeFilter: true,
    codeviewIframeWhitelistSrc: [],
    codeviewIframeWhitelistSrcBase: [
      'www.youtube.com',
      'www.youtube-nocookie.com',
      'www.facebook.com',
      'vine.co',
      'instagram.com',
      'player.vimeo.com',
      'www.dailymotion.com',
      'player.youku.com',
      'v.qq.com',
    ],

    keyMap: {
      pc: {
        'ESC': 'escape',
        'ENTER': 'insertParagraph',
        'CTRL+Z': 'undo',
        'CTRL+Y': 'redo',
        'TAB': 'tab',
        'SHIFT+TAB': 'untab',
        'CTRL+B': 'bold',
        'CTRL+I': 'italic',
        'CTRL+U': 'underline',
        'CTRL+SHIFT+S': 'strikethrough',
        'CTRL+BACKSLASH': 'removeFormat',
        'CTRL+SHIFT+L': 'justifyLeft',
        'CTRL+SHIFT+E': 'justifyCenter',
        'CTRL+SHIFT+R': 'justifyRight',
        'CTRL+SHIFT+J': 'justifyFull',
        'CTRL+SHIFT+NUM7': 'insertUnorderedList',
        'CTRL+SHIFT+NUM8': 'insertOrderedList',
        'CTRL+LEFTBRACKET': 'outdent',
        'CTRL+RIGHTBRACKET': 'indent',
        'CTRL+NUM0': 'formatPara',
        'CTRL+NUM1': 'formatH1',
        'CTRL+NUM2': 'formatH2',
        'CTRL+NUM3': 'formatH3',
        'CTRL+NUM4': 'formatH4',
        'CTRL+NUM5': 'formatH5',
        'CTRL+NUM6': 'formatH6',
        'CTRL+ENTER': 'insertHorizontalRule',
        'CTRL+K': 'linkDialog.show',
      },

      mac: {
        'ESC': 'escape',
        'ENTER': 'insertParagraph',
        'CMD+Z': 'undo',
        'CMD+SHIFT+Z': 'redo',
        'TAB': 'tab',
        'SHIFT+TAB': 'untab',
        'CMD+B': 'bold',
        'CMD+I': 'italic',
        'CMD+U': 'underline',
        'CMD+SHIFT+S': 'strikethrough',
        'CMD+BACKSLASH': 'removeFormat',
        'CMD+SHIFT+L': 'justifyLeft',
        'CMD+SHIFT+E': 'justifyCenter',
        'CMD+SHIFT+R': 'justifyRight',
        'CMD+SHIFT+J': 'justifyFull',
        'CMD+SHIFT+NUM7': 'insertUnorderedList',
        'CMD+SHIFT+NUM8': 'insertOrderedList',
        'CMD+LEFTBRACKET': 'outdent',
        'CMD+RIGHTBRACKET': 'indent',
        'CMD+NUM0': 'formatPara',
        'CMD+NUM1': 'formatH1',
        'CMD+NUM2': 'formatH2',
        'CMD+NUM3': 'formatH3',
        'CMD+NUM4': 'formatH4',
        'CMD+NUM5': 'formatH5',
        'CMD+NUM6': 'formatH6',
        'CMD+ENTER': 'insertHorizontalRule',
        'CMD+K': 'linkDialog.show',
      },
    },
    icons: {
      'magic': require('../icons/style.svg'),
      'bold': require('../icons/bold.svg'),
      'italic': require('../icons/italic.svg'),
      'underline': require('../icons/underline.svg'),
      'strikethrough': require('../icons/strikethrough.svg'),
      'subscript': require('../icons/subscript.svg'),
      'superscript': require('../icons/superscript.svg'),
      'eraser': require('../icons/eraser.svg'),
      'align': require('../icons/align.svg'),
      'alignCenter': require('../icons/align-center.svg'),
      'alignJustify': require('../icons/align-justify.svg'),
      'alignLeft': require('../icons/align.svg'),
      'alignRight': require('../icons/align-right.svg'),
      'indent': require('../icons/align-indent.svg'),
      'outdent': require('../icons/align-outdent.svg'),
      'font': require('../icons/font.svg'),
      'highlighter': require('../icons/highlighter.svg'),
      'link': require('../icons/link.svg'),
      'unlink': require('../icons/link-broken.svg'),
      'caret': require('../icons/caret.svg'),
      'unorderedlist': require('../icons/unordered-list.svg'),
      'orderedlist': require('../icons/ordered-list.svg'),
      'table': require('../icons/table.svg'),
      'tableInsertZone': require('../icons/table-insert-zone.svg'),
      'tableDeleteZone': require('../icons/table-delete-zone.svg'),
      'tableDelete': require('../icons/table-delete.svg'),
      'undo': require('../icons/undo.svg'),
      'redo': require('../icons/redo.svg'),
      'arrowsAlt': require('../icons/fullscr.svg'),
      'palette': require('../icons/palette.svg'),
      'circle': require('../icons/circle.svg'),
      'close': require('../icons/times.svg'),
      'code': require('../icons/code.svg'),
      'floatLeft': require('../icons/image-float-left.svg'),
      'floatRight': require('../icons/image-float-right.svg'),
      'floatNone': require('../icons/image-float-none.svg'),
      'frame': require('../icons/frame.svg'),
      'menuCheck': require('../icons/check.svg'),
      'minus': require('../icons/minus.svg'),
      'pencil': require('../icons/pencil.svg'),
      'picture': require('../icons/image.svg'),
      'question': require('../icons/question.svg'),
      'rollback': require('../icons/rollback.svg'),
      'square': require('../icons/square.svg'),
      'textHeight': require('../icons/text-height.svg'),
      'trash': require('../icons/trash.svg'),
      'video': require('../icons/video.svg'),
    },
  },
});
