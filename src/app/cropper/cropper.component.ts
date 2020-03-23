import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import Cropper from "cropperjs";

@Component({
  selector: "app-cropper",
  templateUrl: "./cropper.component.html",
  styleUrls: ["./cropper.component.css"]
})
export class CropperComponent implements OnInit {
  @ViewChild("image", { static: false })
  public imageElement: ElementRef;
  @Input("src")
  public imageSource: string;
  public imageDestination: string;
  private cropper: Cropper;

  constructor() {
    this.imageDestination = '';
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas();
        this.imageDestination = canvas.toDataURL("image/png");
      }
    });
  }
}
