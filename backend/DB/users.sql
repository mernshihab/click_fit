CREATE TABLE users (
  userId INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  type ENUM('admin', 'user') DEFAULT 'user',
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER //

CREATE PROCEDURE addUser (
  IN userEmail VARCHAR(100),
  IN userPassword VARCHAR(100),
  IN userType ENUM('admin', 'user'),
  IN userActive BOOLEAN
)
BEGIN
  INSERT INTO users (email, password, type, active)
  VALUES (userEmail, userPassword, userType, userActive);
END //

DELIMITER ;

-- Call the Procedure to Insert a User
CALL addUser('shihab.merndeveloper@gmail.com', '12345', 'user', TRUE);
