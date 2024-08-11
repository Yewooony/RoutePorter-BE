export class ChatDto {
    constructor({
        schedule,            
        groupComposition,   
        purpose,
        duration,
        budget,
        climate,
        keyElement,
        accommodation,
        transport,
        companion,
        favorite,
        favoriteReason,
        specialNeeds,
        recommendationType,
        freeTime,
        importantFactors,
       destination1,
       destination2,
       point1,
       point2,
       point3
    }) {
        this.schedule = schedule;             
        this.groupComposition = groupComposition;  
        this.purpose = purpose;
        this.duration = duration;
        this.budget = budget;
        this.climate = climate;
        this.keyElement = keyElement;
        this.accommodation = accommodation;
        this.transport = transport;
        this.companion = companion;
        this.favorite = favorite;
        this.favoriteReason = favoriteReason;
        this.specialNeeds = specialNeeds;
        this.recommendationType = recommendationType;
        this.freeTime = freeTime;
        this.importantFactors = importantFactors;
        this.destination1=destination1;
        this.destination2=destination2;
        this.point1=point1;
        this.point2=point2;
        this.point3=point3;
    }
}
