package com.example.demo.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import com.example.demo.board.dto.BoardDTO;

@Mapper
public interface BoardMapper {
	void save(BoardDTO boardDTO);
    List<BoardDTO> findAll();
    BoardDTO findById(Long id);
}
