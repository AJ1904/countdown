import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-count-down-indore',
  templateUrl: './count-down-indore.component.html',
  styleUrls: ['./count-down-indore.component.css']
})
export class CountDownIndoreComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
  
    public dateNow = new Date();
    public dDayIndore = new Date('Apr 18 2022 08:25:00'); //IST
    milliSecondsInASecond = 1000;
    hoursInADay = 24;
    minutesInAnHour = 60;
    SecondsInAMinute  = 60;

    public timeDifference: any;
    public secondsToDday: any;
    public minutesToDday: any;
    public hoursToDday: any;
    public daysToDday: any;

    public reachedIndore: boolean=false;

    private getTimeDifference () {
        var currentTime = new Date();
        var currentOffset = currentTime.getTimezoneOffset();
        var ISTOffset = 330;   // IST offset UTC +5:30 
        var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
        // ISTTime now represents the time in IST coordinates
        this.timeDifference = this.dDayIndore.getTime() - ISTTime.getTime(); //new  Date().getTime();
        this.allocateTimeUnits(this.timeDifference);
    }

  private allocateTimeUnits (timeDifference: any) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
    if (this.daysToDday<0 || this.hoursToDday<0 || this.minutesToDday<0 || this.secondsToDday<0){
      this.reachedIndore=true;
      this.secondsToDday=0;
      this.minutesToDday=0;
      this.hoursToDday=0;
      this.daysToDday=0;
    }
  }

    ngOnInit() {
       this.subscription = interval(1000)
           .subscribe(x => { this.getTimeDifference(); });
    }

   ngOnDestroy() {
      this.subscription.unsubscribe();
   }

}