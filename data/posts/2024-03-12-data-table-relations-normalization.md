---
title: "Data Table Relation's Normalization"
subtitle: ""
summary: "Introduces functional dependencies, and the database paradigms 1NF, 2NF, 3NF, BCNF, and 4NF. and use examples to explain their concepts and connections."
coverURL: ""
time: "2024-03-12"
tags: ["database"]
noPrompt: false
pin: false
allowShare: true
---

## Functional Dependencies

In relational databases, functional dependencies describe the dependency relationships between attributes in a relational schema. If, given a relation $R$, the values of attribute set $X$ uniquely determine (through conditions or function arguments, for example) a value in attribute set $Y$, then we say that $Y$ is functionally dependent on $X$, typically denoted by the symbol $X \rightarrow Y$.

Specifically, if for every record in relation $R$, whenever two records have the same values for attribute set $X$, they must also have the same values for attribute set $Y$, then we say that $Y$ is functionally dependent on $X$.

For example, suppose we have a relation $R$ containing attribute set $\{ A,B,C \}$, where the values of attribute $A$ uniquely determine the values of attribute $B$, i.e., $A \rightarrow B$. Then, we say that attribute $B$ is functionally dependent on attribute $A$.

Functional dependency is an important concept in relational database design. It helps in understanding the relationships between data, normalizing database designs to reduce redundant data, while ensuring the consistency and integrity of data.

Functional dependencies can be classified into trivial functional dependencies and non-trivial functional dependencies.

If $X \rightarrow Y$ and $Y \subseteq X$, then $X \rightarrow Y$ is called a trivial functional dependency. Otherwise, it is a non-trivial functional dependency.

For functional dependencies, the dependency relationship between $X$ and $Y$ can also be further classified into partial functional dependency, full functional dependency, and transitive functional dependency.

- Partial Functional Dependency: Let $X,Y$ be two attribute sets of relation $R$. If $X→Y$ and $X' \subsetneq X$, where there exists $X'$ such that $X'→Y$, then $Y$ is said to be partially functionally dependent on $X$, denoted as $X \overset{P}{\rightarrow} Y$. In other words, partial functional dependency means that some attributes can be removed without affecting the dependency.

> For example: In a student basic information table $R$ (student ID, passport number, name), of course, the student ID attribute values are unique. In relation $R$, (student ID, passport number) → (name), (student ID) → (name), (passport number) → (name); therefore, the name is partially functionally dependent on (student ID, passport number).

- Full Functional Dependency: Let $X,Y$ be two attribute sets of relation $R$. If $X→Y$, $X' \subsetneq X$, and for all $X'$, $X'→Y$, then $Y$ is said to be fully functionally dependent on $X$, denoted as $X \overset{F}{\rightarrow} Y$. In other words, for full functional dependency, no extra attributes can be deleted, otherwise, the property of dependency will not be maintained.

> Example: In a student basic information table $R$ (student ID, class, name), assuming different classes can have the same student ID, and student IDs within a class cannot be the same. In relation $R$, (student ID, class) → (name), but (student ID) → (name) does not hold, and (class) → (name) does not hold either. Therefore, the name is fully functionally dependent on (student ID, class).

- Transitive Functional Dependency: Let $X,Y,Z$ be three attribute sets of relation $R$, where $X→Y (Y \cancel{\rightarrow} X)$, and for all $Y$, $Y→Z$. Then $Z$ is said to be transitively functionally dependent on $X$. This means that $Z$ indirectly depends on $X$.

> Example: In relation $R$ (student ID, dormitory, fee), (student ID) → (dormitory), dormitory ≠ student ID, (dormitory) → (fee), fee ≠ dormitory. Thus, it meets the requirements of transitive functional dependency.

## Multi-Valued Dependencies

The previous section introduced functional dependencies, which are actually a special case of multi-valued dependencies. Multi-valued dependencies extend the concept of functional dependencies.

Let $R(U)$ be a relational schema over the attribute set $U$, and let $X$, $Y$, and $Z$ be subsets of $U$ such that $Z = U - X - Y$. A multi-valued dependency $X \twoheadrightarrow Y$ holds if and only if for any relation $r$ in $R$, each value on $(X, Z)$ corresponds to a set of values on $Y$, and this set of values depends only on the values of $X$ and is independent of the values of $Z$.

