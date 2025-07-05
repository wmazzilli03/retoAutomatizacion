import { Given, When, Then } from '@cucumber/cucumber';
import { request, expect, APIRequestContext } from '@playwright/test';
import {apiGetConsultarGuia} from '../apis/apiGetConsultarGuia';
import {apiPostCrearGuia} from '../apis/apiPostCrearGuia'; 


let api: APIRequestContext;
let getGuia:apiGetConsultarGuia; 
let postGuia:apiPostCrearGuia;  
let response:any

Given('que el usuario creo una guía con datos válidos previamente', async function () {
    api = await request.newContext();
    postGuia = new apiPostCrearGuia(api);
    postGuia.setValorRecaudar(100000000000000000000000);
    postGuia.setReferenciaRecaudo("REF123456");
    await postGuia.postCrearGuia();
    getGuia = new apiGetConsultarGuia(api);
});

When('el usuario busque la guia por medio del codigo', async function () {
  const idGuia = postGuia.getCodigoRemision();
  // Si la api de Post sirviera remplazara idGuia por el numero del metodo.
  response =  await getGuia.getConsultarGuia("99021593137");
});

Then('el usuario podra ver toda la informacion de su guia', async function () {
  //await console.log("response:", getGuia.getResponseData());
  await getGuia.getStatusCode()
  await getGuia.getErrorMessage()
}); 