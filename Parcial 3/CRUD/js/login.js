$(document).ready(function(){
    $('#submit').click(function(){
 
        var vusuario = $('#usuario').val();
        var vcontraseña = $('#contraseña').val();
        console.log("javascript");
        $.post('./php/login.php',{usuario:vusuario, contraseña:vcontraseña},function(msg){
        if(!msg.includes("Error"))
        {
            $('#myModal .modal-body').html(msg);
            $('#myModal').modal('show');

            $('#myModal').on('hidden.bs.modal', function(){
                $(location).attr('href',"./php/index.php");
            })
        }
        else{
            $('#myModal .modal-body').html(msg);
            $('#myModal').modal('show');
        }
    },'json');
});
});
