package miniproject.erp.repository;

import miniproject.erp.dao.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
    @Query("SELECT s.rollNo FROM Student s")
    List<Integer> findAllRollNos();

}
