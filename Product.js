class Product {
	constructor(newId, newName, newPrice, newMinimumQuantity, newQuantityOnHand, theCompany) {
		this.id = newId;
        this.name = newName;
        this.price = newPrice;
        this.minimumQuantity = newMinimumQuantity;
        this.quantityOnHand = newQuantityOnHand;
        this.theCompany = theCompany; 
		console.log(this);
	}
	moreNeeded(){
		console.log(this.quantityOnHand < this.minimumQuantity); // The assignment said to put this in company but was changed to product because of a mistake in the assignment document
		return this.quantityOnHand < this.minimumQuantity;
	}
};

	