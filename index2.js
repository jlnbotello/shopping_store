var express =require("express");
var cors = require("cors");
var corsOptions = {origin:"*",optionSucessStatus:200};
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors(corsOptions));


var cart = [];
var cart_quantity = 0;

var products =[{
  "id": "1",
  "name": "Celular Pixel 4",
  "price": 1500,
  "quantity": 10,
  "img_url": "https://http2.mlstatic.com/google-pixel-4-64gb-negro-nuevo-caja-sellada-D_NQ_NP_863257-MLA40463778044_012020-F.webp" 
},
{
  "id": "2",
  "name": "Tablet A 8",
  "price": 3000,
  "quantity": 3,
  "img_url": "https://images.fravega.com/f100/34eb7e44fea937adf5efeb9fc0411c3f.jpg"
  
  
  },
  {
    "id": "3",
    "name": "TV HD 32pulgads ",
    "price": 5600,
    "quantity": 0,
    "img_url": "https://s3.amazonaws.com/gpcdn-dev/avenida/products/photos/5d/a4d/9c0e5e8a4ddd51b9092d5d743c6bcca5_l.png"
    
    
    },
  {
    "id": "5",
    "name": "Pc Armada Gamer Amd A8",
    "price": 41000,
    "quantity": 1,
    "img_url": "https://http2.mlstatic.com/pc-armada-gamer-amd-a8-9600-x10-nucleos-video-r7-hdmi-w10-64-D_NQ_NP_991108-MLA31036405418_062019-F.webp"
    
    
    },
  {
    "id": "6",
    "name": "Impresora A Color Multifunción Epson",
    "price": 26999,
    "quantity": 15,
    "img_url": "https://http2.mlstatic.com/impresora-a-color-multifuncion-epson-ecotank-l3110-110v220v-negra-D_NQ_NP_635401-MLA41557168334_042020-O.webp"
    
    
    },
  {
    "id": "7",
    "name": "Smart Tv Tcl 50p8m Led",
    "price": 53000,
    "quantity": 7,
    "img_url": "https://http2.mlstatic.com/smart-tv-tcl-50p8m-led-4k-50-D_NQ_NP_781845-MLA40740858737_022020-F.webp"
    
    
    },
  {
    "id": "8",
    "name": "Xiaomi Mi Band 5",
    "price": 3999,
    "quantity": 45,
    "img_url": "https://http2.mlstatic.com/xiaomi-mi-band-5-global-smart-watch-reloj-inteligente-film-D_NQ_NP_890465-MLA42960821090_072020-O.webp"
    
    
    }]



var id =20;


app.get("/products",function(req,res){
	console.log("Product list request");
	setTimeout(function(){
		res.send(products);    
        return;
    },1000);    
});

app.get("/cart",function(req,res){
	 setTimeout(function(){
		res.send(cart);    
        return;
    },1000);	
});


app.get("/products/:id",function(req,res){
  console.log(req.params.id);
    if(req.params.id>0){
      var product={};
       products.forEach(item=>{
    
        if(item.id==req.params.id){
        
          product= item;
         
        }
      });
      res.send(product);
      return; 
     
    }else{
        res.send({'type': 'error'});
        return; 
    }
  
});


app.get("/cart/quantity",function(req,res){
	setTimeout(function(){
	console.log("Quantity request");
	res.send(''+cart_quantity);
	},1000);	
});

app.get("/cart/:id/quantity",function(req,res){
  console.log(req.params.id);
    if(req.params.id>0){
		var quantity;
		cart.forEach(item=>{
			if(item.id==req.params.id){
				quantity = item.quantity;
				res.send('' + quantity);
			}
		});      
		return; 
     
    }else{
        res.send({'type': 'error'});
        return; 
    }
  
});


app.post("/login",function(req,res){
    setTimeout(function(){
        console.log("Llego al servidor "+JSON.stringify(req.body));
        
       
        if(req.body.email!=undefined && req.body.password!=undefined){
            if(req.body.email==="usuario"&&req.body.password==="1234"){
                console.log("Sale del servidor "+"{'type': 'User'}")
                res.send({'type': 'User'});    
            }else if(req.body.email==="admin"&&req.body.password==="1234"){
                console.log("Sale del servidor "+"{'type': 'Admin'}")
                res.send({'type': 'Admin'});    
            }else{
                console.log("Sale del servidor "+"{'type': 'error'}")
                res.send({'type': 'error'});
            }
            return;
        }
        console.log("Sale del servidor "+"{'type': 'error'}")
        res.send({'type': 'error'});
    },1000);
    
});


