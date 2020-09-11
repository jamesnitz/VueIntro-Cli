let reviews = []

export const useReviews = () => reviews.slice()

export const getReviews = () => {
    return fetch('http://localhost:3000/reviews')
        .then(response => response.json())
        .then(parsedReviews => {
            reviews = parsedReviews
        })

}
