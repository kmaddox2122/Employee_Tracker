USE employee_tracker_db;

INSERT INTO department (name)
VALUES ("Discs");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 70000, 1),
      ("Supervisor", 60000, 1),
      ("Disc Specialist", 50000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
values ("Chloe", "Jade", 1, NULL),
        ("Trayden", "Thomas", 2, 1),
        ("Emry", "Lynn", 3, 1),
        ("Zoey", "Marie", 3, 1),
        ("Navy", "Ann", 3, 1);



