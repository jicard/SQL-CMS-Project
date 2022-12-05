USE sql_cms;
INSERT INTO department (name) VALUES ('Shipping');
INSERT INTO role (title, salary, department_id) VALUES ('Supervisor', 65000, 1);
INSERT INTO employees (first_name, last_name, manager_id, role_id) VALUES ('Josh', 'Icard', 73, 1);