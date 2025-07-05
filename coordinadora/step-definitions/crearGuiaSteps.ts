import { Given, When, Then } from '@cucumber/cucumber';
import { request, expect, APIRequestContext } from '@playwright/test';
import {apiPostCrearGuia} from '../apis/apiPostCrearGuia'; 


let api: APIRequestContext;
let postGuia:apiPostCrearGuia;


Given('que el usuario selecciona el servicio Recaudo Contra Entrega', async function () {
    api = await request.newContext();
    postGuia = new apiPostCrearGuia(api);
});


Given('ingresa {string} como referencia de recaudo', async function (string) {
    postGuia.setReferenciaRecaudo(string);
});


Given('ingresa {int} como valor a recaudar', async function (valor: number ) {
    postGuia.setValorRecaudar(valor);
});

 
When('hace clic en Crear guía', async function () {
    await postGuia.postCrearGuia();
});

Then('el sistema debe responder con error {string}', async function (isErrorEsperado:string) {
    const esperado = isErrorEsperado.toLowerCase() === 'true';
    postGuia.validacionIsError(esperado);  
});




