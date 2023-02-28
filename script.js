let submit = document.querySelector(".calcular");

submit.addEventListener("click",()=>{
  event.preventDefault();
  let qtdPessoas = document.querySelector("#qtdPessoas").value;
  let valor = document.querySelector("#valor").value;
  let extra = document.querySelector("#extra").value;
  console.log(extra);
  calculaTotal(qtdPessoas, valor, extra);
})


function calculaTotal(pessoas, valor, extra){
  let span =document.querySelector(".span")
  if(valor <=0 || pessoas <=0){
   span.innerHTML = "<span> Valor ou pessoas inválidas </span>";
  }
  else{
    let valor_total = valor / pessoas;
    span.style.color ="#000000"
    if(extra =='sim'){
      valor_total *= 0.9;
    }
    span.innerHTML =`O valor por cada pessoa foi:R$${valor_total}`;
  }
}