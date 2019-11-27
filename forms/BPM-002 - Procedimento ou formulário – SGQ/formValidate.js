var beforeSendValidate = function (WKNumstate, WKNextState) {

    console.log("--- beforeSendValidade ---");
    console.log("--- WKNumstate: " + WKNumstate);
    console.log("--- WKNextState: " + WKNextState);

    var block = false;


    if (WKNumstate == 0 || WKNumstate == 4) {
        // Tarefa inicial
        var documento = $("#documento").val();
        var descricao = $("#descricao").val();
        var docAjustado = $("input[name='docAjustado']:checked").val();
        
       /*  
        var nomeBPM = $("#nomeBPM").val();
        var descSolic = $("#descSolic").val(); */


        if (documento == "") {
            colorBorder('documento');
            block = true;
        }

        if (docAjustado == "" || docAjustado == undefined) {
            colorBorder('docAjustado');
            block = true;
        }
        
        if (descricao == "") {
            colorBorder('descricao');
            block = true;
        }
    } else if(WKNumstate == 9){
        // Analisar solicitação
        var documento = $("#documento").val();
        var rdEncaminhamento = $("input[name='rdEncaminhamento']:checked").val();
        var justificaParecer = $("#justificaParecer").val();

        if (documento == "") {
            colorBorder('documento');
            block = true;
        }
        
        console.log("--- rdEncaminhamento: " + rdEncaminhamento);
        
        if (rdEncaminhamento == "" || rdEncaminhamento == undefined) {
            colorBorder('rdEncaminhamento');
            block = true;
        } else if (rdEncaminhamento == 'Finalizar solicitacao' && justificaParecer == ''){
            colorBorder('justificaParecer');
            block = true;
        }
    }else if(WKNumstate == 100){
        // Analisar documento

        var relacionado = $("#relacionado option:selected").val();
        var descricao = $("#descricao").val();
        var departamento = $("#departamento").val(); 
        var aprovAdicional = $("input[name='aprovAdicional']:checked").val();
        var rdEncaminhamento2 = $("input[name='rdEncaminhamento2']:checked").val();
        var justificaParecer = $('#justificaParecer').val();
        var indextabResp = $('#indextabResp').val();
        
        if (rdEncaminhamento2 == "Finalizar solicitacao" && justificaParecer == "") {
            colorBorder('justificaParecer');
            block = true;
        } 
        
        if (rdEncaminhamento2 == "Aprovar documento"  ) {
            
            if (aprovAdicional == "sim" && indextabResp == '') {
                throw "Necessário inserir aprovadores adicionais.";
            } else if (indextabResp > 0) {
                for (var x = 1; x <= indextabResp; x++) {

                    console.log('--- $(#revisorAdicional___' + x + ' : ' + $('#revisorAdicional___' + x).val() );
                    
                    if ($('#revisorAdicional___' + x).val() == "" || $('#revisorAdicional___' + x).val() == null || $('#revisorAdicional___' + x).val() == undefined) {

                        colorBorder('revisorAdicional___' + x);
                        block = true;
                        throw "Necessário preencher todos os revisores adicionados.";
                    }
                }
            }

            if (relacionado == "") {
                colorBorder('relacionado');
                block = true;
            }

            if (descricao == "") {
                colorBorder('descricao');
                block = true;
            }
            
            if (departamento == "" || departamento == null) {
                colorBorder('departamento');
                block = true;
            }

            if (aprovAdicional == "" || aprovAdicional == undefined) {
                colorBorder('aprovAdicional');
                block = true;
            }
            
            if (rdEncaminhamento2 == "" || rdEncaminhamento2 == undefined) {
                colorBorder('rdEncaminhamento2');
                block = true;
            } 
        }
            



       /*  if (form.getValue('aprovAdicional') == 'sim' && form.getValue('indextabResp') == '') {
            throw "Necessário inserir aprovadores adicionais.";
        }

        if (form.getValue('indextabResp') > 0) {

            for (var x = 0; x <= form.getValue('indextabResp'); x++) {

                if (form.getValue('revisorAdicional___' + x) == "") {
                    throw "Necessário preencher todos os revisores adicionados.";
                }
            }
        } */
        
    } 

    if(WKNumstate == 29){
        // Aprovar documento

        var rdAprova = $("input[name='rdAprova']:checked").val();
        var motivoCancel = $("#motivoCancel").val();

        console.log("--- rdAprova: " + rdAprova);
        console.log("--- motivoCancel: " + motivoCancel);
        

        if (rdAprova == '' || rdAprova == undefined){
            throw "Necessário informar se solicitação será aprovada."; 
        }

        if (rdAprova == "reprovado" && motivoCancel == "") {
            console.log("---- ENTROU NO IF");
            
            colorBorder('motivoCancel');
            block = true;
        }   

    }



    if (block == true) {
        throw "Necessário preencher todos os campos obrigatórios";
    }


    function colorBorder(campo) {
        //reloadCSS();
        $('.' + campo).css("color", "rgb(255, 80, 80)");
        $('#' + campo).css("border-color", "rgb(255, 80, 80)");
    }


    //function reloadCSS() {
    //    $($('link')[0] || $('style')[0]).remove(); $.get('style.css', function (d) { $('head').append($('<style/>').html(d)) })
    //}

}