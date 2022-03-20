var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}


// proceed button
$(document).ready(function(){
  // $("button.proceed").click(function(){
  //   $("button.proceed").hide();
  //   $("#information").hide();
  //   $("div.choise").slideDown(1000);
  // });
  $("button.proceed").click(function(event){
   let pname = $(".name option:selected").val();
   let psize = $("#size option:selected").val();
   let pcrust = $("#crust option:selected").val();
   let ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       ptopping.push($(this).val());
   });
   console.log(ptopping.join(", "));

   switch(psize){
    case "0":
      price =0;
    break;
    case "large":
       price = 800;
       console.log(price);
     break;
     case "medium":
       price = 500;
       console.log(" price "+price);
     break;
     case "small":
       price = 300;
       console.log(price);
     default:
       console.log("error"); 
   }
   switch(pcrust){
      case "0":
        crust_price = 0;
      break;
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
    let topping_value = ptopping.length*50;
    console.log("topping value" + topping_value);

    if((psize == "0") && (pcrust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#feedback").show();
      $("div.choices").hide();
      alert("Please select pizza size and crust"); 
    }
    else{
      $("button.proceed").hide();
      $("#feedback").hide();
      $("div.choices").slideDown(1000);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);
    
// Add pizza button
    $("button.addPizza").click(function(){
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));
      switch(psize){
        case "0":
          price =0;
        break;
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
          case "0":
            crust_price = 0;
          break;
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
        let topping_value = ptopping.length*50;
        console.log("topping value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      // constructor fn
      var newOrder = new Getpizza(pname, psize, pcrust,ptopping,total);

      $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
      
      

    });
    // Checkout
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("total is sh. "+checkoutTotal);
      $("#pizzatotal").append("bill is sh. "+checkoutTotal);
    });

    // home delivery button
    $("button.deliver").click(function(){
      $(".pizzatable").hide();
      $(".choices h2").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      let deliceryamount= checkoutTotal+100;
      console.log("please pay sh. "+deliceryamount+" on delivery");
      $("#totalbill").append("bill + delivery fee is: "+deliceryamount);
    });

    //place order
    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliceryamount= checkoutTotal+150;
      console.log("Bill is: "+deliceryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1000);
      }
      else {
        alert("Please fill in delivery details");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });
});