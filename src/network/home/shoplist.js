export class shoplist{
    constructor(data){
        this.description = data.info.description
        this.name = data.info.name;
        this.img = data.info.avatar;
        this.minprice = data.info.minPrice;
        this.foodScore = data.info.foodScore;
        this.deliveryPrice = data.info.deliveryPrice;
        this.distance = data.info.distance;
        this.sellCount = data.info.sellCount;
        this.time = data.info.deliveryTime;
    }
}