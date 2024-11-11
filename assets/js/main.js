/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });

  document.getElementById('carbonFootprintForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores de entrada
    const electricity = parseFloat(document.getElementById('electricity').value);
    const gas = parseFloat(document.getElementById('gas').value);
    const miles = parseFloat(document.getElementById('miles').value);
    const flights = parseFloat(document.getElementById('flights').value);
    const meat = parseFloat(document.getElementById('meat').value);
    const dairy = parseFloat(document.getElementById('dairy').value);
 const waste = parseFloat(document.getElementById('waste').value);
    const water = parseFloat(document.getElementById('water').value);
    const publicTransport = parseFloat(document.getElementById('publicTransport').value);
    const recycling = parseFloat(document.getElementById('recycling').value);

    // Calcular huella de carbono
    const carbonFromElectricity = electricity * 0.0005; // kg CO2 por kWh
    const carbonFromGas = gas * 2.75; // kg CO2 por m³ de gas
    const carbonFromMiles = miles * 0.404; // kg CO2 por milla
    const carbonFromFlights = flights * 0.25; // kg CO2 por vuelo nacional
    const carbonFromMeat = meat * 7.2; // kg CO2 por kg de carne
    const carbonFromDairy = dairy * 1.5; // kg CO2 por kg de lácteos
    const carbonFromWaste = waste * 0.5; // kg CO2 por kg de residuos
    const carbonFromWater = water * 0.001; // kg CO2 por litro de agua
    const carbonFromPublicTransport = publicTransport * 0.1; // kg CO2 por día de transporte público
    const carbonReductionFromRecycling = recycling * 0.2; // kg CO2 reducidos por % de reciclaje

    const totalCarbonFootprint = carbonFromElectricity + carbonFromGas + carbonFromMiles + carbonFromFlights +
                                  carbonFromMeat + carbonFromDairy + carbonFromWaste + carbonFromWater +
                                  carbonFromPublicTransport - carbonReductionFromRecycling;

    // Mostrar resultado
    document.getElementById('result').innerText = `Tu huella de carbono es: ${totalCarbonFootprint.toFixed(2)} kg CO2`;

    // Mostrar tip basado en el resultado
    let tip = '';
    if (totalCarbonFootprint < 50) {
        tip = '¡Excelente trabajo! Tu huella de carbono es muy baja. Sigue así y considera compartir tus hábitos sostenibles.';
    } else if (totalCarbonFootprint < 100) {
        tip = 'Buena labor, pero hay espacio para mejorar. Considera reducir el uso de carne y aumentar el reciclaje.';
    } else if (totalCarbonFootprint < 200) {
        tip = 'Tu huella de carbono es moderada. Intenta usar más transporte público y reducir el consumo de energía.';
    } else {
        tip = 'Tu huella de carbono es alta. Te recomendamos revisar tus hábitos de consumo y considerar opciones más sostenibles.';
    }

    document.getElementById('tip').innerText = tip;
});

document.getElementById('energyForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener valores de entrada
  const electricitySource = document.getElementById('electricitySource').value;
  const transportation = document.getElementById('transportation').value;
  const heating = document.getElementById('heating').value;
  const appliances = document.getElementById('appliances').value;

  // Inicializar el consejo
  let tips = [];
  let cal =0;

  // Evaluar respuestas y proporcionar consejos
  if (electricitySource === 'fossil') {
      tips.push('Considera cambiar a un proveedor de energía que ofrezca opciones renovables, como la energía solar o eólica.');
      
  } else if (electricitySource === 'nuclear') {
      tips.push('Aunque la energía nuclear es baja en emisiones, considera complementar con energías renovables para un futuro más sostenible.');
      cal = cal + 0.5;
    } else {
      cal = cal + 1;
      tips.push('¡Excelente elección! Sigue utilizando energías renovables y considera instalar paneles solares si es posible.');
  }

  if (transportation === 'car') {
      tips.push('Intenta usar más el transporte público, la bicicleta o caminar para reducir tu huella de carbono.');
  } else if (transportation === 'public') {
      cal = cal + 0.5;
      tips.push(' El transporte público es una excelente manera de reducir el uso de combustibles fósiles.');
  } else if (transportation === 'bike') {
      cal = cal + 0.8;
      tips.push(' Usar la bicicleta no solo reduce emisiones, sino que también es saludable.');
  } else {
      cal = cal + 1;
      tips.push(' Si no usas transporte, considera compartir tus hábitos con amigos y familiares para inspirarlos.');
  }

  if (heating === 'fossil') {

      tips.push(' Explora opciones de calefacción renovable, como bombas de calor geotérmicas o sistemas de biomasa.');
  } else if (heating === 'electric') {
    cal = cal + 0.5;
      tips.push(' Asegúrate de que tu proveedor de electricidad ofrezca opciones renovables para minimizar el impacto ambiental.');
  } else {
     cal = cal + 1;
      tips.push('La calefacción renovable es una gran manera de reducir emisiones.');
  }

  if (appliances === 'old') {

      tips.push(' Cambia a electrodomésticos más eficientes (etiqueta A o superior) para reducir el consumo de energía y ahorrar en la factura.');
  } else if (appliances === 'standard') {
    cal = cal + 0.5;
      tips.push(' Considera actualizar a electrodomésticos más eficientes para mejorar tu eficiencia energética.');
  } else {
    cal = cal + 1;
      tips.push(' Usar electrodomésticos eficientes ayuda a reducir el consumo de energía.');
  }

  if (cal<2){
    document.getElementById('cal').innerText = `Tu calificación es: ${cal},\n Debes de mejorar tus hábitos de consumo de energía`;
  } else if (cal<3){
    document.getElementById('cal').innerText = `Tu calificación es: ${cal},\n Tienes buenos hábitos de consumo de energía, pero aún te falta`;
  } else if (cal==0){
    document.getElementById('cal').innerText = `Tu calificación es: ${cal}, \n Debes de solucionar tus hábitos de consumo de energía`;
  }
  else{
    document.getElementById('cal').innerText = `Tu calificación es: ${cal}. \n Tienes excelentes hábitos de consumo de energía`;
  }

  // Mostrar el consejo
  document.getElementById('result_energy').innerText = tips.join('');
  
});