printLadder = () => {
  const char = "*";
  let spaces;

  for (let i = 0; i < 7; i++) {
    spaces = " ".repeat(7 - i);
    if (i < 7) {
      console.log(spaces, char.repeat(i));
    }
  }
};

printLadder();
