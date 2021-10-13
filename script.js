    // memanggil css pada js
    var cssId = 'myCss'; 
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        // link.href = 'styles.css';
        // gunakan css sperti dibawah untuk penggunaan blogger ,
        link.href = 'https://naskahkode.github.io/tes2/styles.css';
        link.media = 'all';
        head.appendChild(link);
    }


// membuat modal pada js
    var inimodal = document.createElement("DIV");
    inimodal.innerHTML = ` <div id="myModal" class="modal">
                            <span class="close g_url">&times;</span>
                            <img class="modal-content ads-img" id="img01"  src="https://naskahkode.github.io/tes2/img.jpg">
                           </div>`;
    // ganti link gambar pada popup modal diatas sesuai kebutuhan

    document.body.appendChild(inimodal);
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    }



// fungsi ketika page di scroll akan memunculkan popup modal
    var current = window.location.href;
    var g_confirm = current.includes('c=1');
    // var go_ads = "/";
    var go_ads = "https://www.google.com";
    // ganti link google diatas sesuai kebutuhan

    $(document).ready(function () {
        if (!g_confirm && !go_ads.includes('#YOUR')) {
            $(window).scroll(function (event) {
                var scroll = $(window).scrollTop();
                // popup akan muncul setelah pada di scroll sebanyak 225px
                if (scroll >= 225) {
                    modal.style.display = "block";
                    // $('#popbox').removeClass('hide');
                }
                
            });
        }



// fungsi ketika tombol close di klik akan membuka tab baru ke google , dan akan meredirect ke parameter url
        $(document).on('click', '.g_url', function (e) {
            e.preventDefault();

            var g_target = current.includes("?") ? current + "&c=1" : current + "?c=1";

            window.open(go_ads, "_blank");
            window.location.href = g_target;
        });



// fungsi ketika popup di klik akan membuka tab baru ke google 
        $(document).on('click', '.ads-img', function (e) {
            e.preventDefault();
            window.open(go_ads, '_blank');
            //opsional
            modal.style.display = "none";
        });
    });
