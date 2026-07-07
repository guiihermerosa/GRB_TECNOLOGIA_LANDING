export function isValidEmail(value: string) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
}

export function isValidPhone(value: string) {
  return /^\(?\d{2}\)?\s?9?\d{4}-\d{4}$/.test(value.replace(/\s+/g, ''));
}

export function sanitizeInput(value: string) {
  return value.replace(/[<>]/g, '');
}
