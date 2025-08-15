import { Personagem } from "./Personagem";

const p: Personagem = new Personagem();
p.nome = "Edecio";
p.classe = "Monge";
p.raca = "Morto-vivo";
p.nivel = Math.floor(1+ Math.random() * 99);
p.arma = "fava";
p.manaMaxima = 100;
p.manaAtual = p.manaMaxima;
p.vidaMaxima = 100;
p.vidaAtual = p.vidaMaxima;
p.poderAtaque = 1;

console.table(p);