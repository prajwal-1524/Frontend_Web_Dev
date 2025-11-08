function readFile() {
  const xhr=new XMLHttpRequest();
  xhr.open('GET','sample.txt',true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4){
      document.getElementById('output').innerText=xhr.status===200?xhr.responseText:"Error: "+xhr.status;
    }
  };
  xhr.send();
}