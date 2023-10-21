function isRequired(value) {
    if (value && value.trim()) {
        return true
    }
    return 'Обязательное поле'
}

function validateName(value) {
    if (!value) {
        return 'Обязательное поле'
    }

    const regex = /^[а-яёА-ЯЁ]+$/u
    if (!regex.test(value)) {
        return 'Некорректное имя'
    }

    return true
}

function validateEmail(value) {
    if (!value) {
        return 'Обязательное поле'
    }

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if (!regex.test(value)) {
        return 'Некорректный email'
    }

    return true
}

export {
    isRequired,
    validateName,
    validateEmail
}