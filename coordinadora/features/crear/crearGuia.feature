Feature: Creación de guía con servicio de Recaudo Contra Entrega
  Como usuario del sistema de envíos
  Quiero poder crear una guía con el servicio de "Recaudo Contra Entrega"
  Para que el destinatario pague un valor acordado al momento de la entrega

  @validacion
  Scenario Outline: Crear guía con diferentes combinaciones de datos
    Given que el usuario selecciona el servicio Recaudo Contra Entrega
    And ingresa "<referencia>" como referencia de recaudo
    And ingresa <valor> como valor a recaudar
    When hace clic en Crear guía
    Then el sistema debe responder con error "<isError>" 
    
    Examples:
      | referencia                         | valor       | isError                                                 |
      | REF123456                          | 150000      | false       |
      |                                    | 50000       | true        |
      | REFERENCIA_MUY_LARGA_QUE_EXCEDE_30 | 50000       | true        | 
      | REF1234567                         | 0           | true        |
      | REF23456                           | 1           | false       |
      | REF12345                           | 16000001    | true        |
      | REF12345678                        | 16000000    | false       |
      | PÉD#456-2024@ Ñ!                   | 500000      | false       |
      | RefA1                              | 250000      | false       |


 