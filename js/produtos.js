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

