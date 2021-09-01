    // VOLTAR AO TOPO
    $(document).ready(function () {
        $("#voltar").hide();
        window.addEventListener("scroll", function () {
        if ($(window).scrollTop() > 400){
            $("#voltar").show();
        } else {
            $("#voltar").hide();
        }
    })
});

$(document).ready(function () {
    var cpf = 0
    
    $("#nome").blur(function () {
        if (isNaN($("#nome").val())) {
            $("#nome").css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })

        } else {
            $("#nome").css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        }
})
 $("#sobrenome").blur(function () {
    if (isNaN($("#sobrenome").val())) {
        $("#sobrenome").css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })

    } else {
        $("#sobrenome").css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
    }
})
$("#inputAddress").blur(function () {
    if (isNaN($("#inputAddress").val())) {
        $("#inputAddress").css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })

    } else {
        $("#inputAddress").css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
    }
})
    $("#cpf").blur(function () {
        var primeiroDigito
        var segundoDigito
        var verifica
        cpf = []
        cpf = $(this).val()
        cpf = cpf.replace(/\.|-/g, "")
        primeiroDigito = 0
        segundoDigito = 0
        for (i = 0; i <= 8; i++) {
            primeiroDigito += cpf[i] * (10 - i)
        }
        primeiroDigito = (primeiroDigito * 10) % 11
        if (primeiroDigito == 10 || primeiroDigito == 11)
            primeiroDigito = 0

        for (i = 0; i <= 9; i++) {
            segundoDigito += cpf[i] * (11 - i)
        }
        segundoDigito = (segundoDigito * 10) % 11
        if (segundoDigito == 10 || segundoDigito == 11) {
            segundoDigito = 0
        }
        if (cpf[0] == 1 && cpf[1] == 1 && cpf[2] == 1 && cpf[3] == 1 && cpf[4] == 1 && cpf[5] == 1 && cpf[6] == 1 && cpf[7] == 1 && cpf[8] == 1 && cpf[9] == 1 && cpf[10] == 1) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        }
        else if (cpf[0] == 0 && cpf[1] == 0 && cpf[2] == 0 && cpf[3] == 0 && cpf[4] == 0 && cpf[5] == 0 && cpf[6] == 0 && cpf[7] == 0 && cpf[8] == 0 && cpf[9] == 0 && cpf[10] == 0) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        }
        else if (primeiroDigito != cpf[9] || segundoDigito != cpf[10] || verifica == true) {
            $(this).css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        } else {
            $(this).css({ border: "green solid 3px", boxshadow: "0px 0px 4px red" })
        }      
    })

    $("#cidade").blur(function () {
        if (isNaN($("#cidade").val())) {
            $("#cidade").css({ border: "green solid 3px", boxshadow: "0px 0px 4px green" })
    
        } else {
            $("#cidade").css({ border: "red solid 3px", boxshadow: "0px 0px 4px red" })
        }
    })
    $("#enviar").click(function () {
        if ("#nome" && "#cidade" && "#sobrenome" && "#cpf" && "#inputAddress" == true) {
            alert("Seus dados foram enviados com sucesso")
        } else {
            alert("Por favor, revise os campos em vermelho e tente novamente!");
        }
    })
})


