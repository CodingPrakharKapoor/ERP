package miniproject.erp.service.serviceImpl;
import lombok.AllArgsConstructor;
import miniproject.erp.dao.Student;
import miniproject.erp.dao.StudentUtils;
import miniproject.erp.dto.StudentDto;
import miniproject.erp.repository.AttendanceRepository;
import miniproject.erp.repository.StudentRepository;
import miniproject.erp.repository.StudentUtilsRepository;
import miniproject.erp.repository.TimeTableRepository;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;

import miniproject.erp.service.StudentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {
    private AttendanceRepository attendanceRepository;
    private StudentUtilsRepository studentUtilsRepository;
    private TimeTableRepository timeTableRepository;
    private StudentRepository studentRepository;
    private ModelMapper modelMapper;


    @Override
    public ResponseEntity<?> getAttendanceByStudentRollNo(int studentRollNo) {
        return ResponseEntity.ok(attendanceRepository.findByStudentRollNo(studentRollNo));
    }

    @Override
    public ResponseEntity<?> getSectionId(int studentRollNo) {
        StudentUtils studentUtils = studentUtilsRepository.findByStudentRollNo(studentRollNo);
        if(studentUtils == null) {
            return ResponseEntity.badRequest().body("Student not found");
        }
        return ResponseEntity.ok(studentUtils.getSection().getSectionId());
    }

    @Override
    public ResponseEntity<?> getStudentTimetable(int studentRollNo) {
        ResponseEntity<?> sectionResponse = getSectionId(studentRollNo);
        if(sectionResponse.getStatusCode().is4xxClientError()) {
            return sectionResponse;
        }
        Integer sectionId = (Integer) sectionResponse.getBody();
        return ResponseEntity.ok(timeTableRepository.findBySection_SectionId(sectionId));
    }

    @Override
    public ResponseEntity<?> getStudentRollNos() {
        List<Integer> studentRollNos = studentRepository.findAllRollNos();
        return ResponseEntity.ok(studentRollNos);
    }

    @Override
    public ResponseEntity<?> getStudent(int studentRollNo) {
        Student student = studentRepository.findById(studentRollNo).orElse(null);
        if(student == null) {
            return ResponseEntity.badRequest().body("Student not found");
        }
        StudentDto studentDto = modelMapper.map(student, StudentDto.class);
        return ResponseEntity.ok(studentDto);
    }

    @Override
    public ResponseEntity<?> getAllStudentUtils() {
        List<StudentUtils> studentUtilsList = studentUtilsRepository.findAll();
        return ResponseEntity.ok(studentUtilsList);
    }

    @Override
    public ResponseEntity<?> getAllStudent() {
        List<Student> studentList = studentRepository.findAll();
        return ResponseEntity.ok(studentList);
    }
}
