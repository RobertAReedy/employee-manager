INSERT INTO departments (dpt_name)
VALUES 
("Grocery"),
("Butchery"),
("Gas Station"),
("General");

INSERT INTO roles (roll_name, department_id, salary)
VALUES 
("Cashier", 1, 7.25),
("Butcher", 2, 9.00),
("Gas Station Attendent", 3, 7.25),
("Manager", 4, 15.00);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
("Thomas", "Cash" 1, 4),
("Elena", "Meat" 2, 4),
("Burgeson", "Gas" 3, 4),
("Chingleton", "Manage" 4, NULL);