Consider a relational schema $R$ with the attribute set $\{Student, Course, Textbook\}$, representing students' course enrollments and the textbooks they use. If a student uses multiple textbooks for a single course, and the combination of student and course uniquely determines the textbooks used, while the combination of student and course is independent, then we have a multi-valued dependency.

Suppose we have the following relation instance:

| Student | Course  | Textbook       |
| ------- | ------- | -------------- |
| Alice   | Math    | Calculus       |
| Alice   | Math    | Linear Algebra |
| Alice   | Physics | Mechanics      |
| Bob     | Math    | Calculus       |

In this example, the choice of textbook depends on the combination of student and course. For instance, Alice uses both Calculus and Linear Algebra textbooks for her Math course, while she uses Mechanics for her Physics course. However, whether Linear Algebra and Calculus are chosen depends solely on whether the course is Math.
This scenario demonstrates a multi-valued dependency, where the combination of student and course uniquely determines the set of textbooks used, while the relationship between student and course is independent, yet textbooks are not independent of courses as one course can have multiple textbooks.

Therefore, in this scenario, there exists a multi-valued dependency relationship $Course \twoheadrightarrow Textbook$.

## Keys

- Let $K$ be an attribute or a combination of attributes in $R<U, F>$, and $K \overset{F}{\rightarrow} U$, then $K$ is a candidate key for $R$.
- If there are multiple candidate keys, one of them can be designated as the primary key.
- Any attribute set that contains a candidate key is called a prime attribute. Otherwise, it is a non-prime attribute.
- If the entire attribute set constitutes the candidate key, then this attribute set is called a superkey.
- Both primary keys and candidate keys are commonly referred to as keys.

## Database Normalization

### 1NF

$1NF$ (First Normal Form) is one of the fundamental normal forms in relational databases. It requires that each attribute in a relation schema is atomic, meaning it cannot be further divided. In other words, each attribute in the relation schema should be single-valued, rather than containing multiple values or complex data types.

Specifically, $1NF$ requires that each cell in the relation contains only one value, rather than multiple values or complex data types. This helps ensure the atomicity of data, simplifying data processing and querying.

For example, consider a student table containing names and phone numbers. If phone numbers are stored as a comma-separated list of multiple numbers, then this table does not conform to $1NF$. To adhere to $1NF$, phone numbers should be split into separate attributes, with each attribute containing only one phone number.

### 2NF

$2NF$ (Second Normal Form) is another normal form in relational databases, built upon the foundation of the first normal form ($1NF$). $2NF$ requires that each non-prime attribute in a relation schema is fully functionally dependent on the candidate key, rather than partially dependent on the candidate key.

Specifically, if a relation schema has multiple attributes forming the candidate key, then each non-prime attribute should depend on all combinations of these attributes, rather than just depending on some of them.

For example, consider a relation schema containing the following attributes: StudentID, CourseID, CourseName, StudentName, and Grade. In this schema, (StudentID, CourseID) forms the candidate key, representing the enrollment of students in courses.

| StudentID | CourseID | CourseName | StudentName | Grade |
| --------- | -------- | ---------- | ----------- | ----- |
| 101       | 001      | Math       | Alice       | A     |
| 101       | 002      | Physics    | Alice       | B     |
| 102       | 001      | Math       | Bob         | A     |
| 102       | 003      | Chemistry  | Bob         | C     |

In this example, the StudentName attribute is a non-prime attribute and is partially dependent on the candidate key (StudentID), rather than fully dependent on all attributes of the candidate key (StudentID, CourseID). For instance, the name of student Alice is only associated with Student ID 101, irrespective of the course enrollment.

Therefore, this relation schema does not satisfy the second normal form ($2NF$). To adhere to $2NF$, we should remove the StudentName attribute from this relation schema and place it in a separate table, where the candidate key is $StudentID$. This way, the student name becomes fully dependent on the candidate key, rather than partially dependent on it.

### 3NF

Given a relation schema $R<U,F> \in 1NF$ and no set of attributes $X$, attribute group $Y$, and non-candidate attribute $Z$ such that $X \rightarrow Y, Y \rightarrow Z, Y \cancel{\rightarrow} X$, it belongs to $3NF$. In other words, if a relation is in $2NF$ and each non-candidate attribute does not transitively depend on the candidate key, then it is in $3NF$.

Let's continue with the example of student course enrollment mentioned earlier and attempt to conform to the third normal form ($3NF$).

In this example, we have already removed the student name from the main table and placed it in a separate table as follows:

**Student Table**:

