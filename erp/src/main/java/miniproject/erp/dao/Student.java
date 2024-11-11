package miniproject.erp.dao;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "students")
public class Student {
    @Id
    private Integer studentId;
    private String studentName;
    private int rollNo;
    private LocalDate dob;
    private char gender;
    @Column(name = "course")
    private String studentCourse;
    private String phone;
    private String email;
    private String fatherName;
    private String motherName;

    @ManyToOne
    @JoinColumn(name = "course_id", referencedColumnName = "course_id")
    private Course course;
}
