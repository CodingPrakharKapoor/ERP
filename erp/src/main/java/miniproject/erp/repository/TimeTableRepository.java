package miniproject.erp.repository;

import miniproject.erp.dao.TimeTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TimeTableRepository extends JpaRepository<TimeTable, Integer> {
    List<TimeTable> findBySection_SectionId(Integer sectionId);
}
