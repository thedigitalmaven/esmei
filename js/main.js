$('.show-filters').on('click', function() { 
//   $('.filters-list').toggle()
//1.When navigation is visible, collapse it

//2. Change text of show filters to 'show filters'

//3otherwise, if nav is collapsed, expand it

//4change text to say 'hide filters;

if ($('.filters-list').is(':visible')) {
//console.log($('.filters-list').is(':visible'))
$('.filters-list').slideUp()
$('.show-filters').text('Show Filters')
} else {
  //  console.log($('.filters-list').is(':visible'))
  $('.filters-list').slideDown()
$('.show-filters').text('Hide Filters')
}

//this will block the default behaviour of the href jumpiong ot the top of the page
return false
})

$('.filters-list a').on('click', function() {
   var filter = $(this).attr('data-filter')

console.log(filter)
    //1. Hide all the products
    //2. Show the products with a particular filter
    $('.product').hide()
    $(filter).show()

    $('.filters-list a').removeClass('selected')
    $(this).addClass('selected')

    return false
})