Feature: Consulta de guía creada


@consulta
Scenario: Validar que los datos ingresados se reflejan al consultar la guía
  Given que el usuario creo una guía con datos válidos previamente 
  When el usuario busque la guia por medio del codigo
  Then el usuario podra ver toda la informacion de su guia