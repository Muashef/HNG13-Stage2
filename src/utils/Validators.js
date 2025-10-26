// Schema-based validation utilities

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const schemas = {
  email: (value) => {
    if (!value) return "Email is required"
    if (!emailRegex.test(value)) return "Please enter a valid email"
    return null
  },

  password: (value) => {
    if (!value) return "Password is required"
    if (value.length < 6) return "Password must be at least 6 characters"
    return null
  },

  name: (value) => {
    if (!value || !value.trim()) return "Name is required"
    if (value.length < 2) return "Name must be at least 2 characters"
    return null
  },

  ticketTitle: (value) => {
    if (!value || !value.trim()) return "Title is required"
    if (value.length < 3) return "Title must be at least 3 characters"
    return null
  },

  ticketDescription: (value) => {
    if (!value || !value.trim()) return "Description is required"
    if (value.length < 10) return "Description must be at least 10 characters"
    return null
  },
}

export const validateField = (fieldName, value) => {
  const validator = schemas[fieldName]
  return validator ? validator(value) : null
}

export const validateForm = (formData, fieldNames) => {
  const errors = {}
  fieldNames.forEach((field) => {
    const error = validateField(field, formData[field])
    if (error) errors[field] = error
  })
  return errors
}
