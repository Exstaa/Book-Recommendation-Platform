package az.hafizrzazade.bookrecommendation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.hafizrzazade.bookrecommendation.model.Message;
import az.hafizrzazade.bookrecommendation.repository.MessageRepository;

@RestController
@RequestMapping("/api/messages/")
@CrossOrigin(origins="http://127.0.0.1:5500")
public class MessageController {
  
	@Autowired
	private MessageRepository messageRepo;
	
	@PostMapping("addMessage")
    public ResponseEntity<Message> addMessage(@RequestBody Message message){
		Message resultMessage = messageRepo.save(message);
		return new ResponseEntity<Message>(resultMessage,HttpStatus.CREATED);
	}
	
	@GetMapping("getMessages")
	public ResponseEntity<List<Message>> getAllMessages(){
		List<Message> messages = messageRepo.findAll();
		return new ResponseEntity(messages,HttpStatus.OK);
	}
}
