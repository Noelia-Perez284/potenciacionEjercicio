let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let inputBase = <HTMLInputElement>document.getElementById("base");
let inputExponente = <HTMLInputElement>document.getElementById("exponente");
let rotulo = <HTMLElement>document.getElementById("rotulo");

btnEnviar.addEventListener("click", () => {
  function potencia(
    base: number = Number(inputBase.value),
    exponente: number = Number(inputExponente.value)
  ) {
    if (exponente > 0) {
      let resultado: number = base ** exponente;
      console.log(resultado);
      rotulo.innerHTML = "El resultado es " + resultado;
    } else if (exponente === 0) {
      let resultado = 1;
      console.log(resultado);
      rotulo.innerHTML = "el resultado es " + resultado;
    }
  }
  console.log(potencia());
});

//console.log(potencia(base, exponente));
