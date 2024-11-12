package miniproject.erp.service.serviceImpl;
import lombok.AllArgsConstructor;
import miniproject.erp.repository.AttendanceRepository;
import org.springframework.http.ResponseEntity;

import miniproject.erp.service.StudentService;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class StudentServiceImpl implements StudentService {
    AttendanceRepository attendaceRepository;

    @Override
    public ResponseEntity<?> getAttendanceByStudentRollNo(int studentRollNo) {
        return ResponseEntity.ok(attendaceRepository.findByStudentRollNo(studentRollNo));
    }
    
}
