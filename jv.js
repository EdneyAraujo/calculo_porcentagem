<script>
  function calcular() {
    var valor = document.getElementById("valor").value;
    var porcentagem = document.getElementById("porcentagem").value;
    var resultado = (valor * porcentagem) / 100;
    alert("A porcentagem de " + porcentagem + "% de " + valor + " é " + resultado + ".");
  }
  
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // previne o formulário de ser enviado
    
    calcular(); // chama a função para calcular
  });
</script>
