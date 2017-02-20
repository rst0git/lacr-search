// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require typeahead.bundle.js
//= require jquery.noty.packaged.min.js


// Autocomplete for the Simple Search
var autocomplete = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      url: '/ajax/search/autocomplete?q=%QUERY',
      wildcard: '%QUERY'
    }
  });

$(document).ready(function() {
  $('#search').typeahead({ hint: true, highlight: true, minLength: 2}, {source: autocomplete});

  $('#adv-search').submit(function () {
    // Ignore empty values
    if($('#content').val() == ''){$('#content').attr('value', '*')}

    $(this).find('[name]').each(function(){
      if($(this).val() == ''){
        $(this).filter(function (input) {
          return !input.value;
        })
        .prop('name', '');
      }
    })

    // Ignore submit button
    $(this).find('[name="commit"]').filter(function (input) { return !input.value;}).prop('name', '');
  });
});
