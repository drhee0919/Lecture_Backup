function myFunc() { 
	// 리로딩시 ctrl + F5
	// 이제 여기에서 AJAX를 이용해서 서버 프로그램을 호출해 보아요 
	// 순수 AJAX코드는 너무 복잡하다. 
	// JQuery library를 이용하면 AJAX도 쉽게 구현할 수 있다. → 직관적으로 구현이 가능(한눈에 볼 수 있다.) 
	// 아래의 함수들을 통해서 서버 프로그램을 호출하는데
	// 알려줘야 하는 여러가지 정보들이 있다. (서버 URL, 호출방식...)
	// 이런 정보를 JavaScript 객체화 시켜서 인자로 사용한다. 
	// ex/  { name : "홍길동", age : 20, address : "서울"  }
	// JSON( JavaScript Object Notation ) 
	$.ajax({
		url : "http://localhost:8080/bookSearch/search",
		dataType : "json", //서버가 보내준 JSON문자열을 자바스크립트 객체형태(자료구조)
		                   //형태로 변환 
		data : {
			keyword : $("[type=text]").val() //서버에 데이터 전달하는 부분 
									//검색으로 들어오는 걸 value(.val())로서 받겠다.   
 		},
		success : function(result) {
			//성공하면 서버가 데이터를 보내준다.
			//이 데이터를 함수의 인자로 받을 수 있다. 
			//받은 다음 화면 제어! 
			//result가 문자열이에요.. 문자열처릴르 해서 제목만 뽑아내면 되겠따
			// → 근데 생각보다 어려움 (프로그램이 거지같음, 찾아서 짜르고 추출 ...)
			// 문자열을 직접 처리하는 것은 상당히 좋지 않은 방식 
			//(주석처리) $("div").text(result); (
			// json parsing : 서버가 보내준 JSON문자열을 JavaScript 객체로 변환  
			// $("div").text(result[0].title) //js는 첨자가 0부터 시작, 즉 [1]은 두번째 
			// 결과검색 중 첫번째 타이틀만 빼라
			
			// 찾아온 책 전부 제목만 추출해서 목록으로 출력하라 
			//<ul>
			//	<li>여행가요~</li>
			//	<li>자바와 떠나는 여향</li>
			//</ul>
			// i가 0부터 1씩 증가하면서 result의 길이보다 작을 동안 반복 
			$("#myList").empty(); //기존 목록을 전부 삭제, 검색할때마다 새로운 목록이 형성되게 
			
			for(i=0; i<result.length; i++){
				let title = result[i].title;
				let li = $("<li></li>").text(title)
			// <li> 자바와 떠나는 여행 </li>
				$("#myList").append(li);
			//또는, $("#myList").append($("<li></li>").text(result[i].title));
			}
		}, 
		error : function() {
			alert("뭔가 이상해요!!")
		} // ajax콜이 잘 안됨을 인지시켜줌 
	}); 
}
