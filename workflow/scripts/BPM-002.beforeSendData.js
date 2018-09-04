function beforeSendData(customField, customFact) {

    customField[0] = hAPI.getCardValue("solicitante");

    customField[1] = hAPI.getCardValue("departamento");

    customField[2] = hAPI.getCardValue("documento");

    customField[3] = hAPI.getCardValue("sou");
}