| StudentID | StudentName |
| --------- | ----------- |
| 101       | Alice       |
| 102       | Bob         |

**Enrollment Table**:

| StudentID | CourseID | Grade |
| --------- | -------- | ----- |
| 101       | 001      | A     |
| 101       | 002      | B     |
| 102       | 001      | A     |
| 102       | 003      | C     |

Now, let's see if it conforms to $3NF$. In this relation schema, we have a transitive dependency: Student ID (StudentID) determines Student Name (StudentName), while Course ID (CourseID) determines Student ID (StudentID). Hence, there exists a transitive functional dependency: $CourseID \rightarrow StudentName$.

To conform to $3NF$, we need to eliminate this transitive dependency. One way to do this is by creating a new table that maps $CourseID$ and $StudentID$ to $StudentName$ to eliminate this transitive dependency. This way, we can ensure that each non-prime attribute is fully dependent on the primary key.

**Student Enrollment Relation Table**:

| StudentID | CourseID | Grade |
| --------- | -------- | ----- |
| 101       | 001      | A     |
| 101       | 002      | B     |
| 102       | 001      | A     |
| 102       | 003      | C     |

**Student Table**:

| StudentID | StudentName |
| --------- | ----------- |
| 101       | Alice       |
| 102       | Bob         |

**Course Table**:

| CourseID | CourseName  |
| -------- | ----------- |
| 001      | Mathematics |
| 002      | Physics     |
| 003      | Chemistry   |

Now, each table conforms to the third normal form ($3NF$). The student table and the course table are associated with the student enrollment relation table without any transitive dependency.

### BCNF

$BCNF$ (Boyce-Codd Normal Form) is a more stringent form of normalization in relational databases, resulting from normalizing relation schemas further from the third normal form ($3NF$). $BCNF$ requires that every non-trivial functional dependency (non-trivial $X \rightarrow Y$, where $Y$ is not a superset of $X$) is determined by the keys of the relation.

In other words, if $R$ is a relation schema and $X \rightarrow Y$ is a non-trivial functional dependency of $R$, and $X$ does not contain any candidate keys, then $R$ does not conform to $BCNF$, meaning every determinant must include a key.

For example, consider a scheduling table now, recording student ID, course ID, and teacher ID. A teacher teaches only one course, and a course can be taught by multiple teachers, and each student selects a specific course, which corresponds to a fixed teacher. Assuming the candidate key is student ID, course ID. We can list the following functional relationships:

- $(StudentID,CourseID) \rightarrow TeacherID$
- $(StudentID,TeacherID) \rightarrow CourseID$
- $TeacherID \rightarrow CourseID$

This relation does not conform to $BCNF$ because we find that in the third functional dependency, $TeacherID$ does not contain any keys. While the first and second have keys.

### 4NF

$4NF$ is a form of database normalization that further emphasizes the elimination of multi-valued dependencies on top of $BCNF$. A relation schema satisfies $4NF$ if, in addition to satisfying the requirements of $BCNF$, it also has no non-trivial multi-valued dependencies. Non-trivial multi-valued dependencies refer to those where neither the left side nor the right side is a superkey of the relation.

Let's consider an example that complies with $BCNF$ but not with $4NF$.

Suppose we have a relation schema $R$ containing attributes: Student, Course, Grade, and Teacher. And there exist the following functional dependencies:

1. $(Student, Course) \rightarrow Grade$
2. $Course \rightarrow Teacher$
3. $Student \twoheadrightarrow Teacher$

Assume that the candidate key for the relation schema is $Student, Course$.

This schema conforms to $BCNF$ because every functional dependency is determined by the candidate key.

However, it does not conform to $4NF$ due to the presence of the third multi-valued dependency. This is because each student may attend multiple courses, and each course may have different teachers.

Therefore, although this relation schema satisfies $BCNF$, it does not satisfy $4NF$.

### Relationship

Understanding from $1NF$ to $4NF$ is progressive. The relationship between them is as follows:

- $1NF$ eliminates partial functional dependencies of non-prime attributes on the candidate key to achieve $2NF$.
- $2NF$ eliminates transitive functional dependencies of non-prime attributes on the candidate key to achieve $3NF$.
- $3NF$ eliminates partial and transitive functional dependencies of prime attributes on the candidate key to achieve $BCNF$.
- $BCNF$ eliminates non-trivial and functional dependencies of multi-valued dependencies to achieve $4NF$.
