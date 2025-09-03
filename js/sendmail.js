jQuery(document).ready(function ($) {
    // Form Validation
    $("#contact-form").validate({
        errorPlacement: function (error, element) {
            error.insertAfter(element); // Standard error placement
        },
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name."
            },
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email address."
            },
            message: {
                required: "Please enter your message or query."
            }
        }
    });

    // Form Submit
    $("#contact-form").submit(function (event) {
        event.preventDefault();

        if ($("#contact-form").valid()) {
            $("#zi-submit").prop('disabled', true).text('Submitting...');

            var formData = new FormData(this);

            $.ajax({
                type: "POST",
                url: "form.php",
                data: formData,
                processData: false,
                contentType: false,
                success: function (response) {
                    $('#contact-form')[0].reset();
                    var result = JSON.parse(response);

                    $("#zi-submit").text('Submit').prop('disabled', false);

                    if (result.success == true) {
                        $('#successSend').removeClass('d-none');
                        setTimeout(() => {
                            $('#successSend').addClass('d-none');
                        }, 10000);
                    } else {
                        $('#errorSend').removeClass('d-none');
                        setTimeout(() => {
                            $('#errorSend').addClass('d-none');
                        }, 5000);
                    }
                },
                error: function () {
                    $("#zi-submit").text('Submit').prop('disabled', false);
                    $('#errorSend').removeClass('d-none');
                    setTimeout(() => {
                        $('#errorSend').addClass('d-none');
                    }, 5000);
                }
            });
        }
    });
});
