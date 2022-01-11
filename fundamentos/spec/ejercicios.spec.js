describe('Pruebas de los ejercicios', () => {
   
    describe("Prueba para random", function() {
      
        it("Probamos para el numero 100", function() {
          let res = random(100);
          expect(res).toBeGreaterThan(-1);
          expect(res).toBeLessThan(101);
        });
      });

    describe("Prueba pedir array", function(){
        it("Probamos a pedir un array de length 5 y valor 2", function(){
            let array = pedirArray(5,2);
            expect(array.length).toBe(5);
        })
        it("Probamos a pedir un array de length 0 y valor 2", function(){
            let array = pedirArray(0,2);
            expect(array.length).toBe(0);
        })
        it("Probamos a pedir un array de length negativo", function(){
            expect(() => pedirArray(-2,2)).toThrow(new RangeError("Invalid array length"));
        })
    });

    describe("Prueba array numeros primos", function(){
        it('Numero primos hasta el 40', () => {
            expect(primo(40).length).toBe(12)
        });

        it('Numero primos numero negativos', () => {
            expect(primo(-1).length).toBe(0)
        });
    });

    describe("Prueba formato del dni", function(){
        it('DNI correcto', () => {
            expect(validarDNI("12345678A")).toBe(true)
        });
        it('DNI incorrecto', () => {
            expect(validarDNI("1234!678A")).toBe(false)
        });
    });    

    describe("Prueba formato del dni", function(){
        it('DNI correcto', () => {
            expect(validarDNI("12345678A")).toBe(true)
        });
        it('DNI incorrecto', () => {
            expect(validarDNI("1234!678A")).toBe(false)
        });
    });    

    describe("Prueba formato del palindromo", function(){
        it('Probamos un palindromo', () => {
            expect(palindromo("Yo hago yoga hoy")).toBe(true)
        });
        it('Probamos un no palindromo', () => {
            expect(palindromo("Mañana haré yoga")).toBe(false)
        });
        it('Probamos un palindromo con mayúsculas', () => {
            expect(palindromo("YO hagO yoga hoy")).toBe(true)
        });
        it('Probamos cadena vacía', () => {
            expect(palindromo("")).toBe(false)
        });
    });  

})