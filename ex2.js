const getWeek = (date) => {
    const onejan = new Date(date.getFullYear(),0,1);
    return Math.ceil((((date - onejan) / 86400000) + onejan.getDay()+1)/7);
}
  
const myF = liste => {

    let lastMonth, text = ""

    for( d of liste){

        lastMonth = new Date(d.getFullYear(), d.getMonth(), 0);
        text += "La date correspondante au dernier jour du mois précédant : " + lastMonth+"\n"

        text += "La date au format DD/MM/YYYY hh:mm : "+ ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
        d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2)+"\n";

        d.setHours(0,0,0,0)
        text += "La date avec les heures et minutes mises à 0 : "+d+"\n"

        text += "Nombre de semaines : "+getWeek(new Date(d.getFullYear(),11,31))+"\n ----- \n"
    }

    return text
}


// example :
console.log(myF([new Date(), new Date(2020,0,15)]))