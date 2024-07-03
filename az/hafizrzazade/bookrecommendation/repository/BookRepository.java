package az.hafizrzazade.bookrecommendation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import az.hafizrzazade.bookrecommendation.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer>{

    @Query("SELECT b FROM Book b WHERE b.genre LIKE %:genre%")
    public List<Book> findAllByGenre(@Param("genre") String genre);

    @Query("SELECT b FROM Book b WHERE b.author LIKE %:author%")
    public List<Book> findAllByAuthor(@Param("author") String author);

    @Query("SELECT b FROM Book b WHERE b.subGenre LIKE %:subGenre%")
    public List<Book> findAllBySubGenre(@Param("subGenre") String subGenre);

    @Query("SELECT b FROM Book b WHERE b.type LIKE %:type%")
    public List<Book> findAllByType(@Param("type") String type);

    @Query("SELECT b FROM Book b WHERE b.title LIKE %:title%")
    public List<Book> findAllByTitle(@Param("title") String title);
}
