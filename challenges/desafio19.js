// use("commerce");
db.produtos.updateMany(
  {},
  { $pull: { ingredientes: "cebola" } },
);
// use("commerce");
db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });