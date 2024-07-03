package az.hafizrzazade.bookrecommendation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.hafizrzazade.bookrecommendation.model.Book;
import az.hafizrzazade.bookrecommendation.repository.BookRepository;

@RestController
@RequestMapping("/api/books/")
@CrossOrigin(origins="http://127.0.0.1:5500")
public class BookController {
	@Autowired
	private BookRepository bookRepo;
	
	@GetMapping("byTitle/{title}")
	public ResponseEntity<Book> getBookByTitle(@PathVariable String title){
        List<Book> book = bookRepo.findAllByTitle(title);
        return new ResponseEntity(book, HttpStatus.OK);
	}
	
	@GetMapping("byType/{type}")
	public ResponseEntity<List<Book>> getAllBooksByType(@PathVariable String type){
		List<Book> booksByType = bookRepo.findAllByType(type); 
		return new ResponseEntity(booksByType, HttpStatus.OK);
	}
	@GetMapping("byGenre/{genre}")
	public ResponseEntity<List<Book>> getAllBooksByGenre(@PathVariable String genre){
		List<Book> booksByGenre = bookRepo.findAllByGenre(genre); 
		return new ResponseEntity(booksByGenre, HttpStatus.OK);
	}
	@GetMapping("bySubGenre/{subGenre}")
	public ResponseEntity<List<Book>> getAllBooksBySubGenre(@PathVariable String subGenre){
		List<Book> booksBySubGenre = bookRepo.findAllByGenre(subGenre); 
		return new ResponseEntity(booksBySubGenre, HttpStatus.OK);
	}
	@GetMapping("byAuthor/{author}")
	public ResponseEntity<List<Book>> getAllBooksByAuthor(@PathVariable String author){
		List<Book> booksByAuthor = bookRepo.findAllByAuthor(author);
		return new ResponseEntity(booksByAuthor, HttpStatus.OK);
	}
}
