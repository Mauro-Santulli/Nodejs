const players = ["Joe", "Caroline", "Sabrina"];

function promiseLuckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}


players.forEach(items => {
    promiseLuckyDraw(items)
  .then(result => console.log(result))
  .catch(error => console.error(error.message));
});