import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UX Components - Angular Material';
  selectedIndex: number = 1;
  public tabNames = ["Summary", "Alerts", "Diagnosis", "Contacts"];
  public descs = [
    `<div>
      <button on>Testing S</strong> 
    </div>
    `
  ]; 
  public tabs = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  private tabsCount = this.tabs.length;

  selectChange(): void {
    console.log("Selected INDEX: " + this.selectedIndex);
  }

  SWIPE_ACTION = { LEFT: "swipeleft", RIGHT: "swiperight" };

  // Action triggered when user swipes
  swipe(selectedIndex: number, action = this.SWIPE_ACTION.RIGHT) {
    debugger;
    console.log("swipe");
    console.log("number", selectedIndex);
    console.log("action", action);
    // Out of range
    if (
      this.selectedIndex < 0 || // starter point as 1 
      this.selectedIndex > this.tabsCount // here it is 
    )
      return;

    // Swipe left, next tab
    if (action === this.SWIPE_ACTION.LEFT) {
      const isLast = this.selectedIndex === this.tabsCount;
      this.selectedIndex = isLast ? 0 : this.selectedIndex + 1;
      console.log("Swipe right - INDEX: " + this.selectedIndex);
    }

    // Swipe right, previous tab
    if (action === this.SWIPE_ACTION.RIGHT) {
      const isFirst = this.selectedIndex === 0 ;// starter point as 1 
      this.selectedIndex = isFirst ? 1 : this.selectedIndex - 1;
      console.log("Swipe left - INDEX: " + this.selectedIndex);
    }
  }  
}
