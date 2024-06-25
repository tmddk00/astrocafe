$(document).ready(function(){ // html 태그를 다 읽었다면 문서가 준비되면
    /* ================== 헤더 gnb ================== */
    const header = $('#header')
    const gnb = $('#gnb')
    const gnbLi = gnb.children('li')
    const depth1 = gnbLi.children('a.depth1')
    const depth2 = gnbLi.children('.depth_wrap')

    console.log(depth2)

    gnbLi.on('mouseenter', function(){
        header.addClass('on');
        depth2.stop().fadeIn()
        //$(this).children().fadeIn();
    })
    gnbLi.on('mouseleave', function(){
        header.removeClass('on');
        depth2.stop().fadeOut()
    })

    /* ================== 소식알림 탭 메뉴 ================== */
    const tabLi = $('#news .tab_menu li')
    const tabMn = tabLi.children('a')
    const tabCon = $('#news .tab_con .con')

    console.log('탭 콘텐츠들', tabCon)
    
    tabLi.on('click' , function(e){
        e.preventDefault();
        const href = $(this).children().attr('href')
        tabCon.hide() // 전체 탭 콘텐츠를 다 안보이게 하고
        $(href).show() // 선택된 탭 콘텐츠만 열어준다

        tabLi.removeClass('on') // 전체 탭 메뉴 li의 'on' 클래스를 제거하고
        $(this).addClass('on') // 클릭한 탭 메뉴 li에 'on' 클래스 추가


    
        console.log('href 속성 값 확인', $(this).children('a').attr('href') )
        console.log('href 변수에 들어있는 값', href)

        console.log('이벤트 관련 정보확인', e)

    })

    console.log('탭 li', tabLi)
    console.log('탭 a' , tabMn)

    
    /* ================== 스와이퍼 설정 ================== */
    const swiper = new Swiper('#main_slide', {
        autoplay: {
            delay: 3000, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
            loop: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


})