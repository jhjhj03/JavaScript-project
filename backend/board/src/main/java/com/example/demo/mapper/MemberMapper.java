package com.example.demo.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.example.demo.board.dto.MemberDTO;

@Mapper
public interface MemberMapper {
	 // 회원 저장
    void save(MemberDTO memberDTO);

    // 전체 회원 조회
    List<MemberDTO> findAll();

    // 이메일로 회원 조회
    MemberDTO findByEmail(String memberEmail);
    
    //memberID로 회원조회
    MemberDTO findById(Long id);
}
