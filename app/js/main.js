$(document).ready(function(){
  jQuery.datetimepicker.setLocale('pl');

  $('select').select2({
    placeholder: $(this).data('placeholder')
  });


  $('.timepicker').datetimepicker({
    datepicker: false,
    format: 'H:i'
  })
  $('.datepicker').datetimepicker({
    timepicker: false,
    format: 'd/m/Y',
    minDate: 0,
    value: 0,
    defaultDate: new Date()
  })

  $('.calculator-form').on('submit', function(e){
    e.preventDefault();
    $('.calculator-content').fadeOut('slow', function(){
      $('.calculator-success').fadeIn('slow')
    })
    
  })
})