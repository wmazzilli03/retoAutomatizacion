import { APIRequestContext } from '@playwright/test';
import { apiConfig } from '../config/apiConfig';


export class apiGetConsultarGuia{
  private responseData: any; 
  private JsonResponse:any
  private response:any;

  constructor(private request: APIRequestContext) {

  } 

async getConsultarGuia(idGuia?:string){ 
    const url = idGuia ? `${apiConfig.baseUrl}${apiConfig.endpoints.getConsultaGuia}${idGuia}`: `${apiConfig.baseUrl}${apiConfig.endpoints.getConsultaGuia}`; 
      this.response  =  await this.request.get(url)
      this.responseData = await this.response.json(); 
      this.JsonResponse = JSON.stringify(this.responseData, null, 2);
      return this.response; 
  }

  getResponseData(): any {
    return this.JsonResponse; 
  }

  getErrorMessage(): string | undefined {
    if(this.responseData?.message){
    console.log("Mensaje: ",this.responseData?.message);  
    }
    return this.responseData?.message;
  }

  getStatusCode(): number | undefined {
    console.log("Status: ",this.response?.status()); 
    return this.response?.status(); 
  }
} 


