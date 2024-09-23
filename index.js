const input = `

`;

const formatted = input.trim().split('\n').map(line => {
  return line.replace(/(.+?)\s+.*?\s+([\d.]+)\s+.*?\s+([\d.]+)/, '$1 from $2 to $3')
}).join('\n');

console.log(formatted);
