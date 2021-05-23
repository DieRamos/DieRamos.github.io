(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics_debug.js','ga');
ga('create', 'UA-12345-6', 'auto');
 
window.ga_debug = {trace: true};

ga('send', {
  hitType: 'pageview',
  page: Location.pathname
});

var entreEmContato = document.getElementById("contatoId");
entreEmContato.addEventListener("click", function(event) {
    ga('entreEmContato.send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel:  'link_externo'
    });
});

var downloadPdf = document.getElementById("downloadPdfId");
downloadPdf.addEventListener("click", function(event) {
    ga('downloadPdf.send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel:  'download_pdf'
    });
});
