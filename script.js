//hero section//
const herosection=document.getElementById("section");
const collectionpage=document.getElementById("Collection");
const infopage=document.getElementById("detailspage");

collectionpage.style.display="none";
infopage.style.display="none";


//shop collection

const shopbtn=document.getElementById("startshop");
shopbtn.addEventListener("click",
    function(){
        herosection.style.display="none";
        collectionpage.style.display="flex"
      
    }
)

const prieces=[500,600,550,700,900,750];
let index=0;

const productprice=document.querySelectorAll(".price")
productprice.forEach(function(price){
    price.textContent=prieces[index]+" EGP";
     index++;

})

//details page//
 const productimg=document.getElementById("product-image");
 const priceinfo=document.getElementById("product-price");

const detailsbtn=document.querySelectorAll(".info");
detailsbtn.forEach(function(btn){
    btn.addEventListener("click",
        function(){
       
           const card= btn.closest(".image")

           const image=
            card.querySelector("img");
            productimg.src=image.src;
            const price=
            card.querySelector(".price")
           priceinfo.textContent=price.textContent

           
            
            
            collectionpage.style.display="none";
            infopage.style.display="block";
          
        }
    )
    
})
 const keepshopping=document.getElementById("keep-btn");
 keepshopping.addEventListener("click",
    function(){
        infopage.style.display="none"
        collectionpage.style.display="flex";
    }
 )
