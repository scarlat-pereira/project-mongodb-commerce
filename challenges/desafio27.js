// use("commerce");
db.produtos.countDocuments({ nome: { $regex: "(?i)M(?i)c" } });