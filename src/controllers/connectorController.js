const router         = require("express").Router();
const mongoose       = require("mongoose");
const authMiddleware = require("../middlewares/auth");

const Connector = mongoose.model("Connector");

router.use(authMiddleware);

router.post("/create", async (req, res) => {
  const { id } = req.body;

  try {
    if (await Connector.findOne({ id })) {
      return res.status(422).json({ error: "Conector já existe" });
    }

    const connector = await Connector.create(req.body);

    return res.json({ connector });
  } catch (err) {
    return res.status(400).json({ error: "Falha no registro do conector" });
  }
});

router.get("/read", async (req, res) => {
    let query = {};

    if(req.query) {
      query = req.query;
    }

    try {
  
      const connector = await Connector.find(query);
  
      return res.json({ connector });
    } catch (err) {
      return res.status(400).json({ error: "Falha ao obter a lista de conectores" });
    }
});

router.put("/update/:id", async (req, res) => {
    const { id }  = req.params;
    const newInfo = req.body;

    try {
  
      const connector = await Connector.findOneAndUpdate({id}, Object.assign({}, newInfo), { upsert: true });

      return res.status(200).json({ sucess: "Conector atualizado com sucesso" });
    } catch (err) {
      return res.status(400).json({ error: "Falha ao atualizar os dados do conector" });
    }
});  

router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;

    try {
  
      const connector = await Connector.deleteOne({id});
  
      return res.status(200).json({ sucess: "Conector deletado com sucesso" });
    } catch (err) {
      return res.status(400).json({ error: "Falha ao excluir o conector" });
    }
});

module.exports = router;