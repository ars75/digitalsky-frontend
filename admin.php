<?php
$dashboard = "true";
$admin = "true";
include("header.php"); ?>

<div class="admin-header">
  <div class="grid-container">
    <div class="grid-x grid-padding-x">
      <div class="large-12 cell">
        <a href="#">Pilots</a>
        <a href="#">Operators</a>
        <a href="#">Manufacturer</a>
      </div>
    </div>
  </div>
</div>

<div class="page-dashboard">
  <section id="all-applications">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="large-12 cell">

          <div class="search">
            <form class="admin-search-form" action="" method="post">
              <input type="text" name="" value="" class="admin-search" placeholder="Search">
              <button type="submit" name="button" class="admin-search-button"> <img src="img/search.svg" alt=""> </button>
            </form>
          </div>

          <div class="applications">
            <div class="application">
              <div class="details">
                <div class="wrap">
                  <h3>Lucknow</h3>
                  <p>Shivgarh Resorts</p>
                </div>
              </div>
              <div class="go-to-location">
                <a href="#" class="button"><img src="img/view.svg" alt=""></a>
              </div>
            </div>

            <div class="application">
              <div class="details">
                <div class="wrap">
                  <h3>Lucknow</h3>
                  <p>Shivgarh Resorts</p>
                </div>
              </div>
              <div class="go-to-location">
                <a href="#" class="button"><img src="img/view.svg" alt=""></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</div>

<?php include("footer.php");
