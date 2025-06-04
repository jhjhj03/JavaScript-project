package com.example.demo.board.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class PostDTO {
	   private Long id;
	    private String boardTitle;
	    private String boardContents;
	    private LocalDateTime createdAt;
	    private String writer;
	    

		public void setId(Long id) {
			this.id = id;
		}
	
		public void setBoardTitle(String boardTitle) {
			this.boardTitle = boardTitle;
		}
		
		public void setBoardContents(String boardContents) {
			this.boardContents = boardContents;
		}
		
		public void setCreatedAt(LocalDateTime createdAt) {
			this.createdAt = createdAt;
		}
		
		public void setWriter(String writer) {
			this.writer = writer;
		} 
}
