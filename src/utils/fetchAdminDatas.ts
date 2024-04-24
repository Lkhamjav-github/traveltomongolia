import { instance } from "./functions/TravelUtilities";
import { totalTravelNumber, travelNumberChart } from "@/types/dashboardAdminCard";
import { Travel } from "@/types/travelTypes";

export const adminDashboardData = async () => {
    try {
        const totalTravelNumberRes = await instance.get("/travel/number")
        const totalTravelNumber: totalTravelNumber = totalTravelNumberRes.data
        console.log(totalTravelNumber);
        

        const travelNumberChartRes = await instance.get("/travel/numberlastweek")
        const travelNumberChart: travelNumberChart =travelNumberChartRes.data

        const travelDataRes = await instance.get("travel/get")
        const travelData: Travel= travelDataRes.data
        
        return( {
               tourCardData: { totalTravelNumber: totalTravelNumber.result,
                chartData: {
                    label: travelNumberChart.result.label,
                    data: travelNumberChart.result.data
                },
                changes: travelNumberChart.result.changes,
                travelData: travelData.result},
                revenueCardData: {},
                destinationCardData: {},
                orderCardData: {},
                tabel: []
        })
    } catch (error) {
        return ({
                tourCardData: {totalTravelNumber: 0,
                chartData: {
                    label: [],
                    data: []
                },
                changes: 0,
                travelData: []},
                revenueCardData: {},
                destinationCardData: {},
                orderCardData: {},
                tabel: []
        });
    }
} 