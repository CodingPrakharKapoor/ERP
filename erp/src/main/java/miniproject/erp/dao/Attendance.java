package miniproject.erp.dao;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "attendance")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Attendance {
    @Id
    @Column(name = "attendance_id")
    private Integer attendanceId;

    @ManyToOne
    @JoinColumn(name = "student_roll_number" , referencedColumnName = "roll_no")
    private Student student;

    @ManyToOne
    @JoinColumn(name = "subject_id" , referencedColumnName = "subject_id")
    private Subject subject;

    @Column(name = "date")
    private LocalDate date;

    @Column(name = "status")
    private String status;
}
