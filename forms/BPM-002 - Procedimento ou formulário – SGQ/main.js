var eztecForms = {
        params: {},
        initForm: function(params) {    
            this.params = params;
            var $this = this;   
            $(function () {
                if (params.formMode == "ADD" || params.formMode == "MOD") { 
                    $this.onEdit(params);
                } else {
                    $this.onView(params);
                }
            });
        },
        onView: function(params) { //Visualização do formulário sem a possibilidade de edição (consulta)
            var WKNumState = params.WKNumState;
            
            console.log("### View Tarefa : " + WKNumState);



            if (WKNumState == 4 || WKNumState == 9){

                $(".departamento").addClass('hide');
                $(".rdEncaminhamento").addClass('hide');
                $(".justificaParecer").addClass('hide');
                $(".tabResp").addClass('hide');
                $("#btnObs").addClass('hide');
            
            } else if (WKNumState == 103 || WKNumState == 100){
                $(".departamento").addClass('hide');
                //$(".rdEncaminhamento").addClass('hide');
                $(".justificaParecer").addClass('hide');
                $(".tabResp").addClass('hide');
                $("#btnObs").addClass('hide');
            
            } else if (WKNumState == 29){
                $(".justificaParecer").addClass('hide');
                $(".tabResp").addClass('hide');
                $("#btnObs").addClass('hide');
                $(".rdEncaminhamento").addClass('hide');

            } else if (WKNumState == 31 || WKNumState == 61){
                $(".justificaParecer").addClass('hide');
                $(".lixeira").addClass('hide');
                $("#btnObs").addClass('hide');

            }
        },
        onEdit: function(params) {  //Edição do formulário
           
            var WKNumState = params.WKNumState;
            var WKNumProces = params.WKNumProces;
            var WKUser = params.WKUser;
               
            //alert("teste");
            console.log("### Tarefa : "+WKNumState);
            console.log("### WKUser : "+WKUser);

            if($("#WKNumProces").val() == "" || $("#WKNumProces").val() == "0"){
                $("#WKNumProces").val(WKNumProces);
            }
                
            
            $(".rdEncaminhamento").addClass("hide");

            $(".departamento").addClass("hide");

            $(".justificaParecer").css('display','none');

            if($("#valrdaprovAdicional").val() == '1'){
               
                
                $("input[name='aprovAdicional'][value='sim']").prop('checked', true);
                //$(".hideAprov").removeClass('hide');
                $("#rdAprovIndex").val('1');

            }else if( $("#valrdaprovAdicional").val() == '0'){
             
                $("input[name='aprovAdicional'][value='nao']").prop('checked', true);
                $("#rdAprovIndex").val('0');
            }


            $(".hideAprov").addClass('hide');
            // Tarefa Inicial
            if(WKNumState == "4" || WKNumState == "0" ){

                console.log("ENTROU NO IF Tarefa Inicial");

                $("#analistaQualidade").val("Pool:Group:BPM-002-Adm-GestaoQualidade");
                validaGrupo();

            }

            // Tarefa Definir elaborador/revisor
            if(WKNumState == "9"){

                console.log("Dentro da tarefa 9");

                $(".rdEncaminhamento").removeClass("hide");
                $("input[name='rdEncaminhamento']").removeAttr("checked");
                $("#valrdEncaminhamento").val('');

/*
                var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", getValue("WKUser"), getValue("WKUser"), ConstraintType.MUST);
                var constraints = new Array(c1);

                var colaborador = DatasetFactory.getDataset("colleague", null, constraints, null);
*/
                $("#analistaQualidade").val(WKUser);

                console.log("analistaQualidade : "+ $("#analistaQualidade").val() );


            }

            // Tarefa pré-aprovar documento
            if(WKNumState == "100"){

                $(".relacionado").removeClass("hide");
                $(".radioAprov").removeClass("hide");
                $(".departamento").removeClass("hide");
                //$(".novoButton").removeClass('hide');
                $(".justificaParecer").removeClass('hide');
                $(".justificaParecer").css('display','none');
                $("#descricao").removeAttr("readonly");
                //$("#btnAddResp").addClass('hide');

                //$("#rdAprovIndex").val('');

                $(".nomeAprovador").addClass('hide');
                $(".dataAprovacao").addClass('hide');

                $("#indexLooping").val('0');

                $("input[name='rdEncaminhamento2']").removeAttr("checked");
                $("#valrdEncaminhamento2").val('');
                
                $("input[name='aprovAdicional']").removeAttr("checked");
                $("#valrdaprovAdicional").val('');
                 
                 //$("input[name='aprovAdicional']").removeAttr("checked");

                if( $("#rdAprovIndex").val() != '0'){
                    
                    $(".tabResp").removeClass('hide');
                    concatenaAprovador();
                       
                }    

                if($("#rdAprovIndex").val() == ""){
                    $(".tabResp").addClass('hide');
                    $(".novoButton").addClass("hide");
                }
            }

            if(WKNumState == "29"){

                $(".relacionado").removeClass("hide");
                $(".rdAprova").removeClass('hide');
                $("input[name='rdAprova']").removeAttr("checked");
                $("#motivoCancel").val('');       
                $("#valrdAprova").val('');        
                
                $("#relacionado").prop("disabled",true);

                var papel = $("#arrayAprovador").val();
                var array = papel.split(',');
                var cont = $("#indexLooping").val();

                if( $("#rdAprovIndex").val() != '0'){
                    
                    if (cont == array.length){

                        $(".tabResp").removeClass('hide');
                        $(".nomeAprovador").removeClass('hide');
                        $(".dataAprovacao").removeClass('hide');
                        $(".lixeira").addClass('hide');
                        $(".revisorAdicional").attr('readonly','readonly');

                    }else{

                        var index = $("#indexLooping").val();

                         var now = new Date();
                        
                        var nowDate     = now.getDate();
                        var nowMonth = now.getMonth() + 1;
                        var nowYear     = now.getFullYear();
                        
                        if(nowMonth < 10){
                            nowMonth = "0"+nowMonth;
                        }
                        
                        if(nowDate < 10){
                            nowDate = "0"+nowDate;
                        }
                    
                        var hora = now.getHours().toString();
                        var minuto = now.getMinutes().toString();
                        
                        if(hora.length == 1){
                            hora = 0+hora;
                        }
                    
                        if(minuto.length == 1){
                            minuto = 0+minuto;
                        }
                    
                      //  var dataHora = date+"/"+mes+"/"+fullDate.getFullYear() +" "+hora+ ":"+minuto;
                    
                        //console.log("--- index :"+ index);
                        $("#dataAprovacao___"+index).val(nowDate+"/"+nowMonth+"/"+nowYear+" "+hora+":"+minuto);
                        $("#nomeAprovador___"+index).val($("#userAtivo").val());


                    }
                }  


                // Add usuário e data da aprovação em linha com base no index do looping


                //$("#") 
            }

            if(WKNumState == "103"){
                verificaAnexo();

                if ($("#analistaQualidade2").val() == ""){
                    $("#analistaQualidade2").val($("#codUserAtivo").val());
                }
            }   


            if(WKNumState == '31'){
                $(".relacionado").removeClass("hide");
                $(".departamento").removeClass('hide');
                $(".tabResp").removeClass('hide');
                $(".nomeAprovador").removeClass('hide');
                $(".dataAprovacao").removeClass('hide');
                $(".lixeira").addClass('hide');
                $(".revisorAdicional").attr('readonly','readonly');

                $("#relacionado").prop("disabled", true);
            }
            
            setTimeout(function(){
                $(".tag-text").css({'max-width': '100%'});
            }, 1000);

            //Regra de bloqueio de tabela pai-filho

            var tabIndex = $("#indextab").val();

            for( var z = 1; z <= tabIndex; z++){
                $("#tab_obs___"+z).attr("readonly","readonly");    
            }


          

            $("input[name='aprovAdicional']").change(function(e){

                
                if($(this).val() === 'nao'){
                    $("#rdAprovIndex").val('0');
                    $(".hideAprov").addClass('hide');
                    $(".novoButton").addClass('hide');
                    $("#valrdaprovAdicional").val('0');
                   
                    $("#proxAprovador").val($("#codDepartamento").val());
                    $('#arrayAprovador').val('');

                    //Limpar tabela pai-filho
                    $('#tabResp tbody tr').not(':first').each(function(count,tr)
                    { 
                        fnWdkRemoveChild($(this).remove()); 
                    });
                    $("#indextabResp").val('');
                    concatenaAprovador();

                }else{
                    $("#rdAprovIndex").val('1');
                    $("#valrdaprovAdicional").val('1');
                    $(".hideAprov").removeClass('hide');
                    $(".novoButton").removeClass('hide');
                    $("#proxAprovador").val('');
                    $('#arrayAprovador').val('');
                    concatenaAprovador();
                }

            });  

            $("input[name='rdEncaminhamento']").change(function(e){

                if($(this).val() === 'Ajustar documento'){

                    $("#valrdEncaminhamento").val('Ajustar documento');
                    $(".justificaParecer").slideUp('slow');
                    $("#justificaParecer").val('');
                }

                if($(this).val() === 'Propor Alteracao'){

                    $("#valrdEncaminhamento").val('Propor Alteracao');
                    $(".justificaParecer").slideUp('slow');
                    $("#justificaParecer").val('');
                }

                if($(this).val() === 'Finalizar solicitacao'){

                    $("#valrdEncaminhamento").val('Finalizar solicitacao');
                    $(".justificaParecer").slideDown('slow');
                    // $('.justificaParecer').fadeToggle("slow");
                   
                }
            });

             $("input[name='rdEncaminhamento2']").change(function(e){

                //alert($(this).val());

                if($(this).val() === 'Ajustar documento'){

                    $("#valrdEncaminhamento2").val('Ajustar documento');
                    $(".justificaParecer").slideUp('slow');
                    $("#justificaParecer").val('');
                   
                }

                if($(this).val() === 'Aprovar documento'){

                    $("#valrdEncaminhamento2").val('Aprovar documento');
                    $(".justificaParecer").slideUp('slow');
                    $("#justificaParecer").val('');
                    
                }

                if($(this).val() === 'Finalizar solicitacao'){

                    $("#valrdEncaminhamento2").val('Finalizar solicitacao');
                    $(".justificaParecer").slideDown('slow');
                    // $('.justificaParecer').fadeToggle("slow");
                   
                }
            });


            $("input[name='rdAprova']").change(function(e){

                //alert($(this).val());

                if($(this).val() === 'reprovado'){

                    $(".motivoCancel").removeClass('hide');
                    $("#valrdAprova").val('reprovado');
                   
                }else{

                    $(".motivoCancel").addClass('hide');
                    $("#motivoCancel").val('');
                    $("#valrdAprova").val('aprovado');
                    
                }
            }); 


            // focus em campos 

            $("#documento").focus(function () {
                colorBorder('documento');
            });
            
            $("input[name='docAjustado']").change(function () {
                colorBorder('docAjustado');
            });
           
            $("#descricao").focus(function () {
                colorBorder('descricao');
            });
            
            $("input[name='rdEncaminhamento']").change(function () {
                colorBorder('rdEncaminhamento');
            });

            $("#justificaParecer").focus(function () {
                colorBorder('justificaParecer');
            });

            $("#relacionado").change(function(){
                colorBorder('relacionado');
            });
            
            $("input[name = 'aprovAdicional']").change(function(){
                colorBorder('aprovAdicional');
            });
            
            $("input[name = 'rdEncaminhamento2']").change(function(){
                colorBorder('rdEncaminhamento2');
            });

            $("#motivoCancel").focus(function () {
                colorBorder('motivoCancel');
            });
           

            // fim dos focus em campos

        }                           
};


