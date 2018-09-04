function beforeTaskSave(colleagueId,nextSequenceId,userList){

	var WKNextState = getValue("WKNextState");
    var WKNumState = getValue("WKNumState");
    
    log.info("#### BEFORETASK COMPLETE ###");

    log.info("#### BEFORETASK WKNumState : " +WKNumState);
    log.info("#### BEFORETASK WKNextState : "+ WKNextState);

     if (WKNumState == 103){
    	
    	 var anexos   = hAPI.listAttachments();
         var temAnexo = false;

         if (anexos.size() > 0) {
             temAnexo = true;
         }

         if (!temAnexo) {
             throw "É preciso anexar o documento para continuar o processo!";
         }
    }

  	if (WKNumState == 106 && WKNextState == 9){

  		var userAtivo	= hAPI.getCardValue('userAtivo');

  		var index = hAPI.getCardValue("indextab");

	    index++;

	    hAPI.setCardValue('indextab',index);
	    
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

	    log.info("--- index :"+ index);
	    var data = (nowDate+"/"+nowMonth+"/"+nowYear+" "+hora+":"+minuto);
	    
	    log.info("#### validaData - Dia: "+ nowDate + " Mês: "+nowMonth + " Ano: "+nowYear);


		var childData = new java.util.HashMap();
		childData.put("tab_obs", "Motivo da reprovação:  "+hAPI.getCardValue('motivoCancel'));
	    childData.put("tab_autor", userAtivo);
	    childData.put("tab_data", data);
	    hAPI.addCardChild("tabObs", childData);

  	}

  	if (WKNumState == 23 && WKNextState == 119){

  		var userAtivo	= hAPI.getCardValue('userAtivo');

  		var index = hAPI.getCardValue("indextab");

	    index++;

	    hAPI.setCardValue('indextab',index);
	    
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

	    log.info("--- index :"+ index);
	    var data = (nowDate+"/"+nowMonth+"/"+nowYear+" "+hora+":"+minuto);
	    
	    log.info("#### validaData - Dia: "+ nowDate + " Mês: "+nowMonth + " Ano: "+nowYear);


		var childData = new java.util.HashMap();
		childData.put("tab_obs", "Parecer para finalização:  "+hAPI.getCardValue('justificaParecer'));
	    childData.put("tab_autor", userAtivo);
	    childData.put("tab_data", data);
	    hAPI.addCardChild("tabObs", childData);
  	}

  	if (WKNumState == 103) {

    	var numProces = hAPI.getCardValue('WKNumProces');

		log.info("### Constraint numProces: "+numProces);

	 
	 	var c1 = DatasetFactory.createConstraint("processAttachmentPK.processInstanceId", numProces, numProces, ConstraintType.MUST);

	 	log.info("***** C1: "+c1);
		 var dataset= DatasetFactory.getDataset("processAttachment", null, [c1], null);

	 	var qtdAnexo = hAPI.getCardValue('qtdAnexo');
	   	var rows = dataset.rowsCount -1;
	 	
	 	log.info("**** qtdLinhas: "+dataset.rowsCount);
	 	log.info("**** rows: "+rows);
	 	log.info("**** anexo: "+qtdAnexo);



	   	if(rows <= qtdAnexo ){

	   		throw "Necessário inserir um anexo.";
	   	}	

    }// fim if
  	

  	/*
  	if(WKNumState == 29){


  		log.info("### beforeTaskSave WKNumState : "+WKNumState);

  		log.info('>>> indices Inicio ');
		var indices = getChildrenIndexes('nomeAprovador');

		log.info('>>> indices : '+ indices.length);

  		var userAtivo 		= hAPI.getCardValue('userAtivo');
  		var indexLooping 	= hAPI.getCardValue('indexLooping');

  		var arrayAprovador = hAPI.getCardValue('arrayAprovador');
  		var codPapel =  arrayAprovador.split(","); 


  		if(  indexLooping < indices.length){

	  		hAPI.setCardValue('nomeAprovador___'+indices[indexLooping], userAtivo);

	  		log.info("### hAPI.getCardValue('nomeAprovador___"+indexLooping+" : "+hAPI.getCardValue('nomeAprovador___'+indices[indexLooping]));

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

		   // log.info("--- index :"+ index);
		    var data = (nowDate+"/"+nowMonth+"/"+nowYear+" "+hora+":"+minuto);
		    
		    log.info("#### validaData - Dia: "+ nowDate + " Mês: "+nowMonth + " Ano: "+nowYear);

		    hAPI.setCardValue('dataAprovacao___'+indices[indexLooping], data);

		    log.info("### hAPI.getCardValue('dataAprovacao___"+indexLooping+" : "+hAPI.getCardValue('dataAprovacao___'+indices[indexLooping]));
		}
  	}*/
}

