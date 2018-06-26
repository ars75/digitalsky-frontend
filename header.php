<!doctype html>
<html class="no-js" lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DigitalSky</title>
    <link rel="stylesheet" href="css/foundation.min.css">
    <link rel="stylesheet" href="css/style.css?v=3">
  </head>
  <body>

  <header class="site-header <?php if($homepage == "true"){echo "homepage";} ?>">
    <a href="index.php">
      <div class="site-logo">
        <img src="img/logo.svg" alt="">
      </div>
    </a>


<?php if($dashboard != "true") { ?>
    <a href="login.php">
    <div class="user-nav">
      <div class="wrap">
        <img src="img/user.svg" alt="">
        <p>Login</p>
      </div>
    </div>
    </a>
<?php } else { ?>
  <div class="user-nav dashboard">
    <div class="open-wrap">
      <img src="img/user.svg" alt="">
      <p>User</p>
    </div>
    <div class="close-wrap">
      <img src="img/hambargar-close.svg" alt="">
      <p>Close</p>
    </div>

    <div class="the-user-navigation">
      <ul>
        <li><a href="#">Apply now</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">My drones</a></li>
        <li><a href="#">Occurance report</a></li>
        <li><a href="#">Application Status</a></li>
        <li><a href="#">Edit user settings</a></li>
        <li><a href="index.php" class="logout">Logout</a></li>
      </ul>
    </div>
  </div>
<? } ?>

    <div class="site-nav">
      <div class="wrap">
        <div class="open-wrap">
          <img src="img/hambargar.svg" alt="">
          <p>Menu</p>
        </div>
        <div class="close-wrap">
          <img src="img/hambargar-close.svg" alt="">
          <p>Close</p>
        </div>

        <div class="the-site-navigation">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Application Process</a></li>
            <li><a href="#">Know the requirements</a></li>
            <li><a href="#">Operating restrictions</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
