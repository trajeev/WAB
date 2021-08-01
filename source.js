// Button styles, when button is pressed once and disabled.
const disabledStyles = {
    "cursor": "no-drop",
    "backgroundColor": "gray",
    "borderColor": "gray"
}

// function to calculate current date and formatting to MM/DD/YYYY standard
function getDate () {
    let date = new Date()
    let month = date.getMonth() + 1 <10 ? '0' + (date.getMonth() + 1): date.getMonth() + 1
    let year = date.getFullYear()
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    date = month + '/' + day + '/' + year
    return date
}

// Event Listener when button is clicked
document.querySelector('button').addEventListener('click', () => {
    // Current date is added when button is clicked and classname is also added to include styles
    const newDate = document.createElement('span')
    newDate.textContent = getDate()
    document.querySelector('.progress-dot h4').appendChild(newDate).classList = "date"

    // Classname of the line joining the dots in the progress bar is changed, also new height is calculated.
    document.querySelector('.progress-dot').classList = "progress-dot-active"
    const element = document.querySelector('.progress-dot-active')
    element.style.setProperty('--height', '73%')

    // button is disabled once it is pressed.
    const button = document.querySelector('button')
    button.disabled = true
    Object.assign(button.style, disabledStyles)
})