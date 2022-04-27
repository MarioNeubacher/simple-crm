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
  title !: string;

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

    inputs.forEach((input) => input.addEventListener("input", handleInputChange)); //.bind(this)
    var range = $("input#range"),
      valuex = $(".range-value");
    valuex.html(range.attr("value")!);
    range.on("input", () => {
      valuex.html(this.value);
    }); //.bind(this)

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