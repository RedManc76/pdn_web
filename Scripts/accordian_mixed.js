document.addEventListener('DOMContentLoaded', function() {
    jQuery(function($){
        
        var acc = $(".accordion")
        var subacc = $(".subaccordion");
        var sinacc = $(".singleaccordion");
        var response = $(".response");
                
        var i;
        var j;
        
        for (i = 0; i < acc.length; i++) {
            acc[i].nextElementSibling.style.display = "none";
            acc[i].addEventListener("click", function() {
                closeAllSubAcc();
                //closeAllSinAcc();
                if (this.nextElementSibling.style.display === "none"){
                    closeAllAcc();
                    openAcc(this); 
                }else{
                    closeAcc(this)
                }
            });
        }    
        
        for (i = 0; i < subacc.length; i++) {
            subacc[i].nextElementSibling.style.opacity = 0;
            subacc[i].addEventListener("click", function() {
                if (this.nextElementSibling.style.opacity == 0){
                    //closeAllSinAcc();
                    closeAllSubAcc();
                    openSubAcc(this);
                }else{
                    closeSubAcc(this);
                }
            });
            
        }

        for (i = 0; i < sinacc.length; i++) {
            sinacc[i].nextElementSibling.style.opacity = 0;
            sinacc[i].addEventListener("click", function() {
                closeAllAcc();
                if (this.nextElementSibling.style.opacity == 0){
                    closeAllSubAcc();
                    openSubAcc(this);
                }else{
                    closeAllSubAcc();
                }
            });
        } 
        
        function closeAllAcc(){
            for (j = 0; j < acc.length; j++) {
                if (acc[j].nextElementSibling.style.display === "block") {
                    closeAcc(acc[j]);
                }
            }
        }
        
        function closeAcc(elem){
            elem.classList.remove("active");
            elem.nextElementSibling.style.display = "none";
        }
        
        function openAcc(elem){
            elem.classList.add("active");
            elem.nextElementSibling.style.display = "block";
            scrollToResponse(elem);
        }
        
        function closeAllSinAcc(){
            for (j = 0; j < sinacc.length; j++) {
                if (sinacc[j].nextElementSibling.style.opacity == 1) {
                    closeSubAcc(sinacc[j]);
                }
            }
        }
        
        function closeAllSubAcc(){
            for (j = 0; j < subacc.length; j++) {
                if (subacc[j].nextElementSibling.style.opacity == 1) {
                    closeSubAcc(subacc[j])
                }
            }
            for (j = 0; j < sinacc.length; j++) {
                if (sinacc[j].nextElementSibling.style.opacity == 1) {
                    closeSubAcc(sinacc[j])
                }
            }
        }
        
        function closeSubAcc(elem){
            elem.classList.remove("subactive");
            elem.nextElementSibling.style.opacity = 0;
        }
        
        function openSubAcc(elem){
            elem.classList.add("subactive");
            elem.nextElementSibling.style.opacity = 1;
            response.html(elem.nextElementSibling.innerHTML);
            scrollToResponse(response);
        }
        
        function scrollToResponse(elem){
            let rect = response.get(0).getBoundingClientRect();
            let scrollTotal = rect.top - 100;
            window.scrollBy({top: scrollTotal, left: 0, behavior: "smooth"})     
        }
        
    });
});
