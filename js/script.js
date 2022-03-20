var price , crust_price, topping_price ;


$(document).ready(function(){
  $("button.proceed").click(function(){
    $("button.proceed").hide();
    $("div.choices").show();
  });

//   $("button.deliver").click(function(){
//     $("button.deliver").hide();
//     $(".delivery").show();
//   });
//   $("button#final-order").click(function(){
//     let person = $("input#name").val();
//     let phone = $("input#phone").val();
//     let location = $("input#location").val();
//     if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){

//       $("#delivery-message").append(person+" thanks for your order. It will be delivered to "+location);
//     }
//     else {
//       alert("please fill in delivery detail!");
//     }
//   });

  $("button.proceed") .click(function(event){
   let pname = $(".name option:selected").val();
   let psize = $("#size option:selected").val();
   let pcrust = $("#crust option:selected").val();
   let ptopping = $("#topping option:selected").val();

//    $("#pizzaname").append("Pizza Name - "+pname);
//    $("#pizzasize").append("Pizza size - "+psize);
//    $("#pizzacrust").append("Pizza Crust - "+pcrust);
//    $("#pizzatopping").append("Pizza Toppings - "+ptopping);
   switch(psize){
     case "large":
        price = 800;
        console.log(price);
      break;
      case "medium":
        price = 500;
        console.log("The price is "+price);
      break;
      case "small":
        price = 300;
        console.log(price);
      default:
        console.log("error");

   }
   switch(pcrust){
    case "Crispy":
      crust_price = 100;
    break;
    case "Stuffed":
      crust_price = 180;
    break;
    case "Gluton-free":
      crust_price = 150;
    break;
    default:
      console.log("No price"); 
 }
 switch(ptopping){
  case "Kebab":
    topping_price = 50;
  break;
  case "Sausege":
    topping_price = 40;
  break;
  case "Smokey":
    topping_price = 30;
  break;
  default:
    console.log("No price"); 
}

//  let ptotal = price + crust_price + topping_price;
//  console.log(ptotal);
//  $("#pizzatotal").append("Total =:  sh. "+ptotal);

//    var newOrder = new Getpizza(pname, psize, pcrust,ptopping,ptotal);
// console.log(newOrder);
// $(".name option:selected").val("");
// $("#size option:selected").val("");
// $("#crust option:selected").val("");
// $("#topping option:selected").val("");


// var newOrder = new Getpizza(pname, psize, pcrust,ptopping,ptotal);
//    $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
//    console.log(newOrder);   

//    event.preventDefault();
//   });

// let total = price + crust_price + topping_price;
// console.log(total);
// let checkoutTotal =0;
// checkoutTotal = checkoutTotal + total;
// console.log(checkoutTotal);
// var newOrder = new Getpizza(pname, psize, pcrust,ptopping,total);
// $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
// console.log(newOrder); 

$("#pizzaname").html($(".name option:selected").val());
$("#pizzasize").html( $("#size option:selected").val());
$("#pizzacrust").html($("#crust option:selected").val());
$("#pizzatopping").html($("#topping option:selected").val())
$("#totals").html(total);

function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$("button.addPizza").click(function(){
  let pname = $(".name option:selected").val();
  let psize = $("#size option:selected").val();
  let pcrust = $("#crust option:selected").val();
  let ptopping = $("#topping option:selected").val();
  switch(psize){
    case "large":
       price = 800;
       console.log(price);
     break;
     case "medium":
       price = 500;
       console.log("The price is "+price);
     break;
     case "small":
       price = 300;
       console.log(price);
     default:
       console.log("error"); 
   }
   switch(pcrust){
      case "Crispy":
        crust_price = 100;
      break;
      case "Stuffed":
        crust_price = 150;
      break;
      case "Gluton-free":
        crust_price = 120;
      break;
      default:
        console.log("No price"); 
    }
   switch(ptopping){
    case "Kebab":
      topping_price = 50;
    break;
    case "Sausege":
      topping_price = 40;
    break;
    case "Smokey":
      topping_price = 30;
    break;
    default:
      console.log("No price"); 
    }
   let total = price + crust_price + topping_price;

  var newOrder = new Getpizza(pname, psize, pcrust,ptopping,total);
  $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
  console.log(newOrder);
  checkoutTotal = checkoutTotal + total;

});
$("button#checkout").click(function(){
  $("button#checkout").hide();
  $("button.addPizza").hide();
  $("button.deliver").show();
  checkoutTotal  = checkoutTotal + total;
  console.log(checkoutTotal);
  $("#pizzatotal").append("bill: "+checkoutTotal);
});
$("button.deliver").click(function(){
  $(".pizzatable").hide();
  $(".choices h2").hide();
  $(".delivery").show();
  $("button.deliver").hide();
});
$("button#final-order").click(function(){
    $("#pizzatotal").hide();
    let deliveryamount= checkoutTotal+150;
    console.log("Final Bill: "+deliveryamount); 
    let person = $("input#name").val();
    let phone = $("input#phone").val();
    let location = $("input#location").val();
    if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
        $("#delivery-message").append(person+" order recieved, it will be delivered to "+location + ". Prepare sh. "+deliveryamount);
}
else {
  alert("Please fill in delivery details");
}
});
event.preventDefault();
});
});