export class ChatDto {
    constructor({
        schedule,
        groupComposition,
        purpose,
        budget,
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
        destinations,
    }) {
        this.schedule = schedule;
        this.groupComposition = groupComposition;
        this.purpose = purpose;
        this.budget = budget;
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
        this.destinations=destinations;
    }
}

export class destinationDto{
    constructor(
       {region,
           city,
           points}
    ){this.region=region;
        this.city=city;
        this.points=points;
    }
}
