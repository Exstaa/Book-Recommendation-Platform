package az.hafizrzazade.bookrecommendation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import az.hafizrzazade.bookrecommendation.model.Message;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer>{

}
