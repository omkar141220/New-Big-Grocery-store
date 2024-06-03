
let elemntselect =document.querySelector(".elements");


const products=[
    {
        id:1,
        name:"Haldiram's Sev Bhujiya",
        desc:"Snacks & Munchies",
        stock:10,
        price:18,
        qty:0
    },
    {
        id:2,
        name:"NutriChoice Digestive",
        desc:"Bakery & Buiscuits",
        stock:8,
        price:24,
        qty:0
    },
    {
        id:3,
        name:"Cadbury 5 Star Chocolate",
        desc:"Bakery & Buiscuits",
        stock:9,
        price:32,
        qty:0
    },
    {
        id:4,
        name:"Onion Flavour Potato",
        desc:"Snacks & Munchies",
        stock:10,
        price:3,
        qty:0
    },
    {
        id:5,
        name:"Salted instant popcorn",
        desc:"Instant food",
        stock:5,
        price:13,
        qty:0
    },
    {
        id:6,
        name:"Blueberry Greek Yogurt",
        desc:"Dairy, Bread & Eggs",
        stock:6,
        price:18,
        qty:0
    },
    {
        id:7,
        name:"Britannia Cheese Slices",
        desc:"Dairy, Bread & Eggs",
        stock:7,
        price:24,
        qty:0
    },
    {
        id:8,
        name:"Kellog's original cereals",
        desc:"Instant Food",
        stock:8,
        price:32,
        qty:0
    },
    {
        id:9,
        name:"Slurrp Millet Chocolate",
        desc:"Snacks & Munchies",
        stock:9,
        price:3,
        qty:0
    },
    {
        id:10,
        name:"Amul Butter - 500g",
        desc:"Dairy, Bread & Eggs",
        stock:10,
        price:13,
        qty:0
    }
]

  var num =[

       {
          id :1,
          name :"meena"
       },
       {
         id :2,
         name :"meena"
      }
 ]


function displayproduct()
{

        products.forEach((product)=>{
               elemntselect.innerHTML+=` <div class="col">
               <div class="card">
               <div class="card-body">
                 
                 <img src="images/${product.id}.jpg" height="140" width="140" class="img-fluid">
                 <div class="d-flex justify-content-center d-none">
                   <div class="p-2">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                     <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                     <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                   </svg>
                   </div>
                   <div class="p-2"><i class="fa-regular fa-heart"></i></div>
                   <div class="p-2"><i class="fa-solid fa-arrow-right-arrow-left"></i></div>
                 </div>
                 
                 <p class="card-text text-muted">${product.desc}</p>
                 <a href="details.html"><p style="font-size:15px;">${product.name}</p></a>
                 <div class="d-flex" style="font-size:12px;">
                 <i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star text-warning"></i><i class="fa-solid fa-star-half-stroke text-warning"></i>
                 <p class="text-muted">4.5(149)</p>         
                 </div>
                 <div class="d-flex" style="font-size:12px;">
                   <p>$${product.price}</p><p class="text-muted flex-grow-1">$24</p> 
                   <button type="button" class="btn btn-sm  btn-success" onclick="addtocart(${product.id})">+ Add</button>        
                 </div>
               </div>
             </div>
             </div>    
         </div>`
              
        });



          for(let i=0 ;i<=num.length ;i++)
            {
             elemntselect.innerHTML+=`<ul> <li> ${num[i].id} </li><li> ${num[i].name}</li> </ul>`
                 
            }
                
}

displayproduct();

function addtocart(id){}





