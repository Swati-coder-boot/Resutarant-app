$(document).ready(function(){
    
    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle')
    });

    function list() {
        alert("hi");
        $('#myModal').on('hidden.bs.modal', function (e) {
            alert('hello')
          })
    }
    
});

         