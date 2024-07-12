var haveConflict = function(event1, event2) {
    switch (true) {
            case (( event2[0] >= event1[0] && event2[0] <= event1[1]) || (event1[0] >= event2[0] && event1[0] <= event2[1])):
                return true;
            default:
                return false;
        }
    
    };
let event1 = ["01:15","02:00"], event2 = ["14:00","15:00"]
console.log(haveConflict(event1, event2))