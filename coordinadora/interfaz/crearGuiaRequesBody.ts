export interface CrearGuiaRequestBody {
  identificacion: string;
  divisionCliente: string;
  idProceso: number;
  codigoPais: number;
  valoracion: string;
  tipoCuenta: number;
  contenido: string;
  codigoProducto: number;
  nivelServicio: number;
  detalle: DetalleEnvio[];
  datosRemitente: DatosRemitente;
  datosDestinatario: DatosDestinatario;
  valorRecaudar: number | undefined;
  referenciaRecaudo: string;
  tipoGuia: number;
  referenciaGuia: string;
  usuario: string;
  fuente: string;
  observaciones: string;
}

export interface DetalleEnvio {
  pesoReal: number;
  largo: number;
  ancho: number;
  alto: number;
  unidades: number;
  ubl: number;
  referencia: string;
}
 
export interface DatosRemitente {
  detalleRemitente: string;
  tipoViaRemitente: string;
  viaRemitente: string;
  numeroRemitente: string;
  codigoCiudadRemitente: string;
  descripcionTipoViaRemitente: string;
  direccionRemitente: string;
  nombreRemitente: string;
  indicativoRemitente: string;
  celularRemitente: string;
  correoRemitente: string;
}

export interface DatosDestinatario {
  detalleDestinatario: string;
  tipoViaDestinatario: string;
  viaDestinatario: string;
  numeroDestinatario: string;
  descripcionTipoViaDestinatario: string;
  direccionDestinatario: string;
  codigoCiudadDestinatario: string;
  nombreDestinatario: string;
  indicativoDestinatario: string;
  celularDestinatario: string;
  correoDestinatario: string;
}

