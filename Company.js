class Company{
   constructor(){
    this.allMyProducts = [];
    this.allMySalesPersons = [];
   }
   addSalesPerson(newId, newFirstName, newLastName, newSalary, newYearCommenced){
        let newSalesPerson = new SalesPerson(newId, newFirstName, newLastName, newSalary, newYearCommenced, this);
        this.allMySalesPersons.push(newSalesPerson);
    }
	
	addProduct(newId, newName, newPrice, newMinimumQuantity, newQuantityOnHand){
        let newProduct = new Product(newId, newName, newPrice, newMinimumQuantity, newQuantityOnHand, this);
        this.allMyProducts.push(newProduct); // very similar to add sales person method
    }
	
	
    
    sortSalesPersons() {
         this.allMySalesPersons.sort(function (a, b) {
            return a.lastName > b.lastName;  
        })
    }
    
    sortProducts(){
       this.allMyProducts.sort(function (a, b) {
           return a.id > b.id; 
        })
    }
	
	getProductsToOrder(){
		let out = [];
		for (let aProduct of this.allMyProducts){
			if (aProduct.moreNeeded() == true){
				out.push(aProduct);
			}	
		}
		return out;
			
	}
	getMean(array){
		let mean = 0; // This will be called by covariance and mean salary to save time
		for(let item of array){
			mean += item;
		}
		mean = mean / array.length;
		console.log("meanchecker: " + mean);
		return mean;
	}
	
	
	getSalaries(){
		let salaries = [];
		for (let aSalesPerson of this.allMySalesPersons){
			salaries.push(aSalesPerson.salary);
		}
		return salaries;
	}
	
	getCommencementYears(){
		let commencementYears = [];
		for (let aSalesPerson of this.allMySalesPersons){
			commencementYears.push(aSalesPerson.yearCommenced.getFullYear());
		}
		return commencementYears;
	}
	getSalaryDeviation(){
		let mean = 0;
		let deviation = 0;
		let numberOfSalaries = this.allMySalesPersons.length;
		console.log(numberOfSalaries);
		mean =  this.getMean(this.getSalaries());
		console.log("The mean is" + mean);
		console.log(mean);
		for(let salesPerson of this.allMySalesPersons){
			let salary = salesPerson.salary;
			deviation += Math.abs(salary - mean);
			console.log(deviation);
		}
		deviation = deviation / numberOfSalaries;
		console.log(deviation);
		return deviation;
	}
	
	getCovariance() {
		 let salaries = this.getSalaries();
		 let commencementYears = this.getCommencementYears();
		 let salaryMean = this.getMean(salaries);
		 let commencementMean = this.getMean(commencementYears);
		 let arrayLength = salaries.length;
		 let covariance = 0;
		 for (let calculation = 0;  calculation < arrayLength; calculation++){
			 covariance += ((salaries[calculation] - salaryMean) * (commencementYears[calculation] - commencementMean));
		 }
		 covariance = covariance / arrayLength;
		 return covariance;
	}
};

	 

