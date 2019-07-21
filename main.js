
$(function() {


    $(".map_amanogawasou").on("click", function() {
        $('.left_map_touch-point').html('<div class="touch_map">■</div>').hide().fadeIn(400);
        $('.touch_map').css({
            'position':'absolute','left':'525px','top':'220px'
    });
        $(".right-info_section").html('<div class="right-info_title"><h4>天川荘</h4></div><img src="img/amanogawasou/amanogawasou-2.jpg"><img src="img/amanogawasou/amanogawasou.jpeg"><div class="right-info_text"><p>もともとは休憩場所だった東屋を改装し、足湯として新たにオープン。囲いの板塀や腰掛け板にはヒノキを、湯口には小川の石をあしらった清涼感ある造りで、一度に16人ほどが並んで利用できます。</p></div>').hide().fadeIn(400);
    });




    $(".masaki_ryokan").on("click", function() {
        $('.left_map_touch-point').html('<div class="touch_map">■</div>').hide().fadeIn(400);
        $('.touch_map').css({
            'position':'absolute','left':'405px','top':'390px'
    });
        $(".right-info_section").html('<div class="right-info_fade-in"><div class="right-info_title"><h4>政喜旅館</h4></div><img src="img/masaki_ryokan/masaki_ryokan2.jpeg"><img src="img/masaki_ryokan/masaki_ryokan1.jpeg"><div class="right-info_text"><p>ここ10年は川底から自然に湧き出す奇跡の名湯を、食前酒代わりの一杯や料理にも活用。温泉しゃぶしゃぶは作さくしゅう州牛に次いで、月間の出荷頭数が20頭に限られた千屋牛も堪能できるように。</p></div></div>').hide().fadeIn(400);
    });

});




