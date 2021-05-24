function validateName(name) {
    // const re = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
    const re = /^[A-zÀ-ú\s,.'-]+$/;
    return re.test(name);
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateCURP(curp) {
    const re = /^[A-Z]{4}[0-9]{6}(H|M)[A-Z]{5}([A-Z]|[0-9]){2}/;
    return re.test(curp);
}

function validateUser(type) {
    if (type === '1' || type === '2') return true;
    return false
}

const valid = {}

valid.name = (name) => {
    // Validate name
    if (validateName(name.val())) {
        name.removeClass("is-invalid");
        name.addClass("is-valid");
        return true;
    } else {
        name.removeClass("is-valid");
        name.addClass("is-invalid");
        return false;
    }
};

valid.email = (email) => {
    // Validate email
    if (validateEmail(email.val())) {
        email.removeClass("is-invalid");
        email.addClass("is-valid");
        return true;
    } else {
        email.removeClass("is-valid");
        email.addClass("is-invalid");
        return false;
    }
};

valid.userType = (userType) => {
    // Validate user type
    if (validateUser(userType.val())) {
        userType.removeClass("is-invalid");
        userType.addClass("is-valid");
        return true;
    } else {
        userType.removeClass("is-valid");
        userType.addClass("is-invalid");
        return false;
    }
};

valid.curp = (curp) => {
    // Validate CURP
    if (validateCURP(curp.val())) {
        curp.removeClass("is-invalid");
        curp.addClass("is-valid");
        return true;
    } else {
        curp.removeClass("is-valid");
        curp.addClass("is-invalid");
        return false;
    }
};

valid.password = (password) => {
    // Validate password
    if (password.val() && password.val() !== '') {
        password.removeClass("is-invalid");
        password.addClass("is-valid");
        return true;
    } else {
        password.removeClass("is-valid");
        password.addClass("is-invalid");
        return false;
    }
};

valid.repeatPassword = (password, repeatPassword) => {
    // Validate repeat password
    if (repeatPassword.val() && repeatPassword.val() !== '') {
        repeatPassword.removeClass("is-invalid");
        repeatPassword.addClass("is-valid");

        // Validate passwords
        if (repeatPassword.val() === password.val()) {
            repeatPassword.removeClass("is-invalid");
            repeatPassword.addClass("is-valid");
            return true;
        } else {
            repeatPassword.removeClass("is-valid");
            repeatPassword.addClass("is-invalid");
            return false;
        }
    } else {
        repeatPassword.removeClass("is-valid");
        repeatPassword.addClass("is-invalid");
        return false;
    }
};

valid.terms = (terms) => {
    // Validate terms
    if (terms.is(":checked")) {
        terms.removeClass("is-invalid");
        terms.addClass("is-valid");
    } else {
        terms.removeClass("is-valid");
        terms.addClass("is-invalid");
    }
};