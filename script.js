var $links = $('a');
var $search = $('#input');
var caption = [];
console.log($links);

// Create array
$links.each(function(){
    var title = $(this).attr('data-title').toLowerCase();
    caption.push(title);
});
console.log(caption);
$search.on('keyup', function(){
    var input = $search.val().trim().toLowerCase();
    for (var i = 0; i < caption.length; i++) {
        var x = caption[i].includes(input);
        console.log(x);
        if(x) {
            $('.container').children().eq(i).show();
        } else {
            $('.container').children().eq(i).hide();
        } 
    }
  });