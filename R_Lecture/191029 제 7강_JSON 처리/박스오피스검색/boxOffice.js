function myFunc() {
    // Open API에 대한 Ajax 호출, 결과를 가져와서 화면에 적절하게 목록으로 출력이 목적
    // sample url
    // url :  http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json
    // 발급받은 키값: ?key=180bd775952d53adb92d8dcf2c6fd2d4
    // 입력받는 날짜: &targetDt=20120101

    $.ajax( {
        url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
        data : {
            key :"180bd775952d53adb92d8dcf2c6fd2d4",
            targetDt : $("#searchDate").val()
             //서버에 데이터 전달하는 부분

               },
        dataType : "json",



                success : function (result) {
                    //alert("성공성공!!")
                    let movie = result.boxOfficeResult.dailyBoxOfficeList;
                    $("#movieList").empty();
                    for(i=0; i<movie.length; i++){
                        let title = movie[i].movieNm;
                        let li = $("<li></li>").text(title);
                                 $("#movieList").append(li);
                        //또는, $("#myList").append($("<li></li>").text(result[i].title));
                    }
                },
                error : function () {
                    alert("뭔가 이상해요!!")

                }
                       }


          )
}