//store the products array in localstorage as "products"

function Noduct(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

function storeData(e){
    e.preventDefault();
    let form = document.getElementById("products");

    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    let s1= new Noduct(type,desc,price,image)

    let data=JSON.parse(localStorage.getItem("noducts"))||[];
    data.push(s1);
    localStorage.setItem("noducts",JSON.stringify(data));
    console.log(s1);
}


