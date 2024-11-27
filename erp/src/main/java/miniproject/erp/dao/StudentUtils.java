package miniproject.erp.dao;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "student_utils")
public class StudentUtils {
    @Id
    @Column(name = "serial_id")
    private Integer SerialId;

    @OneToOne
    @JoinColumn(name = "roll_no", referencedColumnName = "roll_no")
    private Student student;


    @OneToOne
    @JoinColumn(name = "section_id", referencedColumnName = "section_id")
    private Section section;

    @Column(name = "cpi")
    private Float cpi;
}
