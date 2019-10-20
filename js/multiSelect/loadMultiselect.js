multiSelect()

function multiSelect() {
	document.addEventListener('DOMContentLoaded', function() {
		const choicesBasic = new Choices('#choices-basic')

		new Choices('#choices-remove-button', {
			removeItemButton: true
		})

		new Choices('#choices-placeholder', {
			placeholder: true,
			placeholderValue: 'I am a placeholder'
		})

		new Choices('#choices-remote-data', {
			shouldSort: false
		}).ajax((callback) => {
			fetch('/data')
				.then((response) => {
					response.json().then((data) => {
						callback(data, 'value', 'label')
					})
				})
				.catch((error) => {
					console.error(error)
				})
		})

		new Choices('#choices-scrolling-dropdown', {
			shouldSort: false
		})

		new Choices('#choices-groups')
	})
}
