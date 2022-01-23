import Quill from 'quill';

// var editor = new Quill('#syeditor', {
//     modules: { toolbar: '#toolbar' },
//     theme: 'snow'
// });

// var toolbarOptions = ['bold', 'italic', 'underline', 'strike'];

var quill = new Quill('#syeditor', {
    debug: false,
    modules: {
        toolbar: true,
        'history': {          // Enable with custom configurations
            'delay': 2500,
            'userOnly': true
          },
          'syntax': false
    },
    theme: 'snow'
});
window.quill = quill;
