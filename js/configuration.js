function showImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
            console.log(e.target.result);
            $("#showImage").attr("src", e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function() {
    // Show modify
    $("#modify").click(function(e) {
        e.preventDefault();

        // Hide buttons
        $(this).addClass("d-none");
        
        // Show buttons
        $("#save").removeClass("d-none");
        $("#cancel").removeClass("d-none");
        $("#changeImage").parent().removeClass("d-none");
        

        // Remove attribute readonly
        $("#name").attr("readonly", false);
        $("#lastName").attr("readonly", false);
        $("#email").attr("readonly", false);
        $("#password").attr("readonly", false);
    });

    // Hide modify
    $("#cancel").click(function(e) {
        e.preventDefault();
        
        // Hide buttons
        $(this).addClass("d-none");
        $("#save").addClass("d-none");
        $("#changeImage").parent().addClass("d-none");
        
        // Show buttons
        $("#modify").removeClass("d-none");
        
        // Add attribute readonly
        $("#name").attr("readonly", true);
        $("#lastName").attr("readonly", true);
        $("#email").attr("readonly", true);
        $("#password").attr("readonly", true);
    });

    // Show changed image
    $("#changeImage").change(function() {
        showImage(this);
    });

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

    $("#password").on("change paste keyup", function() {
        const password = $(this);
        if (password.val() !== '') valid.password(password);
    });
});