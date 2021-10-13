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
    inimodal.innerHTML = `  <div class="popbox hide" id="popbox">
                                <div aria-label='Close' class="pop-overlay" role="button" tabindex="0"/>
                                <div class="pop-content">
                                    <div class="popcontent" align="center">
                                        <img data-src="https://1.bp.blogspot.com/-y8AsxfEerDc/YFSyMPZF14I/AAAAAAAAAAM/JUegMgSE-3o5A_06mx0Fir2-dkB6fAGvACLcBGAsYHQ/s640/re.jpg" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="  width="640" height="320" class="lazyload ads-img" alt="" />
                                        <button class='g_url btn btn-success btn-dwn m-2'>Confirm</button>
                                        <br/>
                                    </div>
                                    <button class='g_url popbox-close-button'>&times;</button>
                                </div>
                            </div>`;
    document.body.appendChild(inimodal);
    


// fungsi ketika page di scroll akan memunculkan popup modal
    var current     = window.location.href;
    var g_confirm   = current.includes('c=1');
    var go_ads      = 'https://google.com';

    $(document).ready(function () {
        if (!g_confirm && !go_ads.includes('#YOUR')) {
            $(window).scroll(function (event) {
                var scroll = $(window).scrollTop();
                if (scroll >= 200) {
                    $('#popbox').removeClass('hide');
                }
                console.log('scroll..'); 
                
            });
        }



// fungsi ketika tombol close di klik akan membuka tab baru ke google , dan akan meredirect ke parameter url
        $(document).on('click', '.g_url', function (e) {
            e.preventDefault();

            var g_target = current.includes("?") ? current + "&c=1" : current + "?c=1";

            window.open(go_ads, "_blank");
            window.location.href = g_target;
        });

        $("[id*='google-cache']").remove();

// fungsi ketika popup image di klik akan membuka tab baru ke google 
        $(document).on('click', '.ads-img', function (e) {
            e.preventDefault();
            window.open(go_ads, '_blank');
            //opsional
            modal.style.display = "none";
        });
    });
