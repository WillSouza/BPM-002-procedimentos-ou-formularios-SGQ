function valida_aprovador(){
	
	var cont = hAPI.getCardValue('indexLooping');
	var arrayAprovador = hAPI.getCardValue('arrayAprovador');
	var proxAprovador = hAPI.getCardValue('proxAprovador');
	var codPapel =  arrayAprovador.split(","); 

	log.info("######## Valida aprovador");
	log.info("***** VERIFICA Contador : " +  cont);
	log.info("***** VERIFICA  hapi cont : " +  hAPI.getCardValue('indexLooping'));
	log.info("***** VERIFICA  hapi tamanho Array : " +  codPapel.length);
	log.info("***** VERIFICA  hapi Array : " +  codPapel[cont]);
	

	log.info("######## antes de entrar no if");
	
	if (codPapel.length == cont) {
		log.info("######## PASSOU NO FALSE");		

		return false;
	} else {
		log.info("######## PASSOU NO TRUE");		
		
		return true ;
	}
	 
}