function validateLogin() {
    let errors = 0;
    const email = $("#email");
    const password = $("#password");
    
    // Validate email
    if (!valid.email(email)) errors++;

    // Validate password
    if (!valid.password(password)) errors++;

    if (errors > 0) return false;
    return true;
}

function validateRegister() {
    let errors = 0;
    const name = $("#name");
    const lastName = $("#lastName");
    const email = $("#email");
    const sex = $("input[name=sex]:checked");
    const userType = $("#userType");
    const curp = $("#curp");
    const password = $("#password");
    const repeatPassword = $("#repeatPassword");
    const terms = $("#terms");


    // Validate name
    if (!valid.name(name)) errors++;

    // Validate last name
    if (!valid.lastName(lastName)) errors++;

    // Validate email
    if (!valid.email(email)) errors++;

    // Validate sex

    // Validate user type
    if (!valid.userType(userType)) errors++;
    
    // Validate CURP
    if (!valid.curp(curp)) errors++;

    // Validate password
    if (!valid.password(password)) errors++;

    // Validate repeat password
    if (!valid.repeatPassword(password, repeatPassword)) errors++;

    // Validate terms
    if (!valid.terms(terms)) errors++;

    if (errors > 0) return false;
    return true;
}

$(document).ready(function() {
    // Change input
    $("#userType").change(function() {
        const selected = $(this).val();
        if (selected == '1') {
            $("#cct").parent().addClass("d-none");
            $("#curp").parent().removeClass("d-none");
        } else if (selected == '2') {
            $("#curp").parent().addClass("d-none");
            $("#cct").parent().removeClass("d-none");
        }
    });
    
    $("#userType").val("1");

    $("#name").on("change paste keyup", function() {
        const name = $(this);
        valid.name(name);
    });
    
    $("#lastName").on("change paste keyup", function() {
        const lastName = $(this);
        valid.name(lastName);
    });
    
    $("#email").on("change paste keyup", function() {
        const email = $(this);
        valid.email(email);
    });
    
    $("#userType").on("change keyup", function() {
        const userType = $(this);
        valid.userType(userType);
    });
    
    $("#curp").on("change paste keyup", function() {
        const curp = $(this);
        valid.curp(curp);
    });
    
    $("#password").on("change paste keyup", function() {
        const password = $(this);
        valid.password(password);
    });
    
    $("#repeatPassword").on("change paste keyup", function() {
        const password = $("#password");
        const repeatPassword = $(this);
        valid.repeatPassword(password, repeatPassword);
    });
    
    $("#terms").on("change keyup", function() {
        const terms = $(this);
        valid.terms(terms);
    });    
});
