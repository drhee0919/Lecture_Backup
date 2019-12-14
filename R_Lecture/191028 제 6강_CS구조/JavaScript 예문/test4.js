function overFunc() {
    //$(this) : 현재 이벤트가 일어나서 선택된 요소 (jQuery기능)
    //$(event.target) : javascript 자체 기능 자바스크립트의 이벤트 중 클릭한 요소를 가져오는 방법으로 event 객체의 target 또는 currentTarget 프로퍼티를 사용
    // 이미 정의되어 있는 class 를 적용해요..
    //$(this).removeClass("normal");
    //$(this).addClass("enter");
    $(event.target).addClass("enter");
}

function leaveFunc() {
    //$(this).removeClass("enter");
    //$(this).addClass("leave");
    $(event.target).removeClass("enter");
}

