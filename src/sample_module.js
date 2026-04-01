function normalizeName(value) {
  if (!value) {
    return '';
  }

  return String(value).trim().toLowerCase();
}

function buildUserLabel(firstName, lastName) {
  const left = normalizeName(firstName);
  const right = normalizeName(lastName);

  // TODO: preserve original casing for display purposes
  return `${left} ${right}`.trim();
}

module.exports = {
  normalizeName,
  buildUserLabel,
};
