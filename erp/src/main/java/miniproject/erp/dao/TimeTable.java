package miniproject.erp.dao;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "timetable")
public class TimeTable {
    @Id
    @Column(name = "timetable_id")
    private Integer timeTableId;


    @ManyToOne
    @JoinColumn(name = "section_id", referencedColumnName = "section_id")
    private Section section;

    @Column(name = "day_of_week")
    private String day;

    @Column(name = "period_number")
    private int period;

    @OneToOne
    @JoinColumn(name = "subject_id", referencedColumnName = "subject_id")
    private Subject subject;

    @Column(name = "teacher_name")
    private String teacher;
}
