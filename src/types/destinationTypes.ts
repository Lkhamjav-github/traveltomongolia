export interface Destination {
    result: [{
        _id: string
        name: string
        english: string
        destinationCategory: {
            _id: string
            name: string
            english: string
        }
        additionalInfo: string
        image: string
    }]
}