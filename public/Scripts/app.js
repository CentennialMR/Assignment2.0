
/***********************************
File name     : app.js
Student name  : Mariela Ramos
Student ID    : 301324510
Date          : 2023-02-09
************************************/

(function(){
    function start()
    {
        console.log("App started...");
        let deleteButton = document.querySelectorAll('.btn-danger')
        for(button of deleteButton)
        {
            button.addEventListener('click',(event)=>{
                if(!confirm ("Are you sure"))
                {
                    event.preventDefault();
                    window.location.assign("/bcontactList");
                }
            });
        }
    }
    window.addEventListener("load",start);
})();