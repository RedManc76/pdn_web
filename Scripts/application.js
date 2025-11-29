document.getElementById('submit_btn').addEventListener('click', function() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    sof = document.getElementById('sof')
    church = document.getElementById('church')
    distinctive1 = document.getElementById('distinctive1')
    distinctive2 = document.getElementById('distinctive2')
    distinctive3 = document.getElementById('distinctive3')
    msg_box = document.getElementById('msg_box')
    error_msg = document.getElementById("error_msg")
    email = document.getElementById('email-address').value
    full_name = document.getElementById('full-name').value
    if (church.checked && sof.checked && distinctive1.checked && distinctive2.checked && distinctive3.checked) {
        if (emailPattern.test(email)){
            if (full_name != 0){
                document.getElementById('fs-frm').submit();
            }else{   
                error_msg.innerHTML = "Please enter your full name";
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