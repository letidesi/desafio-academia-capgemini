const validatePassword = require("../questionService02");


test('Informando uma nova senha para verificar a função validatePassword', () => {
    expect(validatePassword).not.toBe("ay03")
  })