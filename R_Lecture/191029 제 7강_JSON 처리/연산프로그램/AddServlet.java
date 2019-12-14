package com.test;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AddServlet
 */
@WebServlet("/add")
public class AddServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//클라이언트가 프로그램을 호출하면 이 부분이 실행된다. 
		//1. 입력(없음)
		//2. 로직처리(없음)
		//3. 처리된 결과를 출력 
		//   → 클라이언트에게 결과로 전달된 내용이 어떤 내용인지 알려줘야 한다. 
		response.setContentType("text/plain; charset=UTF-8"); 
		//(주석처리) response.getWriter().append("Served at: ").append(request.getContextPath());
		// 클라이언트에게 결과를 전달하기 위한 데이터 전달 통로를 하나 생성 
		PrintWriter out = response.getWriter();
		// 통로를 통해서 데이터를 클라이언트에게  전달한다. 
		out.println("소리없는 아우성!!");
		// 데이터 전달이 끝났ㅇ면 통로를 닫는다. 
		out.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
