function myFunc() {
   //let data = $("[type=checkbox]:checked + span").text(); //체크된 것만 선택되도록 찾아주기
   // console.log(data);
    //화면에 출력된 상태를 보면 한 줄에 출력된다. (조건 : 스팬태그 달려있는 택스트, 구분없이 하나의 문자열로 출력됨)
    // 서울입니다.
    // 인천입니다.
    // 부산입니다.
    // 광주입니다.
    // test2 와 다르게 선택된 각각의 요소를 하나하나 따로 처리하고 싶을 떄
    $("[type=checkbox]:checked + span").each(function(idx,item){  //idx : 순번(0,1,2,3, .. )
                                                                                      //item : 현재 선택된 요소
    console.log($(item).text() + "입니다.");
})};

// 기본적인 selector는 정리해보아요
// method, event 처리 후술