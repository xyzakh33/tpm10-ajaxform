$(document).ready(function () {
    $("#formSapa").submit(function (event) {
        event.preventDefault(); 

        let name = $("#name").val().trim();

        // Validasi input kosong
        if (name === "") {
            $("#response").html("<span class='text-danger'>Nama tidak boleh kosong.</span>");
            return;
        }

        $.ajax({
            url: "sapa.php", 
            type: "POST",
            data: { name: name },
            success: function (response) {
                $("#response").html(response); // Tampilkan respons dari server
            },
            error: function (xhr, status, error) {
                console.error("Error:", error); // Log error untuk debugging
                $("#response").html("<span class='text-danger'>Terjadi kesalahan: " + error + "</span>");
            }
        });
    });
});
