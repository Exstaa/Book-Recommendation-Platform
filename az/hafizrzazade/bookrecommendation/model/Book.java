package az.hafizrzazade.bookrecommendation.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "books")
public class Book {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
    @Column(name = "title")
	private String title;
    
    @Column(name = "author")
	private String author;
    
    @Column(name = "genre")
	private String genre;
    
    @Column(name = "sub_genre")
	private String subGenre;
    
    @Column(name = "type")
	private String type;
    
    @Column(name = "rating")
	private double rating;
    
    @Column(name = "url")
    private String url;
}
