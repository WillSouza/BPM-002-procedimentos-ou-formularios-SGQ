function afterTaskComplete(colleagueId,nextSequenceId,userList){
	
	log.info("#### Entrou no afterTaskComplete ");

	var WKNumState = getValue("WKNumState");
    var completTask = getValue("WKCompletTask");
    var WKNextState = getValue('WKNextState');
    var WKNumProces = getValue("WKNumProces");

    log.info("##### WKNumState: "+ WKNumState);
    log.info("##### completTask: "+ completTask);
    log.info("##### WKNextState: "+ WKNextState);

    var server = "http://ezconnect.eztec.com.br";	

    if(completTask.equals("true")){

    	log.info("#### Entrou no 1º if ");
    	if(WKNextState == 119){

    		log.info("#### Entrou no 2º if ");

    		try{

    			var param = new java.util.HashMap();
                var dest = new java.util.ArrayList();

                // add remetente
                var remetente = hAPI.getCardValue("userAtivo");
                log.info("#### Remetente: "+ remetente);

                var c1 = DatasetFactory.createConstraint("colleagueName", remetente, remetente, ConstraintType.MUST);

				var dataset =DatasetFactory.getDataset('colleague',null,[c1],null);

				log.info("### dataset.rowsCount: "+dataset.rowsCount);
				log.info("### dataset: "+dataset);

				if(dataset.rowsCount > 0){

					for(var x =0; x < dataset.rowsCount; x++){

						var codRemetente = dataset.getValue(x, "colleaguePK.colleagueId");

						log.info("### codRemetente: "+ codRemetente);
					}	
				}

				// Add destinatários

				var solicitante = hAPI.getCardValue("solicitante");

				var c2 = DatasetFactory.createConstraint("colleagueName", solicitante, solicitante, ConstraintType.MUST);

				var dataset2 =DatasetFactory.getDataset('colleague',null,[c2],null);

				log.info("### dataset2.rowsCount: "+dataset2.rowsCount);

				if(dataset2.rowsCount > 0){

					for(var y =0; y < dataset2.rowsCount; y++){

						var emailDest = dataset2.getValue(y, "mail");

						log.info("### emailDest: "+ emailDest);

						dest.add(emailDest);
					}	
				}				

				var grupo = "BPM-002-Adm";

				var cGrupo = DatasetFactory.createConstraint("colleagueGroupPK.groupId", grupo, grupo, ConstraintType.MUST);

                var dataset3= DatasetFactory.getDataset("colleagueGroup", null, [cGrupo], null);

                log.info("### dataset3.rowsCount: "+dataset3.rowsCount);

                if(dataset3.rowsCount > 0 ){
                    for(var z =0; z < dataset3.rowsCount; z++){

                        var codGrupo = dataset3.getValue(z, "colleagueGroupPK.colleagueId");

                        var d1 = DatasetFactory.createConstraint('colleaguePK.colleagueId', codGrupo, codGrupo, ConstraintType.MUST);

                        var dataset4 = DatasetFactory.getDataset("colleague", null, [d1], null);

                         log.info("### dataset4.rowsCount: "+dataset4.rowsCount);

                        if(dataset4.rowsCount > 0){

                            for(var i = 0; i < dataset4.rowsCount; i++){

                                emailDest = dataset4.getValue(i, "mail");

                               
                                log.info("### emaildest: " + emailDest);
                                dest.add(emailDest);
                               
                            }
                        }

                    }
                }    

                //
                var fullDate = new Date();
                var date = fullDate.getDate().toString();
            
                if(date.length == 1){
                    date = 0+date;
                }
                var mes = (fullDate.getMonth()+1).toString();
            
                if(mes.length == 1){
                    mes = 0+mes;
                }
                
                var data = date+"/"+mes+"/"+fullDate.getFullYear();
               

                param.put("subject","Solicitação finalizada - Solicitação "+ hAPI.getCardValue('WKNumProces'));
                param.put("SERVER_URL", server);
                param.put("TENANT_ID", getValue("WKCompany"));
                param.put("solicitacao",  hAPI.getCardValue('WKNumProces'));
                param.put("justificativa", hAPI.getCardValue("justificaParecer"));  
                param.put("nomDocumento", hAPI.getCardValue("documento"));
                param.put("dataSolic", hAPI.getCardValue("dataSolic"));
                param.put("dataFinalizacao", data);


                 if (dest.size() > 0){
                    log.info("*** notifier.notify");
                    notifier.notify(codRemetente, "BPM-002-JustificaFinal", param, dest, "text/html");    
                }       

    		} catch (e) {
                log.error(">>>>> Erro Envio de email de customizado: " + e);
            }
    	}
    }	

}