function displayFields(form, customHTML) {
	
	eztecForms(form, customHTML); 
	
	var activity = getValue('WKNumState');
	
	var c1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", getValue("WKUser"), getValue("WKUser"), ConstraintType.MUST);
	var constraints = new Array(c1);

	var colaborador = DatasetFactory.getDataset("colleague", null, constraints, null);

	form.setValue('userAtivo',colaborador.getValue(0,"colleagueName"));
	form.setValue('codUserAtivo', colaborador.getValue(0, "colleaguePK.colleagueId"));


	if (form.getValue("dataSolic") == "") {
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
		form.setValue("dataSolic", data);
	}


	if (activity == 4 || activity == 0) {
        // Exemplo de  Função que retorna os dados consultados do dataset "colleague"
        var colaborador = consult_dataset();
        // Exemplo de função que retorna os dados da API do fluig
        var api = consult_API();
        
        form.setValue("solicitante",colaborador.getValue(0,"colleagueName")); // Método que carrega no campo input o objeto "nome" carregado pela API do Fluig	
        form.setValue("codSolicitante",colaborador.getValue(0,"colleaguePK.colleagueId"));	
	}
	
	
	
	
	if (activity == 7) 		{
		customHTML.append('<script>');customHTML.append('$(\'*[name="sou"]\').css(\'display\', \'none\');var closers = $(\'*[name="sou"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="sou"]\').closest(\'.form-field\').css(\'display\', \'none\');}'); customHTML.append('</script>');customHTML.append('<script>');customHTML.append('$(\'*[name="sou"]\').closest("li").hide()');customHTML.append('</script>');
	}
	
	if (activity == 9) {customHTML.append('<script>');customHTML.append('$(\'*[name="sou"]\').css(\'display\', \'none\');var closers = $(\'*[name="sou"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="sou"]\').closest(\'.form-field\').css(\'display\', \'none\');}'); customHTML.append('</script>');customHTML.append('<script>');customHTML.append('$(\'*[name="sou"]\').closest("li").hide()');customHTML.append('</script>');}
	
	if (activity == 11) {customHTML.append('<script>');customHTML.append('$(\'*[name="sou"]\').css(\'display\', \'none\');var closers = $(\'*[name="sou"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="sou"]\').closest(\'.form-field\').css(\'display\', \'none\');}'); customHTML.append('</script>');customHTML.append('<script>');customHTML.append('$(\'*[name="sou"]\').closest("li").hide()');customHTML.append('</script>');}
	
	if (activity == 13) {customHTML.append('<script>');customHTML.append('$(\'*[name="sou"]\').css(\'display\', \'none\');var closers = $(\'*[name="sou"]\').closest(\'.form-field\').find(\'input, textarea, select\');var hideDiv = true;$.each(closers, function(i, close) {if (close.style.display != \'none\') {hideDiv = false;}});if (hideDiv == true) {$(\'*[name="sou"]\').closest(\'.form-field\').css(\'display\', \'none\');}'); customHTML.append('</script>');customHTML.append('<script>');customHTML.append('$(\'*[name="sou"]\').closest("li").hide()');customHTML.append('</script>');}
		
}
function eztecForms(form,customHTML) { 
	 
	 customHTML.append("<script type='text/javascript'>");
	 customHTML.append("if (eztecForms && eztecForms.initForm) {");
	 customHTML.append("eztecForms.initForm({");
	 customHTML.append(" formMode:'" + form.getFormMode()+"',");
	 customHTML.append(" WKNumState:'" + getValue("WKNumState")+"',");
	 customHTML.append(" WKNumProces:'" + getValue("WKNumProces")+"',");
	 customHTML.append(" WKCurrentState:'" + getValue("WKCurrentState")+"',");
	 customHTML.append(" WKUser:'" + getValue("WKUser")+"',");
	 customHTML.append(" isMobile: " + (form.getMobile() != null && form.getMobile())+",");
	 customHTML.append("});");
	 customHTML.append("}</script>");   
}
		