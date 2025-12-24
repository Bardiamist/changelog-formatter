const {
  exec,
} = require('child_process');

const input = `
@amplitude/analytics-react-native ----------- ◉ 1.5.16 ------- ◯ 1.5.31
@legendapp/list ----------------------------- ◉ 2.0.18 ------- ◯ 2.0.19
@shopify/react-native-skia ------------------ ◉ 2.4.7 -------- ◯ 2.4.14
libphonenumber-js --------------------------- ◉ 1.12.31 ------ ◯ 1.12.33
react-native-gesture-handler ---------------- ◉ 2.29.1 ------- ◯ 2.30.0
`;

const formatted = input.trim().split('\n').map(line => {
  // return line.replace(/(.+?)\s+.*?\s+([\d.]+)\s+.*?\s+\^?([\d.]+)/, '$1` from `$2 to `$3')
  return line.replace(/(.+?)\s+.*?\s+([\d.]+)\s+.*?\s+\^?([\d.]+)/, '$1 from $2 to $3')
}).join('\n');

console.log(formatted);

exec(`echo "${formatted}" | pbcopy`, (exception) => {
  if (exception != null) {
    console.error(exception);
  } else {
    console.log('\n✓ Copied to clipboard');
  }
});