function setSelectedZoomItem(selectedItem) {     

    console.log(selectedItem);

    
    if(selectedItem.inputName == 'departamento'){
        
        $(".tag-text").css({'max-width': '100%'});
        $("#codDepartamento").val("Pool:Role:"+selectedItem.ROLE_CODE);
        $("#validaPapel").val(selectedItem.ROLE_CODE);

        colorBorder('departamento');
        concatenaAprovador();
       
    }

    $('input[type="text"][id^="codRevisor2___"]').each(function(){
        var contexto = $(this);
        var linha = contexto.attr('id').split('___')[1];
        console.log("---linha--- "+linha);

        if( selectedItem.inputName == "revisorAdicional___"+linha){

            $(".tag-text").css({'max-width': '100%'});
            $("#codRevisor2___"+linha).val("Pool:Role:"+selectedItem.ROLE_CODE);
            
            concatenaAprovador();
        }

    });  
}

// Função para criar linhas na tabela 
function respbtn(){

    wdkAddChild('tabObs');

     var index = $("#indextab").val();

    index++;

    $("#indextab").val(index);

    $("#btnObs").attr("disabled",'disabled');


    var now = new Date();
    // console.log("FRE..." + now.getDay());
    
    var nowDate     = now.getDate();
    var nowMonth = now.getMonth() + 1;
    var nowYear     = now.getFullYear();
    
    if(nowMonth < 10){
        nowMonth = "0"+nowMonth;
    }
    
    if(nowDate < 10){
        nowDate = "0"+nowDate;
    }

    var hora = now.getHours().toString();
    var minuto = now.getMinutes().toString();
    
    if(hora.length == 1){
        hora = 0+hora;
    }

    if(minuto.length == 1){
        minuto = 0+minuto;
    }

  //  var dataHora = date+"/"+mes+"/"+fullDate.getFullYear() +" "+hora+ ":"+minuto;

    //console.log("--- index :"+ index);
    $("#tab_data___"+index).val(nowDate+"/"+nowMonth+"/"+nowYear+" "+hora+":"+minuto);
    $("#tab_autor___"+index).val($("#userAtivo").val());
    
    //console.log("#### validaData - Dia: "+ nowDate + " Mês: "+nowMonth + " Ano: "+nowYear);

}

