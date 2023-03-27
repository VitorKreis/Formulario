"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const form = document.getElementById("form");
const nome = document.getElementById("username");
const email = document.getElementById("email");
const senha = document.getElementById("password");
const senha2 = document.getElementById("password2");
const error = document.getElementsByClassName("error-message");
const formError = document.getElementsByClassName("form-fields");
let show;
//Verificando o nome
nome.addEventListener("change", (e) => {
    if (nome.value.length >= 3 && validator_1.default.isAlpha(nome.value)) {
        show = formError[0].children[2];
        show.style.display = "none";
    }
    else if (nome.value.length <= 3) {
        show = formError[0].children[2];
        show.style.display = 'block';
    }
});
//Verificando o Email
email.addEventListener("change", (e) => {
    e.preventDefault;
    if (validator_1.default.isEmail(email.value)) {
        show = formError[1].children[2];
        show.style.display = "none";
    }
    else if (validator_1.default.isEmail(email.value) == false) {
        show = formError[1].children[2];
        show.style.display = 'block';
    }
});
//Verificando Senha
senha.addEventListener("change", (e) => {
    if (senha.value.length >= 6) {
        show = formError[2].children[2];
        show.style.display = "none";
    }
    else if (senha.value.length <= 6) {
        show = formError[2].children[2];
        show.style.display = "block";
    }
});
//Verificar Senha
senha2.addEventListener("change", (e) => {
    if (senha2.value == senha.value) {
        show = formError[3].children[2];
        show.style.display = "none";
    }
    else if (senha2.value != senha.value) {
        show = formError[3].children[2];
        show.style.display = "block";
    }
});
