package miniproject.erp.repository;

import miniproject.erp.dao.Attendance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Integer> {
    List<Attendance> findByStudentRollNo(int studentRollNo);
    
}
