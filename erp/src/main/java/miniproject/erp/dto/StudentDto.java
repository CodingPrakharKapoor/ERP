package miniproject.erp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import miniproject.erp.dao.Course;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentDto {
    private String studentName;

    private Integer rollNo;

    private LocalDate dob;

    private char gender;

    private String studentCourse;

    private String phone;

    private String email;

    private String fatherName;

    private String motherName;

    private Course course;
}
