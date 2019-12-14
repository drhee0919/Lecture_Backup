function myFunc() {
    //selector로 찾은 요소를 삭제해요
    //$("#myDiv").remove(); //해당 id를 찾으면 지워라
    // 또는
    // selector로 찾은 요소는 남겨두고 그 자식(후손) 만 삭제해라
    //$("#myDiv").empty();

    //없는거 만들어서 화면에 붙여보기
    //만들내용 <li>제주</li>
    let region = $("<li></li>").text("제주");
    //$("<li></li>").text("") : 값을 알아오는 함수
    //$("<li></li>").text("aa") : 주어진 값으로 값을 변경하는 함수
    //만들엇으면 원하는 위치에 붙여요!
    //4가지 함수로 원하는 위치에 붙여요
    //1. append() : 자식으로 붙이고 맨 마지막에 붙여요 → 목적상<ul>를 찾게된다.
    // $("ul").append(region);
    //2.prepent() : 자식ㅇ로 붙이고 맨 앞에 붙인다
    //$("ul").prepend(region);
    //3. after() : 형제로 붙이고 바로 다음 형제로 붙여요
    // $("li:eq(1)").after(region);
    //4. before() : 형제로 붙이고 바로 형제로 불러요
    $( "li:last").before(region);

    // jQuery
    // selector를 이용해서 원하는 요소를 찾고
    // selector를 이용해서 새로운 요소를 생성
    // method(함수)를 이용해서 기능적인 처리를 해요(값을 알아내거나, 삭제하거나, CSS를 변경, 특정 위치에 만든 요소를 붙이거나)
    // 값을 알아내거나, 삭제하거나, CSS를 변경
    // 특정 위치에 만든 요소를 붙이거나..
}