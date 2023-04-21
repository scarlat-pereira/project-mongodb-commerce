// use("commerce");
db.produtos.updateMany({ nome: { $eq: "Big Mac" } }, { $unset: { curtidas: "" } });
// use("commerce");
db.produtos.find({}, { _id: 0, nome: 1, curtidas: 1 });