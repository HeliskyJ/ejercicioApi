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
                $("#tabOne").empty();
                $("#table").empty();
                $(".bano").empty();
                $(".ban").empty();
                $(".bon").empty();
                $(".bin").empty();
                $("#o").empty();
                $("#table").append("<table border='2' class='table is-bordered is-striped is-narrow is-hoverable is-fullwidth tblData'>"+
                "<thead>"+
                "<th scope='col'>Nombre</th>"+
                "<th scope='col'>Codigo</th>"+
                "</thead>"+
                "<tbody>");
                $.each(data, function(i, item) {
                            $("#table table").append("<tr>" +
                              "<td>" + item.nome + "</td>" +
                              "<td>" + item.codigo + "</td>" +
                              "<td id='bonton'><button class='button is-warning is-focused' value='"+item.codigo+
                              "'onclick='mo(this.value)' id='modelo'>"+
                              "Modelos</button></td>" +
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
                $(".bin").empty();
                $("#tabTwo").empty();
                $(".bon").empty();
                $("#tabOne").empty();
                $("#table").empty();
                cont=0;
                $(".bano").append("<h1>Modelos</h1>"+
                "<table border='2' id='tabTwo' class='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>"+
                "<thead>"+
                "<th>Nombre</th>"+
                "<th>Codigo</th>"+
                "</thead>"+
                "<tbody>");
                while(cont<data.modelos.length){
                    $(".bano table").append("<tr>"+
                    "<td>" + data.modelos[cont].nome + "</td>"+
                    "<td>" + data.modelos[cont].codigo + "</td>"+
                    "<td id='bonton'><button class='button is-warning is-focused' value='"+data.modelos[cont].codigo+
                    "'onclick='act(this.value)' id='but'>"+
                    "Año</button></td>" +
                    "</tr></tbody></table>");
                        cont++;
                }
                sum=0;
                $(".ban").append("<h1>Años</h1>"+
                "<table border='2' id='tabOne' class='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>"+
                "<thead>"+
                "<th>Nombre</th>"+
                "<th>Codigo</th>"+
                "</thead>"+
                "<tbody>");
                while(sum<data.anos.length){
                    $(".ban table").append("<tr>" +
                    "<td>" +data.anos[sum].nome + "</td>"+
                    "<td>" +data.anos[sum].codigo + "</td>"+
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
            $(".bin").empty();
            $("#tabOne").empty();
            $("#tabTwo").empty();
            $(".bano").empty();
            $(".ban").empty();
            $(".bon").empty();
            $(".bin").append("<table border='2' id='tabTrh' class='table is-striped is-narrow is-hoverable is-fullwidth'>"+
            "<thead>"+
            "<th>Nombre</th>"+
            "<th>Codigo</th>"+
            "</thead>"+
            "<tbody>");
            $.each(data, function(i, item) {
                        $(".bin table").append("<tr>" +
                          "<td>" + item.nome + "</td>" +
                          "<td>" + item.codigo + "</td>" +
                          "<td id='bonton'><button class='button is-warning is-focused' value='"+item.codigo+
                          "'onclick='mart(this.value)' id='mrt'>"+
                          "Valor</button></td>" +
                          "</tr></tbody></table>");
            });
        },
        })
    })
}

function mart(valor){
a = valor;
ul = ul+'/'+a;

    $('#table').ready(function(){
        $.ajax({
            url: ul,
            type:"GET",
            dataType: "json",
            success: function (data){
            $(".bin").empty();
            $("#tabOne").empty();
            $("#tabTwo").empty();
            $(".bano").empty();
            $(".ban").empty();
            $(".bon").empty();
                        $(".bon").append("<div class='box pn' id='b'><ul>" +
                          "<li>"+ "<b>Valor</b> " + data.Valor + "</li>" +
                          "<li>"+ "<b>Marca</b> " + data.Marca+ "</li>" +
                          "<li>"+ "<b>Modelo</b> " + data.Modelo+ "</li>" +
                          "<li>"+ "<b>Año del modelo</b> " + data.AnoModelo+ "</li>" +
                          "<li>"+ "<b>Combustible</b> " + data.Combustivel+ "</li>" +
                          "<li>"+ "<b>Codigo FIPE</b> " + data.CodigoFipe+ "</li>" +
                          "<li>"+ "<b>Tipo de vehículo</b> " + data.TipoVeiculo+ "</li>" +
                          "<li>"+ "<b>Sigla Combustible</b> " + data.SiglaCombustivel+ "</li>" +
                          "<li>"+ "<b>Mes de referencia</b> " + data.MesReferencia+ "</li>" +
                          "</ul></div>");
        },
        })
    })
}
