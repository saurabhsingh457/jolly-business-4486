let data=JSON.parse(localStorage.getItem("OrderP"))
console.log(data)
let TotoleOdr = document.querySelector("#Prodoct_sum")+data.length
console.log(TotoleOdr)
let sum=0;


for(let i=0;i<data.length;i++){
    let div1=document.createElement("div");
    let img=document.createElement("img");
    let p1=document.createElement("p")
    let p2=document.createElement("p")
    let p3=document.createElement("p")
    let inp=document.createElement("hr")
    let butt1=document.createElement("button")
    let butt2=document.createElement("button")
    img.setAttribute("src",data[i].image_url)
    p1.innerText=data[i].name
    p2.innerText=data[i].price  
    // p3.innerText=data[i].strikedoffprice
    butt1.innerText="Cancel Order"
    butt2.innerText="Order Complete"

    div1.append(img,p1,p2,p3,butt1,butt2)
    butt1.addEventListener("click",function(){
        alert("Cancel Order")
        addData("cancel",data[i]);
        data.splice(data.length[i],1)
        localStorage.setItem("OrderP",JSON.stringify(data))
    })
    sum+=+data[i].price;
    butt2.addEventListener("click",function(){
        alert("Order Complete")
        event.target.parentNode.remove();
        data.splice(data.length[i],1)
        localStorage.setItem("OrderP",JSON.stringify(data))
    })
    document.querySelector("#kav").append(inp,div1)
  }
  let price = document.querySelector("#Product_sum");  
  price.innerText="All Order  - "+TotoleOdr;
  document.querySelector("button").addEventListener("click",function(){
    if(document.querySelector("input").value==="masai30"){
        document.querySelector("h3").innerText=sum*(.7)
    }else{
        document.querySelector("h3").innerText=sum
    }
  });

  function addData(key,value){
    let newData=JSON.parse(localStorage.getItem(key)) || []
    newData.push(value)
    localStorage.setItem(key,JSON.stringify(newData))
  }