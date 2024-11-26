function toggleMenu() {
    const menu = document.getElementById('menu');
    document.getElementById('inicio').innerHTML = "Inicio";
    document.getElementById('plan').innerHTML = "Plan a Futuro";
    document.getElementById('calculadora').innerHTML = "Calculadora de CO₂";
    document.getElementById('faq').innerHTML = "Preguntas Frecuentes";
    document.getElementById('quiz').innerHTML = "Quiz";
    menu.classList.toggle('active');
  }

