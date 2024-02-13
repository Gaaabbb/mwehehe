//document.getElementsByClassName("question").innerHTML = haha;

const question = ["SHORE KAAA?", "Ihh sige na", "Daya mo naman😔. PLSSS", 
"Pindutin mo na kasi yung shoreee🥺", "Edi waw sige na plsss😤",
"Ganyan naman to😭. Last naaaa", "Joke lang di pa last, sige naaa", 
"Ay bala ka HA HA wala ka na choice pindutin mo na yan😌"]

const answer = "YEEEYYY HAHAHAH ok chat mo sakin ano response mo kasi di ko talaga ano pinindot mo eh😌"

let num = 0

function hehe() {

    if (num == 7){
        document.getElementById("no").remove()
    }
        let que = question[num]
        document.getElementById("question").innerHTML = que
        num ++
        console.log(que)    
}


document.getElementById("no").addEventListener("click", hehe)
document.getElementById("yes").addEventListener("click", function (){
    if (num == 0) {
        document.getElementById("question").innerHTML = "Ambilis ng sagot ah HAHAHAHA anyway chat mo ako ano response mo"
    }
    else document.getElementById("question").innerHTML = answer

    document.getElementById("toothless").style.display = "block"
    document.getElementById("yes").remove()
    document.getElementById("no").remove()

})
