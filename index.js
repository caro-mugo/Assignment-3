class Mkulima{
    constructor(){
    this.groceryfarm = [];
    this.Vendor = [];
    this.product = [];
    this.addNewFarm = (farmId, farmName, farmer, phoneNumber, address) => {
    this.groceryfarm.push({farmId,farmName,farmer,phoneNumber,address})
    }
    this.removeFarm = (farmId) => {
    let specific = this.groceryfarm.find(item => item.farmId ===farmId);
    let farmIndex = this.groceryfarm.indexOf(specific);
    this.groceryfarm.splice(farmIndex, 1);
    }
    this.updateFarm = function(farmId,newFarmId,newFarmName,newFarmerName,newPhone,newAddress){
    let specificFarm = this.groceryfarm.find(item => item.farmId ===farmId)
    specificFarm.farmId = newFarmId;
    specificFarm.farmName = newFarmName;
    specificFarm.farmer = newFarmerName;
    specificFarm.phoneNumber = newPhoneNumber;
    specificFarm.address =newAddress;
    }
    this.getFarm = (Id)=>{
    console.log(this.groceryfarm.find(object=>object.farmId===Id))
    }
    this.addProduct = (productId, productName, price) => {
    this.product.push({productId,productName,price})
    }
    this.removeProduct = (productId) => {
    let specific = this.product.find(item => item.productId ===productId);
    let productIndex = this.product.indexOf(specific);
    this.product.splice(productIndex, 1);
    }
    this.updateProduct = function(productId,newProductId,newProductName,newPrice){
    let specificProduct = this.product.find(item => item.productId ===productId)
    specificProduct.productId =newProductId;
    specificProduct.productName = newProductName;
    specificProduct.price = newPrice;
    }
    this.getProduct = (Id)=>{
    console.log(this.product.find(object=>object.productId===Id))
    }
    this.printProduct = ()=>{
    console.log(this.product)
    }
    this.calculateOrderCost = (productId,quantity)=>{
    let specificProduct = this.product.find(object=>object.productId===productId);
    console.log(`${quantity} ${specificProduct.productName} for KES ${quantity*specificProduct.price}`);
    }
    }
    }
    let newfarm = new Mkulima();
    newfarm.addNewFarm("48595","Carol","MalaFarm","254 778834421", "Mombasa");
    newfarm.addNewFarm("48590","Mugo","HigherFarm","254 789321445", "Lamu");
    newfarm.addNewFarm("9450","Mary","KimunyeFarm","254 745369203", "Nakuru");
    newfarm.addNewFarm("5000","Joel","SantarinaFarm","369203", "Embu");
    console.log(newfarm.groceryfarm);
    newfarm.removeFarm("9080");
    console.log()