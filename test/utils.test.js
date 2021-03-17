const { gerarNumeroAleatorio, acharCaracter } = require('../lib/utils');

describe('Utils', () => {
    describe('gerarNumeroAleatorio', () => {
        test('fim nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(20, -5))
                .toBe(-1);
        });
        test('inicio nao pode ser negativo', () => {
            expect(gerarNumeroAleatorio(-5, 20))
                .toBe(-1);
        });
        test('inicio nao pode ser maior que fim', () => {
            expect(gerarNumeroAleatorio(20, 10))
                .toBe(-1);
        });
        test('deve retornar número gerado', () => {
            const gera = gerarNumeroAleatorio(10, 20)
            
            expect(gera)
                .toBeGreaterThanOrEqual(10)

            expect(gera)
                .toBeLessThanOrEqual(20);
        });
    });

    describe('acharCaracter', () => {
        test('comprimento invalido', () => {
            expect(acharCaracter(-4, 'abcde', 'c'))
                .toBe('comprimento invalido');
        });
        test('comprimento fornecido diferente do comprimento real', () => {
            expect(acharCaracter(2, 'abcde', 'c'))
                .toBe('comprimento fornecido diferente do comprimento real');
        });
        test('caractere nao encontrado na cadeia', () => {
            expect(acharCaracter(20, 'abcdeabcdxeabcdeabcd', 'y'))
                .toBe('caracter não encontrado na cadeia');
        });
        test('deve retornar posicao do caractere', () => {
            expect(acharCaracter(20, 'abcdeabcdxeabcdeabcd', 'x'))
                .toBe(9);
        });
    });    
});