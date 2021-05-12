export class Usuario {
    nome: string = '';
    sobrenome: string = '';
    dataNascimento: string = '';
    genero: string = '';
    login!: Login
}

export class Login {
    email: string = '';
    senha: string = '';
}