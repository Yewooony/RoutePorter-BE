export class routeDto{
   constructor(
      {day, places}
   ) {
      this.day = day;
      this.places= places;
   }
}

export class placeDto{
   constructor({
      place,
      hours,
      attractions,
      popularMenu,
      tips
               }){
      this.place=place;
      this.hours=hours;
      this.attractions=attractions;
      this.popularMenu=popularMenu;
      this.tips=tips;
   }
}