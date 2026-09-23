const cosas = ["corazon", "cara sonriente"];
cosas.push("uyuyuy"); // Mete al final
console.log(cosas); // ["corazon", "cara sonriente", "uyuyuy"];
cosas.pop(); // Elimina del final
console.log(cosas); // ["corazon", "cara sonriente"];
cosas.unshift("amor"); // Mete al principio
console.log(cosas); // ["amor", "corazon", "cara sonriente"];
cosas.shift(); // Elimina del principio
console.log(cosas); // ["corazon", "cara sonriente"];
