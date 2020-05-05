var a[] = document.getElementsByClassName("button").textContent;
for(i=0; i<a.length; i++){
  if(a[i] == '@'){
    break
  }else{
    alert("enter the valid email");
  }
}
