var namearray1=[];
function submit(){
    var name1= document.getElementById("nameofchild1").value;
    var name2= document.getElementById("nameofchild2").value;
    var name3= document.getElementById("nameofchild3").value;
    var name4= document.getElementById("nameofchild4").value;
    
    namearray1.push(name1);
    namearray1.push(name2);
    namearray1.push(name3);
    namearray1.push(name4);
console.log(namearray1);
document.getElementById("display").innerHTML=namearray1;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}
function sort(){
    namearray1.sort();
    document.getElementById("display").innerHTML=namearray1;
}