console.log("=== 1. Neuveröffentlichungen ===");
console.log("querySelector:", document.querySelectorAll('ul.games:nth-of-type(1) li'));
console.log("getBy...:", document.getElementsByClassName('games')[0].getElementsByTagName('li'));

console.log("\n=== 2. Zweites Spiel bei Bestseller ===");
console.log("querySelector:", document.querySelector('ul.games:nth-of-type(2) li:nth-child(2)'));
console.log("getBy...:", document.getElementsByClassName('games')[1].getElementsByTagName('li')[1]);

console.log("\n=== 3. Letztes Spiel bei Kostenlos spielen ===");
console.log("querySelector:", document.querySelector('ul.games:nth-of-type(3) li:last-child'));
const freeGames = document.getElementsByClassName('games')[2].getElementsByTagName('li');
console.log("getBy...:", freeGames[freeGames.length - 1]);

console.log("\n=== 4. Alle Listenelemente bei Bestseller ===");
console.log("querySelector:", document.querySelectorAll('ul.games:nth-of-type(2) li'));
console.log("getBy...:", document.getElementsByClassName('games')[1].getElementsByTagName('li'));

console.log("\n=== 5. Das h1-Element ===");
console.log("querySelector:", document.querySelector('h1'));
console.log("getBy...:", document.getElementsByTagName('h1')[0]);

console.log("\n=== 6. Das game-of-the-day ===");
console.log("querySelector:", document.querySelector('#game-of-the-day'));
console.log("getBy...:", document.getElementById('game-of-the-day'));

console.log("\n=== 7. Alle Spiele im Sale ===");
console.log("querySelector:", document.querySelectorAll('.sale'));
console.log("getBy...:", document.getElementsByClassName('sale'));