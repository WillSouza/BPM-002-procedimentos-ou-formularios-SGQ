function validateForm(form) {
    var activity = getValue('WKNumState');
    if ((form.getValue("solicitante") == null || form.getValue("solicitante") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        throw "Requisitante n\u00E3o pode ser vazio.";
    }
    if ((form.getValue("documento") == null || form.getValue("documento") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        throw "Nome do documento n\u00E3o pode ser vazio.";
    }
    if ((form.getValue("descricao") == null || form.getValue("descricao") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        throw "Descri\u00E7\u00E3o da solicita\u00E7\u00E3o n\u00E3o pode ser vazio.";
    }
    if ((form.getValue("departamento") == null || form.getValue("departamento") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        throw "Departamento respons\u00E1vel pelo documento n\u00E3o pode ser vazio.";
    }
    if ((form.getValue("sou") == null || form.getValue("sou") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
        throw "Sou o aprovador deste documento? n\u00E3o pode ser vazio.";
    }
    if (activity == 4 || activity == 0) {
        if ((form.getValue("departamento") == 'Selecione o departamento responsável')) {
            throw "Selecione o departamento respons\u00E1vel";
        }
    }
}