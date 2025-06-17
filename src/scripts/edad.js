document.addEventListener("DOMContentLoaded", () => {
  function calcularSemanas(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const ahora = new Date();
    const diferencia = ahora.getTime() - nacimiento.getTime();
    const semanas = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 7));
    return semanas < 0 ? "Gatito aún no nacido" : `${semanas} semana${semanas !== 1 ? 's' : ''}`;
  }

  document.querySelectorAll('.edad-gatito').forEach(el => {
    const fecha = el.dataset.nacimiento;
    el.textContent = calcularSemanas(fecha);
  });
});
