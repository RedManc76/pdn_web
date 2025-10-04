document.getElementById('submit_btn').addEventListener('click', function() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    sof = document.getElementById('sof')
    distinctive = document.getElementById('distinctive')
    msg_box = document.getElementById('msg_box')
    error_msg = document.getElementById("error_msg")
    email = document.getElementById('email-address').value
    church_name = document.getElementById('church-name').value
    elder_name = document.getElementById('elder-name').value
    if (sof.checked && distinctive.checked) {
        if (emailPattern.test(email)){
            if (church_name != 0 && elder_name != 0){
                document.getElementById('fs-frm').submit();
            }else{   
                error_msg.innerHTML = "Please enter your Church and Elder's names";
                msg_box.style.display = 'inline-flex';
            }
        }else{  
            error_msg.innerHTML = "Please enter a valid email address";
            msg_box.style.display = 'inline-flex';
        }
    }else{
        error_msg.innerHTML = "Please commit to all our requirements to continue";
        msg_box.style.display = 'inline-flex';
    }
});

document.getElementById('ok_btn').addEventListener('click', function() {
    msg_box = document.getElementById('msg_box')
    msg_box.style.display = 'none';
});