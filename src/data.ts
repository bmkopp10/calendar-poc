import {EventDate} from "@/components/InteractiveCalendar.vue";

type Status = 'Allocated' | 'Scheduled' | 'Active' | 'Picked' | 'Held'

let testData: Array<EventDate> = []

export const generateTestData = (rows: number, durationOfDays: number): Array<EventDate> => {
    testData = [];
    for (let i = 0; i < rows; i++) {
        const dates = randomizeEventDateTime(durationOfDays)
        const status = randomizeStatus();
        testData.push({
            title: `#${i}`,
            start: dates.start,
            end: dates.end,
            backgroundColor: getColorByStatus(status),
            borderColor: getColorByStatus(status),
            textColor: getTextColorByStatus(status),
            editable: true,
            extendedProps: {
                status,
                toLocation: 'Orbis Mexico',
                fromLocation: 'AAA Sales',
                dock: '14A'
            }
        })
    }
    return testData;
}

const randomizeEventDateTime = (durationOfDays: number): { start: Date, end: Date } => {

    const start = randomDate(new Date(Date.now()), addDays(new Date(Date.now()), durationOfDays));
    const end = new Date(start.getTime() + 3600000)

    return {
        start,
        end
    }
}

const randomizeStatus = (): Status => {
    const statuses: Array<Status> = ['Allocated', 'Scheduled', 'Active', 'Picked', 'Held']
    const randomIndex = Math.floor((Math.random() * 5))
    return statuses[randomIndex];
}

const getColorByStatus = (status: Status): string => {
    switch (status) {
        case "Active": return 'blue';
        case "Allocated": return 'orange';
        case "Scheduled": return 'green';
        case "Picked": return 'yellow';
        case "Held": return "purple";
    }
}

const getTextColorByStatus = (status: Status): string => {
    switch (status) {
        case "Active": return 'white';
        case "Allocated": return 'black';
        case "Scheduled": return 'white';
        case "Picked": return 'black';
        case "Held": return "white";
    }
}

function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

const randomDate = (start: Date, end: Date) => {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    date.setHours(randomHourInWorkDay(), 0, 0, 0)
    return date;
}

const randomHourInWorkDay = (): number => {
    const random = Math.random() * 10;
    return Math.floor(random) + 7
}
