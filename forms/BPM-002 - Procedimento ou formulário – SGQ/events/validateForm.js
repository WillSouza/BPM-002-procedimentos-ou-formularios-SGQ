function validateForm(form) {
    var activity =      getValue('WKNumState');
    var WKNextState =   getValue('WKNextState');
    
    
    if (activity == 4 || activity == 0) {
        
        if (form.getValue("descricao") == ''){
            throw "Descri\u00E7\u00E3o da solicita\u00E7\u00E3o n\u00E3o pode ser vazio.";
        }

        if (form.getValue("documento") == '') {
            throw "Nome do documento n\u00E3o pode ser vazio.";
        }

        if (form.getValue("docAjustado") == '') {
            throw "Necessário informar se documento já está ajustado.";
        }
    }

    if(activity == 9){

        if(form.getValue("valrdEncaminhamento") == ""){
            throw "Necessário informar Tipo de encaminhamento da solicitação.";
        }

        if(form.getValue("valrdEncaminhamento") == "Finalizar solicitacao" && form.getValue("justificaParecer") == ""){
            throw "Necessário justificar o motivo da finalização da solicitação.";
        }

    }

    if(activity == 100){

        if (form.getValue("departamento") == '' && form.getValue('rdEncaminhamento2') != 'Ajustar documento' && form.getValue('rdEncaminhamento2') != 'Finalizar solicitacao') {
            throw "Selecione o departamento respons\u00E1vel";
        }
        
        if(form.getValue("rdAprovIndex") == "" && form.getValue('rdEncaminhamento2') != 'Ajustar documento' && form.getValue('rdEncaminhamento2') != 'Finalizar solicitacao'){
            throw "Necessário informar se exite aprovadores adicionais.";
        }

        if(form.getValue("valrdEncaminhamento2") == ""){
            throw "Necessário informar tipo de encaminhamento.";   
        }

        if(form.getValue('rdEncaminhamento2') == 'Finalizar solicitacao' && form.getValue("justificaParecer") == ""){
            throw "Necessário justificar o motivo da finalização da solicitação.";
        }
        
        if(form.getValue('aprovAdicional') == 'sim' && form.getValue('indextabResp') == ''){
            throw "Necessário inserir aprovadores adicionais.";      
        }

        if (form.getValue('indextabResp') > 0) {

            for(var x = 0; x <= form.getValue('indextabResp'); x++){

                if(form.getValue('revisorAdicional___'+x) == ""){
                    throw "Necessário preencher todos os revisores adicionados.";
                }
            }
        }
    }

    if(activity == 29){

        if(form.getValue("valrdAprova") == ""){
            throw "Necessário informar se solicitação será aprovada.";   
        }   

        if(form.getValue("valrdAprova") == "reprovado" && form.getValue('motivoCancel') == ""){
            throw "Necessário informar motivo do cancelamento caso reprovado.";   
        }   
    }
}