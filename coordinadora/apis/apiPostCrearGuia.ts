import { APIRequestContext , expect} from '@playwright/test';
import { apiConfig } from '../config/apiConfig';
import { CrearGuiaRequestBody } from  '../interfaz/crearGuiaRequesBody';
import  payloadCrearGuia from  '../data/payloadCrearGuia.json';


export class apiPostCrearGuia{ 

private body:CrearGuiaRequestBody;
private responseData: any; 

constructor(private request: APIRequestContext) {
    this.body = payloadCrearGuia; 
} 

setValorRecaudar(valorRecaudar: number) {
    this.body.valorRecaudar = valorRecaudar;
}

setReferenciaRecaudo(referenciaRecaudo: string) {
    this.body.referenciaRecaudo = referenciaRecaudo;
}

async postCrearGuia(){ 
     const response=  await this.request.post(`${apiConfig.baseUrl}${apiConfig.endpoints.postCrearGuia}`, {
      data: this.body
    });
    this.responseData = await response.json(); 
    return response;
  }

  getResponseData(): any {
    return this.responseData;
  }

  getCodigoRemision(): string | undefined {
    return this.responseData?.data?.codigo_remision;
  }

  getErrorMessage(): string | undefined {
    return this.responseData?.message;
  }

  getStatusCode(): number | undefined {
    return this.responseData?.statusCode;
  }

  validacionIsError(isErrorFeature: boolean) { 
    const isError = this.responseData?.isError
    if(this.responseData?.statusCode == 400 && isError == true ){
    expect(isError).toBe(isErrorFeature);  
    }
    if(this.responseData?.statusCode == 500 && isError == true ){
     console.log("La API no esta funcionando correctamente");   
    expect(isError).toBe(isErrorFeature);  
    }
    if(isError == false ){
    expect(isError).toBe(isErrorFeature);  
    }

}

  
}


