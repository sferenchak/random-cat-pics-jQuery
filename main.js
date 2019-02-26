$('document').ready(function() {
    getCat();
})
$('#btn').click(function() {
    getCat();
})

function getCat() {
    $.getJSON('https://aws.random.cat/meow')
    .done(function(data) {
        replaceImg(data);
    })
    .fail(function() {
        console.log("Error getting cat!");
    })
}

function replaceImg(data) {
    $('#photo').attr('src', data.file);
}