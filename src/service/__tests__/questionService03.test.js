const countAnagrams = require("../questionService03");


test('Informando se a função de contar anagramas é diferente de nula', () => {
    expect(countAnagrams).not.toBe(null);
  })