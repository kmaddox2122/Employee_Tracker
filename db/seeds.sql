USE employee_tracker_db;

INSERT INTO department (name)
VALUES ("Discs");


INSERT INTO role (title, salary, department_id)
VALUES ("Manager", "70000.00", "0089"),
      ("Supervisor", "60000.00", "0089"),
      ("Disc Specialist", "50000.00", "0089");



INSERT INTO employee (first_name, last_name, role_id, manager_id)
values ("Chloe", "Jade", "7890", "7890"),
        ("Trayden", "Thomas", "1234", "7890"),
        ("Emry", "Lynn", "5678", "7890"),
        ("Zoey", "Marie", "5678", "7890"),
        ("Navy", "Ann", "5678", "7890");



