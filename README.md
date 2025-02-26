# E-Adoption System

## Description
The **E-Adoption System** is a web-based application developed using **React** for the frontend and **Java Spring Boot** for the backend. This system simplifies the child adoption process by providing a secure platform where prospective parents can view children available for adoption, submit applications, and track the adoption status. It also enables orphanage administrators to manage child records, verify applicants, and oversee the adoption workflow.

## Images

### Home Page
<img width="892" alt="HomePage" src="https://github.com/user-attachments/assets/3b8aa79b-59c6-4799-8217-7b4b6d86c052" />


### Registration Page
<img width="547" alt="Register" src="https://github.com/user-attachments/assets/410777b2-faf0-40ef-8631-bae283afcb59" />


### Admin Dashboard
<img width="560" alt="AdminDashboard" src="https://github.com/user-attachments/assets/d10fc28a-4f9e-45ad-9c2c-e195afb5948e" />

### Adoption Form
<img width="568" alt="AdoptionForm" src="https://github.com/user-attachments/assets/e813d653-521a-4834-8b3e-b3866965e487" />


### Show Child
<img width="575" alt="ChildView" src="https://github.com/user-attachments/assets/3d36ddc5-8cc8-4bc2-8554-00564addeaca" />


## Features

### **User Features**
- **User Registration & Login**: Secure authentication for parents and admins.
- **View Children for Adoption**: Browse child profiles with details.
- **Apply for Adoption**: Submit an adoption form and upload required documents.
- **Track Application Status**: View updates on adoption requests.
- **Profile Management**: Users can update personal details.

### **Admin Features**
- **Admin Authentication**: Secure access for orphanage administrators.
- **Manage Children**: Add, update, or delete child records.
- **Verify Adoption Requests**: Approve or reject applications after verification.
- **Manage Parents**: View registered parents and their adoption history.
- **Respond to Enquiries**: Handle messages and inquiries from prospective adopters.

### **Security & Compliance**
- **Secure Login & Authentication**: Implemented with **JWT (JSON Web Tokens)**.
- **Data Protection**: Ensuring child information is safeguarded.
- **Document Verification**: Admins verify and approve adoption applications.

## WorkFlow Diagram
<img width="495" alt="Screenshot 2025-02-26 at 1 48 16 PM" src="https://github.com/user-attachments/assets/b2d02770-e9c8-46bf-8b18-b09c9111dd58" />


## Technologies Used

### **Frontend**
- **React**: Component-based UI development.
- **Axios**: HTTP client for API communication.
- **CSS/Tailwind**: Styling and responsive design.

### **Backend**
- **Spring Boot**: Java-based backend framework.
- **Spring Security**: User authentication and authorization.
- **Spring Data JPA**: Database interaction.

### **Database**
- **MySQL**: Relational database for storing application data.
- **Hibernate**: ORM (Object-Relational Mapping) for data persistence.

### **Authentication**
- **JWT (JSON Web Token)**: Secure authentication and session management.
- **BCrypt**: Password hashing for secure storage.

## Installation

### **Prerequisites**
- **Node.js** (for frontend) – Install from [Node.js official website](https://nodejs.org/)
- **Java 11+** (for backend) – Install from [Oracle JDK](https://www.oracle.com/java/)
- **MySQL** (for database) – Install from [MySQL official website](https://www.mysql.com/)

### **Steps**
#### **1. Clone the Repository**
```sh
git clone https://github.com/your-username/E-Adoption-System.git
cd E-Adoption-System
```

#### **2. Database**
```sh
Copy
Edit
# Open MySQL terminal
mysql -u your_mysql_username -p

# Create the database
CREATE DATABASE eadoption_db;
EXIT;
properties
Copy
Edit
# Update database credentials in application.properties (backend)
spring.datasource.url=jdbc:mysql://localhost:3306/eadoption_db
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
spring.jpa.hibernate.ddl-auto=update
```
#### **3.Run the Application**
sh
Copy
Edit
# Start backend server
cd backend
mvn spring-boot:run

# Open a new terminal for frontend
cd frontend
npm start
