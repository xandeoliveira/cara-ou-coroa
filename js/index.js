const buttonsContainer = document.querySelector(".face-or-corona")
const currencyFace = document.querySelector(".currency-face")
const currencyCorona = document.querySelector(".currency-corona")
const currencyGif = document.querySelector(".currency-gif")
const startMessage = document.querySelector(".start-message")
const messageBox = document.querySelector(".message-box")

const state = {
	option: undefined,
	on: true
}

const raffle = () => {
	const options = {
		"0": "coroa",
		"1": "cara"
	}

	const getRandomNumber = () => Math.round(Math.random())

	const index =  getRandomNumber()

	return options[`${index}`]
}

const start = () => {

	startMessage.style.display = "none"
	currencyFace.style.display = "none"
	currencyCorona.style.display = "none"
	messageBox.innerHTML = ""
	currencyGif.style.display = "block"

	setTimeout(() => {
		currencyGif.style.display = "none"

		const raffleSide = raffle()

		if ( raffleSide === "cara" )
		{
			currencyFace.style.display = "block"	
		}
		else
		{	
			currencyCorona.style.display = "block"
		}

		if ( raffleSide === state.option )
		{
			messageBox.innerHTML = `<p>Parabéns, você acertou, escolheu ${state.option}.</p>`
		}
		else
		{
			messageBox.innerHTML = `<p>Opa, você errou, escolheu ${state.option}.</p>`
		}

		state.on = true
	}, 1400)
}





const handleClickButton = event => {
	const buttonWasClicked = event.target.nodeName === "BUTTON"

	if ( buttonWasClicked && state.on )
	{
		const option = event.target.innerText
		state.option = option.toLowerCase()
		state.on = false
		start()
	}
}
buttonsContainer.addEventListener("click", handleClickButton)