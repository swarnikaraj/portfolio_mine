function sendMail(params){
    var tempParams={
        from_name:document.getElementById('email').value,
    
        to_name:"swarnikarajsingh@gmail.com",

        message:document.getElementById("message")
    
    
    };

    emailjs.send('service_6bj5rek','template_w8mcdfd',tempParams).then(
        function(res){
            console.log("succes", res.status);
        }
       

    )

    document.getElementById('email').value=''
    document.getElementById('name').value=''
    document.getElementById('message').value=''
    alert(" Message sent Successfully!")

}