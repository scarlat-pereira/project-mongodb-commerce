// use("commerce");
db.produtos.updateMany({}, { $rename: { descricao: "descricaoSite" } });
// use("commerce");
db.produtos.find({}, { _id: 0, nome: 1, descricaoSite: 1 });