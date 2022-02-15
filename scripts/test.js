$( document ).ready(function() {
var notLazyblock = '.t744 .t-slds__bgimg';
for(let i = 0; i < $(notLazyblock).length; i++){
$(notLazyblock).addClass('loaded plus');
$(notLazyblock+':eq('+i+')').css('background-image', 'url("'+$(notLazyblock+':eq('+i+')').data("original")+'")' );
};      
//При клике на нашу кнопку
$('a[href="#sendtocart"]').click(function(event) {
  event.preventDefault();

//***********************
  //Получаем комплектацию
    var complect = $('select[name="complect"]').val();
  //Получаем кол-во 
    var colvo = $('input[name="colvo"]').val();    
  //Получаем срок Гарантии   
    var garantee = $('input[name="garantee"]').next('.t-range__value-txt').html();
 //Получаем Дополнительный сервис 
    var dopserv = $('input[name="dopservice"]').val(); 
  //Получаем значение Способа доставки
    var delivery= $('input[name="deliveryvar"]:checked').val();
  //Полчаем сумму калькулятора
    var itogo = $('input[name="summazakaza"]').next('.t-calc__wrapper').children('.t-calc').html();


//***********************
  

//ПРисваиваем значения из калькулятора для блока ST200
  $('.t744__price-value').html(itogo);//Цена товара
  //Параметры
  $('.t744 select:eq(0) option:selected').val(complect);//Комплектация
  $('.t744 select:eq(1) option:selected').val(colvo);//Количество
  $('.t744 select:eq(2) option:selected').val(garantee);//Гарантия
  $('.t744 select:eq(3) option:selected').val(dopserv);//Доп сервис
  $('.t744 select:eq(4) option:selected').val(delivery);//Доставка
  
//Отправляем заказ
 let fullinput=true;
 let mainBlk = $(this).closest('.t-rec');
    $('.t-input-group').removeClass('js-error-control-box');
    mainBlk.find('.js-tilda-rule[data-tilda-req="1"]').each(function() {
        if($(this).val()==''){$(this).closest('form').find('.t-submit').click(); fullinput=false; return false;};
    }); 
    if(fullinput){
    mainBlk.find('input[type="radio"][data-tilda-req="1"].js-tilda-rule').closest('.t-input-block').each(function() {
    if(!$(this).find('input[type="radio"]').is(':checked')){$(this).closest('form').find('.t-submit').click();fullinput=false; return false;  
    };});};
    if(fullinput){
    mainBlk.find('input[type="checkbox"][data-tilda-req="1"].js-tilda-rule').each(function() {
    if (!$(this).is(':checked')){ $(this).closest('form').find('.t-submit').click(); fullinput=false; return false;};
    });};
    
    if(fullinput){
        setTimeout(function() {  $(".t744__btn")[0].click(); }, 100);
    };
  return false;
});

 $(document).on("keydown", ".t-form", function(event) {return event.key != "Enter";});
});