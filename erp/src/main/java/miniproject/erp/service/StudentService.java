package miniproject.erp.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface StudentService {
    ResponseEntity<?> getAttendanceByStudentRollNo(int studentRollNo);
    ResponseEntity<?> getSectionId(int studentRollNo);
    ResponseEntity<?> getStudentTimetable(int studentRollNo);
    ResponseEntity<?> getStudentRollNos();
    ResponseEntity<?> getStudent(int studentRollNo);
    ResponseEntity<?> getAllStudentUtils();
    ResponseEntity<?> getAllStudent();

}
