package com.example.demo.board.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.board.dto.BoardDTO;
import com.example.demo.board.dto.MemberDTO;
import com.example.demo.board.dto.PostDTO;
import com.example.demo.mapper.BoardMapper;
import com.example.demo.mapper.MemberMapper;

@RestController
@RequestMapping("/boards")
public class BoardController {

	@Autowired
	private BoardMapper boardMapper;
	@Autowired
	private MemberMapper memberMapper;
	
	@PostMapping("/save")
	public ResponseEntity<Map<String, String>> save(@RequestBody BoardDTO board) {
	    System.out.println("제목: " + board.getBoardTitle());
	    System.out.println("작성자 ID: " + board.getMemberId());

	    boardMapper.save(board);

	    Map<String, String> response = new HashMap<>();
	    response.put("message", "저장 완료");
	    return ResponseEntity.ok(response);
	}

	 
	   @GetMapping("/list")
	    public List<BoardDTO> findAll() {
	        return boardMapper.findAll();
	    }

	    @GetMapping("/{id}")
	    public PostDTO findById(@PathVariable Long id) {
	    	BoardDTO board= boardMapper.findById(id);
	    	MemberDTO member = null;
			try {
				member = memberMapper.findById(board.getMemberId());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				 System.out.println("멤버 정보를 찾을 수 없습니다.");
			}
	    	
			String writerName = (member !=null)? member.getMemberName():"알수없음";
			
	        PostDTO post = PostDTO.builder()
	        		       .id(board.getId())
	        			   .boardTitle(board.getBoardTitle())
	        			   .boardContents(board.getBoardContents())
	        			   .createdAt(board.getCreatedAt())
	        			   .writer(writerName)
	        			   .build();
	    	return post;
	    }
}
