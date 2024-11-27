package miniproject.erp.controller;

import lombok.AllArgsConstructor;
import miniproject.erp.service.StudentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:5173")
@AllArgsConstructor
public class StudentController {

    private StudentService studentService;

    @GetMapping("/attendance/{studentRollNo}")
    ResponseEntity<?> getAttendanceByStudentRollNo(@PathVariable int studentRollNo) {
        return studentService.getAttendanceByStudentRollNo(studentRollNo);
    }

    @GetMapping("/section/{studentRollNo}")
    ResponseEntity<?> getSectionId(@PathVariable int studentRollNo) {
        return studentService.getSectionId(studentRollNo);
    }

    @GetMapping("/timetable/{studentRollNo}")
    ResponseEntity<?> getStudentTimetable(@PathVariable int studentRollNo) {
        return studentService.getStudentTimetable(studentRollNo);
    }

    @GetMapping("/rollnos")
    ResponseEntity<?> getStudentRollNos() {
        return studentService.getStudentRollNos();
    }

    @GetMapping("/{studentRollNo}")
    ResponseEntity<?> getStudent(@PathVariable int studentRollNo) {
        return studentService.getStudent(studentRollNo);
    }

    @GetMapping("/allStudentUtils")
    ResponseEntity<?> getAllStudentUtils() {
        return studentService.getAllStudentUtils();
    }

    @GetMapping("/allStudent")
    ResponseEntity<?> getAllStudent() {
        return studentService.getAllStudent();
    }
}
