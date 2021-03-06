let calculadora;

beforeEach(function(){
    calculadora = new Calculadora(()=>{},()=>{});
});
describe('Test teclas',()=>{
    let num = ['1','2','3','4','5','6','7','8','9','0'];
    let contador = '';
    it('Pulsando los numeros', function(){
        num.forEach(number => {
            calculadora.teclaNumero(number);
            contador+=number;
            expect(calculadora.resultado).toBe(contador);
        });           
    }) 
    it('Pulsando los operadores ', function(){
        let num = ['-','+','*',"/",","];
        num.forEach(number => {
        calculadora.teclaOperacion(number);
        expect(calculadora.operador).toBe(number);
        });
    }) 

    it('Pulsando numeros y suma', function(){
        let num = ['1','2','3','4','5','6','7','8','9','0'];
        num.forEach(number => {
            calculadora.teclaNumero(number);
            calculadora.teclaOperacion("+");
            expect(calculadora.acumulado).toBe(number+"+");
        });
    }) 

});
describe('Test operaciones',()=>{
    let num = ['1021','2021','30.21','4021','5021','60.21','0.7','128','569','0.045'];

    it('Sumas ', function(){
        num.forEach(number => {
            let operacion = number+"+"+number;
            calculadora.operador = "+";
            expect(calculadora.calcular(operacion)).toBe(eval(operacion));
        });           
    }) 
    it('Restas ', function(){
    num.forEach(number => {
        let operacion = number+"-"+number;
        calculadora.operador = "-";
        expect(calculadora.calcular(operacion)).toBe(eval(operacion));
    });           
        }) 
    it('Multiplicaciones ', function(){
        num.forEach(number => {
            let operacion = number+"*"+number;
            calculadora.operador = "*";
            expect(calculadora.calcular(operacion)).toBe(eval(operacion));
        });           
    }) 
    it('Divisiones ', function(){
        num.forEach(number => {
            let operacion = number+"/"+number;
            calculadora.operador = "/";
            expect(calculadora.calcular(operacion)).toBe(eval(operacion));
        });           
    }) 
});
describe('Test teclas especiales',()=>{
    let num = ['1021','2021','30.21','4021','5021','60.21','0.7','128','569','0.045'];
    it('Borrar ', function(){
        num.forEach(number => {
            calculadora.teclaNumero(number);
            calculadora.borrar();
            expect(calculadora.resultado).toBe(number.substring(0,number.length-1));
            calculadora.limpiar();
        });
    }) 
    it('Limpiar', function(){
        calculadora.teclaNumero("123");
        calculadora.limpiar();
        expect(calculadora.resultado).toBe("0");
    }) 
    it('Probamos cambio de signo ', function(){
        let num = ['1','2','3','4','5','6','7','8','9','0'];
        let contador = '';
        
        num.forEach(number => {
            calculadora.teclaNumero(number);
            contador+=number;
            calculadora.cambioSigno();
            expect(calculadora.resultado).toBe(-contador);
            contador = -contador;
        });
    }) 
});

describe('Test decimales',()=>{
    let num = ['1021','2021','30.21','4021','5021','60.21','0.7','128','569','0.045'];
    it('Decimales ', function(){
        calculadora.coma();
        expect(calculadora.resultado).toBe("0,");
        calculadora.coma();
        expect(calculadora.resultado).toBe("0,");
        calculadora.coma();
        calculadora.teclaOperacion("+");
        expect(calculadora.resultado).toBe("0,0");
    }) 
    it('Limpiar', function(){
        calculadora.teclaNumero("123");
        calculadora.limpiar();
        expect(calculadora.resultado).toBe("0");
    }) 

});