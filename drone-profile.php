<?php
$dashboard = "true";
include("header.php"); ?>

<div id="drone-profile">
  <div class="grid-container">
    <div class="grid-x grid-padding-x">
      <div class="large-12 cell">

        <div class="drone-image">
          <img src="img/temp/drone2.jpg" alt="">
        </div>

        <h2>Parrot Bebop 2 FPV</h2>

        <div class="drone-meta">
          <p><strong>Model Number:</strong> PF722000</p>
          <p><strong>Date of registration:</strong> 03/04/2018</p>
          <p><strong>UIN Number:</strong> 1337123</p>
        </div>

      </div>

    </div>
  </div>

  <section id="occurence-report">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">
        <div class="large-12 cell">
          <h3>Occurence Report</h3>

          <div class="reports">
            <div class="report">
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

            <div class="report">
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


          <p>When an issue occurs during a drone flight, please report below.</p>
          <a href="#" class="button button-light-red">Report now</a>
        </div>
        </div>
      </div>
    </section>

</div>

<?php include("footer.php");
