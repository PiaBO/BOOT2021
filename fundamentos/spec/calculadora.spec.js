describe('Test Calculadora', () => {
    let calculadora;

    beforeEach(function(){
        calculadora = new Calculadora(()=>{},()=>{});
    });
    describe('Probamos las teclas',()=>{
        let num = ['1','2','3','4','5','6','7','8','9','0'];
        let contador = '';
       it('Pulsando los numeros: ', function(){
            num.forEach(number => {
                calculadora.teclaNumero(number);
                contador+=number;
                expect(calculadora.resultado).toBe(contador);
            });           
       }) 
    //   it('Pulsando los operadores: ', function(){
    //     let num = ['-','+','*',"/"];
    //     num.forEach(number => {
    //         calculadora.teclaNumero(number);
    //         expect(calculadora.resultado).toBe(number);
    //     });           
    //  }) 

    });

})