app.post("/products",function(req,res){
  console.log(req.body);
    setTimeout(function(){
        if((req.body.nombre!= undefined&&req.body.nombre!= "") &&(req.body.price!= undefined) 
			&&  (req.body.quantity!= undefined) && (req.body.img_url!= undefined&&req.body.img_url!= "")){
     
			id = id +1;
       
			
			var data = {"id":id,"name":req.body.nombre,"price":req.body.price,"stock":req.body.quantity,"img_url":req.body.img_url};
				products.push(data);
                res.send(data);    
     
            return;
        }
        res.send({'type': 'error'});
    },1000);
    
});

app.post("/cart",function(req,res){
	console.log(req.body);
    setTimeout(function(){
        if(	(req.body.name != undefined && req.body.name!= "") &&
			(req.body.price != undefined) &&
			(req.body.quantity != undefined) &&
			(req.body.img_url != undefined && req.body.img_url!= "")
		){
			
			var found = 0;
						
			for(var i =0;i<cart.length;i++){
				//if exists, update it
				if(req.body.id == cart[i].id){						
					console.log("Update cart product")
					cart_quantity -= cart[i].quantity;
					cart[i].name = req.body.name;
					cart[i].price = req.body.price;
					cart[i].quantity = req.body.quantity;
					cart[i].img_url = req.body.img_url;
					cart[i].quantity = req.body.quantity;
					res.send(req.body);
					found = 1;					
				}
			}				
				
			if(!found){
				var data = {
				"id":req.body.id,
				"name":req.body.name,
				"price":req.body.price,
				"quantity":req.body.quantity,
				"img_url":req.body.img_url
				};
				cart.push(data);
				res.send(data);				
			}
			
			cart_quantity+=req.body.quantity;
		}
		
	},1000);
    
});

app.post("/cart/buy",function(req,res){
	
	var index = -1;
	for(var i =0;i<cart.length;i++){
		index = parseInt(cart[i].id)-1;
		if(index>=0 && index<cart.length){
			products[index].quantity -= cart[i].quantity;
      res.send({'type': 'Buying transaction: OK'})
      return;
		}else{
			res.send({'type': 'Buying transaction: FAIL'})
		}
	}
});

app.put("/products/:id",function(req,res){
  console.log(req.params.id);
    setTimeout(function(){
        
       console.log(req.body);

        if((req.body.name!= undefined&&req.body.name!= "") &&(req.body.img_url!= undefined&&req.body.img_url!= "") 
			&&  (req.body.price!= undefined) && (req.body.quantity!= undefined)){
	
			
        
				for(var i =0;i<products.length;i++){
					if(req.params.id== products[i].id){
            console.log("Atualiza")
						products[i].name=req.body.name;
						products[i].price=req.body.price;
						products[i].quantity=req.body.quantity;
						products[i].img_url=req.body.img_url;
							res.send(req.body);    
							return;
					}
				}
		
        }
        res.send({'type': 'error'});
    },1000);    
});

app.put("/cart/:id",function(req,res){
  console.log(req.params.id);
    setTimeout(function(){
        console.log(req.body);

        if(
			(req.body.name!= undefined && req.body.name != "") &&
			(req.body.img_url!= undefined && req.body.img_url != "") &&
			(req.body.price!= undefined) && (req.body.quantity != undefined)
		){
			for(var i =0;i<cart.length;i++){
				if(req.params.id == cart[i].id){
					console.log("Update cart product")
					cart_quantity -= cart[i].quantity;
					cart[i].name=req.body.name;
					cart[i].price=req.body.price;
					cart[i].quantity=req.body.quantity;
					cart[i].img_url=req.body.img_url;
					
					res.send(req.body);    
					return;
				}
			}
			cart_quantity += cart[i].quantity;
			req.body.quantity;
        }
        res.send({'type': 'error'});
    },1000);    
});	



app.delete("/products/:id",function(req,res){
	console.log(req.params.id);
    setTimeout(function(){
        console.log(req.params.id);
        if(req.params.id!= undefined){	
			for(var i =0;i<products.length;i++){
				if(req.params.id== products[i].id){
					products.splice(i,1);
					var data = {"type":"ok"};
					res.send(data);    
					return;
				}
			}	
        }
        res.send({'type': 'error'});
    },1000);    
});

app.delete("/cart/:id",function(req,res){
	console.log(req.params.id);
    setTimeout(function(){
        console.log(req.params.id);
        if(req.params.id != undefined){
			for(var i=0;i<cart.length;i++){
				if(req.params.id == cart[i].id){
					cart_quantity -= cart[i].quantity;
					cart.splice(i,1);
					var data = {"type":"ok"};
					res.send(data);    
					return;
				}
			}
        }
        res.send({'type': 'error'});
    },1000);    
});

app.delete("/cart", function (req, res) {
  console.log("deleting cart");
  setTimeout(function () {
    cart = [];
    res.send({ 'type': 'ok' });
    return;

    res.send({ 'type': 'error' });
  }, 1000);
});

app.listen(3001,function(){
    console.log("Api en el puerto 3001");
});