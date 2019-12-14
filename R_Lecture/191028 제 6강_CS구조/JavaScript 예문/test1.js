function myFunc() {
    // alert("실행되요!!"); //클릭시 주의 메시지 출력으로 구동여부 확인
    // 현재 선택된 select 옵션을 찾아야 함 입력상자내 선택이 되어 함.
     let region = $("option:selected").text();
    $("[type=text]").val(region); // 옵션 태그

}