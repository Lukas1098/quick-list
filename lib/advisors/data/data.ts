export type Advisor = {
    id: number;
    name: string;
    image: string;
    pricePerMinute: number;
    callAvailable: boolean;
    chatAvailable: boolean;
};

export const mockAdvisors: Advisor[] = [
    {
        id: 1,
        name: "Advisor Laura",
        image: "https://i.pravatar.cc/150?img=47",
        pricePerMinute: 4.99,
        callAvailable: true,
        chatAvailable: false,
    },
    {
        id: 2,
        name: "Miss Elisabeth",
        image: "https://i.pravatar.cc/150?img=44",
        pricePerMinute: 7.99,
        callAvailable: true,
        chatAvailable: false,
    },
    {
        id: 3,
        name: "Advisor Jada",
        image: "https://i.pravatar.cc/150?img=32",
        pricePerMinute: 2.49,
        callAvailable: true,
        chatAvailable: false,
    },
    {
        id: 4,
        name: "RexFrederick",
        image: "https://i.pravatar.cc/150?img=12",
        pricePerMinute: 4.25,
        callAvailable: true,
        chatAvailable: true,
    },
];