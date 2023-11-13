const aviso = document.getElementById('aviso');
const btn = document.getElementById('btn');

function main (){
    btn.addEventListener('click',()=>{
        const id = document.getElementById('idade');
       let idade = parseInt(id.value);
       
       aviso.innerHTML = "";
    
    
    if (idade >= 18 && idade <= 69){
        aviso.style = " color: #2980b9;"
        aviso.innerHTML= 'O voto é obrigatório' ;
        
    } 
    else if(idade >= 16 && idade <= 17  ){
        aviso.style = " color: #2980b9;"
        aviso.innerHTML= "Você é elegível para votar, porém não é obrigatório.";
       
    } else if(idade >= 70 && idade <= 100 ){
        aviso.style = " color: #2980b9;"
        aviso.innerHTML= 'Seu voto não é obrigatório.';
        
    }else if(idade<= 15 && idade >= 1 ){
        aviso.style = "color:red;"
        aviso.innerHTML= "Você é menor de idade, Não e elegível";
        
    } else{
        aviso.style = "color:red;"
        aviso.innerHTML = "Adicione uma idade Verdadeira!"
    }
    })
}
main()


