(function() {


    $(window).load(function() {
        setTimeout(function() {
          $("body").addClass('loaded');
        }, 1000);
    });
    
    $(document).on("ready",function(){
        $("#btnIngresar").on("click",function(e){
            e.preventDefault();
            var usuario = ($("#txtUsuario").val()).trim();
            var password = ($("#txtPassword").val()).trim();
            $("#msgUsuario, #msgPassword").addClass("noVisible");
            
            if(usuario === ""){
                $("#msgUsuario").removeClass("noVisible");
            }
            if(password === ""){
                $("#msgPassword").removeClass("noVisible");
            }
            if(usuario !== "" && password !== ""){
                $("#loginForm").submit();
            }
            
        });
    });
  
})();


