import { Before, After } from '@cucumber/cucumber';

Before(function () {
  console.log('**************************');
  console.log('✅ Hook Before ejecutado');
});

After(function (scenario) {
  console.log('✅ Hook After ejecutado');
  console.log('Resultado:', scenario.result?.status);
  console.log('**************************');
});
