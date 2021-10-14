function addItem(item){
	
	const itemHTML = `
	<div class = "product col-10 col-sm-4 col-md-3.5 col-lg-3" >
  <div class = "product-content">
      <div class = "product-img">
        <img src = ${item.img} alt = "product image" height="250px" >
      </div>
      <div class = "product-btns">
        <button type = "button" class = "btn-cart"> añadir a carrito
        <span><i class = "fas fa-plus"></i></span>
        </button>
        <button type = "button" class = "btn-buy"> comprar ahora
        <span><i class = "fas fa-shopping-cart"></i></span>
        </button>
      </div>
  </div>

  <div class = "product-info">
    <div class = "product-info-top">
      <h2 class = "sm-title">Verano</h2>
      <div class = "rating">
        <span><i class = "fas fa-star"></i></span>
        <span><i class = "fas fa-star"></i></span>
        <span><i class = "fas fa-star"></i></span>
        <span><i class = "fas fa-star"></i></span>
        <span><i class = "far fa-star"></i></span>
    	</div>
    </div>
    <a href = "#" class = "product-name">${item.name}</a>
    <p class = "product-price">$${item.price}</p>
  </div>
	</div>`;
	const itemsContainer = document.getElementById("listaBikinis");
	itemsContainer.innerHTML += itemHTML;


}


function GuardarItemsLocalStorage(){
	class Item {
		constructor (name,img,price,category){
						this.name = name;
						this.img = img;
						this.price = price;
            this.category= category;
		}
}

let list = [];

list.push(new Item('Red Summer','/imagenes/UNAPIEZA2.jpg','390','Dama una pieza'));
list.push(new Item('Fresh Style','/imagenes/CURVY1.jpg','200', 'Dama curvy'));
list.push(new Item('Top Wave','/imagenes/DOSPIEZAS1.jpg','190', 'Dama dos piezas'));
list.push(new Item('Twisted Summer','/imagenes/UNAPIEZA3.jpg','175','Dama una pieza'));
list.push(new Item('Water Sun','/imagenes/CURVY2.jpg','350.50', 'Dama curvy'));
list.push(new Item('Wave light','/imagenes/DOSPIEZAS2.jpg','500', 'Dama dos piezas'));
list.push(new Item('Sea peace','/imagenes/CURVY3.jpg','392', 'Dama curvy'));
list.push(new Item('Beauty love','/imagenes/DOSPIEZAS3.jpg','190', 'Dama dos piezas'));
list.push(new Item('Fire wave','/imagenes/UNAPIEZA4.jpg','165','Dama una pieza'));
list.push(new Item('Summer sport','/imagenes/HOMBRE1.jpg','150','Caballero'));
list.push(new Item('Fresh Beach','/imagenes/HOMBRE2.jpg','170','Caballero'));
list.push(new Item('Blue island','/imagenes/TRIKINI1.jpg','430','Dama trikini'));
list.push(new Item('Sky mood','/imagenes/TRIKNI2.jpg','140','Dama trikini'));


list = JSON.stringify(list);

localStorage.setItem("Productos",list);
}


function CargarItems(){

  const itemsContainer = document.getElementById("listaBikinis");
	itemsContainer.innerHTML ='';

	if(localStorage.getItem("Productos") == null){
    localStorage.setItem("Productos",'[lista]')
  }

  let list  = JSON.parse(localStorage.getItem("Productos"));
	console.log(list.length)
	for(let i = 0; i < list.length ; i++){
		console.log(list[i].name);
		addItem(list[i]);
	}

}


GuardarItemsLocalStorage();
CargarItems();