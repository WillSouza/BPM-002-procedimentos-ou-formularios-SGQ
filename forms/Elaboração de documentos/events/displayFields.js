function displayFields(form, customHTML) {
	
	var activity = getValue('WKNumState');
	

	
		if (activity == 4 || activity == 0) {
            // Exemplo de  Função que retorna os dados consultados do dataset "colleague"
            var colaborador = consult_dataset();
            // Exemplo de função que retorna os dados da API do fluig
            var api = consult_API();
            
            form.setValue("solicitante",api.fullName); // Método que carrega no campo input o objeto "nome" carregado pela API do Fluig		
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
	 customHTML.append(" isMobile: " + (form.getMobile() != null && form.getMobile())+",");
	 customHTML.append("});");
	 customHTML.append("}</script>");   
}
		