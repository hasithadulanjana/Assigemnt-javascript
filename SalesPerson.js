class  SalesPerson {
	 constructor (newId, newFirstName, newLastName, newSalary, newYearCommenced, theCompany) {
		this.id = newId;
		this.firstName = newFirstName;
		this.lastName = newLastName;
		this.salary = newSalary;
		this.yearCommenced = newYearCommenced;
		this.myCompany = theCompany;
		this.fullName = this.lastName + ", " + this.firstName;
	}
}
