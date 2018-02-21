class Controller{
    constructor(){
        
    }
    setup(items){
        let theCompany;
        theCompany = new Company();
        items.splice(0,1);
		items.splice(items.length - 1, 1);
		for(let item of items) {
			let id = item.slice(0, item.indexOf(","));
			item = item.slice(item.indexOf(",") + 1, item.length);
			
			let firstName = item.slice(0, item.indexOf(",")); // splicing and formatting of the salesperson file
			item = item.slice(item.indexOf(",") + 1, item.length);
			
			let lastName = item.slice(0, item.indexOf(","));
			item = item.slice(item.indexOf(",") + 1, item.length);
			
			let salary = item.slice(1, item.indexOf(","));
			item = item.slice(item.indexOf(",") + 1, item.length);
			
			let yearCommenced = item.slice(item.indexOf(",") + 1, item.length);
			item = item.slice(0, item.indexOf(","));
			
			salary = salary.concat(item);
			
			salary = parseInt(salary);
			yearCommenced = new Date(yearCommenced);
			theCompany.addSalesPerson(id, firstName,lastName,salary,yearCommenced);
			
			console.log(theCompany.allMySalesPersons);
			
			console.log(item);
			console.log(id);
			console.log(firstName);
			console.log(lastName);
			console.log(salary);
			console.log(yearCommenced);
		}
        console.log(items);
			console.log(theCompany.getCovariance());
          return theCompany;
    }
	
	
	setupProduct(items){
        let theCompany;
        theCompany = new Company();
        items.splice(0,1);
		items.splice(items.length - 1, 1);
		for(let item of items) {
			let id = item.slice(0, item.indexOf(","));
			item = item.slice(item.indexOf(",") + 1, item.length); // splicing and formating of the product file
			console.log(id);
			let name = item.slice(0, item.indexOf(","));
			item = item.slice(item.indexOf(",") + 1, item.length);
			console.log(name);
			let price = parseFloat(item.slice(0, item.indexOf(",")));
			item = item.slice(item.indexOf(",") + 1, item.length);
			console.log(price);
			let quantityOnHand = parseInt(item.slice(0, item.indexOf(",")));
			item = item.slice(item.indexOf(",") + 1, item.length);
			let minimumQuantity = parseInt(item.slice(item.indexOf(",") + 1, item.length));
			item = item.slice(0, item.indexOf(","));
	
			theCompany.addProduct(id, name, price, minimumQuantity, quantityOnHand);
		}
		console.log(theCompany.allMyProducts);
		return theCompany;
	};

};



var myapp = angular.module('myapp', []);

myapp.controller('MainCtrl', function ($scope) {
    $scope.showContent = function($fileContent){
        $scope.content = $fileContent;
		let contentLines = $fileContent.split('\n'); // I can use ONE button to load both files. Only works with files I have specified
		theController = new Controller;
		if($scope.fileName == "SalesPersonData.csv"){
			$scope.theCompany = theController.setup(contentLines);
		}
		else if ($scope.fileName == "ProductData.csv"){
			$scope.theCompanyProduct = theController.setupProduct(contentLines);
		}
		
		
    };
  });

myapp.directive('onReadFile', function ($parse) {
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs) {
            var fn = $parse(attrs.onReadFile);


            element.on('change', function(onChangeEvent) {
			let files = onChangeEvent.target.files;
		    scope.fileName = files[0].name;
                var reader = new FileReader();
                reader.onload = function(onLoadEvent) {
                    scope.$apply(function() {
                        fn(scope, {$fileContent:onLoadEvent.target.result});
                    });
                };

                reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
            });
        }
    };
});