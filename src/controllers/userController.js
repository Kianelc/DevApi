const router         = require("express").Router();
const mongoose       = require("mongoose");

const User = mongoose.model("User");

router.post("/register", async (req, res) => {
  const { email, username } = req.body;

  try {
    if (await User.findOne({ email })) {
      return res.status(422).json({ error: "Usuário já existe" });
    }

    const user = await User.create(req.body);

    return res.json({ user });
  } catch (err) {
    return res.status(400).json({ error: "Falha no registro do usuário" });
  }
});

router.post("/authenticate", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado" });
    }
    if (!(await user.compareHash(password))) {
        return res.status(401).json({ error: "Senha inválida" });
    }
    return res.json({
      user,
      token: user.generateToken()
    });
  } catch (err) {
    return res.status(400).json({ error: "A autenticação do usuário falhou" });
  }
});

module.exports = router;