//Arrow function

    //neste caso usando apenas uma linha 
        //`sinal de grave
    const apresentaArrow = nome => `meu nome é  ${nome}`;
    const soma = (nium1, num2) => num1 + num2;


    //Arrow function usando mais de 2 linhas de instrução

    const somaNumerosPequenos = (num1, num2) => {
        if (num1 || num2 > 10) {
            return "somente números de 1 a 9"
        } else {
            return num1 +num2;
        }
    }



