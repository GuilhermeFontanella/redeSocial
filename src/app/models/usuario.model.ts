export class Usuario {
    id: number = 0;
    nome: string = '';
    sobrenome: string = '';
    dataNascimento: string = '';
    genero: string = '';
    email: string = '';
    senha: string = '';
    fotoUsuario: string = '';
    nomeUsuario: string = ''
}

export interface Generos {
    value: string
}