package com.example.demo.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.board.dto.MemberDTO;
import com.example.demo.mapper.MemberMapper;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/members")
public class MemberController {

	@Autowired
	private MemberMapper memberMapper;
	
	@PostMapping("/save")
	public ResponseEntity<String> save(@RequestBody MemberDTO memberDto){
		memberMapper.save(memberDto);
		 return ResponseEntity.ok("저장 완료");
	}
	
	@PostMapping("/login")
	public ResponseEntity<MemberDTO> login(@RequestBody MemberDTO memberDto,  HttpSession session){
		MemberDTO member = memberMapper.findByEmail(memberDto.getMemberEmail());
		if(member == null || !memberDto.getMemberPassword().equals(member.getMemberPassword())) {
			throw new IllegalArgumentException("이메일 또는 비번이 잘못됨");
		}

		return ResponseEntity.ok(member);
	}
}

