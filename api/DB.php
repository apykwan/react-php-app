<?php
    ## Database connection
    class DB {
        private $server = 'localhost';
        private $dbname = 'react-php-crud';
        private $username = 'root';
        private $password = '';

        public function connect() {
            $conn = mysqli_connect($this->server, $this->username, $this->password, $this->dbname);
            if(mysqli_connect_errno()) {
                die("Failed to connected" . mysqli_connect_errno());
            }
            return $conn;
        }
    }
?>