export function getData() {
  const agora = new Date();
  const dia = String(agora.getDate()).padStart(2, "0");
  const mes = String(agora.getMonth() + 1).padStart(2, "0");
  const ano = agora.getFullYear();
  const horas = String(agora.getHours()).padStart(2, "0");
  const minutos = String(agora.getMinutes()).padStart(2, "0");

  return `${dia}-${mes}-${ano}-${horas}:${minutos}`;
}

export function parseDateToTimestamp(dateStr) {
  if (!dateStr) return null;
  const [day, month, year] = dateStr.split("/");
  const isoString = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  return new Date(isoString);
}

export function formatDateToDDMMYYYY(date) {
  if (!date) return "";
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}
