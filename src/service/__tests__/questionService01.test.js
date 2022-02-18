const printLadder = require("../questionService01");

test('Escada formada com sucesso será diferente de nula', () => {
    expect(printLadder).not.toBe(null)
  })