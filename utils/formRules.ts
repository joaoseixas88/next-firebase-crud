interface Data{
	id: string
	name: string
	age: string
	errors: {
		nameError: string
		ageError: string
	}
}

export const validate = ({id, age, name, errors}: Data) => {
	
		if (!name) {			
			return {
				errors: { ...errors, nameError: "Nome requerido*" },
				isValid: false
			}
		}		
		if (isNaN(+age)) {		
			return {
				errors: { ...errors, ageError: "Informe uma idade valida*" },
				isValid: false 
			}
		}		
		if (!age) {			
			return {
				errors: { ...errors, ageError: "Idade requerida*" },
				isValid:false
			}
		}	
		return {
			errors: {...errors},
			isValid: true
		}	
		
}



