var rps;
var apis = "https://parallelum.com.br/fipe/api/v1/";
var ul;
var a;


function valie(){
 var un = $(".select").val();
console.log(un);
ul = (apis +un+"/marcas");

$('.but').ready(function() {
    $.ajax({
        url: ul,
        type: "GET",
        dataType: "json",
        success: function (data){
                $("#table>tbody").empty();
            $.each(data, function(i, item) {
                var row = "<tr>" +
                          "<td>" + item.nome + "</td>" +
                          "<td>" + item.codigo + "</td>" +
                          "<td id='bonton'><button value='"+item.codigo+ "'onclick='mo(this.value)' id='modelo'>Esta marca</button></td>" +
                          "</tr"
                          $("#table>tbody").append(row);
            });
        },
});
});
}



function mo(valor){
  a = valor;
 ul = ul+"/"+a+"/modelos";

$('#table').ready(function(){
    $.ajax({
        url: ul,
        type:"GET",
        dataType: "json",
        success: function (data){
            $("#table>tbody").empty();
            for(var item in data){
                $("#bano ul").append("<li>" + data[item] + "</li>");
            }

        }
    })
})
}
