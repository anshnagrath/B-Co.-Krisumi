$(document).ready( function() {

 

    $("#contactForm").on('submit', function (e) {
        $('.loading').addClass('d-block');
       let payload = { "name" : $('#name').val() , "number" : $('#phonenumber').val() , "email": $('#email').val() , "projectName" :"Krisumi" ,"message" : $('#message').val()   }
       $.ajax({
           type: 'POST',
           url: "https://n3jhbh6bg8.execute-api.ap-south-1.amazonaws.com/default/EmailShooter",
        
           data: JSON.stringify(payload),
           success:function(data){
             console.log(JSON.stringify(data,null,2),"====>success");
           
             $('.loading').removeClass('d-block');
             $('.sent-message').addClass('d-block');
           },
           error:function(data){
               console.log("Error Occured ===>", JSON.stringify(data,null,2));
   
               alert("Error Occured ===>",JSON.stringify(data,null,2));
              
            //clear all fields
                displayError( "Error : Please try after some time" )
           }
       });

      
       e.preventDefault()
      
    
      
   
    })
   })

   function displayError( error) {
     $('.loading').removeClass('d-block');
    $('.error-message').html(error);
    $('.error-message').addClass('d-block');
  }


