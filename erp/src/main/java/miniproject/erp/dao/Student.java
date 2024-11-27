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
    @Column(name = "student_name")
    private String studentName;

    @Id
    @Column(name = "roll_no")
    private int rollNo;

    @Column(name = "dob")
    private LocalDate dob;

    @Column(name = "gender")
    private char gender;

    @Column(name = "course")
    private String studentCourse;

    @Column(name = "phone")
    private String phone;

    @Column(name = "email")
    private String email;

    @Column(name = "father_name")
    private String fatherName;

    @Column(name = "mother_name")
    private String motherName;

    @ManyToOne
    @JoinColumn(name = "course_id", referencedColumnName = "course_id")
    private Course course;
}
