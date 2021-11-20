DROP DATABASE IF EXISTS employee_manager;
CREATE DATABASE employee_manager;
USE employee_manager;

CREATE TABLE employees (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  job_title VARCHAR(30) DEFAULT 'Associate',
  manager_id INTEGER,
  department_id INTEGER NOT NULL,
--   CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES managers(id) ON DELETE SET NULL
)