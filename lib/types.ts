export interface Tweetdata {
    user: {
        name: string;
        username: string;
        avatar: string | null;
        isVerified: boolean;
    };
    content: {
        text: string;
        image?: string | null;
        date: Date;
        source: string; // e.g. "Twitter for iPhone"
    };
    stats: {
        retweets: number;
        likes: number;
        quotes: number;
        bookmarks: number;
        impressions: number;
    };
    theme: "light" | "dim" | "dark";
}

export const initialdata: Tweetdata = {
    user: {
        name: "John Doe",
        username: "johndoe",
        avatar: null, // We'll handle default in component
        isVerified: true,
    },
    content: {
        text: "This is a sample tweet to demonstrate the mockup generator. It looks just like the real thing!",
        date: new Date(),
        source: "Twitter for iPhone",
    },
    stats: {
        retweets: 124,
        quotes: 12,
        likes: 4521,
        bookmarks: 89,
        impressions: 24500,
    },
    theme: "light",
};
