/* -------------------------Eventos Centro Mateo------------------------- */
/* -------------------------Eventos Centro Mateo------------------------- */
/* -------------------------Eventos Centro Mateo------------------------- */
/* -------------------------Eventos Centro Mateo------------------------- */
/* -------------------------Eventos Centro Mateo------------------------- */

/* fitText(document.querySelector("p"), 0.38);


window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
}); */
_gCalFlow_debug = true;

var $ = jQuery;
  $(function() {
    $('#gcf-simple').gCalFlow({
      calid: '35b2qba53usalutistin2t916o@group.calendar.google.com',
      apikey: 'AIzaSyB4x70PYpmslKqPy_fvvoMMTKADc9UdifE'
    });
    $('#gcf-design').gCalFlow({
      calid: '35b2qba53usalutistin2t916o@group.calendar.google.com',
      apikey: 'AIzaSyB4x70PYpmslKqPy_fvvoMMTKADc9UdifE',
      maxitem: 10
    });
    $('#gcf-ticker').gCalFlow({
        calid: '35b2qba53usalutistin2t916o@group.calendar.google.com',
        apikey: 'AIzaSyB4x70PYpmslKqPy_fvvoMMTKADc9UdifE',
        maxitem: 25,
        scroll_interval: 5 * 1000,
        daterange_formatter: function (start_date, end_date, allday_p) {
        function pad(n) { return n < 10 ? "0"+n : n; }
        var monthname = [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ];
        return pad(start_date.getDate()) + " " + pad(monthname[start_date.getMonth()]) + " - " + pad(end_date.getDate()) + " " + pad(monthname[end_date.getMonth()]);
        },
    });
    $('#gcf-custom-template').gCalFlow({
      calid: '35b2qba53usalutistin2t916o@group.calendar.google.com',
      apikey: 'AIzaSyB4x70PYpmslKqPy_fvvoMMTKADc9UdifE',
      maxitem: 3,
      scroll_interval: 5 * 1000,
      mode: 'updates',
      daterange_formatter: function (start_date, end_date, allday_p) {
      function pad(n) { return n < 10 ? "0"+n : n; }
      var monthname = [ "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic" ];
      return "<h2 class=\"no-margin\">" + pad(start_date.getDate()) + "<br><span>" + pad(monthname[start_date.getMonth()]) + "</span></h2>" + "<br>" + "<h3 class=\"no-margin\">" + pad(end_date.getDate()) + "<br><span>" + pad(monthname[end_date.getMonth()]) + "</span></h3>";
      },
    });
  });