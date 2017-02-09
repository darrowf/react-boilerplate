function fakeCall() {
	return new Promise( ( resolve, reject ) => {
		setTimeout( () => { resolve() }, 2000 )
	} )
}


module.exports = {
	fakeCall
}
