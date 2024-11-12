package miniproject.erp.controller;

import miniproject.erp.service.StudentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
public class StudentController {
    StudentService studentService;
    @GetMapping("/attendance/{studentRollNo}")
    ResponseEntity<?> getAttendanceByStudentRollNo(@PathVariable int studentRollNo) {
        return studentService.getAttendanceByStudentRollNo(studentRollNo);
    }
}
