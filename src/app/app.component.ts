import { Component } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataset: any;
  name: any;
  value: any;

  constructor() { }

  ///////////////////////////////////////////
  // The click
  toggle() {
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

    this.handleInputChange() {
      const units = this.dataset.units || "";

      document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + units
      );
    }

    inputs.forEach((input) => input.addEventListener("input", this.handleInputChange));
    var range = $("input#range"),
      value = $(".range-value");
    value.html(range.attr("value"));
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
  handleInputChange() {
    throw new Error('Function not implemented.');
  }
}