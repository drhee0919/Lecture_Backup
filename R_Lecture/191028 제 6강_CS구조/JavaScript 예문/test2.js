function myFunc() {
    // checkbox에서 선택된 지역을 console에 출력하기
   let data = $("[type=checkbox]:checked + span").text(); //체크된 것만 선택되도록 찾아주기
    console.log(data);
}

// 기본적인 selector는 정리해보아요
// method, event 처리 후술