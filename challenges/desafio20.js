// use("commerce");
db.produtos.updateOne(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } },
);
// use("commerce");
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });