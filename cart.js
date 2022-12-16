let data=JSON.parse(localStorage.getItem("add"))
document.querySelector("h2").innerText=data.length

let sum=0;

for(let i=0;i<data.length;i++){
    let div1=document.createElement("div");
    let img=document.createElement("img");
    let p1=document.createElement("p")
    let p2=document.createElement("p")
    let p3=document.createElement("p")
    let inp=document.createElement("input")
    let butt1=document.createElement("button")
    let butt2=document.createElement("button")
    let butt3=document.createElement("button")

    img.setAttribute("src",data[i].image_url)
    p1.innerText=data[i].name
    p2.innerText=data[i].price
    p3.innerText=data[i].strikedoffprice
    butt1.innerText="Add this"
    butt2.innerText="delete"
    butt3.innerText="Pay Now"

    div1.append(img,p1,p2,p3,inp,butt1,butt2,butt3)
    butt1.addEventListener("click",function(){
        p2.innerText=data[i].price*inp.value
    })
    sum+=+data[i].price;
    butt2.addEventListener("click",function(){
        event.target.parentNode.remove();
        data.splice(data.length[i],1)
        localStorage.setItem("add",JSON.stringify(data))
    })

    butt3.addEventListener("click",()=>{
        window.location.href = "./checkout.html"
      })   
    document.querySelector("div").append(div1)
  }

  
  document.querySelector("h3").innerText=sum;
  document.querySelector("button").addEventListener("click",function(){
    if(document.querySelector("input").value==="masai30"){
        document.querySelector("h3").innerText=sum*(.7)
    }else{
        document.querySelector("h3").innerText=sum
    }
  })
