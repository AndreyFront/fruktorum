export default function setMeta(title, description, options = {}) {
    return useSeoMeta({
        title,
        description,
        ...options
    })
}