function respbtn2(){

    wdkAddChild('tabResp');

     var index = $("#indextabResp").val();

    index++;

    $("#indextabResp").val(index);

}
function fnCustomDelete(oElement){

    // Chamada a funcao padrao, NAO RETIRAR
    console.log("fnCustomDelete");
    concatenaAprovador();
    console.log(oElement);
    fnWdkRemoveChild(oElement);

}

function concatenaAprovador(){

    var arr = [] ;

    console.log("--- concatenaAprovador() ---");

    $('input[id^="codRevisor2___"]').each(function(x){
        var context = $(this);
        var linha = context.attr('id').split("___")[1];

        console.log("--- linha : "+ linha);
        console.log("codRevisor2 : " + $("#codRevisor2___" + linha).val());
        
        arr.push($("#codRevisor2___" + linha).val());  

        var contador = arr.length;

    });
    arr.push($("#codDepartamento").val());

    $("#arrayAprovador").val(arr);
    $("#proxAprovador").val(arr[0]);

    console.log("arr");
    console.log(arr);

}

function verificaAnexo(){

    var numProces = $('#WKNumProces').val();
    
    console.log("### Constraint numProces: "+numProces);

     
     var c1 = DatasetFactory.createConstraint("processAttachmentPK.processInstanceId", numProces, numProces, ConstraintType.MUST);

     console.log("***** C1: "+c1);
     var dataset= DatasetFactory.getDataset("processAttachment", null, [c1], null);
     
     console.log("**** datasetPapeles.rowsCount: "+dataset.values.length);

     var qtd = dataset.values.length - 1;
       
     console.log(" qtd : " + qtd);

     $("#qtdAnexo").val(qtd);
     /*  
     if(dataset.values.length > 0 ){
        
         console.log("Dentro do 1º IF");
         
         for(var i = 1; i < dataset.values.length; i++) {
             
             console.log("Dentro do 1º FOR");
             var numProcesso = dataset.values[i]["processAttachmentPK.processInstanceId"];
             var codigo = dataset.values[i]["documentId"];
             
             console.log("### Codigo: "+codigo);
             
             var d1 = DatasetFactory.createConstraint("documentPK.documentId", codigo, codigo, ConstraintType.MUST);
                
            console.log("#### D1: "+d1);
            
            var dataset2 = DatasetFactory.getDataset("document", null, [d1], null);
            
            console.log("##### dataset2.rowsCount: "+ dataset2.values.length);

            $("#qtdAnexo").val(dataset2.values.length);

            
            if(dataset2.values.length > 0 ){
                console.log("### dentro do 2º IF");
                
                for( var x = 0; x < dataset2.values.length; x++){
                    console.log("Dentro do 2º FOR");
                    
                    
                     var descripcion = dataset2.values[x]["documentDescription"];
                     console.log("### description: "+descripcion );
                     //newDataset.addRow([numProcesso, codigo, descripcion]);
                }
                
            } 
              
         }
     } */ 
}

function validaGrupo(){

    var codSolic = $("#codSolicitante").val();
    var codGrupo = "BPM-002-Qualidade";

    var c1 = DatasetFactory.createConstraint("colleagueGroupPK.groupId", codGrupo, codGrupo, ConstraintType.MUST);

    var dataset = DatasetFactory.getDataset("colleagueGroup", null, [c1], null);

    console.log(" -- Dataset length: "+ dataset.values.length);

    for(var i=0;i < dataset.values.length;i++){

        if( dataset.values[i]["colleagueGroupPK.colleagueId"] == codSolic){
            console.log("--- Usuário participa do grupo-- ");
            $(".docAjustado").removeClass("hide");
            $("input[name='docAjustado']").removeAttr("checked");
            $("#analistaQualidade2").val($("#codUserAtivo").val());
        }
    }
}

function colorBorder(campo) {
    //reloadCSS();
    $('.' + campo).css("color", "");
    $('#' + campo).css("border-color", "");
}
