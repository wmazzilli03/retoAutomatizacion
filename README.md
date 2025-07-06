# retoAutomatizacion
# Reto de automatizacion utilizando Playrwight con ts + cucumber

# antes de ejecutar la prueba debes en cmd ejecutar npm install, para descargar las dependencias

# ejecucion de los escenarios
# npx cucumber-js --config config/cucumber.js --tags "@consulta" 
# npx cucumber-js --config config/cucumber.js --tags "@crearGuia"


# abrir reporte con allure 
# npx allure generate allure-results --clean -o allure-report
# npx allure open allure-report

# si quieren ver el reporte en html solo ejecutar
# node generateReport.js 

# o uilizar unos comendos cortos
# npm run clean:allure
# npm run test:consulta
# npm run test:crearGuia
# npm run report:html
# npm run report:allure 