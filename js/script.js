var rps;
var apis = "https://parallelum.com.br/fipe/api/v1/";
var ul;
var a;


function valie(){
var un = $(".select").val();
ul = (apis +un+"/marcas");

    $('.but').ready(function() {
        $.ajax({
            url: ul,
            type: "GET",
            dataType: "json",
            success: function (data){
                $("#tabTwo").empty();
                $(".bano").empty();
                $(".ban").empty();
                $("#table").append("<table border='2'>"+
                "<thead>"+
                "<th>Nombre</th>"+
                "<th>Codigo</th>"+
                "</thead>"+
                "<tbody>");
                $.each(data, function(i, item) {
                            $("#table table").append("<tr>" +
                              "<td>" + item.nome + "</td>" +
                              "<td>" + item.codigo + "</td>" +
                              "<td id='bonton'><button value='"+item.codigo+
                              "'onclick='mo(this.value)' id='modelo'>"+
                              "Esta marca</button></td>" +
                              "</tr></tbody></table>");
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
                $("#tabTwo").empty();
                $("#tabOne").empty();
                $("#table").empty();
                cont=0;
                $(".bano").append("<h1>Modelos</h1>"+
                "<table border='2' id='tabTwo'>"+
                "<thead>"+
                "<th>Nombre</th>"+
                "<th>Codigo</th>"+
                "</thead>"+
                "<tbody>");
                while(cont<data.modelos.length){
                    $(".bano table").append("<tr>"+
                    "<td>" + data.modelos[cont].nome + "</td>"+
                    "<td>" + data.modelos[cont].codigo + "</td>"+
                    "<td id='bonton'><button value='"+data.modelos[cont].codigo+
                    "'onclick='act(this.value)' id='but'>"+
                    "Año</button></td>" +
                    "</tr></tbody></table>");
                        cont++;
                }
                sum=0;
                $(".ban").append("<h1>Años</h1>"+
                "<table border='2' id='tabOne'>"+
                "<thead>"+
                "<th>Nombre</th>"+
                "<th>Codigo</th>"+
                "</thead>"+
                "<tbody>");
                while(sum<data.anos.length){
                    $(".ban table").append("<tr>" +
                    "<td>" +data.anos[sum].nome + "</td>"+
                    "<td>" +data.anos[sum].codigo + "</td>"+
                    "<td id='bonton'><button value='"+data.anos[sum].codigo+
                    "'onclick='act(this.value)' id='but'>"+
                    "Año</button></td>" +
                    "</tr></tbody></table>");
                        sum++;
                }
            }
        })
    })
}


function act(valor){
a = valor;
ul = ul+"/"+a+"/anos";

    $('#table').ready(function(){
        $.ajax({
            url: ul,
            type:"GET",
            dataType: "json",
            success: function (data){
            $("#tabTwo").empty();
            $(".bano").empty();
            $(".ban").empty();
            $("#table").append("<table border='2'>"+
            "<thead>"+
            "<th>Nombre</th>"+
            "<th>Codigo</th>"+
            "</thead>"+
            "<tbody>");
            $.each(data, function(i, item) {
                        $("#table table").append("<tr>" +
                          "<td>" + item.nome + "</td>" +
                          "<td>" + item.codigo + "</td>" +
                          "</tr></tbody></table>");
            });
        },
        })
    })
}
