<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
	header("Access-Control-Allow-Methods: *");

    include 'DB.php';
     
    $objDb = new DB;
    $conn = $objDb->connect();
    // echo $conn;

    $method = $_SERVER['REQUEST_METHOD'];

    switch($method) {
        case "GET":
            $sql = "SELECT * FROM users";
            $stmt = $conn->prepare($sql);
            $stmt->execute();

            $result = $stmt->get_result();
            
            $userArray = [];
            while($row = $result->fetch_assoc()) {
                array_push($userArray, $row);
            }

            echo json_encode($userArray);

            // $result = mysqli_query($conn, $sql);

            // $userArray = [];
            // while($row = mysqli_fetch_array($result)) {
      		// 	$response = ['id' => $row[0], 'name' => $row[1], 'email' => $row[2], 'mobile' => $row[3]];
            //     array_push($userArray, $response);
   	 	    // }

            // echo json_encode($userArray);
            break;
        case "POST":
            $json = file_get_contents('php://input');  
            $user = json_decode(preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $json));

            $sql = "INSERT INTO users(name, email, mobile, created_at) VALUES(?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);

            $date = date("Y-m-d H:i:s");
            $stmt->bind_Param('ssss', $user->name,  $user->email, $user->mobile, $date);

            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'User created successfully!'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create user!'];
            }

            echo json_encode($response);
            break;
            
    }
?>