// use("commerce");
db.produtos.updateMany(
  { valoresNutricionais: { $elemMatch: { tipo: "sódio", percentual: { $gte: 40 } } } },
  { $addToSet: { tags: { $each: ["muito sódio"] } } },
);
// use("commerce");
db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });