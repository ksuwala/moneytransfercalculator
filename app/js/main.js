$(document).ready(function(){
  jQuery.datetimepicker.setLocale('pl');
  var banks = [
    {id: 0, text: "Alior Bank"},
    {id: 1, text: "Bank BPH"},
    {id: 2, text: "Bank BPS"},
    {id: 3, text: "Bank Millennium"},
    {id: 4, text: "Bank Pekao SA"},
    {id: 5, text: "Bank Pocztowy"},
    {id: 6, text: "Bank Zachodni WBK"},
    {id: 7, text: "BGK"},
    {id: 8, text: "BGŻ BNP Paribas S.A."},
    {id: 9, text: "BIZ Bank"},
    {id: 10, text: "BOŚ Bank"},
    {id: 11, text: "Citi Handlowy"},
    {id: 12, text: "Credit Agricole"},
    {id: 13, text: "Deutsche Bank Polska"},
    {id: 14, text: "DnB NORD"},
    {id: 15, text: "DZ BANK"},
    {id: 16, text: "Eurobank"},
    {id: 17, text: "Getin Bank"},
    {id: 18, text: "HSBC Bank Polska"},
    {id: 19, text: "Idea Bank"},
    {id: 20, text: "ING Bank Śląski"},
    {id: 21, text: "Inteligo"},
    {id: 22, text: "mBank"},
    {id: 23, text: "Meritum Bank"},
    {id: 24, text: "Nest Bank"},
    {id: 25, text: "Noble Bank"},
    {id: 26, text: "Nordea Bank"},
    {id: 27, text: "Pekao Bank Hipoteczny"},
    {id: 28, text: "PKO Bank Polski"},
    {id: 29, text: "PLUS BANK"},
    {id: 30, text: "Raiffeisen Polbank"},
    {id: 31, text: "T-Mobile Usługi Bankowe"},
    {id: 32, text: "Toyota Bank"},
    {id: 33, text: "VW Bank direct"},
  ];
  $('select').select2({
    placeholder: $(this).data('placeholder'),
    data: banks
  });


  $('.timepicker').datetimepicker({
    datepicker: false,
    mask: true,
    format: 'H:i',
    step: 30,
    onGenerate:function( ct ){
      jQuery(this).find('.xdsoft_time')
        .toggleClass('xdsoft_disabled');
    },
  })
  $('.datepicker').datetimepicker({
    timepicker: false,
    format: 'd/m/Y',
    minDate: 0,
    value: 0,
    mask: true,
    onGenerate:function( ct ){
      jQuery(this).find('.xdsoft_date')
        .toggleClass('xdsoft_disabled');
    }
  })

  $('.calculator-form').on('submit', function(e){
    e.preventDefault();
    $('.calculator-content').fadeOut('slow', function(){
      $('.calculator-success').fadeIn('slow')
    })
    
  })
})