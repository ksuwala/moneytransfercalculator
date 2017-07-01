$(document).ready(function(){
  jQuery.datetimepicker.setLocale('pl');

  $('select').select2();
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
})