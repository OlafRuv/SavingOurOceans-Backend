class Validators{
	static nullValidator(value){
		if ( value === null || value === "undefined" ) {
			return true;
		}
		else{
			return false;
		} 
	}

	static intValidator(value){
		if ( Number.isInteger(value)){
			return false;
		} 
		else {
			return true;
		}
	}

	static stringValidator(value){
		if ( typeof value === "string" ) {
			return false;
		}
		else {
			return true;
		}
	}

	static listOfStringsValidator(value){
		value.forEach(element => {
			if ( typeof element != "string"  ) return true;
		});
		return false;
	}

}

module.exports = Validators;