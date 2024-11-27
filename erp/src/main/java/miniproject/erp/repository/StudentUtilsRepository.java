package miniproject.erp.repository;

import miniproject.erp.dao.StudentUtils;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentUtilsRepository extends JpaRepository<StudentUtils, Integer> {

    StudentUtils findByStudentRollNo(int studentRollNo);

    @Query("SELECT s.cpi FROM StudentUtils s")
    List<Float> findAllCpi();
}
