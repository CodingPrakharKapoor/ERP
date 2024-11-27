package miniproject.erp.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface StudentService {
    ResponseEntity<?> getAttendanceByStudentRollNo(int studentRollNo);
    
}
