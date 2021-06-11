function CustomHighOrder(Component) {
	return class extneds React.Component {
		constructor(){
			super()
		}

		render() {
			return {
				<>

					<Login {...this.props}/>
				</>
			}
		}
	}
} 