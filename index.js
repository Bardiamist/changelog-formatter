const input = `
@react-navigation/bottom-tabs --------------- ◉ 7.5.0 -------- ◯ 7.7.1
@react-navigation/elements ------------------ ◉ 2.7.0 -------- ◯ 2.8.0
@react-navigation/material-top-tabs --------- ◉ 7.3.9 -------- ◯ 7.4.1
@react-navigation/native -------------------- ◉ 7.1.18 ------- ◯ 7.1.19
@react-navigation/stack --------------------- ◉ 7.5.0 -------- ◯ 7.6.1
@shopify/flash-list ------------------------- ◉ 2.1.0 -------- ◯ 2.2.0
@shopify/react-native-skia ------------------ ◉ 2.3.6 -------- ◯ 2.3.7
expo ---------------------------------------- ◉ 54.0.20 ------ ◯ 54.0.21
libphonenumber-js --------------------------- ◉ 1.12.24 ------ ◯ 1.12.25
react-native-localize ----------------------- ◉ 3.5.4 -------- ◯ 3.6.0
react-native-nitro-modules ------------------ ◉ 0.31.1 ------- ◯ 0.31.3
react-native-qrcode-svg --------------------- ◉ 6.3.15 ------- ◯ 6.3.16
react-native-safe-area-context -------------- ◉ 5.6.1 -------- ◯ 5.6.2
`;

const formatted = input.trim().split('\n').map(line => {
  // return line.replace(/(.+?)\s+.*?\s+([\d.]+)\s+.*?\s+\^?([\d.]+)/, '$1` from `$2 to `$3')
  return line.replace(/(.+?)\s+.*?\s+([\d.]+)\s+.*?\s+\^?([\d.]+)/, '$1 from $2 to $3')
}).join('\n');

console.log(formatted);
