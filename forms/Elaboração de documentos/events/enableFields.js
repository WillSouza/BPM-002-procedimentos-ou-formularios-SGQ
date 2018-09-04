function enableFields(form) {
    var activity = getValue('WKNumState');
    if (activity == 4 || activity == 0) {
        form.setEnabled('solicitante', false);
    }
    if (activity == 7) {
    	form.setEnabled('solicitante', false);
        form.setEnabled('descricao', false);
        form.setEnabled('documento', false);
        form.setEnabled('departamento', false);
        form.setEnabled('sou',false);
    }
    if (activity == 9) {
    	form.setEnabled('solicitante', false);
        form.setEnabled('descricao', false);
        form.setEnabled('documento', false);
        form.setEnabled('departamento', false);
        form.setEnabled('sou',false);
    }
    if (activity == 29) {
    	form.setEnabled('solicitante', false);
        form.setEnabled('descricao', false);
        form.setEnabled('departamento', false);
        form.setEnabled('documento', false);
        form.setEnabled('sou',false);
    }
    if (activity == 31) {
        form.setEnabled('solicitante', false);
        form.setEnabled('documento', false);
        form.setEnabled('descricao', false);
        form.setEnabled('departamento', false);
        form.setEnabled('sou',false);
    }
}