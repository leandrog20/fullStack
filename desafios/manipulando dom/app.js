class App{
    // como não vamos usar construtores nessa classe não precisamos declarar

    addProperty(){ // responsavel por adicionar as propriedades

        event.preventDefault() // isso fará com que o formulario não execute aquela função de recarregar a pagina

        let kind = document.querySelector("select[name='kind']").value  // como queremos o valor do select colocamos value
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='rented']").checked // pegar esse elemento quando ele esta checkado
        
        let property = new Property(kind, area, rented) // instanciando a nossa classe property

        this.addOnPropertiesList(property) // iremos adicionar as propriedades na lista, passamos a classe instanciada como paramentro para podermos fazer uma verificação no if

        this.clearForm() // função que vai limpar o formulario assim que clicarmos no botão
    }

    addOnPropertiesList(property){
        let listElement = document.createElement("li") // criando o elemento da nossa lista, as proximas linhas de codigo sera a gente colocando as coisas dentro desse elemento

        let propertyInfo = ` Tipo: ${property.kind} (Área: ${property.area} m²)` // por isso foi importante passa a nossa classe instanciada como paramentro, fizemos as informações como string pois dessa informação queremos colocar uma marca de alugado e depois um botão de remover

        if(property.rented){ // se a propriedade estiver como alugada
            let rentedMark = this.createRentedMark()
            listElement.appendChild(rentedMark)
        }

        listElement.innerHTML += propertyInfo // devemos colocar innerHTML pois o appendChild não ira funcionar, ja que o propertyInfo é uma string, é como se voce estivesse escrevendo, so que com uma frase ja pronta

        let buttonToRemove = this.createRemoveButton() // botão de remover que vira no final

        listElement.appendChild(buttonToRemove)

        document.getElementById("properties").appendChild(listElement) // adicionando aquele "li" que criamos no inicio ja formatado dentro da nossa lista

    }

    createRentedMark(){
        let rentedMark = document.createElement("span") // criando a marca de alugado que vira no começo
        rentedMark.innerText = "ALUGADO"
        rentedMark.style.color = "white"
        rentedMark.style.backgroundColor = "red"

        return rentedMark // sempre lembrando de retornar se não, a nossa função acima não recebera ele
    }

    clearForm(){
        document.querySelector("input[name='area']").value = '' // limpara o input
        document.querySelector("input[name='rented']").checked = false // desmarcará o input
    }

    createRemoveButton(){
        let removeButton = document.createElement("button")
        removeButton.setAttribute("onclick", "app.remove()") // colocando os atributos onclick e a função que sera executada atraves desse onclick
        removeButton.innerText = "Remover"

        return removeButton

    }

    remove(){
        let remove = event.target.parentNode // "event target" faz com que ele pegue o ultimo evento que teve no DOM e no nosso caso o ultimo evento que tera é do usuario clicando no botão de remover,  "isso se ele clicar", e "parentNode" vai pegar o filho do pai que teve aquele evento
        document.getElementById("properties").removeChild(remove) // removendo o filho que teve o evento 
    }

}








