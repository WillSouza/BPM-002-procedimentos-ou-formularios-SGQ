function beforeTaskComplete(colleagueId,nextSequenceId,userList){
	
	var WKNextState = getValue("WKNextState");
    var WKNumState = getValue("WKNumState");

    log.info("#### beforeTaskComplete ###");

    if(WKNumState == 29 || WKNumState == 100){

    	log.info("Dentro do if tarefa 29");
    	var cont = hAPI.getCardValue('indexLooping');
    	var arrayAprovador = hAPI.getCardValue('arrayAprovador');
    	var proxAprovador = hAPI.getCardValue('proxAprovador');
    	var codPapel =  arrayAprovador.split(","); 

    	log.info("### BEFORE indexLooping : "+ cont);
    	log.info("### BEFORE arrayAprovador : "+ arrayAprovador);
    	log.info("### BEFORE proxAprovador : "+ codPapel[cont]);
    	log.info("### BEFORE Tamanho Array : "+ codPapel.length);


    	cont++;

    	if(  cont < codPapel.length){

    		log.info("#### dentro do if ####");
	    	
	    	hAPI.setCardValue('proxAprovador',codPapel[cont]);
	    }	

	    hAPI.setCardValue('indexLooping',cont);

	    log.info("*** AFTER hAPI indexLooping : "+ hAPI.getCardValue('indexLooping'));
    	log.info("*** AFTER arrayAprovador : "+ arrayAprovador);
    	log.info("*** AFTER hAPI proxAprovador : "+ hAPI.getCardValue('proxAprovador'));
    	log.info("*** AFTER Tamanho Array : "+ codPapel.length);
    }	

}