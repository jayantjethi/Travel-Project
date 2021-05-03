// // Check Off Specific Todos By Clicking
// $(".myul").on("click", "li", function(){
//   $(this).toggleClass("completed");
// });

// //Click on X to delete Todo
// $(".myul").on("click", "span", function(event){
//   $(this).parent().fadeOut(500,function(){
//     $(this).remove();
//   });
//   event.stopPropagation();
// });

// $(".inputtodo").keypress(function(event){
//   if(event.which === 13){
//     //grabbing new todo text from input
//     var todoText = $(this).val();
//     $(this).val("");
//     //create a new li and add to ul
//     $(".myul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
//   }
// });

// $(".fa-plus").click(function(){
//   $(".inputtodo").fadeToggle();
// });