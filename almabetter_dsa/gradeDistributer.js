function distributeGrades(scores) {
    let grades = { A: 0, B: 0, C: 0, D: 0, F: 0 }

    for(let i=0; i<scores.length; i++){
        if(scores[i]>=90 && scores[i]<=100){
            grades.A += 1

        }else if(scores[i]>=80 && scores[i]<=89){
            grades.B += 1

        }else if(scores[i]>=70 && scores[i]<=79){
            grades.C += 1

        }else if(scores[i]>=60 && scores[i]<=69){
            grades.D += 1

        }else{
            grades.F +=1
        }
    }
    return grades
}
console.log(distributeGrades([92, 95, 87, 60, 72]))