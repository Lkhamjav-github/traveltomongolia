
export interface totalTravelNumber {
    result: number
}

export interface travelNumberChart {
    result: {
        label: string[],
        data: number[],
        changes: number
    }
}

export interface FetchAdminDataProps {
    dashboardData: dashboardDataType
}

export interface dashboardDataType {
    tourCardData: {
        totalTravelNumber: number,
        chartData: {
            label: [],
            data: []
        },
        changes: number,
        travelData: []
    },
    revenueCardData: {},
    destinationCardData: {},
    orderCardData: {},
    table: []
}