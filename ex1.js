const myF = liste => {

    let text = ""

    for( n of liste){
        switch(true){
            case n % 3 == 0 && n % 5 == 0 : 
                text += "GarçonFille "
                break;
            case n % 3 == 0 : 
                text += "Garçon "
                break;
            case (n % 5 == 0) : 
                text += "Fille "
                break;
            default : 
                text += n+" "
                break;
        }
    }

    return text
}


// example
console.log(myF([5,3,15,2]))