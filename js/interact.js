document.getElementById("interact-btn").onclick = function () { interactCommand() };
//document.getElementById("interact-box").onkeyup = function () { interactSerch() };
document.getElementById("interact-box").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("interact-btn").click();
    }
});

document.getElementById("interact-box").placeholder = "ทำไว้เฉยๆ"

function interactCommand() {
    Swal.fire({
        html: `<b class="copyText-dialog-font" style="font-size: 2rem;"><span style="font-size: 1.5rem;">อย่าซน</span><br>ไอ้สันขวาน<br><span style="font-size: 1.5rem;">ไม่ต้องเล่น</span></b>`,
        showConfirmButton: true,
        confirmButtonText: '<b class="copyText-dialog-font" style="font-size: 1rem;">ขอโทษ</b>',
        confirmButtonColor: 'red',
        background: '#d0d0d0',
        allowOutsideClick: false,
    });

    document.getElementById("interact-box").style = 'display: none;'
    document.getElementById("interact-btn").style = 'display: none;'
}