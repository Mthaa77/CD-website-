export function contactError(email: string, phone: string, channel: string): string {
  const address = email.trim();
  let number = phone.trim().replace(/[^\d+]/g, "");
  if (/^0\d{9}$/.test(number)) number = `+27${number.slice(1)}`;
  else if (/^27\d{9}$/.test(number)) number = `+${number}`;
  if (address && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) return "Please enter a valid email address.";
  if (phone.trim() && !/^\+[1-9]\d{7,14}$/.test(number)) return "Please enter a valid phone number. Use a country code for numbers outside South Africa.";
  if (channel === "email" && !address) return "Add an email address so we can reply by email.";
  if (channel !== "email" && !number) return "Add a phone number for your chosen reply channel, or choose Email.";
  return "";
}
