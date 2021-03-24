let statusCandidato = "alta";

switch (statusCandidato) {
  case "aprovado":
    console.log("Parabéns! Você foi aprovado");
    break;  
  case "lista":
    console.log("Você entrou para a lista de esperar");
    break;
  case "reprovado":
    console.log("Uma pena! Você não foi aprovado dessa vez");
    break
  default:
    console.log("valor incorreto") 
}

