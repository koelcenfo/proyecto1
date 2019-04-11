'use strict'

$(document).on("click", '.btn-add-idioma', function(){
    let row = $('.row').eq(0).clone().show();
    $('.idiomas').append(row);
})

$(document).on("click", '.btn-remove-idioma ', function(){

    let index = $('.btn-remove-row').index(this);

    $('.row').eq(index).remove();
});

function obtener_idiomas(){
    let map = {};
    $(".idioma").each(function() {
        map[$(this).attr("value")] = $(this).val();
        console.log(map);
    });
    return map;
}
