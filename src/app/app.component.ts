import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataset: any;
  name: any;
  value: any;

  constructor() { }

  ngOnInit(): void {
    this.codePen()  //important
  }

  codePen() {
    ///////////////////////////////////////////
    // The click
    $(".burger").addClass("unToggled");
    $(".burger").click(function () {
      $(this).toggleClass("toggled");
      $(this).toggleClass("unToggled");
      // also open menu here...
    });

    ///////////////////////////////////////////
    // Resizing Slider

    const inputs = document.querySelectorAll("input");
    const div = document.querySelector(".burger");

    const handleInputChange = () => {
      const units = this.dataset.units || "";

      document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + units
      );
    }

    inputs.forEach((input) => input.addEventListener("input", handleInputChange));
    var range = $("input#range"),
      value = $(".range-value");
    value.html(range.attr("value")!);
    range.on("input", function () {
      value.html(this.value);
    });

    /////////////////////////////////
    // Hit Area Toggle

    $("input:checkbox").change(function () {
      if ($(this).is(":checked")) {
        $(".burger").addClass("showHitArea");
      } else {
        $(".burger").removeClass("showHitArea");
      }
    });
  }
}